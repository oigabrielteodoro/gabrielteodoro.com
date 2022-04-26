import type { ImageField } from "@prismicio/types";

type Technology = {
  logo: ImageField;
  title: string;
  description: string;
};

export type Occupation = {
  title: "Front-End" | "Back-End";
  description: string;
  projectsCount: number;
  technologies: Technology[];
};
