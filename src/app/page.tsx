import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import Particles from "@/components/ui/particles";
import { cn } from "@/lib/utils";
import { MoveRightIcon, PuzzleIcon, ShapesIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center min-h-screen justify-center px-4 sm:px-6 xl:px-0">
      <div className="text-center w-full">
        <p className="flex items-center justify-center font-medium border w-fit mx-auto py-1.5 px-4 rounded-full">
          <ShapesIcon className="mr-2 h-5 w-5" />
          Shadcn UI Blocks
        </p>
        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl sm:max-w-[25ch] mx-auto font-bold tracking-tight leading-[1.2] lg:leading-[1.2]">
          Effortless Shadcn UI Component Previews & Code Snippets
        </h1>
        <p className="mt-8 text-base sm:text-lg lg:text-xl sm:max-w-4xl mx-auto">
          Explore a collection of Shadcn UI blocks and components, ready to
          preview and copy. Streamline your development workflow with
          easy-to-implement examples.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-6 sm:px-0">
          <Button
            size="lg"
            className="group h-12 text-base z-10 rounded-md w-full md:w-auto"
            asChild
          >
            <Link href="/blocks/alert">
              Explore Components{" "}
              <PuzzleIcon className="group-hover:-rotate-12 transition-transform" />
            </Link>
          </Button>
          <Button
            size="lg"
            className="group h-12 text-base bg-white z-10 rounded-md w-full md:w-auto"
            variant="outline"
          >
            Learn More{" "}
            <MoveRightIcon className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:radial-gradient(ellipse,rgba(0,0,0,0.3)_30%,black_50%)]"
        )}
      />
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#000"
        refresh
      />
    </div>
  );
}
