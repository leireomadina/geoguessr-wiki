import type { Country } from "@/types/country";

const country: Country = {
  id: "SE",
  name: "Sweden",
  continent: "Europe",
  difficulty: "medium",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/sweden" },
  ],
  regions: [
    {
      name: "Upper Norrland",
      icon: "🌌",
      cities: "Luleå, Umeå, Kiruna",
      description: "Arctic north with Sámi culture, mines and huge forests",
    },
    {
      name: "Middle Norrland",
      icon: "🌲",
      cities: "Sundsvall, Östersund, Örnsköldsvik",
      description: "Forested inland mountains and the High Coast",
    },
    {
      name: "North Middle Sweden",
      icon: "🏡",
      cities: "Gävle, Karlstad, Falun",
      description: "Red wooden houses, lakes and Dalarna traditions",
    },
    {
      name: "Stockholm",
      icon: "🏙️",
      cities: "Stockholm, Södertälje",
      description: "Capital built on islands with an archipelago",
    },
    {
      name: "East Middle Sweden",
      icon: "🏰",
      cities: "Uppsala, Västerås, Örebro, Linköping",
      description: "Lake Mälaren area with historic university towns",
    },
    {
      name: "West Sweden",
      icon: "⚓",
      cities: "Gothenburg, Borås, Trollhättan",
      description: "West coast with rocky shores and fishing villages",
    },
    {
      name: "Småland and the Islands",
      icon: "🦌",
      cities: "Jönköping, Växjö, Kalmar, Visby",
      description: "Southern forests, glassworks and the islands of Öland and Gotland",
    },
    {
      name: "South Sweden",
      icon: "🌾",
      cities: "Malmö, Helsingborg, Lund",
      description: "Flat farmland of Skåne connected to Denmark",
    },
  ],
};

export default country;
