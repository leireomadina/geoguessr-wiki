import type { Country } from "@/types/country";

const country: Country = {
  id: "LT",
  name: "Lithuania",
  continent: "Europe",
  difficulty: "hard",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/lithuania" },
  ],
  regions: [
    {
      name: "Telšiai",
      icon: "🏞️",
      cities: "Telšiai, Plungė, Mažeikiai",
      description: "Samogitian highlands with lakes in the northwest",
    },
    {
      name: "Šiauliai",
      icon: "✝️",
      cities: "Šiauliai, Radviliškis",
      description: "Northern plains with the Hill of Crosses",
    },
    {
      name: "Panevėžys",
      icon: "🌾",
      cities: "Panevėžys, Biržai, Rokiškis",
      description: "Flat agricultural region in the north",
    },
    {
      name: "Klaipėda",
      icon: "⚓",
      cities: "Klaipėda, Palanga, Neringa",
      description: "Baltic coast with the only seaport and the Curonian Spit dunes",
    },
    {
      name: "Utena",
      icon: "🌲",
      cities: "Utena, Visaginas, Ignalina",
      description: "Lake district and forests in the northeast",
    },
    {
      name: "Tauragė",
      icon: "🐄",
      cities: "Tauragė, Jurbarkas",
      description: "Small rural county along the Nemunas river",
    },
    {
      name: "Kaunas",
      icon: "🏘️",
      cities: "Kaunas, Kėdainiai, Jonava",
      description: "Second city at the confluence of the Nemunas and Neris",
    },
    {
      name: "Vilnius",
      icon: "🏙️",
      cities: "Vilnius, Trakai",
      description: "Capital region with a baroque old town and Polish minority",
    },
    {
      name: "Marijampolė",
      icon: "🚚",
      cities: "Marijampolė, Vilkaviškis",
      description: "Southwestern farmland near the Russian and Polish borders",
    },
    {
      name: "Alytus",
      icon: "🍄",
      cities: "Alytus, Druskininkai, Varėna",
      description: "Southern pine forests and spa towns",
    },
  ],
};

export default country;
