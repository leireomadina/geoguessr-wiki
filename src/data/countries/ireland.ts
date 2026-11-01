import type { Country } from "@/types/country";

const country: Country = {
  id: "IE",
  name: "Ireland",
  continent: "Europe",
  difficulty: "easy",
  drivingSide: "left",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/ireland" },
  ],
  regions: [
    {
      name: "Ulster",
      icon: "⛰️",
      cities: "Letterkenny, Monaghan, Cavan",
      description: "Northern counties of the Republic, rugged Donegal coast",
    },
    {
      name: "Connacht",
      icon: "🌊",
      cities: "Galway, Sligo, Castlebar",
      description: "Wild west with stone walls, bogs and Gaelic-speaking areas",
    },
    {
      name: "Leinster",
      icon: "🏙️",
      cities: "Dublin, Kilkenny, Wexford",
      description: "East coast with the capital and fertile farmland",
    },
    {
      name: "Munster",
      icon: "☘️",
      cities: "Cork, Limerick, Waterford",
      description: "Southern province with the Ring of Kerry and cliffs",
    },
  ],
};

export default country;
