import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardStack } from "@/components/ui/card-stack";
import { cardsContent, gridItems } from "./LandingPageContent";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

export default function LandingPage(): JSX.Element {
  return (
    <div className="flex flex-col">
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-8 bg-dot-sky-400/[0.4]">
        <h1 className="text-8xl leading-none w-2/3 font-bold font-poppins tracking-tighter text-center">
          Configuring Linux was never that simple
        </h1>
        <p className="text-xl tracking-tighter text-muted-foreground w-1/3 text-center font-rubik drop-shadow-md">
          The first tool of its kind that will help you configure your Linux
          without much knowledge of how it works. Accesible, optimized and open
          source.
        </p>
        <BackgroundBeams />
      </div>
      <div className="w-screen flex items-center justify-evenly py-32 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03]">
        <div className="flex flex-col gap-8 w-[520px]">
          <h2 className="text-6xl leading-none font-bold tracking-tighter font-poppins text-center">
            What inspired us to create spito?
          </h2>
          <p className="text-xl tracking-tighter text-muted-foreground text-center font-rubik drop-shadow-md">
            Statements of spito creators.
          </p>
        </div>
        <CardStack items={cardsContent} />
      </div>
      <div className="w-screen flex flex-col gap-32 items-center py-32 bg-dot-slate-400/[0.4] dark:bg-dot-slate-100/[0.2]">
        <h2 className="text-6xl leading-none font-bold tracking-tighter font-poppins text-center">
          Why spito?
        </h2>
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {gridItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg]", item.className)}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
