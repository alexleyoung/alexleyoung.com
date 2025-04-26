"use client"

import { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { cn } from '@/lib/utils';
import { motion } from "framer-motion"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => { setMounted(true) }, []);

	if (!mounted) return null;

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
			<RadioGroup className={cn("flex gap-4 font-extralight")} defaultValue={resolvedTheme}>
				<div className="flex gap-2 items-center" onClick={() => { setTheme("light") }}>
					<RadioGroupItem className="size-3 border-foreground rounded-none" value="light" id="light" />
					<Label htmlFor="light">LIGHT</Label>
				</div>
				<div className="flex gap-2 items-center" onClick={() => { setTheme("dark") }}>
					<RadioGroupItem className="size-3 border-foreground rounded-none" value="dark" id="dark" />
					<Label htmlFor="dark">DARK</Label>
				</div>
			</RadioGroup>
		</motion.div >
	)
}
