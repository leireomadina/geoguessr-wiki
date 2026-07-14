export type Difficulty = "easy" | "medium" | "hard" | "very_hard";
export type DrivingSide = "left" | "right";
export type Continent =
  | "Africa"
  | "Asia"
  | "Europe"
  | "North America"
  | "Oceania"
  | "South America";

export interface StudyLink {
  label: string;
  url: string;
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
}
