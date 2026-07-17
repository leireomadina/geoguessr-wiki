import type { Country } from "@/types/country";

const country: Country = {
  id: "US",
  name: "USA",
  continent: "North America",
  difficulty: "hard",
  drivingSide: "right",
  studyLinks: [
    {
      label: "Plonkit Guide",
      url: "https://www.plonkit.net/usa",
    },
  ],
  regions: [],
};

export default country;
