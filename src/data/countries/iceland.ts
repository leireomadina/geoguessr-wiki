import type { Country } from "@/types/country";

const country: Country = {
  id: "IS",
  name: "Iceland",
  continent: "Europe",
  difficulty: "easy",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/iceland" },
  ],
  regions: [
    {
      name: "Westfjords",
      icon: "🐦",
      cities: "Ísafjörður, Bolungarvík",
      description: "Remote fjords with steep cliffs and gravel roads",
    },
    {
      name: "Northeast",
      icon: "🐋",
      cities: "Akureyri, Húsavík",
      description: "Second city and whale watching near Lake Mývatn",
    },
    {
      name: "Northwest",
      icon: "🐴",
      cities: "Sauðárkrókur, Blönduós",
      description: "Rural farmland with Icelandic horses",
    },
    {
      name: "East",
      icon: "🏞️",
      cities: "Egilsstaðir, Seyðisfjörður",
      description: "Eastern fjords and the largest forest in Iceland",
    },
    {
      name: "West",
      icon: "⛰️",
      cities: "Borgarnes, Akranes, Stykkishólmur",
      description: "Snæfellsnes peninsula and lava fields",
    },
    {
      name: "Capital Region",
      icon: "🏙️",
      cities: "Reykjavík, Kópavogur, Hafnarfjörður",
      description: "Home to most of the population",
    },
    {
      name: "Southern Peninsula",
      icon: "✈️",
      cities: "Reykjanesbær, Grindavík",
      description: "Volcanic Reykjanes peninsula with the international airport",
    },
    {
      name: "South",
      icon: "🌋",
      cities: "Selfoss, Vík, Höfn",
      description: "Waterfalls, black sand beaches and glaciers along the Ring Road",
    },
  ],
};

export default country;
