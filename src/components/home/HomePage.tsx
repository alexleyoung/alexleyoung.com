import { InfiniteScrollNav, type NavItem } from "@/components/ui/InfiniteScroll";
import { RotatingText } from "@/components/ui/RotatingText";

const titles = ["swe @ workiva", "cs + math @ isu", "president @ cse club", "ua @ honors", "peer educator @ msa"]

const sections: NavItem[] = [
	{ id: "contact", label: "contact", href: "/contact" },
	{ id: "home", label: "home", href: "/" },
	{ id: "about", label: "about", href: "/about" },
	{ id: "experience", label: "experience", href: "/experience" },
	{ id: "projects", label: "projects", href: "/projects" },
	{ id: "involvement", label: "involvement", href: "/involvement" },
	//{ id: "blog", label: "BLOG", href: "/blog" },
]

export function HomePage() {
	return (
		<div className="grid lg:grid-cols-2 place-items-center h-full">
			<span id="name" className="flex flex-col gap-4 lg:mt-0 mt-16">
				<h1 className="lg:text-6xl text-4xl font-extralight tracking-wide">alex young</h1>
				<RotatingText messages={titles} textClassName="lg:text-2xl text-xl font-extralight" />
			</span>
			<div id="scroll tabs">
				<div className="p-8 no-scrollbar h-full flex flex-col gap-8">
					<InfiniteScrollNav items={sections} className="lg:h-[32rem] h-[24rem] lg:w-96 scrollbar-hide border-none" containerClassName="space-y-16 lg:text-4xl text-2xl tracking-wide" />
				</div>
			</div>
		</div>
	);
}
