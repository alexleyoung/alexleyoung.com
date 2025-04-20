import InfiniteScrollNav from "@/components/ui/infinite-scroll";
import type { NavItem } from "@/components/ui/infinite-scroll";
import { RotatingText } from "@/components/ui/rotating-text";

const sections: NavItem[] = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "involvement", label: "INVOLVEMENT" },
  { id: "contact", label: "CONTACT" },
]

export default function Home() {
  return (
    <main className="h-screen md:py-10 md:px-9 px-6 py-8 overflow-hidden">
      <div id="border" className="border-[.05px] bg-background border-foreground h-full grid grid-cols-2 place-items-center">
        <span id="name" className="flex flex-col gap-4">
          <h1 className="lg:text-6xl font-extralight tracking-wide">Alex Young</h1>
          <RotatingText messages={["Software Engineer", "CS + Math @ ISU", "President @ CSE Club", "UA @ Honors"]} textClassName="lg:text-2xl font-extralight" />
        </span>
        <div id="scroll tabs">
          <div className="p-8 no-scrollbar h-full flex flex-col gap-8">
            <InfiniteScrollNav items={sections} className="h-[32rem] w-96 scrollbar-hide border-none" containerClassName="space-y-16 text-4xl tracking-wide" />
          </div>
        </div>
      </div>
    </main>
  );
}
