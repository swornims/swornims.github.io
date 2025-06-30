// constants.ts

import ReactIcon from "./assets/react.svg";
import TypeScriptIcon from "./assets/typescript.svg";
import NextJsIcon from "./assets/nextjs.svg";
import postgresIcon from "./assets/postgres.svg";
import awsIcon from "./assets/aws.svg";
import cloudflareIcon from "./assets/cloudflare.png";
import laravelIcon from "./assets/laravel.webp";

export interface FloatingIcon {
  src: string;
  alt: string;
  style: string; // Tailwind classes for position
  animation: {
    x: number[];
    y: number[];
    rotate: number[];
    duration: number;
  };
}

export const floatingIcons: FloatingIcon[] = [
  {
    src: ReactIcon,
    alt: "React",
    style: "absolute top-0 left-0 w-16 h-16",
    animation: {
      x: [0, 20, -20, 0],
      y: [0, -15, 15, 0],
      rotate: [0, 10, -10, 0],
      duration: 8,
    },
  },
  {
    src: TypeScriptIcon,
    alt: "TypeScript",
    style: "absolute top-0 right-0 w-16 h-16",
    animation: {
      x: [0, -10, 10, 0],
      y: [0, 10, -10, 0],
      rotate: [0, -5, 5, 0],
      duration: 9,
    },
  },
  {
    src: NextJsIcon,
    alt: "Next.js",
    style: "absolute top-28 left-20 w-16 h-16",
    animation: {
      x: [0, -25, 25, 0],
      y: [0, 20, -20, 0],
      rotate: [0, -10, 10, 0],
      duration: 10,
    },
  },
  {
    src: postgresIcon,
    alt: "PostgreSQL",
    style: "absolute top-28 right-24 w-16 h-16",
    animation: {
      x: [0, 15, -15, 0],
      y: [0, -10, 10, 0],
      rotate: [0, 8, -8, 0],
      duration: 11,
    },
  },
  {
    src: awsIcon,
    alt: "AWS",
    style: "absolute top-48 left-4 w-16 h-16",
    animation: {
      x: [0, 10, -10, 0],
      y: [0, -12, 12, 0],
      rotate: [0, 6, -6, 0],
      duration: 12,
    },
  },
  {
    src: cloudflareIcon,
    alt: "Cloudflare",
    style: "absolute top-48 right-4 w-20 h-12",
    animation: {
      x: [0, 18, -18, 0],
      y: [0, 10, -10, 0],
      rotate: [0, 5, -5, 0],
      duration: 13,
    },
  },
  {
    src: laravelIcon,
    alt: "Laravel",
    style: "absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12",
    animation: {
      x: [0, -15, 15, 0],
      y: [0, 12, -12, 0],
      rotate: [0, -7, 7, 0],
      duration: 10,
    },
  },
];
