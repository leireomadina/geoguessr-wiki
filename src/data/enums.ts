// Single source of truth: the country domain types in src/types/country.ts are
// derived from these runtime arrays, so the unions and any test/data usage can
// never drift apart.
export const DIFFICULTIES = ["easy", "medium", "hard", "very_hard"] as const;

export const DRIVING_SIDES = ["left", "right"] as const;

export const CONTINENTS = [
  "Africa",
  "Asia",
  "Europe",
  "North America",
  "Oceania",
  "South America",
] as const;
