import type { Country } from "@/types/country";

const country: Country = {
  id: "CL",
  name: "Chile",
  continent: "South America",
  difficulty: "easy",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/chile" },
  ],
  regions: [
    // Far North
    { name: "Arica y Parinacota", icon: "🏜️", cities: "Arica", description: "Extreme north, desert with Andean highlands" },
    { name: "Tarapacá", icon: "🏜️", cities: "Iquique", description: "Atacama desert, coastal cliffs" },
    { name: "Antofagasta", icon: "⛏️", cities: "Antofagasta", description: "Mining desert, driest in the world" },
    // Near North
    { name: "Atacama", icon: "🌵", cities: "Copiapó", description: "Desert with cacti and mining towns" },
    { name: "Coquimbo", icon: "🍇", cities: "La Serena", description: "Semi-arid valleys with vineyards" },
    // Central
    { name: "Valparaíso", icon: "🏖️", cities: "Valparaíso", description: "Port city on colourful hills" },
    { name: "Metropolitana", icon: "🏙️", cities: "Santiago", description: "Capital in a valley surrounded by the Andes" },
    { name: "O'Higgins", icon: "🍷", cities: "Rancagua", description: "Wine country south of the capital" },
    { name: "Maule", icon: "🌲", cities: "Talca", description: "Agriculture, vineyards and pine forests" },
    { name: "Ñuble", icon: "🌾", cities: "Chillán", description: "Farmland between the coast and the Andes" },
    { name: "Biobío", icon: "🌲", cities: "Concepción", description: "Forests and industry, south of the Bío Bío river" },
    // South
    { name: "Araucanía", icon: "🌋", cities: "Temuco", description: "Volcanoes, lakes and native forests" },
    { name: "Los Ríos", icon: "🌧️", cities: "Valdivia", description: "Rainy green district with rivers and rainforest" },
    { name: "Los Lagos", icon: "🏔️", cities: "Puerto Montt", description: "Lakes and snow-capped volcanoes" },
    { name: "Aysén", icon: "🏔️", cities: "Coyhaique", description: "Wild fjords and glaciers, sparsely populated" },
    { name: "Magallanes", icon: "❄️", cities: "Punta Arenas", description: "Southernmost, cold steppe and Patagonia" },
  ],
};

export default country;
