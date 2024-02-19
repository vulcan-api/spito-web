import { IconArrowBigRightLines, IconClock, IconTableColumn } from "@tabler/icons-react";
import { TextHighlight } from "../../components/ui/text-highlight";
import { SkeletonOne, SkeletonTwo } from "./Skeletons";



//CardStack Items (What inspired us to create spito?)

const cardsContent = [
  {
    id: 0,
    name: "Bartłomiej Strama",
    designation: "BaderBC",
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <TextHighlight>
          Soluta incidunt, quos, quas, quidem quibusdam quia quae voluptates
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <TextHighlight>
          Soluta incidunt, quos, quas, quidem quibusdam quia quae voluptates
        </TextHighlight>
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <TextHighlight>
          Soluta incidunt, quos, quas, quidem quibusdam quia quae voluptates
        </TextHighlight>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <TextHighlight>
          Soluta incidunt, quos, quas, quidem quibusdam quia quae voluptates
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
        You don't need to have a deep knowledge to configure your system.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconArrowBigRightLines className="h-4 w-4 text-neutral-500" />,
  },
  {
    //open source
    title: "Configuration Time",
    description: (
      <span className="text-sm">
        Using spito you can save time you would spend on configuring your
        system.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    //technologie bo mam miejsca dużo (go, lua)
    title: "Configuration Time",
    description: (
      <span className="text-sm">
        Using spito you can save time you would spend on configuring your
        system.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    //lepszy bash
    title: "Configuration Time",
    description: (
      <span className="text-sm">
        Using spito you can save time you would spend on configuring your
        system.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

export {cardsContent, gridItems}