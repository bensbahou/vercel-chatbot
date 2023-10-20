"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconSidebar } from "@/components/ui/icons";

export interface SidebarProps {
  children?: React.ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  return (
    <Sheet>
      <div className="mx-auto max-w-2xl px-4 p-4">
        <div className="rounded-lg border bg-background p-2">
          <SheetTrigger asChild>
            <Button variant="ghost" className="-ml-2 ">
              <h1 className="text-lg font-semibold">Edit prompt</h1>
            </Button>
          </SheetTrigger>
        </div>
      </div>

      <SheetContent className="inset-y-0 flex h-auto min-w-[800px] flex-col p-0">
        <SheetHeader className="p-4">
          <SheetTitle className="text-sm">Prompt</SheetTitle>
        </SheetHeader>

        {children}
      </SheetContent>
    </Sheet>
  );
}
