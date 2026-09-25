import type { Country } from "@/types/country";

const country: Country = {
  id: "ZA",
  name: "South Africa",
  continent: "Africa",
  difficulty: "very_hard",
  drivingSide: "left",
  studyLinks: [
    {
      label: "Plonkit Guide",
      url: "https://www.plonkit.net/south-africa",
    },
  ],
  regions: [
    { name: "Eastern Cape", icon: "🌊", cities: "Bhisho", description: "Wild coast and rolling grassland" },
    { name: "Free State", icon: "🌾", cities: "Bloemfontein", description: "Flat highveld farmland" },
    { name: "Gauteng", icon: "🏙️", cities: "Johannesburg", description: "Urban heartland with the largest cities" },
    { name: "KwaZulu-Natal", icon: "🌴", cities: "Pietermaritzburg", description: "Subtropical coast with sugar cane" },
    { name: "Limpopo", icon: "🌳", cities: "Polokwane", description: "Northern savanna with baobabs" },
    { name: "Mpumalanga", icon: "🏔️", cities: "Mbombela", description: "Escarpment, mountains and bushveld" },
    { name: "North West", icon: "🦏", cities: "Mahikeng", description: "Savanna and mining country" },
    { name: "Northern Cape", icon: "🏜️", cities: "Kimberley", description: "Vast arid semi-desert" },
    { name: "Western Cape", icon: "🏔️", cities: "Cape Town", description: "Mediterranean south, mountains and vineyards" },
  ],
};

export default country;
