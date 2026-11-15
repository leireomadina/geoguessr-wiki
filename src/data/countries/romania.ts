import type { Country } from "@/types/country";

const country: Country = {
  id: "RO",
  name: "Romania",
  continent: "Europe",
  difficulty: "medium",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/romania" },
  ],
  regions: [
    { name: "Nord-Vest", icon: "⛰️", cities: "Cluj-Napoca", description: "Northwest around Cluj, Apuseni mountains" },
    { name: "Centru", icon: "🏰", cities: "Brașov, Sibiu", description: "Central Transylvania, fortified churches and Carpathians" },
    { name: "Nord-Est", icon: "🌾", cities: "Iași", description: "Northeast Moldavia, hills and monasteries" },
    { name: "Sud-Est", icon: "🌊", cities: "Constanța", description: "Southeast Black Sea coast and Danube Delta" },
    { name: "Sud - Muntenia", icon: "🌾", cities: "Ploiești", description: "Southern plains below the Carpathians" },
    { name: "București - Ilfov", icon: "🏙️", cities: "Bucharest", description: "Capital region, dense urban" },
    { name: "Sud-Vest Oltenia", icon: "⛰️", cities: "Craiova", description: "Southwest Oltenia, plains up to the Carpathians" },
    { name: "Vest", icon: "🌾", cities: "Timișoara", description: "Western Banat plains on the Hungarian border" },
  ],
};

export default country;
