import OpenAI from "openai";
import { ChatCompletionRequestMessageRoleEnum } from "openai-edge/types/types/chat";
import { emptyNotebook, notebookUpdaterPrompt } from "@/lib/constants";

const openai = new OpenAI();

export const notebookUpdater = async (currentNotebook: any, messages: any) => {
  const systemMessage_: {
    role: ChatCompletionRequestMessageRoleEnum;
    content: string;
  } = {
    role: "system",
    content:
      notebookUpdaterPrompt +
      `START OF CURRENT NOTEBOOK

    ${JSON.stringify(currentNotebook, null, 2)}
  
    END OF CURRENT NOTEBOOK
  
    History of the conversation:
    ${JSON.stringify(messages.slice(-10), null, 2)}`,
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
