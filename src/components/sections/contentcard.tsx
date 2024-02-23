"use client";
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Header from "@/components/header_mini";

interface ContentCardProps {
  children: React.ReactNode;
}

export default function ContentCard({ children }: ContentCardProps) {
  return (
    <main className="max-h-screen flex justify-between max-w-dvw flex-1 h-full">
      <Card className="flex-1 pb-5 flex flex-col h-full w-full">
        <Header />
        <CardContent className="flex flex-col gap-4">
          {children}
          <CardFooter></CardFooter>
        </CardContent>
      </Card>
    </main>
  );
}
