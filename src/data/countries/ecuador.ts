import type { Country } from "@/types/country";

const country: Country = {
  id: "EC",
  name: "Ecuador",
  continent: "South America",
  difficulty: "medium",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/ecuador" },
  ],
  regions: [
    // Coast
    { name: "Esmeraldas", icon: "🏖️", cities: "Esmeraldas", description: "Northern coast, hot with dark-sand beaches" },
    { name: "Manabí", icon: "🌴", cities: "Portoviejo", description: "Central coast with fishing villages" },
    { name: "Guayas", icon: "🏙️", cities: "Guayaquil", description: "Largest city and port on the Gulf" },
    { name: "Santa Elena", icon: "🏖️", cities: "Santa Elena", description: "Dry coastal peninsula, beaches and dunes" },
    { name: "Los Ríos", icon: "🌾", cities: "Babahoyo", description: "River plains, bananas and cacao" },
    { name: "El Oro", icon: "🍌", cities: "Machala", description: "Southern coast, banana country" },
    // Highlands
    { name: "Carchi", icon: "🌄", cities: "Tulcán", description: "Northern Andes highlands on the Colombia border" },
    { name: "Imbabura", icon: "⛰️", cities: "Ibarra", description: "Lakes and volcanoes, indigenous highlands" },
    { name: "Pichincha", icon: "🏙️", cities: "Quito", description: "Capital at 2,850m in the Andes" },
    { name: "Cotopaxi", icon: "🌋", cities: "Latacunga", description: "Volcanic plains under the Cotopaxi volcano" },
    { name: "Tungurahua", icon: "🌋", cities: "Ambato", description: "Andean valley, fruit orchards" },
    { name: "Chimborazo", icon: "🏔️", cities: "Riobamba", description: "Highest Andes peaks, llama pastures" },
    { name: "Bolívar", icon: "🌾", cities: "Guaranda", description: "Remote Andean farmland" },
    { name: "Cañar", icon: "🏛️", cities: "Azogues", description: "Highlands with Inca ruins" },
    { name: "Azuay", icon: "🏛️", cities: "Cuenca", description: "Colonial city in the southern Andes" },
    { name: "Loja", icon: "🎻", cities: "Loja", description: "Music and misty green mountains" },
    // Amazon
    { name: "Sucumbíos", icon: "🌳", cities: "Nueva Loja", description: "Amazon rainforest in the northeast, oil country" },
    { name: "Orellana", icon: "🌴", cities: "Puerto Francisco de Orellana", description: "Remote Amazon along the Napo river" },
    { name: "Napo", icon: "🌳", cities: "Tena", description: "Cloud and rainforest on the Amazon slopes" },
    { name: "Pastaza", icon: "🌴", cities: "Puyo", description: "Lowland jungle, hot and rainy" },
    { name: "Morona Santiago", icon: "🌳", cities: "Macas", description: "Jungle east of the Andes" },
    { name: "Zamora Chinchipe", icon: "🌴", cities: "Zamora", description: "Southeast rainforest, mining and cloud forest" },
    // Islands
    { name: "Galápagos", icon: "🦎", cities: "Puerto Baquerizo Moreno", description: "Pacific islands with unique wildlife" },
    // Special
    { name: "Santo Domingo de los Tsáchilas", icon: "🌴", cities: "Santo Domingo", description: "Transition zone between coast and sierra" },
  ],
};

export default country;
