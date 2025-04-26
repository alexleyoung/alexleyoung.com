"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useIntro } from "@/context/IntroContext"

export function Intro() {
	const { introComplete, setIntroComplete } = useIntro();

	useEffect(() => {
		setTimeout(() => {
			setIntroComplete(true);
		}, 1000);
	}, [setIntroComplete])

	return (
		<AnimatePresence>
			{!introComplete && (
				<motion.main exit={{ opacity: 0, transition: { duration: .6 } }} id="intro" className="fixed inset-0 z-50 bg-background grid place-items-center">
					<div className="flex lg:flex-row flex-col gap-2 text-3xl tracking-wide">
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
