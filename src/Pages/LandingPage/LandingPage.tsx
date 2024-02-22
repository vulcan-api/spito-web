import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardStack } from "@/components/ui/card-stack";
import { cardsContent, gridItems } from "./LandingPageContent";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { TracingBeam } from "@/components/ui/tracing-beam";
import {
  IconCircleNumber1,
  IconCircleNumber2,
  IconCircleNumber3,
} from "@tabler/icons-react";
import { Spotlight } from "@/components/ui/Spotlight";

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
          viewport={{ once: true }}
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
      <div className="w-screen flex flex-col gap-32 items-center py-32 bg-dot-slate-400/[0.4] dark:bg-dot-slate-100/[0.2] relative">
        <Spotlight className="-top-40 left-80" fill="white" />
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, type: "spring" },
          }}
          viewport={{ once: true }}
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
          viewport={{ once: true }}
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
          viewport={{ once: true }}
          className="text-xl tracking-tighter text-muted-foreground text-center font-rubik drop-shadow-md"
        >
          Amount of time needed to configurate your system shown in a simple
          way.
        </motion.p>
        <div className="flex flex-col w-2/5 gap-12 relative border-l-2 p-12 pl-4 drop-shadow-2xl">
          <motion.div
            variants={drawLineOne}
            className="w-full h-16 dark:bg-neutral-600 bg-border flex items-center px-4 py-2 rounded-r-xl"
          >
            <p className="text-2xl font-poppins font-semibold text-gray-400">
              Manual configuration
            </p>
          </motion.div>
          <motion.div
            variants={drawLineTwo}
            className="w-64 h-16 dark:bg-primary bg-blue-600 flex items-center px-4 py-2 rounded-r-xl"
          >
            <p className="text-2xl font-poppins font-semibold text-blue-200">
              Using spito
            </p>
          </motion.div>
        </div>
        <p className="text-xl tracking-tighter text-muted-foreground font-rubik drop-shadow-md w-1/3 text-center">
          {
            // Here we provide description showing how much time is saved by using spito
          }
          We did research, bla bla bla, and we found out that spito is 3 times
          faster than manual configuration. It's like magic. The source is the
          hair of Pazdan and also that I made it up.
        </p>
      </motion.div>
      <TracingBeam className="bg-dot-slate-400/[0.4] dark:bg-dot-slate-100/[0.2]">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, type: "spring" },
          }}
          viewport={{ once: true }}
          className="text-6xl leading-none font-bold tracking-tighter font-poppins text-center mb-8"
        >
          OK spito is cool.
          <br />
          But... how does it even work?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.5, type: "spring" },
          }}
          viewport={{ once: true }}
          className="text-xl tracking-tighter text-muted-foreground text-center font-rubik drop-shadow-md mb-16"
        >
          Glad you asked. Let me explain.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.25, type: "spring" },
          }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 mb-32"
        >
          <h3 className="text-4xl leading-none font-bold tracking-tighter font-poppins flex items-center gap-4">
            <IconCircleNumber1 className="w-10 h-10" /> Rules
          </h3>
          <p className="text-xl font-rubik tracking-tighter text-muted-foreground drop-shadow-md">
            First of all, we need to talk about rules. Calm down, it's not about
            the rules in the classroom, e.g. we don't talk without permission.
            In spito, rules are a set of instructions that are used to configure
            your Linux system. Eg. "Install vim" or "Set up a firewall". Some of
            them, might be complicated, and even stretch across multiple files.
            But don't worry, spito will handle it for you.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.25, type: "spring" },
          }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 mb-32"
        >
          <h3 className="text-4xl leading-none font-bold tracking-tighter font-poppins flex items-center gap-4">
            <IconCircleNumber2 className="w-10 h-10" /> Rulesets
          </h3>
          <p className="text-xl font-rubik tracking-tighter text-muted-foreground drop-shadow-md">
            Rulesets are just a collection of rules. They are used to group
            rules and are posted as an repository on github. Rulesets are public
            and can be used by anyone. You can also create your own ruleset and
            share it with others.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.25, type: "spring" },
          }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 mb-8"
        >
          <h3 className="text-4xl leading-none font-bold tracking-tighter font-poppins flex items-center gap-4">
            <IconCircleNumber3 className="w-10 h-10" /> Environments
          </h3>
          <p className="text-xl font-rubik tracking-tighter text-muted-foreground drop-shadow-md">
            And finally, we reach environments. Environments are a set of rules
            that are used to configure a specific system. For example, you can
            have an environment for your personal computer, and a different one
            for your server. You can also have a different environment for your
            friend's computer, and so on. Environments may be private or public,
            depending on your will to share it with others :D
          </p>
        </motion.div>
      </TracingBeam>
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="w-screen flex flex-col gap-16 items-center py-32 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03]"
      >
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, type: "spring" },
          }}
          viewport={{ once: true }}
          className="text-xl tracking-tighter text-muted-foreground text-center font-rubik drop-shadow-md"
        >
          That was a lot of text, wasn't it? anyways, let's move on.
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1.25, type: "spring" },
          }}
          viewport={{ once: true }}
          className="text-6xl leading-none font-bold tracking-tighter font-poppins text-center"
        >
          Spito-gui
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1.25, type: "spring" },
          }}
          viewport={{ once: true }}
          className="flex items-center justify-evenly mt-16"
        >
          <p className="w-1/3 font-rubik text-muted-foreground text-2xl leading-normal tracking-tight drop-shadow-lg">
            Besides of spito-cli, we also have Spito-gui. It is a graphical user
            interface for spito. It's a tool that will help you manage your
            rules, rulesets and environments all at one place. It's a simple and
            easy to use tool that will help you to configure your Linux system
            in a more friendly way.
          </p>
          <img
            src="https://placehold.co/500x281"
            alt="Spito-gui's screenshot"
            className="border-2 border-primary rounded-lg w-[500px] aspect-video shadow-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
