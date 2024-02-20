"use client";
import Header from "@/components/header";
import { ModeToggle } from "../theme-toggle";
import Login from "@/components/login";

const Hero = () => {
  return (
    <section className="relative mx-auto">
      <div className="flex h-14 max-w-screen-2xl md:justify-end space-x-2">
        <ModeToggle className="w-full absolute top-2 right-5 p-2" />
      </div>
      <div className="flex max-w-screen-2xl justify-center py-10">
        <Login />
      </div>
    </section>
  );
};

export default Hero;
