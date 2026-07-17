import type { Country } from "@/types/country";

const country: Country = {
  id: "BR",
  name: "Brazil",
  continent: "South America",
  difficulty: "easy",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/brazil" },
    {
      label: "Brazil Gen 4 coverage data",
      url: "https://docs.google.com/document/d/12FLRcFGEDUfFrkD6jKLkEOXAeCIdn0SAZEMCusPNwg8/edit?tab=t.0#heading=h.n9yqjhjgk3ma",
    },
  ],
  videos: [
    {
      label: "Z8 Brazil guide",
      url: "https://www.youtube.com/watch?v=RQ9y44HoxQY",
      platform: "youtube",
    },
    {
      label: "3 Levels of GeoGuessr Tips from a Pro - BRAZIL",
      url: "https://www.youtube.com/watch?v=UZ9rfE3QU2M",
      platform: "youtube",
    },
  ],
  meta: [
    { label: "meta", value: "Red soil", tag: "easy" },
    { label: "meta", value: "Black back signs", tag: "easy" },
    { label: "meta", value: "Phone numbers", tag: "medium" },
  ],
  regions: [],
};

export default country;
