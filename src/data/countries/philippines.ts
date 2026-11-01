import type { Country } from "@/types/country";

const country: Country = {
  id: "PH",
  name: "Philippines",
  continent: "Asia",
  difficulty: "medium",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/philippines" },
  ],
  regions: [
    {
      name: "Ilocos Region",
      icon: "🏛️",
      cities: "Vigan, Laoag, San Fernando",
      description: "Northwest coast with Spanish colonial towns and sand dunes",
    },
    {
      name: "Cordillera",
      icon: "🌲",
      cities: "Baguio",
      description: "Mountainous interior with pine forests and rice terraces",
    },
    {
      name: "Cagayan Valley",
      icon: "🌽",
      cities: "Tuguegarao, Santiago",
      description: "Wide river valley in the northeast, very hot and agricultural",
    },
    {
      name: "Central Luzon",
      icon: "🌾",
      cities: "Angeles, San Fernando, Olongapo",
      description: "Flat rice bowl of the country with volcanoes on the edges",
    },
    {
      name: "Metro Manila",
      icon: "🏙️",
      cities: "Manila, Quezon City, Makati",
      description: "Dense capital region and main urban hub",
    },
    {
      name: "Calabarzon",
      icon: "🌋",
      cities: "Batangas, Antipolo, Lucena",
      description: "Industrial belt south of Manila with Taal Volcano",
    },
    {
      name: "Mimaropa",
      icon: "🏝️",
      cities: "Puerto Princesa, Calapan",
      description: "Island region stretching from Mindoro to Palawan",
    },
    {
      name: "Bicol",
      icon: "⛰️",
      cities: "Legazpi, Naga",
      description: "Southeastern Luzon peninsula dominated by Mayon Volcano",
    },
    {
      name: "Western Visayas",
      icon: "🏖️",
      cities: "Iloilo City, Roxas",
      description: "Panay island with Boracay and old stone churches",
    },
    {
      name: "Negros Island",
      icon: "🍬",
      cities: "Bacolod, Dumaguete",
      description: "Sugarcane plantations covering the island of Negros",
    },
    {
      name: "Central Visayas",
      icon: "🐋",
      cities: "Cebu City, Tagbilaran",
      description: "Cebu and Bohol, with the Chocolate Hills",
    },
    {
      name: "Eastern Visayas",
      icon: "🌀",
      cities: "Tacloban, Ormoc",
      description: "Samar and Leyte, facing the Pacific and its typhoons",
    },
    {
      name: "Zamboanga Peninsula",
      icon: "⛵",
      cities: "Zamboanga City, Dipolog",
      description: "Western Mindanao with Spanish-Creole Chavacano culture",
    },
    {
      name: "Northern Mindanao",
      icon: "🏞️",
      cities: "Cagayan de Oro, Iligan",
      description: "Northern coast and highlands with rivers and waterfalls",
    },
    {
      name: "Caraga",
      icon: "🏄",
      cities: "Butuan, Surigao",
      description: "Northeastern Mindanao with Siargao surf island",
    },
    {
      name: "Bangsamoro",
      icon: "🕌",
      cities: "Cotabato City, Marawi",
      description: "Autonomous Muslim-majority region with mosques",
    },
    {
      name: "Davao Region",
      icon: "🍌",
      cities: "Davao City, Tagum",
      description: "Southeastern Mindanao with banana plantations and Mount Apo",
    },
    {
      name: "Soccsksargen",
      icon: "🐟",
      cities: "General Santos, Koronadal",
      description: "Southern Mindanao, tuna capital and fertile plains",
    },
  ],
};

export default country;
