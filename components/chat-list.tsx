import { type Message } from "ai";

import { Separator } from "@/components/ui/separator";
import { ChatMessage } from "@/components/chat-message";
import {
  promptEndStage1,
  promptEndStage2,
  promptEndStage3,
  promptStage1,
  promptStage2,
} from "@/lib/constants";

export interface ChatList {
  messages: Message[];
}

export function ChatList({ messages }: ChatList) {
  if (!messages.length) {
    return null;
  }
  const messagesCount = messages.length;
  let content = "";
  if (messagesCount / 2 <= 2) content = promptStage1;
  else if (messagesCount / 2 <= 16) content = promptStage2;
  else if (messagesCount / 2 <= 18) content = promptEndStage1;
  else if (messagesCount / 2 <= 20) content = promptEndStage2;
  else content = promptEndStage3;
  if (messagesCount % 2 === 0) console.log("prompt: " + content);

  return (
    <div className="relative mx-auto max-w-2xl px-4">
      {messages.map((message, index) => (
        <div key={index}>
          <ChatMessage message={message} />
          {index < messages.length - 1 && (
            <Separator className="my-4 md:my-8" />
          )}
        </div>
      ))}
    </div>
  );
}
