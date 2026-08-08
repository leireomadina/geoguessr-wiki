import type { Country } from "@/types/country";

const country: Country = {
  id: "CO",
  name: "Colombia",
  continent: "South America",
  difficulty: "medium",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/colombia" },
  ],
  regions: [
    // Caribbean
    { name: "La Guajira", icon: "🏜️", cities: "Riohacha", description: "Desert peninsula in the far north" },
    { name: "Cesar", icon: "🐄", cities: "Valledupar", description: "Hot dry valleys, vallenato heartland" },
    { name: "Magdalena", icon: "🌴", cities: "Santa Marta", description: "Coast with jungle and the Sierra Nevada" },
    { name: "Atlántico", icon: "🏖️", cities: "Barranquilla", description: "Flat coastal department around the port city" },
    { name: "Bolívar", icon: "🏛️", cities: "Cartagena", description: "Caribbean coast with the walled city" },
    { name: "Sucre", icon: "🦐", cities: "Sincelejo", description: "Small coastal department, cattle and agriculture" },
    { name: "Córdoba", icon: "🐄", cities: "Montería", description: "Flat cattle plains near the coast" },
    // Pacific
    { name: "Chocó", icon: "🌧️", cities: "Quibdó", description: "Rainy Pacific rainforest, remote and green" },
    { name: "Valle del Cauca", icon: "🌴", cities: "Cali", description: "Sugar cane valley between mountain ranges" },
    { name: "Cauca", icon: "⛰️", cities: "Popayán", description: "Andean highlands with colonial city" },
    { name: "Nariño", icon: "🌋", cities: "Pasto", description: "Volcanic southwest on the Ecuador border" },
    // Andean
    { name: "Antioquia", icon: "🏔️", cities: "Medellín", description: "Mountainous coffee region, second-largest city" },
    { name: "Santander", icon: "🏜️", cities: "Bucaramanga", description: "Canyons and high plateaus" },
    { name: "Norte de Santander", icon: "⛰️", cities: "Cúcuta", description: "Northeast Andes on the Venezuela border" },
    { name: "Boyacá", icon: "🏛️", cities: "Tunja", description: "High cold plateaus, colonial towns" },
    { name: "Cundinamarca", icon: "🌄", cities: "Bogotá", description: "Mountainous savanna surrounding the capital" },
    { name: "Bogotá D.C.", icon: "🏙️", cities: "Bogotá", description: "Capital high in the Andes" },
    { name: "Caldas", icon: "☕", cities: "Manizales", description: "Coffee region on steep green slopes" },
    { name: "Risaralda", icon: "☕", cities: "Pereira", description: "Coffee axis with lush mountains" },
    { name: "Quindío", icon: "🌴", cities: "Armenia", description: "Smallest department, coffee plantations" },
    { name: "Tolima", icon: "🌋", cities: "Ibagué", description: "Andean valleys with the Nevado del Tolima" },
    { name: "Huila", icon: "🌋", cities: "Neiva", description: "Upper Magdalena valley, arid and mountainous" },
    // Orinoquia
    { name: "Arauca", icon: "🌾", cities: "Arauca", description: "Hot plains on the Venezuela border" },
    { name: "Casanare", icon: "🌾", cities: "Yopal", description: "Eastern llanos, cattle and oil" },
    { name: "Meta", icon: "🌅", cities: "Villavicencio", description: "Gateway to the vast eastern plains" },
    { name: "Vichada", icon: "🌾", cities: "Puerto Carreño", description: "Remote flat savanna, sparsely populated" },
    // Amazon
    { name: "Putumayo", icon: "🌳", cities: "Mocoa", description: "Amazon rainforest in the southwest" },
    { name: "Amazonas", icon: "🌴", cities: "Leticia", description: "Southern Amazon on the river border" },
    { name: "Caquetá", icon: "🌳", cities: "Florencia", description: "Amazon lowlands with rolling hills" },
    { name: "Guaviare", icon: "🌳", cities: "San José del Guaviare", description: "Jungle between the Andes and the Amazon" },
    { name: "Vaupés", icon: "🌴", cities: "Mitú", description: "Remote eastern Amazon, indigenous territory" },
    { name: "Guainía", icon: "🌴", cities: "Inírida", description: "Easternmost, rivers and rainforest" },
    // Islands
    { name: "San Andrés y Providencia", icon: "🏖️", cities: "San Andrés", description: "Caribbean islands with coral beaches" },
  ],
};

export default country;
