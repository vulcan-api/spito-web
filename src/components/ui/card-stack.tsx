import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
  image: string;
  ghLink?: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  className,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  className?: string;
}) => {
  const CARD_OFFSET = offset || 16;
  const SCALE_FACTOR = scaleFactor || 0.04;
  const [cards, setCards] = useState<Card[]>(items);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startFlipping();

    cardRef.current?.addEventListener("mouseenter", stopFlipping);
    cardRef.current?.addEventListener("mouseleave", restartFlipping);

    return () => {
      clearInterval(interval);
      cardRef.current?.removeEventListener("mouseenter", stopFlipping);
      cardRef.current?.removeEventListener("mouseleave", restartFlipping);
    };
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 3000);

    return () => clearInterval(interval);
  };

  const stopFlipping = () => {
    clearInterval(interval);
  };

  const restartFlipping = () => {
    startFlipping();
  };

  return (
    <>
      <div
        className={cn(
          "relative hover:scale-105 transition-all duration-500 h-60 w-60 md:h-60 md:w-96 lg:block hidden",
          className
        )}
        ref={cardRef}
      >
        {cards.map((card, index) => {
          return (
            <motion.div
              key={card.id}
              className="absolute dark:bg-black bg-white h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: cards.length - index,
              }}
            >
              <div className="font-normal text-foreground dark:text-neutral-200 font-rubik">
                {card.content}
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={card.image}
                  alt={card.name + "'s photo"}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <p className="text-foreground font-medium dark:text-white font-poppins">
                    {card.name}
                  </p>
                  {card.ghLink ? (
                    <a
                      href={card.ghLink}
                      className="text-muted-foreground font-normal dark:text-neutral-200 font-poppins underline hover:no-underline"
                      title={`Visit ${card.designation}'s GitHub profile`}
                      target="_blank"
                    >
                      {card.designation}
                    </a>
                  ) : (
                    <p className="text-muted-foreground font-normal dark:text-neutral-200 font-poppins">
                      {card.designation}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
        <span className="absolute -bottom-12 w-full text-center dark:text-muted-foreground/35 text-muted-foreground/50 ">
          Hover to stop flipping
        </span>
      </div>
      <div className="lg:hidden flex items-center flex-wrap justify-center gap-4 px-4 w-full">
        {items.map((card) => {
          return (
            <div
              key={card.id}
              className="dark:bg-black bg-white h-fit md:h-60 max-w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            >
              <div className="font-normal text-foreground dark:text-neutral-200 font-rubik mb-4">
                {card.content}
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={card.image}
                  alt={card.name + "'s photo"}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <p className="text-foreground font-medium dark:text-white font-poppins">
                    {card.name}
                  </p>
                  {card.ghLink ? (
                    <a
                      href={card.ghLink}
                      className="text-muted-foreground font-normal dark:text-neutral-200 font-poppins underline hover:no-underline"
                      title={`Visit ${card.designation}'s GitHub profile`}
                      target="_blank"
                    >
                      {card.designation}
                    </a>
                  ) : (
                    <p className="text-muted-foreground font-normal dark:text-neutral-200 font-poppins">
                      {card.designation}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
