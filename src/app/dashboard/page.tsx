"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Side from "@/components/side";
import Dashboard from "@/components/dashboard";

export default function Dash() {
  return (
    <main className="flex-1">
      {/* <Header /> */}
      <div className="border-b flex flex-row p-3 gap-3 h-screen">
        <Side />
        {/* <div className="flex-1 max-h-screen overflow-auto pb-5"> */}
        <Dashboard />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
