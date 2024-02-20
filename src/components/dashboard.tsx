import React from "react";
import { Button } from "@/components/ui/button";
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "./header_mini";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Dashboard() {
  return (
    <main className="max-h-screen flex justify-between max-w-dvw flex-1">
      <Card className="flex-1 pb-5 flex flex-col h-full w-full">
        <Header />
        <ScrollArea className="rounded-md h-full">
          <CardContent className="flex flex-col gap-4">
            <div className="flex-shrink-0">
              <Button>test</Button>
            </div>
            test test
            <FaceIcon />
            <SunIcon />
            <ImageIcon />
            <CardFooter></CardFooter>
          </CardContent>
        </ScrollArea>
      </Card>
    </main>
  );
}
