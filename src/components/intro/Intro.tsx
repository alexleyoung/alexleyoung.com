"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

type IntroProps = {
	onComplete(): void
}

export function Intro({ onComplete }: IntroProps) {
	const [show, setShow] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setShow(false);
			onComplete();
		}, 1000);
	}, [onComplete])

	return (
		show && (
			<main id="intro" className="fixed inset-0 bg-background grid place-items-center">
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
			</main>
		)
	)
}
