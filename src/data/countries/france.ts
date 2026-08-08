import type { Country } from "@/types/country";

const country: Country = {
  id: "FR",
  name: "France",
  continent: "Europe",
  difficulty: "medium",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/france" },
  ],
  regions: [
    { name: "Auvergne-Rhône-Alpes", icon: "🏔️", cities: "Lyon", description: "Alps in the east, volcanic plateaus" },
    { name: "Bourgogne-Franche-Comté", icon: "🍷", cities: "Dijon", description: "Rolling hills and vineyards" },
    { name: "Bretagne", icon: "🌊", cities: "Rennes", description: "Rocky Atlantic coast" },
    { name: "Centre-Val de Loire", icon: "🏰", cities: "Orléans", description: "Flat river plains with châteaux" },
    { name: "Corse", icon: "🏝️", cities: "Ajaccio", description: "Mediterranean island with mountains" },
    { name: "Grand Est", icon: "🌾", cities: "Strasbourg", description: "Northeast on the Germany border" },
    { name: "Hauts-de-France", icon: "🌾", cities: "Lille", description: "Flat northern plains" },
    { name: "Île-de-France", icon: "🏙️", cities: "Paris", description: "Capital region with dense suburbs" },
    { name: "Normandie", icon: "🌳", cities: "Rouen", description: "Green countryside, dairy farms" },
    { name: "Nouvelle-Aquitaine", icon: "🍇", cities: "Bordeaux", description: "Southwest, vineyards and pine forests" },
    { name: "Occitanie", icon: "🏔️", cities: "Toulouse", description: "South with the Pyrenees and Mediterranean" },
    { name: "Pays de la Loire", icon: "🌾", cities: "Nantes", description: "Western river plains" },
    { name: "Provence-Alpes-Côte d'Azur", icon: "💜", cities: "Marseille", description: "Mediterranean south, lavender fields" },
  ],
};

export default country;
