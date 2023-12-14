"use client";

import { useChat, type Message } from "ai/react";

import { cn } from "@/lib/utils";
import { ChatList } from "@/components/chat-list";
import { ChatPanel } from "@/components/chat-panel";
import { EmptyScreen } from "@/components/empty-screen";
import { ChatScrollAnchor } from "@/components/chat-scroll-anchor";
import { useLocalStorage } from "@/lib/hooks/use-local-storage";

import { toast } from "react-hot-toast";
import { initialAssistantMessage } from "@/lib/constants";

export interface ChatProps extends React.ComponentProps<"div"> {
  initialMessages?: Message[];
  id?: string;
  prompt?: string;
  setNotebook?: any;
}

export function Chat({
  id,
  prompt,
  setNotebook,
  initialMessages = [
    {
      id: "1",
      role: "assistant",
      content: initialAssistantMessage,
    },
  ],
  className,
}: ChatProps) {
  const [previewToken, setPreviewToken] = useLocalStorage<string | null>(
    "ai-token",
    null
  );

  const { messages, append, reload, stop, isLoading, input, setInput } =
    useChat({
      initialMessages,
      id,
      body: {
        id,
        previewToken,
        prompt: prompt,
      },
      onResponse(response) {
        if (response.status === 401) {
          toast.error(response.statusText);
        } else {
          const interval = setInterval(() => {
            fetch("/api/notebook").then((res) => {
              res.json().then((data) => {
                if (data.status === "idle") {
                  console.log(data);
                  setNotebook(data.notebook);
                  clearInterval(interval);
                } else console.log("notebook is not ready yet");
              });
            });
          }, 1000);
        }
      },
    });

  return (
    <>
      <div className={cn("pb-[200px] pt-4 md:pt-10", className)}>
        {messages.length ? (
          <>
            <ChatList messages={messages} />
            <ChatScrollAnchor trackVisibility={isLoading} />
          </>
        ) : (
          <EmptyScreen setInput={setInput} />
        )}
      </div>
      <ChatPanel
        id={id}
        isLoading={isLoading}
        stop={stop}
        append={append}
        reload={reload}
        messages={messages}
        input={input}
        setInput={setInput}
      />
    </>
  );
}
