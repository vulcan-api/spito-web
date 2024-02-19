import { motion } from "framer-motion";

const SkeletonOne = (): JSX.Element => {
  const variants = {
    initial: {
      rotate: 12.5,
    },
    animate: {
      rotate: 372.5,
      transition: {
        ease: "linear",
        duration: 21.6,
        repeat: Infinity,
      },
    },
  };

  const variantsSecond = {
    initial: {
      rotate: 145,
    },
    animate: {
      rotate: 505,
      transition: {
        ease: "linear",
        duration: 1.8,
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-slate-400 rounded-lg flex-col space-y-2"
    >
      <motion.div className="w-32 h-32 border-4 m-auto rounded-full border-primary/[0.8] dark:border-white dark:bg-gray-800 bg-neutral-100 relative">
        <motion.div
          variants={variants}
          className="w-1 h-10 left-14 top-6 rounded-full dark:bg-white/[0.6] bg-primary/[0.4] absolute origin-bottom"
        />
        <motion.div className="w-2 h-2 left-[54px] top-[60px] rounded-full dark:bg-white bg-primary/[0.8] absolute z-50" />
        <motion.div
          variants={variantsSecond}
          className="w-1 h-12 left-14 top-4 rounded-full dark:bg-white/[0.6] bg-primary/[0.4] absolute origin-bottom"
        />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = (): JSX.Element => {
  return (
    <div className="flex-1 w-full h-full min-h-[6rem] bg-dot-slate-400 rounded-lg flex-col space-y-2">
      <p className="text-5xl h-full flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-br bg-left-top hover:bg-right-bottom hover:scale-105 hover:-rotate-[6deg] from-foreground to-primary dark:to-sky-400 from-50% to-50% transition-all duration-700 bg-[length:200%_200%] font-playball selection:bg-transparent font-bold hover:drop-shadow-none ">
        So simple!
      </p>
    </div>
  );
};

export { SkeletonOne, SkeletonTwo };
