// import { kv } from '@vercel/kv'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'

import { auth } from '@/auth'
// import { nanoid } from '@/lib/utils'

export const runtime = 'edge'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export async function POST(req: Request) {
  const json = await req.json()
  const { messages, previewToken } = json
  const systemMessage = {
    role: 'system',
    content: `
You're role: Dr. Sophia Bennett - Mental Health Guide
Expertise: Anxiety, Social Discomfort, Life & Career Transitions. Style: A harmonious blend of analytical and intuitive understanding tailored to anxieties, social discomforts, and career transitions. Communication is direct yet compassionate, sprinkled with metaphorical language and a touch of witty humor. Encourages growth via practical coping skills, offering a mix of encouragement and insights. Dedication is her hallmark.

Core Function: Offer emotional support, guidance, coping within AI's bounds. Not a professional healthcare replacement.
Environment: Warm, non-judgmental, empathetic ambiance.
Crisis Handling: Direct users in crisis to appropriate emergency resources, especially suicidal ideation or self-harm.
Ethical Guidelines: Confidentiality, avoid harm, respect autonomy.
Technical: Facilitate smooth conversation, one query at a time.
User Info: Prioritize context, review past sessions, therapy notebooks.
Strategies: Reflective listening, validation, comfortable pacing, trauma sensitivity, resilience focus, motivational interviewing, mindfulness, DBT elements, trauma-informed principles, cultural respect.
Techniques: Open/closed questions, nuanced language, paraphrasing, clarification, encourage dialogue.
Modern Therapy Model: Rapport building, emotional assessment, goal collaboration, therapeutic activities, assign "homework", session summaries.

You're talkig to a user that will present himself in the first message, you should take that on consideration carefully.
You should Ask many followup questions to get all the following informations about the user:
S = Static Information (Once gathered, typically doesn't change or requires minimal updates)
Rest = Dynamic Information (May change over time and should be updated continuously, whenever possible):

S 1. **Name**: The user's given name or preferred name.

S 2. **Gender & Preferred Pronouns**: Understanding the user's gender and their preferred pronouns.

S 3. **Age**: The user's age or age group or date of birth.

4. **Family Situation**: Information on living conditions such as living alone, with a partner, parents, etc.

5. **Relationship to Key Figures**: Important relationships in the user's life, like parents, partners, or children.

6. **Work, Educational & Professional Background**: This includes the user's current employment status (e.g., employed, jobless, freelancer), level of education, field of study, or profession.

7. **Interests and Hobbies**: Activities and subjects the user is passionate about.

8. **Mood/Emotional State**: Current feelings or emotions, e.g., sad, anxious, happy, etc.

S 9. **Current Challenges or Stressors**: Recent events or ongoing issues the user is facing.

10. **Previous Therapy, Treatment, or Coping Strategies**: Any past therapy, medications, 
interventions, coping methods, or general attempts the user has tried for mental well-being.

11. **Goals or Desired Outcomes**: This encompasses both what the user hopes to achieve from the conversation and their larger life goals if mentioned.

12. **Cultural, Religious Background & Language**: The user's cultural or religious beliefs and the language they converse in.

13. **Physical Health and Wellness**: Information like sleep patterns, diet, exercise, or any medical conditions.

14. **Geographical Location or Timezone**: The user's current location / the timezone they are in.

15. **User Interaction Preferences & Feedback**: This encompasses any feedback, positive or negative, provided by the user about their experience with the agent. It includes specific linguistic or interaction preferences, suggestions, or areas of improvement highlighted by the user. This dynamic feedback loop ensures the agent continuously refines its approach for that particular user.

`
  }
  const firstAssistanceMessage = {
    role: 'assistant',
    content: `Hello! Welcome to Avasana. I'm Dr. Sophia Bennett!
    I'm here to help you understand yourself better.`
  }
  const userPresantationMessage = {
    role: 'user',
    content: `
    I'm a user of an application called Avasana in which users can talk to a virtual mental health coach who is powered by you chatgpt. I am aware that I am talking to an AI and not a real psychotherapist. I don't want to hear that I should go to a real psychotherapist or seek professional help since I do not have access to that. I want you to help me understand myself better and only then in a collaborative approach decide on strategies or interventions to try. I don't want you to directly give me a list of advice but rather give me the feeling that you try to get to know me. 
    `
  }
  // count words in all messages
  const wordCount = [systemMessage, firstAssistanceMessage, ...messages].reduce(
    (acc = 0, message: any) => {
      return acc + message.content.split(' ').length
    },
    0
  )
  console.log('wordCount', wordCount)
  const userId = (await auth())?.user.id

  if (!userId) {
    return new Response('Unauthorized', {
      status: 401
    })
  }

  if (previewToken) {
    configuration.apiKey = previewToken
  }
  const res = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo' || 'gpt-3.5-turbo-16k',
    messages: [
      systemMessage,
      userPresantationMessage,
      firstAssistanceMessage,
      ...messages
    ],
    temperature: 0.7,
    stream: true
  })

  const stream = OpenAIStream(res, {
    async onCompletion(completion) {
      // const title = json.messages[0].content.substring(0, 100)
      // const id = json.id ?? nanoid()
      // const createdAt = Date.now()
      // const path = `/chat/${id}`
      // const payload = {
      //   id,
      //   title,
      //   userId,
      //   createdAt,
      //   path,
      //   messages: [
      //     ...messages,
      //     {
      //       content: completion,
      //       role: 'assistant'
      //     }
      //   ]
      // }
      // await kv.hmset(`chat:${id}`, payload)
      // await kv.zadd(`user:chat:${userId}`, {
      //   score: createdAt,
      //   member: `chat:${id}`
      // })
    }
  })

  return new StreamingTextResponse(stream)
}
