import * as React from "react";

export default function Footer() {
  return (
    <footer className="py-6 md:py-0 w-full">
      <div className="container flex flex-col items-center justify-between gap-4">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by {""}
          <a
            className="font-medium underline underline-offset-4"
            href="https://github.com/eemrull"
          >
            eemrull
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
