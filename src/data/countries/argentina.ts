import type { Country } from "@/types/country";

const country: Country = {
  id: "AR",
  name: "Argentina",
  continent: "South America",
  difficulty: "easy",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/argentina" },
  ],
  regions: [
    // Buenos Aires
    { name: "Ciudad de Buenos Aires", icon: "🏙️", cities: "Buenos Aires", description: "Capital, dense grid with wide avenidas" },
    { name: "Buenos Aires", icon: "🌾", cities: "La Plata", description: "Huge flat pampas province around the capital" },
    // Northwest
    { name: "Jujuy", icon: "🏜️", cities: "San Salvador de Jujuy", description: "Colourful Andean mountains, adobe villages" },
    { name: "Salta", icon: "⛰️", cities: "Salta", description: "Andean north with red rock valleys" },
    { name: "Tucumán", icon: "🍋", cities: "San Miguel de Tucumán", description: "Sugarcane and citrus valleys" },
    { name: "Catamarca", icon: "⛰️", cities: "San Fernando del Valle", description: "High dry Andean valleys" },
    { name: "La Rioja", icon: "🏜️", cities: "La Rioja", description: "Arid west with red mountains" },
    { name: "Santiago del Estero", icon: "🌵", cities: "Santiago del Estero", description: "Flat dry plains, oldest city in the country" },
    // Northeast
    { name: "Chaco", icon: "🌳", cities: "Resistencia", description: "Hot flat lowland, forests and cotton" },
    { name: "Formosa", icon: "🐊", cities: "Formosa", description: "Subtropical northeast on the Paraguay border" },
    { name: "Corrientes", icon: "🐊", cities: "Corrientes", description: "Wetlands and rice fields between rivers" },
    { name: "Misiones", icon: "🌴", cities: "Posadas", description: "Subtropical jungle with red earth and Iguazú" },
    { name: "Entre Ríos", icon: "🐄", cities: "Paraná", description: "Green rolling hills between two rivers" },
    { name: "Santa Fe", icon: "🌾", cities: "Rosario", description: "Pampas grain heartland" },
    { name: "Córdoba", icon: "🌾", cities: "Córdoba", description: "Central pampas with sierra ranges" },
    // Cuyo
    { name: "Mendoza", icon: "🍷", cities: "Mendoza", description: "Wine country at the foot of the Andes" },
    { name: "San Juan", icon: "🏜️", cities: "San Juan", description: "Arid valleys with vineyards, high Andes" },
    { name: "San Luis", icon: "🏜️", cities: "San Luis", description: "Dry central plains and sierras" },
    // Patagonia
    { name: "La Pampa", icon: "🌾", cities: "Santa Rosa", description: "Flat pampas, endless straight roads" },
    { name: "Neuquén", icon: "🪨", cities: "Neuquén", description: "Steppe with sandstone badlands" },
    { name: "Río Negro", icon: "🏜️", cities: "Viedma", description: "Patagonian steppe with fruit valleys" },
    { name: "Chubut", icon: "🌊", cities: "Rawson", description: "Coastal cliffs and dry steppe, whales" },
    { name: "Santa Cruz", icon: "🏔️", cities: "Río Gallegos", description: "Windy southern steppe and glaciers" },
    { name: "Tierra del Fuego", icon: "❄️", cities: "Ushuaia", description: "Southernmost tip, mountains and forests" },
  ],
};

export default country;
