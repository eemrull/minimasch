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
      <Header />
      <div className="border-b">
        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <Side />
          <div className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
            <div className="w-full mx-auto min-w-0">
              <Dashboard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
