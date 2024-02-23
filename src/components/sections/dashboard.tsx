import React from "react";
import { Button } from "@/components/ui/button";
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";
import { CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Dashboard() {
  return (
    <main className="">
      <ScrollArea className="rounded-md h-full">
        <CardContent className="flex flex-col gap-4">
          <div className="flex-shrink-0">
            <Button>test</Button>
          </div>
          test test
          <FaceIcon />
          <SunIcon />
          <ImageIcon />
        </CardContent>
      </ScrollArea>
    </main>
  );
}
