"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Intro() {
	const [introComplete, setIntroComplete] = useState(false)
	const [hasMounted, setHasMounted] = useState(false)

	useEffect(() => {
		const seenIntro = sessionStorage.getItem("intro-complete")
		if (seenIntro) {
			setIntroComplete(true)
		}
		setHasMounted(true)
		setTimeout(() => {
			setIntroComplete(true);
			sessionStorage.setItem("intro-complete", "true")
		}, 1000);
	}, [setIntroComplete])

	if (!hasMounted) return <div className="fixed inset-0 z-50 bg-background" />

	return (
		<AnimatePresence>
			{!introComplete && (
				<motion.main exit={{ opacity: 0, transition: { duration: 1 } }} id="intro" className="fixed inset-0 z-50 bg-background grid place-items-center">
					<div className="flex lg:flex-row flex-col gap-2 text-2xl tracking-wide">
						<motion.span
							initial={{ opacity: 1 }}
							animate={{ opacity: 0 }}
							transition={{ delay: .7, duration: .3 }}
						>
							Alex Young
						</motion.span>
						<motion.span
							initial={{ opacity: 1 }}
							animate={{ opacity: 0 }}
							transition={{ delay: .85, duration: .3 }}
							className="font-extralight"
						>
							Portfolio
						</motion.span>
					</div>
				</motion.main>
			)}
		</AnimatePresence >
	)
}
