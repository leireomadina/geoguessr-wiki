import type { CONTINENTS, DIFFICULTIES, DRIVING_SIDES } from "@/data/enums";

export type Difficulty = (typeof DIFFICULTIES)[number];

export type DrivingSide = (typeof DRIVING_SIDES)[number];

export type Continent = (typeof CONTINENTS)[number];

export interface StudyLink {
  label: string;
  url: string;
  platform?: "website" | "google docs" | "other";
}

export interface CountryImage {
  src: string;
  alt: string;
  label: string;
  category: "flag" | "landscape" | "infographic" | "other";
}

export interface VideoLink {
  label: string;
  url: string;
  platform?: "youtube" | "vimeo" | "other";
}

export interface Meta {
  label: string;
  value: string;
  tag: Difficulty;
}

export interface Region {
  name: string;
  icon?: string;
  cities?: string;
  description?: string;
}

export interface Country {
  id: string; // ISO Code (e.g., 'ES' for Spain)
  name: string;
  continent: Continent;
  difficulty: Difficulty;
  studyLinks: StudyLink[];
  drivingSide: DrivingSide;
  images?: CountryImage[];
  videos?: VideoLink[];
  meta?: Meta[];
  regions?: Region[];
}
