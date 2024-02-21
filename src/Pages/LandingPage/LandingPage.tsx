import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardStack } from "@/components/ui/card-stack";
import { cardsContent, gridItems } from "./LandingPageContent";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function LandingPage(): JSX.Element {
  const drawLineOne = {
    hidden: { width: "50%", opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        width: { duration: 2.5, delay: 0 },
        opacity: { duration: 1, delay: 0.75 },
        type: "spring",
        bounce: 0,
        once: true,
      },
    },
  };

  const drawLineTwo = {
    hidden: { width: "48px", opacity: 0 },
    visible: {
      width: "256px",
      opacity: 1,
      transition: {
        width: { duration: 2, delay: 1 },
        opacity: { duration: 1, delay: 1.75 },
        type: "spring",
        bounce: 0,
        once: true,
      },
    },
  };

  return (
    <div className="flex flex-col">
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-8 bg-dot-sky-400/[0.4]">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, delay: 1.25, type: "spring" },
          }}
          className="text-8xl leading-none w-2/3 font-bold font-poppins tracking-tighter text-center"
        >
          Configuring Linux was never that simple
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 2, type: "spring" },
          }}
          className="text-xl tracking-tighter text-muted-foreground w-1/3 text-center font-rubik drop-shadow-md"
        >
          The first tool of its kind that will help you configure your Linux
          without much knowledge of how it works. Accesible, optimized and open
          source.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, delay: 5 },
          }}
          className="dark:text-muted-foreground/60 text-muted-foreground/55"
        >
          Swipe to learn more
        </motion.p>
        <BackgroundBeams />
      </div>
      <div className="w-screen flex items-center justify-evenly py-32 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03]">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, type: "spring" },
          }}
          className="flex flex-col gap-8 w-[520px]"
        >
          <h2 className="text-6xl leading-none font-bold tracking-tighter font-poppins text-center">
            What inspired us to create spito?
          </h2>
          <p className="text-xl tracking-tighter text-muted-foreground text-center font-rubik drop-shadow-md">
            Statements of spito creators.
          </p>
        </motion.div>
        <CardStack items={cardsContent} />
      </div>
      <div className="w-screen flex flex-col gap-32 items-center py-32 bg-dot-slate-400/[0.4] dark:bg-dot-slate-100/[0.2]">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, type: "spring" },
          }}
          className="text-6xl leading-none font-bold tracking-tighter font-poppins text-center"
        >
          Why spito?
        </motion.h2>
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="w-screen flex flex-col gap-16 items-center py-32 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03]"
      >
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, type: "spring" },
          }}
          className="text-6xl leading-none font-bold tracking-tighter font-poppins text-center"
        >
          Have I told you that spito is fast?
          <br />
          Like. Blazing. Fast.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.5, type: "spring" },
          }}
          className="text-xl tracking-tighter text-muted-foreground text-center font-rubik drop-shadow-md"
        >
          Amount of time needed to configurate your system shown in a simple
          way.
        </motion.p>
        <div className="flex flex-col w-2/5 justify-evenly relative before:content-[''] before:absolute before:rounded-full before:w-px before:bottom-8 before:left-0 before:h-4/5 before:bg-black/[0.1] before:dark:bg-white/[0.2] after:content-[''] after:absolute after:rounded-full after:h-px after:bottom-0 after:left-8 after:w-full after:bg-black/[0.1] after:dark:bg-white/[0.2] min-h-72 p-4">
          <motion.div
            variants={drawLineOne}
            className="w-full h-16 bg-blue-200 flex items-center px-4 py-2 rounded-r-full"
          >
            <p className="text-2xl font-poppins font-semibold dark:text-black">
              Manual configuration
            </p>
          </motion.div>
          <motion.div
            variants={drawLineTwo}
            className="w-64 h-16 bg-lime-200 flex items-center px-4 py-2 rounded-r-full"
          >
            <p className="text-2xl font-poppins font-semibold dark:text-black">
              Using spito
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
