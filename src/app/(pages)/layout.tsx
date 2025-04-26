"use client"

import { usePathname } from "next/navigation";
import { IntroProvider } from "@/context/IntroContext";

import { AnimatePresence } from "framer-motion"
import { Intro } from "@/components/intro/Intro";
import { Canvas } from "@/components/ui/Canvas";
import { PageTransition } from "@/components/ui/PageTransition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <IntroProvider>
      <Intro />
      <Canvas>
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition key={pathname}>
            {children}
          </PageTransition>
        </AnimatePresence>
      </Canvas>
    </IntroProvider>
  );
}
