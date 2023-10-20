import { kv } from "@vercel/kv";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

import { auth } from "@/auth";
import { ChatCompletionRequestMessageRoleEnum } from "openai-edge/types/types/chat";
// import { nanoid } from '@/lib/utils'

export async function GET(req: Request) {
  const { id: userId, email } = (await auth())?.user;

  if (!userId || !email) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  console.log("email in notebook", email);

  let result: {
    id: string;
    status: string;
    notebook: any;
  } | null = await kv.get(email);

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
