"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Hero from "@/components/sections/hero";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden isolate">
      <div className="border-b">
        <div className="mx-auto max-w-7xl mb-10">
          <Hero />
        </div>
      </div>
      <div className="pt-2">
        <Footer />
      </div>
    </main>
  );
}
