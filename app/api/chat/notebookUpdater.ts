import OpenAI from "openai";
import { ChatCompletionRequestMessageRoleEnum } from "openai-edge/types/types/chat";
import { emptyNotebook } from "@/lib/constants";

const openai = new OpenAI();

export const notebookUpdater = async (currentNotebook: any, messages: any) => {
  const systemMessage_: {
    role: ChatCompletionRequestMessageRoleEnum;
    content: string;
  } = {
    role: "system",
    content: `Your Objective: Maintain an accurate and succinct notebook. Each input you receive is a new statement of the client coupled with the corresponding DATE of the input. 
    Analyze the input and see if it contains any relevant information you can use to update the notebook's categories. Prioritize freshness of data, and succinctly remove older entries when necessary. Monitor the word count closely. If nearing the limit, prioritize recent and most relevant information, but avoid omitting details prematurely.
   
   Endnote: Updates should be carried out meticulously to keep the notebook's snapshot of the client current, brief & gpt-friendly. Update categories carefully to ensure no loss of relevant information while adhering to word limits.
   
   Write the entries in the language in which the user speaks!
   
   Output Format Instructions:
   
   List ALL categories: Present them with their titles and the user data you gathered.
   Maintain Data Integrity: Preserve all existing data within the *Current Notebook:* you’ll find below. Only modify a category if there is new information relevant to that category. If, after updating, a word limit is reached, prioritize recent & relevant info.
   
   Data Loss Prevention: Critical—do not leave out any pre-existing details, unless wordlimit is reached. Repeat all information from the Current Notebook below unless it's being updated with new input.
   
   Notebook Category titles, additional Info, max word limit:
   
   1. Name, Age, Gender, Spoken Laguage : Preserve existing data; update only if changes are reported.
   
   2.Recent Moods & Emotions: Capture the latest mood states and emotional shifts, not more than 80 words, affixing DATE to each entry for timeline clarity.
   
   3. Past OR Current Challenges, Stressors, Traumas: Look out for them and integrate new or ongoing ones reported by the client, especially in the beginning of a session (at input count 2-4), 80 words add DATE.
   
   4. Life Events, Milestones, Childhood: Document significant life events and milestones that the user mentions. Include both positive and negative events, 80 words, add DATE.
   
   5. Session Agenda/Next Session Agenda: Early inputs (1-4) often reveal urgent issues; note these as 'Session Agenda' with DATE. If multiple issues, prioritize the most emphasized. End inputs (11+) may suggest next session topics; list these under 'Next Session Agenda' with DATE and statuses like 'to be covered'. Word limit 80 words; prioritize recent and relevant topics.
   
   6. User’s Goals & Results: Maintain a current log of mentioned goals and achievement statuses (set/achieved/failed, etc), max 80 words and updating goal/status & DATE as goals evolve.
   
   7. Relationships: Add names & context such as relationship status, refraining from deletions unless redundant. 80 words
   
   8. Living Arrangements: Keep information current, adjusting only with reported changes, and within a 80-word limit.
   
   9. Work Situation & Education: Update with new details as provided, maintaining a 60-word contextually relevant summary.
   
   10. Passions, Interests & Hobbies, Resources: Note anything the user is passionate about, likes doing, has a talent for, or what might help them to deal with their problems. Under 80 words.
   
   11. Past Therapies, Coping Strategies, and Emotional Triggers: Log any past therapies and coping strategies mentioned by the user. Include emotional triggers identified during the session. Max 80 words, add DATE.
   
   12. Homeworks: Record any new 'homework', update homework statuses + dates (e.g., “read book x + DATE: Committed/done/not done), and remove 'done' homeworks to manage an 80-word limit, tagging updates with DATE.
   
   13. Habits (Sleep, Diet, Exercise, Digital, Substance): Document any habits related to sleep, diet, exercise, digital media and substance use mentioned by the user. Include changes or patterns observed, 80 words, add DATE.
   
   14. Physical Health & Wellness: Document any new health information or changes succinctly within a 80-word boundary. Add DATE.
   
   15. Coaching Preferences & Feedback: Record fresh feedback, uphold preference history, and ensure the section does not exceed 80 words.
   16. Next Session’s appointment:Note at what day and time the user wants to have their next session in this format: [3:30 pm, 10.Nov.2023]
   

   Reply with a JSON format with a structure identical to the current notebook, but with updated values.
   Main Rule: Respect the Data Loss Prevention above! 
   if anything not provided just replace with current value or empty string never state that this wasn't provided.

    START OF CURRENT NOTEBOOK

    ${JSON.stringify(currentNotebook, null, 2)}

    END OF CURRENT NOTEBOOK

    History of the conversation:
    ${JSON.stringify(messages.slice(-10), null, 2)}
    `,
  };
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106" || "gpt-4" || "gpt-3.5-turbo-16k",
    messages: [systemMessage_],
    stream: false,
    temperature: 0,
    response_format: { type: "json_object" },
  });
  const content = completion.choices[0].message.content;
  if (!content) {
    return {
      error: "No content in the response",
    };
  } else {
    const updatedNotebook = JSON.parse(content);
    return updatedNotebook;
  }
};
