import type { Country } from "@/types/country";

const country: Country = {
  id: "ES",
  name: "Spain",
  continent: "Europe",
  difficulty: "easy",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/spain" },
  ],
  regions: [
    {
      name: "Andalusia",
      icon: "☀️",
      cities: "Seville, Granada, Cordoba, Malaga",
      description: "Hot and dry with olive trees; white villages",
    },
    {
      name: "Aragon",
      icon: "🏔️",
      cities: "Zaragoza, Huesca, Teruel",
      description: "Mountains in the north; dry plains in the south",
    },
    {
      name: "Asturias",
      icon: "🌊",
      cities: "Oviedo, Gijon, Aviles",
      description: "Green mountains by the sea; lots of rain",
    },
    {
      name: "Balearic Islands",
      icon: "🏝️",
      cities: "Palma, Ibiza, Mahon",
      description: "Islands with beaches and pine trees",
    },
    {
      name: "Basque Country",
      icon: "🌧️",
      cities: "Bilbao, San Sebastian, Vitoria-Gasteiz",
      description: "Green hills and steep valleys; cloudy",
    },
    {
      name: "Canary Islands",
      icon: "🌋",
      cities: "Las Palmas, Santa Cruz de Tenerife",
      description: "Volcanic islands with black sand beaches",
    },
    {
      name: "Cantabria",
      icon: "⛰️",
      cities: "Santander, Torrelavega, Castro Urdiales",
      description: "Mountains near the beach; foggy",
    },
    {
      name: "Castilla-La Mancha",
      icon: "🌾",
      cities: "Toledo, Albacete, Ciudad Real",
      description: "Flat plains with windmills; hot and cold",
    },
    {
      name: "Castilla y Leon",
      icon: "🏜️",
      cities: "Valladolid, Salamanca, Burgos, Leon",
      description: "Open fields with wheat and oak trees",
    },
    {
      name: "Catalonia",
      icon: "⛰️",
      cities: "Barcelona, Girona, Tarragona, Lleida",
      description: "Mountains near the coast; pine trees",
    },
    {
      name: "Extremadura",
      icon: "🌳",
      cities: "Merida, Caceres, Badajoz",
      description: "Oak trees and open grassland",
    },
    {
      name: "Galicia",
      icon: "🌧️",
      cities: "Santiago de Compostela, A Coruna, Vigo, Lugo",
      description: "Rocky coast with inlets; lots of rain",
    },
    {
      name: "La Rioja",
      icon: "🍇",
      cities: "Logrono, Haro, Arnedo",
      description: "Valley with vineyards and hills",
    },
    {
      name: "Madrid",
      icon: "🏙️",
      cities: "Madrid, Alcala de Henares",
      description: "High plateau with dry land",
    },
    {
      name: "Murcia",
      icon: "🌵",
      cities: "Murcia, Cartagena, Lorca",
      description: "Desert-like with fruit farms and gorges",
    },
    {
      name: "Navarre",
      icon: "🌿",
      cities: "Pamplona, Tudela, Estella",
      description: "Green mountains in north; dry land in south",
    },
    {
      name: "Valencia",
      icon: "🍊",
      cities: "Valencia, Alicante, Castellon",
      description: "Coast with rice fields and orange trees",
    },
  ],
};

export default country;
