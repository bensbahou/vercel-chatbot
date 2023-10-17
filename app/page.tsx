import { nanoid } from "@/lib/utils";
import { Chat } from "@/components/chat";
import Prompt from "@/components/prompt";
import Wrapper from "@/components/wrapper";
export const runtime = "edge";

export default function IndexPage() {
  const id = nanoid();

  return <Wrapper id={id} />;
}
