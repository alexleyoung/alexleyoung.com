"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface RotatingTextProps {
  messages: string[]
  interval?: number
  className?: string
  textClassName?: string
}

export function RotatingText({ messages, interval = 3000, className = "", textClassName = "" }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length)
        setIsVisible(true)
      }, 200) // Small delay to ensure the exit animation completes
    }, interval)

    return () => clearInterval(timer)
  }, [messages, interval])

  return (
    <div className={`relative h-8 overflow-hidden ${className}`}>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.2,
            }}
            className="absolute w-full"
          >
            <p className={`${textClassName}`}>{messages[currentIndex]}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
