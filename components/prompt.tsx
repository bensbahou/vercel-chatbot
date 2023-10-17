"use client";

import Textarea from "react-textarea-autosize";

type Props = {
  prompt: string;
  setPrompt: (prompt: string) => void;
};

const Prompt = ({ prompt, setPrompt }: Props) => {
  return (
    <Textarea
      tabIndex={0}
      rows={1}
      value={prompt}
      onChange={(e) => {
        setPrompt(e.target.value);
        // save lo local storage
        localStorage.setItem("prompt", e.target.value);
      }}
      placeholder="Create a costum promt here"
      spellCheck={false}
      className="min-h-[60px] max-h-[450px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none"
    />
  );
};

export default Prompt;
