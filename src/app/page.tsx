import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <main className="h-screen md:py-10 md:px-9 px-6 py-8">
      <div id="border" className="border-[.05px] bg-background border-foreground h-full grid grid-cols-2 place-items-center">
        <span className="flex flex-col gap-4">
          <h1 className="lg:text-6xl font-extralight tracking-wide">Alex Young</h1>
          <h2 className="lg:text-2xl font-extralight">Software Engineer</h2>
        </span>
        <div>
          <ScrollArea>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
}
