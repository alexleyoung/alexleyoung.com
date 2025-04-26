"use client"

import { ThemeToggle } from "@/components/home/ThemeToggle";

export function Canvas({ children }: { children: React.ReactNode }) {

  return (
    <main
      className="fixed inset-0 md:py-14 md:px-11 px-7 py-10 overflow-hidden bg-background transition-colors duration-1000">
      <div id="border" className="border-[.05px] transition-colors duration-1000 bg-background border-foreground h-full">
        {children}
      </div>
      <div id="br submenu" className="justify-self-end py-1">
        <ThemeToggle />
      </div>
    </main>
  )
}
