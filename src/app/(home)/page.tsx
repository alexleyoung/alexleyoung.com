"use client"

import { HomePage } from "@/components/home/HomePage";
import { Intro } from "@/components/intro/Intro";
import { Canvas } from "@/components/ui/Canvas";

export default function Main() {
  return (
    <>
      <Intro />
      <Canvas>
        <HomePage />
      </Canvas>
    </>
  )
}
