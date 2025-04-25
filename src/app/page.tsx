"use client"

import { Canvas } from "@/components/ui/Canvas";
import { HomePage } from "@/components/home/HomePage";
import { Intro } from "@/components/intro/Intro";
import { useIntro } from "@/context/IntroContext";

export default function Main() {
  const { introComplete, setIntroComplete } = useIntro();

  return (
    introComplete ?
      <Canvas>
        <HomePage />
      </Canvas> :
      <Intro onComplete={() => setIntroComplete(true)} />
  )
}
