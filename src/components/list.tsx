import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  HomeIcon,
  CalendarIcon,
  TargetIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const items = [
  { title: "Home", icon: <HomeIcon />, path: "/dashboard" },
  { title: "Schedule", icon: <CalendarIcon />, path: "/schedule" },
  { title: "Results", icon: <TargetIcon />, path: "/results" },
];

export { items };

function Menu() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <ul className="flex flex-col flex-1 gap-2">
      {items.map((item, index) => (
        <li key={index} className="py-1">
          <button
            onClick={() => router.push(item.path)}
            className={`w-full justify-start text-sm px-2 p-[3px] rounded-lg pt-1 pb-1 flex flex-row ransition-colors items-center tracking-wide hover:tracking-wide hover:text-semibold hover:scale-110 ${
              pathname === item.path
                ? "pl-3 bg-primary text-secondary"
                : "pl-3 hover:bg-secondary hover:text-primary"
            }`}
          >
            <span className="flex items-center space-x-2 text-lg">
              {item.icon}
              <span className="hidden sm:inline-block text-sm font-normal">
                {item.title}
              </span>
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(Menu);
