import type { Country } from "@/types/country";

const country: Country = {
  id: "FI",
  name: "Finland",
  continent: "Europe",
  difficulty: "medium",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/finland" },
  ],
  regions: [
    {
      name: "Lapland",
      icon: "🦌",
      cities: "Rovaniemi, Kemi, Tornio",
      description: "Arctic north with reindeer, fells and endless forests",
    },
    {
      name: "Northern Finland",
      icon: "🌲",
      cities: "Oulu, Kajaani",
      description: "Boreal forests and wetlands around Oulu and Kainuu",
    },
    {
      name: "Ostrobothnia",
      icon: "🌾",
      cities: "Vaasa, Seinäjoki, Kokkola",
      description: "Flat west coast with fields and Swedish-speaking towns",
    },
    {
      name: "Eastern Finland",
      icon: "🛶",
      cities: "Kuopio, Joensuu, Savonlinna",
      description: "Lakeland with countless lakes near the Russian border",
    },
    {
      name: "Central Finland",
      icon: "🏞️",
      cities: "Jyväskylä",
      description: "Forested lake region in the middle of the country",
    },
    {
      name: "Western Finland",
      icon: "🏭",
      cities: "Tampere, Pori",
      description: "Industrial Tampere between lakes and the Satakunta coast",
    },
    {
      name: "Southeast Finland",
      icon: "🎿",
      cities: "Lahti, Lappeenranta, Kotka",
      description: "Lake Saimaa's south shore and the Kymenlaakso coast",
    },
    {
      name: "Southwest Finland",
      icon: "⛵",
      cities: "Turku, Salo, Rauma",
      description: "Old capital and the Archipelago Sea",
    },
    {
      name: "Uusimaa",
      icon: "🏙️",
      cities: "Helsinki, Espoo, Vantaa",
      description: "Capital region and most populous part of the country",
    },
    {
      name: "Åland",
      icon: "🏝️",
      cities: "Mariehamn",
      description: "Autonomous Swedish-speaking archipelago",
    },
  ],
};

export default country;
