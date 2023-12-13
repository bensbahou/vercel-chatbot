"use client";
import React from "react";
import { Chat } from "./chat";
import Prompt from "./prompt";
import { useState, useEffect } from "react";
import Notebook from "./Notebook";
import { Sidebar } from "@/components/sidebar";
type Props = {
  id: string;
};
import { initialPrompt } from "@/lib/constants";

const Wrapper = ({ id }: Props) => {
  const [prompt, setPrompt] = useState("");
  const [notebook, setNotebook] = useState({}); // [notebook, setNotebook

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localPrompt = localStorage.getItem("prompt");
      setPrompt(localPrompt || initialPrompt);
    }
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "40%" }}>
        <div
          style={{
            position: "fixed",
          }}
        >
          <Sidebar>
            <Prompt prompt={prompt} setPrompt={setPrompt} />
          </Sidebar>
          {/* <Notebook notebook={notebook} /> */}
          <Notebook
            notebook={{
              Name: "John Doe",
              "Gender & Preferred Pronouns": "Male",
              Age: "",
              "Family Situation": "Married",
              "Relationship to Key Figures": "",
              "Work, Educational & Professional Background": "",
              "Interests and Hobbies": "",
              "Mood/Emotional State": "",
              "Current Challenges or Stressors": "",
              "Previous Therapy, Treatment, or Coping Strategies": "",
              "Goals or Desired Outcomes": "",
              "Cultural, Religious Background & Language": "English",
              "Physical Health and Wellness": "",
              "Geographical Location or Timezone": "Casablanca, Morocco",
              "User Interaction Preferences & Feedback": "",
            }}
          />
        </div>
      </div>
      <div style={{ width: "60%" }}>
        <Chat id={id} prompt={prompt} setNotebook={setNotebook} />
      </div>
    </div>
  );
};

export default Wrapper;
