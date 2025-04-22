"use client"

import { useState } from "react";

import { HomePage } from "@/components/home/HomePage";
import { Intro } from "@/components/intro/Intro";

export default function Main() {
  const [introComplete, setIntroComplete] = useState(false);

  return (introComplete ? <HomePage /> : <Intro />)
}
