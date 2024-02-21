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
import Menu from "./list";
import Footer from "./footer";

export default function Side() {
  return (
    <aside className="max-h-screen max-md:hidden flex justify-between">
      <Card className="flex flex-col h-full">
        <CardContent>
          <CardHeader></CardHeader>
          <div className="container flex h-auto max-w-screen-2xl pb-2 items-center">
            <CardTitle className="r-6 items-center text-lg space-x-2 w-auto flex flex-col flex-1 hover:scale-110">
              <a
                href="/"
                className="flex items-center space-x-2 text-lg font-bold"
              >
                <Pencil2Icon />
                <span className="hidden font-bold sm:inline-block tracking-tight">
                  minima/sch
                </span>
              </a>
            </CardTitle>
          </div>
          <Separator />
          <CardDescription className="pt-6">
            <Menu />
          </CardDescription>
        </CardContent>
        <CardFooter className="items-end h-full">
          <Footer />
        </CardFooter>
      </Card>
    </aside>
  );
}
