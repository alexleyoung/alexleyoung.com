import { InfiniteScrollNav, type NavItem } from "@/components/ui/InfiniteScroll";
import { RotatingText } from "@/components/ui/RotatingText";

const titles = ["Software Engineer", "CS + Math @ ISU", "President @ CSE Club", "UA @ Honors", "Peer Educator @ MSA"]

const sections: NavItem[] = [
	{ id: "contact", label: "CONTACT", href: "/contact" },
	{ id: "home", label: "HOME", href: "/" },
	{ id: "about", label: "ABOUT", href: "/about" },
	{ id: "experience", label: "EXPERIENCE", href: "/experience" },
	{ id: "projects", label: "PROJECTS", href: "/projects" },
	{ id: "involvement", label: "INVOLVEMENT", href: "/involvement" },
	{ id: "blog", label: "BLOG", href: "/blog" },
]

export function HomePage() {
	return (
		<>
			<span id="name" className="flex flex-col gap-4 lg:mt-0 mt-16">
				<h1 className="lg:text-6xl text-4xl font-extralight tracking-wide">Alex Young</h1>
				<RotatingText messages={titles} textClassName="lg:text-2xl text-xl font-extralight" />
			</span>
			<div id="scroll tabs">
				<div className="p-8 no-scrollbar h-full flex flex-col gap-8">
					<InfiniteScrollNav items={sections} className="lg:h-[32rem] h-[24rem] lg:w-96 scrollbar-hide border-none" containerClassName="space-y-16 lg:text-4xl text-2xl tracking-wide" />
				</div>
			</div>
		</>
	);
}
