import type { Country } from "@/types/country";

const country: Country = {
  id: "NO",
  name: "Norway",
  continent: "Europe",
  difficulty: "easy",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/norway" },
  ],
  regions: [
    {
      name: "Svalbard",
      icon: "🐻‍❄️",
      cities: "Longyearbyen",
      description: "Remote Arctic archipelago with glaciers and polar bears",
    },
    {
      name: "Northern Norway",
      icon: "🌌",
      cities: "Tromsø, Bodø, Narvik",
      description: "Arctic coast with the Lofoten islands and northern lights",
    },
    {
      name: "Trøndelag",
      icon: "⛪",
      cities: "Trondheim, Steinkjer",
      description: "Central region with farmland around the Trondheim fjord",
    },
    {
      name: "Western Norway",
      icon: "🏔️",
      cities: "Bergen, Stavanger, Ålesund",
      description: "Dramatic fjords, steep mountains and tunnels",
    },
    {
      name: "Eastern Norway",
      icon: "🏙️",
      cities: "Oslo, Drammen, Lillehammer",
      description: "Capital region with wide valleys and forests",
    },
    {
      name: "Southern Norway",
      icon: "⛵",
      cities: "Kristiansand, Arendal",
      description: "Sunny southern coast with white wooden towns",
    },
  ],
};

export default country;
