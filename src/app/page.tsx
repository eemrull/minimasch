"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="relative overflow-hidden isolate">
      <Hero />
      <Link href="/dashboard">
        <Button>Come Here</Button>
      </Link>
    </main>
  );
}
