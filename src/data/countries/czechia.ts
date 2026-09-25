import type { Country } from "@/types/country";

const country: Country = {
  id: "CZ",
  name: "Czechia",
  continent: "Europe",
  difficulty: "hard",
  drivingSide: "right",
  studyLinks: [
    {
      label: "Plonkit Guide",
      url: "https://www.plonkit.net/czechia",
    },
  ],
  regions: [
    { name: "Praha", icon: "🏙️", cities: "Praha", description: "Capital in the centre of the country" },
    { name: "Středočeský kraj", icon: "🏰", cities: "Kladno", description: "Rings the capital, mix of farms and forests" },
    { name: "Jihočeský kraj", icon: "🏞️", cities: "České Budějovice", description: "South Bohemia, ponds and forests" },
    { name: "Plzeňský kraj", icon: "🍺", cities: "Plzeň", description: "Western region with rolling hills" },
    { name: "Karlovarský kraj", icon: "♨️", cities: "Karlovy Vary", description: "Spa towns in the western highlands" },
    { name: "Ústecký kraj", icon: "⛰️", cities: "Ústí nad Labem", description: "Northwest, industrial valleys" },
    { name: "Liberecký kraj", icon: "🏔️", cities: "Liberec", description: "Northern mountains on the border" },
    { name: "Královéhradecký kraj", icon: "⛰️", cities: "Hradec Králové", description: "East, mountain border with Poland" },
    { name: "Pardubický kraj", icon: "🌾", cities: "Pardubice", description: "Central-east plains" },
    { name: "Vysočina", icon: "🌲", cities: "Jihlava", description: "Highlands with hills and forests" },
    { name: "Jihomoravský kraj", icon: "🍷", cities: "Brno", description: "South Moravia, vineyards" },
    { name: "Olomoucký kraj", icon: "🌾", cities: "Olomouc", description: "Central Moravia, flat farmland" },
    { name: "Zlínský kraj", icon: "⛰️", cities: "Zlín", description: "Eastern hills with orchards" },
    { name: "Moravskoslezský kraj", icon: "🏭", cities: "Ostrava", description: "Industrial northeast" },
  ],
};

export default country;
