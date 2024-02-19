import React from "react";
import { Button } from "@/components/ui/button";
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-4">
      <Button className="box-border">test</Button>
      test test
      <FaceIcon />
      <SunIcon />
      <ImageIcon />
    </div>
  );
}
