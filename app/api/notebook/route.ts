import { OpenAIStream, StreamingTextResponse } from "ai";

import { ChatCompletionRequestMessageRoleEnum } from "openai-edge/types/types/chat";
import { auth } from "@/auth";
import { Configuration, OpenAIApi } from "openai-edge";
export const runtime = "edge";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  const json = await req.json();
  const { messages, previewToken, notebook } = json;
  const userId = (await auth())?.user.id;

  if (!userId) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  if (previewToken) {
    configuration.apiKey = previewToken;
  }

  const systemMessage: {
    role: ChatCompletionRequestMessageRoleEnum;
    content: string;
  } = {
    role: "system",
    content: `You will be provided with a json data that is missing some or all values and messages from history of the conversation,
    and your task is to complete the json data with any information you can get from the messages
    You should respond in json format too.
    You should provide only the json data even when no update was done, no comments or any other text.

    Current informations:
    ${JSON.stringify(notebook, null, 2)}
    History of the conversation:
    ${JSON.stringify(messages.slice(-20), null, 2)}
    `,
  };
  const options = {
    model: "gpt-3.5-turbo" || "gpt-4" || "gpt-3.5-turbo-16k",
    messages: [systemMessage],
    stream: false,
    temperature: 0,
  };

  const res = await openai.createChatCompletion(options);

  const stream = OpenAIStream(res, {});

  return new StreamingTextResponse(stream);
}
