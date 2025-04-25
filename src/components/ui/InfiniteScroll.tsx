"use client"

import { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"


// Add this interface at the top of the file, after the imports
export interface NavItem {
  id: string
  label: string
  href: string
}

// Update the NavItem component props to use the NavItem interface:
const NavItem = ({
  item,
  isActive,
  onClick,
}: {
  item: NavItem
  index: number
  isActive: boolean
  onClick: () => void
}) => {
  const ref = useRef(null)

  return (
    <AnimatePresence>
      <motion.li
        ref={ref}
        className={cn(
          "py-3 px-4 cursor-pointer transition-colors ease-in-out",
          isActive ? "text-primary font-medium duration-100" : "text-muted-foreground hover:text-primary",
        )}
        onClick={onClick}
      >
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }}>{item.label}</motion.span>
      </motion.li>
    </AnimatePresence>
  )
}

//{isActive ? <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }} className="lg:size-6 size-5 lg:mx-0 mx-auto my-2 bg-foreground rounded-full" /> : <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }}>{item.label}</motion.span>}

// Update the main component to accept items as props:
export interface InfiniteScrollNavProps {
  items?: NavItem[]
  className?: string
  containerClassName?: string
}

// Update the component function signature to accept the new props
export function InfiniteScrollNav({
  items = [],
  className,
  containerClassName
}: InfiniteScrollNavProps) {
  const [activeIndex, setActiveIndex] = useState(1)
  const scrollContainerRef = useRef<HTMLUListElement>(null)
  const [repeatedItems, setRepeatedItems] = useState<NavItem[]>([])
  const NUM_REPITITIONS = 5;
  const ITEM_HEIGHT = 100 // font + space-y
  const SCROLL_OFFSET = 125 // account for user scroll "velocity" at teleport breakpoint

  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true)
  }, []);

  // Create repeated items for infinite scroll effect
  useEffect(() => {
    for (let i = 0; i < NUM_REPITITIONS; i++) {
      setRepeatedItems(prevItems => [...prevItems, ...items])
    }
  }, [items])

  // Update all instances of MENU_ITEMS to items in the handleScroll function:
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    scrollContainer.style.scrollBehavior = "smooth"
    // Initial scroll position to the middle set
    requestAnimationFrame(() => {
      scrollContainer.scrollTop = (items.length * ITEM_HEIGHT * NUM_REPITITIONS) / 2
    });

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer

      // When we reach near the bottom, jump back to the middle set
      if (scrollTop + clientHeight > scrollHeight - 1 * ITEM_HEIGHT) {
        // Disable smooth scrolling temporarily
        scrollContainer.style.scrollBehavior = "auto"
        // Jump to the middle set (same position visually)
        scrollContainer.scrollTop = (items.length * ITEM_HEIGHT * NUM_REPITITIONS) / 2 + SCROLL_OFFSET * 2.75
        // Re-enable smooth scrolling
        setTimeout(() => {
          scrollContainer.style.scrollBehavior = "smooth"
        }, 50)
      }

      // When we reach near the top, jump to the middle set
      if (scrollTop < ITEM_HEIGHT) {
        scrollContainer.style.scrollBehavior = "auto"
        scrollContainer.scrollTop = (items.length * ITEM_HEIGHT * NUM_REPITITIONS) / 2 + SCROLL_OFFSET * 1.1
        setTimeout(() => {
          scrollContainer.style.scrollBehavior = "smooth"
        }, 50)
      }
    }

    scrollContainer.addEventListener("scroll", handleScroll)

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll)
    }
  }, [repeatedItems, items])

  if (!mounted) return <div className="lg:h-[40rem] h-[24rem]" />;

  // Update the handleItemClick function:
  const handleItemClick = (index: number) => {
    const actualIndex = index % items.length
    setActiveIndex(actualIndex)

    const item = items[actualIndex];

    // You can add navigation logic here
    router.push(item.href);
  }

  // Update the return statement to use the className props
  return (
    <div className={cn("relative h-full w-full max-w-xs border-r border-border", className)}>
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-16 z-10 pointer-events-none transition-opacity",
          resolvedTheme === "dark" ? "opacity-100" : "opacity-0"
        )}
        style={{
          backgroundImage: "linear-gradient(to bottom, var(--tw-gradient-stops))",
        }}
      />

      <ul
        ref={scrollContainerRef}
        className={cn("h-full overflow-y-auto scrollbar-hide scroll-smooth", containerClassName)}
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      >
        {repeatedItems.map((item, idx) => (
          <NavItem
            key={`${item.id}-${idx}`}
            item={item}
            index={idx}
            isActive={idx % items.length === activeIndex}
            onClick={() => handleItemClick(idx)}
          />
        ))}
      </ul>

      <div
        className={cn(
          "absolute inset-x-0 bottom-0 h-16 z-10 pointer-events-none transition-opacity duration-1000",
          resolvedTheme === "dark" ? "opacity-100" : "opacity-0"
        )}
        style={{
          backgroundImage: "linear-gradient(to bottom, var(--tw-gradient-stops))",
        }}
      />
    </div>
  )
}
