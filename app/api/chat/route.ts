import { kv } from "@vercel/kv";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

import { auth } from "@/auth";
import { ChatCompletionRequestMessageRoleEnum } from "openai-edge/types/types/chat";
import { notebookUpdater } from "./notebookUpdater";
// import { nanoid } from '@/lib/utils'
import { emptyNotebook } from "@/lib/constants";
export const runtime = "edge";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  const json = await req.json();
  const { messages, previewToken, prompt, id } = json;

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

  const { id: userId, email } = (await auth())?.user;

  if (!userId || !email) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  if (previewToken) {
    configuration.apiKey = previewToken;
  }

  console.log("email", email);

  let result: {
    id: string;
    status: string;
    notebook: any;
  } | null = await kv.get(email);

  if (result && result?.id !== id) {
    console.log("New notebook id", id);
    result.notebook = emptyNotebook;
  }
  const newNotebook = await notebookUpdater(
    result?.notebook || emptyNotebook,
    messages
  );
  console.log("newNotebook", newNotebook);
  result = {
    id,
    status: "idle",
    notebook: newNotebook,
  };

  await kv.set(email, result);

  const systemMessage = {
    role: "system",
    content:
      prompt +
      `
    and from the current convertation or previous convertations You have recorded a notebook that contains the following informations about the user:
    
    START OF NOTEBOOK

    ${JSON.stringify(newNotebook, null, 2)}

    END OF NOTEBOOK

    `,
  };
  const userPresantationMessage = {
    role: "user",
    content: `
    I'm a user of an application called Avasana in which users can talk to a virtual mental health coach
    who is powered by you chatgpt.
    I am aware that I am talking to an AI and not a real psychotherapist.
    I don't want to hear that I should go to a real psychotherapist or seek professional help
    since I do not have access to that.
    I want you to help me understand myself better and only then in a collaborative approach
    decide on strategies or interventions to try.
    I don't want you to directly give me a list of advice
    but rather give me the feeling that you try to get to know me. 
    `,
  };
  const history = messages.slice(-20);
  const options = {
    model: "gpt-3.5-turbo-16k" || "gpt-3.5-turbo" || "gpt-4",
    messages: [systemMessage, userPresantationMessage, ...history],
    temperature: 0,
    stream: true,
  };

  // informationsUpdater(currentInformations).then((updatedInformations) => {
  //   currentInformations = JSON.parse(updatedInformations);
  //   console.log("currentInformations", currentInformations);
  // });
  const res = await openai.createChatCompletion(options);

  const stream = OpenAIStream(res, {});

  return new StreamingTextResponse(stream);
}
