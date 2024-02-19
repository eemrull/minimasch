import * as React from "react";

export default function Side() {
  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <div className="relative overflow-hidden h-full py-6 pr-6 lg:py-8">
        <div className="w-full">
          <div className="pb-4"></div>
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            Sidebar
          </h4>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            <a
              className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
              href="/test"
            >
              Test
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
