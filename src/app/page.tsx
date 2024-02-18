"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button className="box-border">test</Button>
      <div>
        <FaceIcon />
        <SunIcon />
        <ImageIcon />
      </div>
    </main>
  );
}
