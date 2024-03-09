import { motion } from "framer-motion";
import OpenSouceIcon from "./assets/opensource-icon.svg";
import { useEffect, useState } from "react";

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
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-slate-400 rounded-lg flex-col md:py-0 py-8 space-y-2"
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
      <p className="text-5xl h-full flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-br bg-left-top hover:bg-right-bottom hover:scale-105 hover:-rotate-[6deg] dark:from-foreground from-primary/60 to-primary dark:to-sky-400 from-50% to-50% transition-all duration-700 bg-[length:200%_200%] font-playball selection:bg-transparent font-bold hover:drop-shadow-none ">
        So simple!
      </p>
    </div>
  );
};

const SkeletonThree = (): JSX.Element => {
  return (
    <div className="flex-1 selection:bg-transparent flex font-semibold items-center justify-center w-full h-full min-h-[6rem] bg-dot-slate-400 rounded-lg flex-col grayscale-[60%] hover:grayscale-0 transition-all hover:scale-105 duration-500 text-green-400 font-rubik py-6">
      <img src={OpenSouceIcon} alt="Open Source Icon" className="w-28 h-28" />
      <p>
        <span className="font-extrabold">Open</span> Source
      </p>
      <p>initiative®</p>
    </div>
  );
};

const SkeletonFour = (): JSX.Element => {
  const variantGOOne = {
    initial: {
      width: "40px",
    },
    animate: {
      width: ["40px", "50px", "40px"],
      transition: {
        duration: 1.25,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const variantGOTwo = {
    initial: {
      width: "48px",
    },
    animate: {
      width: ["48px", "58px", "48px"],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const variantGOThree = {
    initial: {
      width: "32px",
    },
    animate: {
      width: ["32px", "42px", "32px"],
      transition: {
        duration: 1.75,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const variantLua = {
    initial: {
      rotate: 45,
    },
    animate: {
      rotate: 405,
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
      className="flex-1 flex sm:flex-row flex-col gap-8 py-8 items-center justify-evenly w-full h-full min-h-[6rem] bg-dot-slate-400 rounded-lg selection:bg-transparent"
    >
      {
        // GOLANG Logo
      }
      <motion.div className="flex items-center justify-center">
        <motion.div className="flex flex-col gap-1 items-end w-12">
          <motion.div
            variants={variantGOOne}
            className="w-10 h-1 -mr-2 bg-sky-400 rounded-full"
          />
          <motion.div
            variants={variantGOTwo}
            className="w-12 h-1 -mr-1 bg-sky-400 rounded-full"
          />
          <motion.div
            variants={variantGOThree}
            className="w-8 h-1 bg-sky-400 rounded-full"
          />
        </motion.div>
        <p className="text-7xl font-extrabold tracking-[-0.1em] italic text-sky-400">
          GO
        </p>
      </motion.div>
      {
        // LUA Logo
      }
      <motion.div className="w-32 h-32 rounded-full border-2 border-dashed dark:border-white border-black/30 p-4 relative">
        <motion.div className="w-full h-full bg-blue-900 text-white rounded-full flex flex-col justify-end items-center text-[42px] pb-2 font-medium relative">
          <p>Lua</p>
          <div className="w-6 h-6 bg-white rounded-full absolute top-4 right-4" />
        </motion.div>
        <motion.div
          variants={variantLua}
          className="flex items-start h-20 w-6  absolute origin-bottom left-[48px] -top-4 rotate-45"
        >
          <motion.div className="w-6 h-6 bg-blue-900 rounded-full" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = (): JSX.Element => {
  const [isUnderscoreShown, setIsUnderscoreShown] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  function startChanging(): void {
    setTimeout(() => {
      setIsUnderscoreShown(!isUnderscoreShown);
    }, 500);
    setTimeout(() => {
      setIsUnderscoreShown(!isUnderscoreShown);
    }, 500);
  }

  useEffect(() => {
    if (isHovered) {
      startChanging();
    } else {
      setTimeout(() => {
        setIsUnderscoreShown(true);
      }, 500);
    }
  }, [isHovered, isUnderscoreShown]);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-1 w-full h-full items-center py-8 selection:bg-transparent justify-center min-h-[6rem] bg-dot-slate-400 rounded-lg hover:scale-105 transition-all duration-500"
    >
      <p className="text-9xl font-poppins">&gt;</p>
      <p
        className={`text-9xl font-poppins ${
          isUnderscoreShown ? "opacity-100" : "opacity-0"
        }`}
      >
        _
      </p>
    </motion.div>
  );
};

export { SkeletonOne, SkeletonTwo, SkeletonThree, SkeletonFour, SkeletonFive };
