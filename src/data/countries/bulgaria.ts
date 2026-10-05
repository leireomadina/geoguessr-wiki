import type { Country } from "@/types/country";

const country: Country = {
  id: "BG",
  name: "Bulgaria",
  continent: "Europe",
  difficulty: "medium",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/bulgaria" },
  ],
  regions: [
    {
      name: "Northwestern",
      icon: "🏞️",
      cities: "Pleven, Vidin, Vratsa",
      description: "Poorest region, rural plains along the Danube",
    },
    {
      name: "North Central",
      icon: "🏰",
      cities: "Ruse, Veliko Tarnovo, Gabrovo",
      description: "Danube lowlands and the medieval capital Veliko Tarnovo",
    },
    {
      name: "Northeastern",
      icon: "🏖️",
      cities: "Varna, Dobrich, Shumen",
      description: "Black Sea coast and the flat Dobruja grain fields",
    },
    {
      name: "Southwestern",
      icon: "🏔️",
      cities: "Sofia, Blagoevgrad, Pernik",
      description: "Capital region with the Rila and Pirin mountains",
    },
    {
      name: "Southeastern",
      icon: "⚓",
      cities: "Burgas, Stara Zagora, Sliven",
      description: "Southern Black Sea coast and Thracian plain",
    },
    {
      name: "South Central",
      icon: "🏛️",
      cities: "Plovdiv, Haskovo, Smolyan",
      description: "Thracian valley and the Rhodope mountains",
    },
  ],
};

export default country;
