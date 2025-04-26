"use client"

import { useRouter } from "next/navigation"

export function AboutPage() {
	const router = useRouter();

	return (
		<div className="grid place-items-center h-full">
			<div className="size-96 bg-blue-300" onClick={() => router.push("/")} />
		</div>
	)
}
