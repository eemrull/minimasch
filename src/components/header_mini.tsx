import * as React from "react";
import { ModeToggle } from "./theme-toggle";
import Avatar from "./avatar";
import { CardTitle } from "./ui/card";
import { usePathname } from "next/navigation";
import { items } from "./list";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="mx-auto top-0 w-full sticky z-50 bg-transparent backdrop-blur-sm rounded-b-sm">
      <div className="flex pb-1 pt-11 items-center w-full p-10">
        <CardTitle className="font-bold sm:inline-block">
          {items.find((item) => item.path === pathname)?.title}
        </CardTitle>
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
