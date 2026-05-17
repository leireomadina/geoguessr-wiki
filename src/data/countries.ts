import type { Country } from "../types/country";

export const countries: Country[] = [
  {
    id: "JP",
    name: "Japan",
    continent: "Asia",
    studyLinks: ["https://www.geoguessr.com/vg/japan"],
    difficulty: "hard",
  },
  {
    id: "BR",
    name: "Brazil",
    continent: "South America",
    studyLinks: ["https://www.geoguessr.com/vg/brazil"],
    difficulty: "medium",
  },
  {
    id: "ES",
    name: "Spain",
    continent: "Europe",
    studyLinks: ["https://www.geoguessr.com/vg/spain"],
    difficulty: "easy",
  },
  {
    id: "ZA",
    name: "South Africa",
    continent: "Africa",
    studyLinks: ["https://www.geoguessr.com/vg/south-africa"],
    difficulty: "very_hard",
  },
  {
    id: "US",
    name: "USA",
    continent: "North America",
    studyLinks: ["https://www.geoguessr.com/vg/united-states"],
    difficulty: "hard",
  },
  {
    id: "AU",
    name: "Australia",
    continent: "Oceania",
    studyLinks: ["https://www.geoguessr.com/vg/australia"],
    difficulty: "hard",
  },
];
