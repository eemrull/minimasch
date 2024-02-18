"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";
import Header from "./header";
import Footer from "./footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <div className="border-b">
        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <Button className="box-border">test</Button>
          <FaceIcon />
          <SunIcon />
          <ImageIcon />
        </div>
      </div>
      <Footer />
    </main>
  );
}
