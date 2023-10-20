import React from "react";
import { kv } from "@vercel/kv";
import { auth } from "@/auth";
import { useState, useEffect } from "react";

type Props = {
  notebook: any;
};

const Notebook = ({ notebook }: Props) => {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">User Notebook</h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          This user notebook will be always available in the system prompt
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2"></div>
        <div>
          {Object.entries(notebook).length === 0
            ? "Empty Notebook, please start a conversation!"
            : Object.entries(notebook).map(([key, value]) => (
                <div key={key}>
                  <p className="text-sm font-medium">
                    {key} :{" "}
                    <span className="bg-green-300">{value as string}</span>
                  </p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Notebook;
