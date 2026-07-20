import type { Country } from "@/types/country";

const country: Country = {
  id: "CA",
  name: "Canada",
  continent: "North America",
  difficulty: "hard",
  drivingSide: "right",
  studyLinks: [
    {
      label: "Plonkit Guide",
      url: "https://www.plonkit.net/canada",
    },
  ],
  regions: [
    {
      name: "British Columbia",
      icon: "🌲",
      description: "Pacific coast with mountains, rainforests, and Vancouver",
    },
    {
      name: "Alberta",
      icon: "🏔️",
      description: "Rocky Mountains and prairies, home to Calgary and Edmonton",
    },
    {
      name: "Saskatchewan",
      icon: "🌾",
      description: "Prairie province with vast wheat fields and Regina",
    },
    {
      name: "Manitoba",
      icon: "🦬",
      description: "Prairie province with Hudson Bay coastline and Winnipeg",
    },
    {
      name: "Ontario",
      icon: "🍁",
      description: "Most populous province, home to Toronto and Ottawa",
    },
    {
      name: "Quebec",
      icon: "⚜️",
      description: "French-speaking province with European charm and Montreal",
    },
    {
      name: "New Brunswick",
      icon: "🦞",
      description: "Bilingual province with Bay of Fundy tides and Fredericton",
    },
    {
      name: "Nova Scotia",
      icon: "🌊",
      description: "Maritime province with Halifax and dramatic coastlines",
    },
    {
      name: "Prince Edward Island",
      icon: "🥔",
      description: "Smallest province with Charlottetown and Anne of Green Gables",
    },
    {
      name: "Newfoundland and Labrador",
      icon: "🐟",
      description: "Most eastern province with St. John's and rugged coast",
    },
  ],
};

export default country;
