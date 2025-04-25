"use client"

import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/home/ThemeToggle";

export function Canvas({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 md:py-14 md:px-11 will-change-[color,background-color,border-color] px-7 py-10 overflow-hidden bg-background transition-colors duration-1000">
      {children}
      <div id="br submenu" className="justify-self-end py-1">
        <ThemeToggle />
      </div>
    </motion.main>
  )
}
