// Single source of truth for every fixed set of values in the country data.
// The types in src/types/country.ts are derived from these arrays, and pages
// import the arrays (e.g. to build a filter's options), so adding a value here
// updates the type, the UI and the data tests together.

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

export const STUDY_LINK_PLATFORMS = ["website", "google docs", "other"] as const;

export const VIDEO_LINK_PLATFORMS = ["youtube", "vimeo", "other"] as const;

export const IMAGE_CATEGORIES = ["flag", "landscape", "infographic", "other"] as const;
