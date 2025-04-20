"use client"

import { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

// Add this interface at the top of the file, after the imports
export interface NavItem {
  id: string
  label: string
}

// Replace the MENU_ITEMS constant with:
// Default menu items that will be used if none are provided
const DEFAULT_MENU_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "team", label: "Team" },
  { id: "testimonials", label: "Testimonials" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
  { id: "careers", label: "Careers" },
  { id: "projects", label: "Projects" },
  { id: "resources", label: "Resources" },
  { id: "faq", label: "FAQ" },
]

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
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px" })

  return (
    <AnimatePresence>
      <motion.li
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        className={cn(
          "py-3 px-4 cursor-pointer transition-colors duration-200 ease-in-out",
          isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-primary",
        )}
        onClick={onClick}
      >
        {isActive ? <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }} className="size-6 my-2 bg-foreground rounded-full" /> : <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }}>{item.label}</motion.span>}
      </motion.li>
    </AnimatePresence>
  )
}

// Update the main component to accept items as props:
export interface InfiniteScrollNavProps {
  items?: NavItem[]
  className?: string
  containerClassName?: string
}

// Update the component function signature to accept the new props
export default function InfiniteScrollNav({
  items = DEFAULT_MENU_ITEMS,
  className,
  containerClassName
}: InfiniteScrollNavProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLUListElement>(null)
  const [repeatedItems, setRepeatedItems] = useState<NavItem[]>([])

  // Create repeated items for infinite scroll effect
  useEffect(() => {
    // Repeat the menu items 3 times to create the illusion of infinite scrolling
    setRepeatedItems([...items, ...items, ...items, ...items, ...items])
  }, [items])

  // Update all instances of MENU_ITEMS to items in the handleScroll function:
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const itemHeight = 48 // approximate height of each item
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer

      // When we reach near the bottom, jump back to the middle set
      if (scrollTop + clientHeight > scrollHeight - 100) {
        // Disable smooth scrolling temporarily
        scrollContainer.style.scrollBehavior = "auto"
        // Jump to the middle set (same position visually)
        scrollContainer.scrollTop = 0
        // Re-enable smooth scrolling
        setTimeout(() => {
          scrollContainer.style.scrollBehavior = "smooth"
        }, 50)
      }

      // When we reach near the top, jump to the middle set
      if (scrollTop < 100) {
        scrollContainer.style.scrollBehavior = "auto"
        scrollContainer.scrollTop = scrollTop + items.length * 3 * itemHeight
        setTimeout(() => {
          scrollContainer.style.scrollBehavior = "smooth"
        }, 50)
      }

      // Update active index based on scroll position
      //const middleOfViewport = scrollTop + clientHeight / 2
      //const estimatedIndex = Math.floor(middleOfViewport / itemHeight) % items.length
      //setActiveIndex(estimatedIndex)
    }

    scrollContainer.addEventListener("scroll", handleScroll)

    // Initial scroll position to the middle set
    scrollContainer.scrollTop = items.length * itemHeight - 40

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll)
    }
  }, [repeatedItems, items])

  // Update the handleItemClick function:
  const handleItemClick = (index: number) => {
    const actualIndex = index % items.length
    setActiveIndex(actualIndex)

    // You can add navigation logic here
    console.log(`Navigating to: ${items[actualIndex].label}`)
  }

  // Update the return statement to use the className props
  return (
    <div className={cn("relative h-full w-full max-w-xs border-r border-border bg-background", className)}>
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />

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

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </div>
  )
}
