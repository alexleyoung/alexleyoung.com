"use client"

import { createContext, useContext, useEffect, useState } from "react"

type IntroContextType = {
	introComplete: boolean
	setIntroComplete: (complete: boolean) => void
}

const IntroContext = createContext<IntroContextType | undefined>(undefined)

export function IntroProvider({ children }: { children: React.ReactNode }) {
	const [introComplete, setIntroComplete] = useState(false)
	const [hasMounted, setHasMounted] = useState(false)

	useEffect(() => {
		const seenIntro = sessionStorage.getItem("intro-complete")
		if (seenIntro) {
			setIntroComplete(true)
		}
		setHasMounted(true)
	}, [])

	const handleSetIntroComplete = (complete: boolean) => {
		if (complete) {
			sessionStorage.setItem("intro-complete", "true")
		}
		setIntroComplete(complete)
	}

	if (!hasMounted) return <div className="fixed inset-0 z-50 bg-background" />

	return (
		<IntroContext.Provider value={{ introComplete, setIntroComplete: handleSetIntroComplete }}>
			{children}
		</IntroContext.Provider>
	)
}

export function useIntro() {
	const context = useContext(IntroContext)
	if (!context) {
		throw new Error("useIntro must be used inside an IntroProvider")
	}
	return context
}
