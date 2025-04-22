import { InfiniteScrollNav, type NavItem } from "@/components/ui/infinite-scroll";
import { RotatingText } from "@/components/ui/rotating-text";
import { ThemeToggle } from "@/components/home/theme-toggle";

const titles = ["Software Engineer", "CS + Math @ ISU", "President @ CSE Club", "UA @ Honors", "Peer Educator @ MSA"]


const sections: NavItem[] = [
  { id: "contact", label: "CONTACT" },
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "involvement", label: "INVOLVEMENT" },
  { id: "blog", label: "BLOG" },
]

export default function Home() {
  return (
    <main className="h-screen md:py-14 md:px-11 px-7 py-10 overflow-hidden bg-background transition-colors duration-1000">
      <div id="border" className="border-[.05px] duration-1000 transition-colors bg-background border-foreground h-full grid lg:grid-cols-2 place-items-center">
        <span id="name" className="flex flex-col gap-4 lg:mt-0 mt-12">
          <h1 className="lg:text-6xl text-4xl font-extralight tracking-wide">Alex Young</h1>
          <RotatingText messages={titles} textClassName="lg:text-2xl text-xl font-extralight" />
        </span>
        <div id="scroll tabs">
          <div className="p-8 no-scrollbar h-full flex flex-col gap-8">
            <InfiniteScrollNav items={sections} className="lg:h-[32rem] h-[24rem] lg:w-96 scrollbar-hide border-none" containerClassName="space-y-16 lg:text-4xl text-2xl tracking-wide" />
          </div>
        </div>
      </div>
      <div id="br submenu" className="justify-self-end py-1">
        <ThemeToggle />
      </div>
    </main>
  );
}
