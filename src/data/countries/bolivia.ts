import type { Country } from "@/types/country";

const country: Country = {
  id: "BO",
  name: "Bolivia",
  continent: "South America",
  difficulty: "medium",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/bolivia" },
  ],
  regions: [
    { name: "La Paz", icon: "⛰️", cities: "La Paz", description: "High-altitude capital in an Andean valley" },
    { name: "Oruro", icon: "🏜️", cities: "Oruro", description: "High barren altiplano with salt flats nearby" },
    { name: "Potosí", icon: "⛏️", cities: "Potosí", description: "Mineral-rich highlands, silver mountain" },
    { name: "Cochabamba", icon: "🌾", cities: "Cochabamba", description: "Fertile valley between the Andes ranges" },
    { name: "Chuquisaca", icon: "🏛️", cities: "Sucre", description: "Historic capital in green valleys" },
    { name: "Tarija", icon: "🍷", cities: "Tarija", description: "Southern vineyards and sub-tropical valleys" },
    { name: "Santa Cruz", icon: "🌴", cities: "Santa Cruz de la Sierra", description: "Lowland plains, hot and flat with farmland" },
    { name: "Beni", icon: "🐊", cities: "Trinidad", description: "Amazon basin with flooded savanna" },
    { name: "Pando", icon: "🌳", cities: "Cobija", description: "Remote northern Amazon rainforest" },
  ],
};

export default country;
