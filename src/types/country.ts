export type Difficulty = "easy" | "medium" | "hard" | "very_hard";

export interface Country {
  id: string; // ISO Code (e.g., 'ES' for Spain)
  name: string;
  continent: string;
  studyLinks: string[];
  difficulty: Difficulty;
}
