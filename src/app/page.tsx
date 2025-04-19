import { RotatingText } from "@/components/ui/rotating-text";

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
            <h3 className="lg:text-4xl font-extralight tracking-wide">ABOUT</h3>
            <h3 className="lg:text-4xl font-extralight tracking-wide">EXPERIENCE</h3>
            <h3 className="lg:text-4xl font-extralight tracking-wide">PROJECTS</h3>
            <h3 className="lg:text-4xl font-extralight tracking-wide">INVOLVEMENT</h3>
            <h3 className="lg:text-4xl font-extralight tracking-wide">CONTACT</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
