import { kv } from "@vercel/kv";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

import { auth } from "@/auth";
import { ChatCompletionRequestMessageRoleEnum } from "openai-edge/types/types/chat";
import { notebookUpdater } from "./notebookUpdater";
// import { nanoid } from '@/lib/utils'
import {
  emptyNotebook,
  promptStage1,
  promptStage2,
  promptEndStage1,
  promptEndStage2,
  promptEndStage3,
} from "@/lib/constants";

export const runtime = "edge";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
function getCurrentDateFormatted(): string {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("en-us", { month: "short" });
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}
export async function POST(req: Request) {
  const json = await req.json();
  const { messages, previewToken, prompt, id } = json;
  const messagesCount = messages.length;
  console.log("messagesCount", messagesCount);
  const lastMessage = messages[messagesCount - 1];
  lastMessage.content =
    "[" + getCurrentDateFormatted() + "] " + lastMessage.content;

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

  // console.log("email", email);

  let result: {
    id: string;
    status: string;
    notebook: any;
    messages: {
      date: string;
      content: string;
      role: string;
    }[];
  } | null = await kv.get(email);

  const messagesWithDate = [
    ...(result?.messages || []).slice(0, messagesCount - 2),
    messages[messages.length - 2],
    lastMessage,
  ];
  // console.log("messagesWithDate", messagesWithDate);
  if (result && result?.id !== id) {
    console.log("New notebook id", id);
    result.notebook = emptyNotebook;
  }
  let content = "";
  if (messagesCount / 2 <= 2) content = promptStage1;
  else if (messagesCount / 2 <= 8) content = promptStage2;
  else if (messagesCount / 2 <= 9) content = promptEndStage1;
  else if (messagesCount / 2 <= 10) content = promptEndStage2;
  else content = promptEndStage3;

  const systemMessage = {
    role: "system",
    content:
      content +
      `
    START OF CURRENT NOTEBOOK

    ${JSON.stringify(result?.notebook || emptyNotebook, null, 2)}

    END OF CURRENT NOTEBOOK

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
  const history = messagesWithDate.slice(-20);
  const options = {
    model: "gpt-4", //"gpt-3.5-turbo-16k" || "gpt-3.5-turbo" ||
    messages: [systemMessage, userPresantationMessage, ...history],
    temperature: 0,
    stream: true,
  };
  // console.log("systemMessage", systemMessage);
  // const [newNotebook, res] = (await Promise.all([
  //   notebookUpdater(result?.notebook || emptyNotebook, messages),
  //   openai.createChatCompletion(options),
  // ])) as any;
  await kv.set(email, {
    ...result,
    messages: messagesWithDate,
    status: "pending",
  });

  notebookUpdater(result?.notebook || emptyNotebook, messagesWithDate || [])
    .then(async (newNotebook) => {
      await kv.set(email, {
        ...result,
        messages: messagesWithDate,
        notebook: newNotebook,
        status: "idle",
      });
    })
    .catch(async (error) => {
      console.log("error updating notebook", error);

      await kv.set(email, {
        ...result,
        status: "error",
      });
    });
  console.log("messages", history, history.length);
  const res = await openai.createChatCompletion(options);

  const stream = OpenAIStream(res, {});

  return new StreamingTextResponse(stream);
}
