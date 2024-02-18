import * as React from "react";
import { useTheme } from "next-themes";
import {
  Pencil2Icon,
  AvatarIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="top-0 w-full border-b border-border/40">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a
            className="r-6 flex items-center space-x-2 text-lg font-bold"
            href="/"
          >
            <Pencil2Icon />
            <span className="hidden font-bold sm:inline-block">minima/sch</span>
          </a>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none"></div>
          <nav className="flex items-center">
            <a href="/profile"></a>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <AvatarIcon className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
