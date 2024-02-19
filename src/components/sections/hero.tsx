"use client";
import Header from "@/components/header";
import { ModeToggle } from "../theme-toggle";
import Login from "@/components/login";

const Hero = () => {
  return (
    <section className="relative ">
      <div className="flex h-14 max-w-screen-2xl md:justify-end space-x-2">
        <ModeToggle className="w-full absolute top-2 right-5 p-2" />
      </div>
      <Login />
    </section>
  );
};

export default Hero;
