import {
  IconArrowBigRightLines,
  IconAugmentedReality2,
  IconBrandOpenSource,
  IconClock,
  IconTerminal2,
} from "@tabler/icons-react";
import { TextHighlight } from "../../components/ui/text-highlight";
import {
  SkeletonFive,
  SkeletonFour,
  SkeletonOne,
  SkeletonThree,
  SkeletonTwo,
} from "./Skeletons";

//CardStack Items (What inspired us to create spito?)

const cardsContent = [
  {
    id: 0,
    name: "Bartłomiej Strama",
    designation: "BaderBC",
    content: (
      <p>
        My motivation for developing Spito stemmed from the recognition of Linux's strengths, such as privacy and performance, coupled with the desire to address its complexity.
        <TextHighlight>
          I saw an opportunity to enhance Linux by introducing simplicity through spito.
        </TextHighlight>
      </p>
    ),
    image: "https://avatars.githubusercontent.com/u/80683535?s=70&v=4",
    ghLink: "https://github.com/BaderBC/",
  },
  {
    id: 1,
    name: "Tomasz Kulig",
    designation: "cooligus",
    content: (
      <p>
        I want to create kind of control panel for Linux that would be very
        flexible and would support as many PCs as possible.
        <TextHighlight>Without spito it's almost impossible.</TextHighlight>
      </p>
    ),
    image: "https://avatars.githubusercontent.com/u/67282004?s=70&v=4",
    ghLink: "https://github.com/cooligus/",
  },
  {
    id: 2,
    name: "Seweryn Pajor",
    designation: "sewe2000",
    content: (
      <p className="text-sm">
        I know a lot of people, especially beginners have trouble configuring
        GNU/Linux systems.
        <TextHighlight>
          Personally I am a huge fan of Open Source and GNU/Linux. I wanted to
          share my passion with other people.
        </TextHighlight>
        This passion inspired me to participate in the spito project which
        hopefully, will bring more people into the GNU/Linux and save their
        precious time and nerves. Enjoy!
      </p>
    ),
    image: "https://avatars.githubusercontent.com/u/59435262?s=70&v=4",
    ghLink: "https://github.com/sewe2000/",
  },
  {
    id: 3,
    name: "Maksymilian Gala",
    designation: "maxidragon",
    content: (
      <p>
        I always wanted to configure the system according to my needs,
        but it always took a lot of time.
        <TextHighlight>
          With spito, it only takes a few minutes instead of hours.
        </TextHighlight>
      </p>
    ),
    image: "https://avatars.githubusercontent.com/u/94986692?s=70&v=4",
    ghLink: "https://github.com/maxidragon/",
  },
  {
    id: 4,
    name: "Tomasz Mamala",
    designation: "Majkipl27",
    content: (
      <p>
        There was one detail that kept me from using Arch Linux.
        <TextHighlight>
          Time and complexity of system configuration.
        </TextHighlight>
        Now, thanks to Spito, I can configure my system in just a few minutes.
      </p>
    ),
    image: "https://avatars.githubusercontent.com/u/100165191?v=4",
    ghLink: "https://github.com/Majkipl27/",
  },
];

//Bento Grid Items (Why spito?)

const gridItems = [
  {
    title: "Time efficiency",
    description: (
      <span className="text-sm">
        Using spito you can save time you would spend on configuring your
        system.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClock className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Simplicity",
    description: (
      <span className="text-sm">
        You don't need to be a rocket scientist to use linux.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconArrowBigRightLines className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Open Source",
    description: (
      <span className="text-sm">
        As you could expect, spito is open source and free to use for everyone.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconBrandOpenSource className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Technologies",
    description: (
      <span className="text-sm">
        When designing Spito, we thought about technologies that are reliable
        but also easy to understand for potential contributors. This is how the
        choice fell on Go and Lua.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconAugmentedReality2 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Better "Bash"',
    description: (
      <span className="text-sm">
        Spito gives you possibilities, bash can't - dependencies.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconTerminal2 className="h-4 w-4 text-neutral-500" />,
  },
];

export { cardsContent, gridItems };
