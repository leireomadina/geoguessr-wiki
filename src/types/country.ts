export type Difficulty = "easy" | "medium" | "hard" | "very_hard";
export type DrivingSide = "left" | "right";
export type Continent =
  | "Africa"
  | "Asia"
  | "Europe"
  | "North America"
  | "Oceania"
  | "South America";

export interface Country {
  id: string; // ISO Code (e.g., 'ES' for Spain)
  name: string;
  continent: Continent;
  studyLinks: string[];
  difficulty: Difficulty;
  drivingSide: DrivingSide;
}
