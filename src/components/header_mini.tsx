import * as React from "react";
import { useTheme } from "next-themes";
import {
  Pencil2Icon,
  AvatarIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { ModeToggle } from "./theme-toggle";
import Avatar from "./avatar";
import { CardTitle } from "./ui/card";

export default function Header() {
  return (
    <header className="top-0 w-full sticky z-50 bg-transparent backdrop-blur-sm rounded-b-sm">
      <div className="container flex max-w-screen-2xl pb-1 pt-11 items-center">
        <CardTitle className="hidden font-bold sm:inline-block">Home</CardTitle>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end ">
          <div className="w-full flex-1 md:w-auto md:flex-none"></div>
          <nav className="flex items-center">
            <a href="/profile"></a>
            <ModeToggle />
            <Avatar />
          </nav>
        </div>
      </div>
    </header>
  );
}
