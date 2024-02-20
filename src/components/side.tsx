import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  HomeIcon,
  CalendarIcon,
  TargetIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Footer from "./footer";

export default function Side() {
  return (
    <aside className="max-h-screen max-md:hidden flex justify-between">
      <Card className="flex flex-col h-full">
        <CardContent>
          <CardHeader></CardHeader>
          <div className="container flex h-auto max-w-screen-2xl pb-2 items-center">
            <CardTitle className="r-6 items-center text-lg space-x-2 w-auto flex flex-col flex-1">
              <a
                href="/"
                className="flex items-center space-x-2 text-lg font-bold"
              >
                <Pencil2Icon />
                <span className="hidden font-bold sm:inline-block">
                  minima/sch
                </span>
              </a>
            </CardTitle>
          </div>
          <Separator />
          <CardDescription className="pt-2">
            <nav className="flex flex-col flex-1 gap-2">
              <a
                className="py-1 text-sm px-2 rounded-lg flex flex-row gap-2 transition-colors items-center text-muted-foreground"
                href="/dashboard"
              >
                <HomeIcon />
                Home
              </a>
              <a
                className="py-1 text-sm px-2 rounded-lg flex flex-row gap-2 transition-colors items-center text-foreground"
                href="/dashboard"
              >
                <CalendarIcon />
                Schedule
              </a>
              <a
                className="py-1 text-sm px-2 rounded-lg flex flex-row gap-2 transition-colors items-center"
                href="/dashboard"
              >
                <TargetIcon />
                Results
              </a>
            </nav>
          </CardDescription>
          <CardFooter className="w-full h-full">
            <Footer />
          </CardFooter>
        </CardContent>
      </Card>
    </aside>
  );
}
