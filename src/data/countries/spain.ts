import type { Country } from "@/types/country";

const country: Country = {
  id: "ES",
  name: "Spain",
  continent: "Europe",
  difficulty: "easy",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/spain" },
  ],
  regions: [
    {
      name: "Basque Country",
      description: "Home of The Queen Goddess Divine",
    },
  ],
};

export default country;
