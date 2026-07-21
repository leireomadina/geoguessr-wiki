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
      cities: "Vancouver",
      description: "Pacific coast with mountains and rainforests",
    },
    {
      name: "Alberta",
      icon: "🏔️",
      cities: "Calgary, Edmonton",
      description: "Rocky Mountains and prairies",
    },
    {
      name: "Saskatchewan",
      icon: "🌾",
      cities: "Regina",
      description: "Prairie province with vast wheat fields",
    },
    {
      name: "Manitoba",
      icon: "🦬",
      cities: "Winnipeg",
      description: "Prairie province with Hudson Bay coastline",
    },
    {
      name: "Ontario",
      icon: "🍁",
      cities: "Toronto, Ottawa",
      description: "Most populous province",
    },
    {
      name: "Quebec",
      icon: "⚜️",
      cities: "Montreal",
      description: "French-speaking province with European charm",
    },
    {
      name: "New Brunswick",
      icon: "🦞",
      cities: "Fredericton",
      description: "Bilingual province with Bay of Fundy tides",
    },
    {
      name: "Nova Scotia",
      icon: "🌊",
      cities: "Halifax",
      description: "Maritime province with dramatic coastlines",
    },
    {
      name: "Prince Edward Island",
      icon: "🥔",
      cities: "Charlottetown",
      description: "Smallest province, Anne of Green Gables",
    },
    {
      name: "Newfoundland and Labrador",
      icon: "🐟",
      cities: "St. John's",
      description: "Most eastern province with rugged coast",
    },
  ],
};

export default country;
