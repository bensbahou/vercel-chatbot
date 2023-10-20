import { kv } from "@vercel/kv";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

import { auth } from "@/auth";
import { ChatCompletionRequestMessageRoleEnum } from "openai-edge/types/types/chat";
// import { nanoid } from '@/lib/utils'

export const runtime = "edge";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  const json = await req.json();
  const { messages, previewToken, prompt, id } = json;
  console.log("id", id);
  await kv.set(id, "test");
  const result = await kv.get(id);
  console.log("result", result);

  const informationsUpdater = async (informations: any) => {
    const systemMessage_: {
      role: ChatCompletionRequestMessageRoleEnum;
      content: string;
    } = {
      role: "system",
      content: `You will be provided with a json data that is missing some or all values and messages from history of the conversation,
    and your task is to complete the json data with any information you can get from the messages
    You should respond in json format too.
    You should provide only the json data even when no update was done, no comments or any other text.

    Current informations:
    ${JSON.stringify(informations, null, 2)}
    History of the conversation:
    ${JSON.stringify(messages.slice(-20), null, 2)}
    `,
    };
    const updatedInformations = await openai.createChatCompletion({
      model: "gpt-4" || "gpt-3.5-turbo-16k",
      messages: [systemMessage_],
      stream: false,
      temperature: 0,
    });
    const json = await updatedInformations.json();
    console.log("json", json);
    return json.choices[0].message.content;
  };
  let currentInformations = {
    Name: "",
    "Gender & Preferred Pronouns": "",
    Age: "",
    "Family Situation": "",
    "Relationship to Key Figures": "",
    "Work, Educational & Professional Background": "",
    "Interests and Hobbies": "",
    "Mood/Emotional State": "",
    "Current Challenges or Stressors": "",
    "Previous Therapy, Treatment, or Coping Strategies": "",
    "Goals or Desired Outcomes": "",
    "Cultural, Religious Background & Language": "",
    "Physical Health and Wellness": "",
    "Geographical Location or Timezone": "",
    "User Interaction Preferences & Feedback": "",
  };
  // currentInformations = JSON.parse(
  //   await informationsUpdater(currentInformations)
  // );
  // console.log("currentInformations", currentInformations);

  // count words in all messages
  // edit the last message

  // messages[messages.length - 1] = {
  //   ...messages[messages.length - 1],
  //   content: `${messages[messages.length - 1].content} ${
  //     systemMessage2.content
  //   }`
  // }
  // const wordCount = [systemMessage, ...messages].reduce(
  //   (acc = 0, message: any) => {
  //     return acc + message.content.split(" ").length;
  //   },
  //   0
  // );
  // console.log("wordCount", wordCount);
  const session = await auth();

  const user = (await auth())?.user;

  const userId = (await auth())?.user.id;

  if (!userId) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  if (previewToken) {
    configuration.apiKey = previewToken;
  }

  const systemMessage = {
    role: "system",
    content: prompt,
  };
  const userPresantationMessage = {
    role: "user",
    content: `
    I'm a user of an application called Avasana in which users can talk to a virtual mental health coach who is powered by you chatgpt. I am aware that I am talking to an AI and not a real psychotherapist. I don't want to hear that I should go to a real psychotherapist or seek professional help since I do not have access to that. I want you to help me understand myself better and only then in a collaborative approach decide on strategies or interventions to try. I don't want you to directly give me a list of advice but rather give me the feeling that you try to get to know me. 
    `,
  };
  const options = {
    model: "gpt-3.5-turbo" || "gpt-4" || "gpt-3.5-turbo-16k",
    messages: [systemMessage, userPresantationMessage, ...messages],
    temperature: 0,
    stream: true,
  };

  // informationsUpdater(currentInformations).then((updatedInformations) => {
  //   currentInformations = JSON.parse(updatedInformations);
  //   console.log("currentInformations", currentInformations);
  // });
  const res = await openai.createChatCompletion(options);

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
    },
  });

  return new StreamingTextResponse(stream);
}
