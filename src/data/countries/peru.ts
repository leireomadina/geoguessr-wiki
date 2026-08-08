import type { Country } from "@/types/country";

const country: Country = {
  id: "PE",
  name: "Peru",
  continent: "South America",
  difficulty: "hard",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/peru" },
  ],
  regions: [
    // Coast
    { name: "Tumbes", icon: "🏖️", cities: "Tumbes", description: "Northernmost coast, hot with mangrove swamps" },
    { name: "Piura", icon: "🏜️", cities: "Piura", description: "Dry northern coast and desert" },
    { name: "Lambayeque", icon: "🏛️", cities: "Chiclayo", description: "Coast with ancient adobe ruins" },
    { name: "La Libertad", icon: "🏖️", cities: "Trujillo", description: "North coast, surfing and colonial towns" },
    { name: "Áncash", icon: "🏔️", cities: "Huaraz", description: "High peaks of the Cordillera Blanca" },
    { name: "Lima", icon: "🏙️", cities: "Lima", description: "Capital on the arid central coast" },
    { name: "Callao", icon: "🚢", cities: "Callao", description: "Port city next to Lima" },
    { name: "Ica", icon: "🏜️", cities: "Ica", description: "Desert with oasis and sand dunes" },
    { name: "Arequipa", icon: "🌋", cities: "Arequipa", description: "White volcanic-stone city near the Misti volcano" },
    { name: "Moquegua", icon: "🏜️", cities: "Moquegua", description: "Dry southern valleys" },
    { name: "Tacna", icon: "🏜️", cities: "Tacna", description: "Southernmost region on the Chile border" },
    // Highlands
    { name: "Cajamarca", icon: "🌾", cities: "Cajamarca", description: "Northern highlands, green valleys and dairy" },
    { name: "Huánuco", icon: "🌄", cities: "Huánuco", description: "High jungle and mountain valleys" },
    { name: "Pasco", icon: "⛏️", cities: "Cerro de Pasco", description: "High mining plateau" },
    { name: "Junín", icon: "🏔️", cities: "Huancayo", description: "Central highland valleys" },
    { name: "Huancavelica", icon: "⛰️", cities: "Huancavelica", description: "Remote high-altitude andes" },
    { name: "Ayacucho", icon: "🏛️", cities: "Ayacucho", description: "Highlands with churches and weaving" },
    { name: "Apurímac", icon: "🏔️", cities: "Abancay", description: "Deep river canyons in the Andes" },
    { name: "Cusco", icon: "🦙", cities: "Cusco", description: "Sacred valley, Machu Picchu, alpacas" },
    { name: "Puno", icon: "🌊", cities: "Puno", description: "Altiplano on Lake Titicaca" },
    // Jungle
    { name: "Amazonas", icon: "🌳", cities: "Chachapoyas", description: "Cloud forests with cliff tombs" },
    { name: "San Martín", icon: "🌴", cities: "Moyobamba", description: "Jungle with rolling green hills" },
    { name: "Loreto", icon: "🌴", cities: "Iquitos", description: "Amazon rainforest around the great rivers" },
    { name: "Ucayali", icon: "🌳", cities: "Pucallpa", description: "Central Amazon along the Ucayali river" },
    { name: "Madre de Dios", icon: "🦜", cities: "Puerto Maldonado", description: "Southern Amazon, wildlife rich" },
  ],
};

export default country;
