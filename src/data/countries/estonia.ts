import type { Country } from "@/types/country";

const country: Country = {
  id: "EE",
  name: "Estonia",
  continent: "Europe",
  difficulty: "hard",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/estonia" },
  ],
  regions: [
    {
      name: "Northern Estonia",
      icon: "🏙️",
      cities: "Tallinn, Maardu, Keila",
      description: "Capital region with the medieval old town on the Gulf of Finland",
    },
    {
      name: "Northeastern Estonia",
      icon: "🏭",
      cities: "Narva, Kohtla-Järve, Jõhvi",
      description: "Industrial, Russian-speaking area with oil shale mining",
    },
    {
      name: "Central Estonia",
      icon: "🌾",
      cities: "Rakvere, Paide, Rapla",
      description: "Rural interior with manor houses and farmland",
    },
    {
      name: "Western Estonia",
      icon: "🏝️",
      cities: "Pärnu, Haapsalu, Kuressaare",
      description: "Coast and islands like Saaremaa and Hiiumaa with windmills",
    },
    {
      name: "Southern Estonia",
      icon: "🌲",
      cities: "Tartu, Viljandi, Võru",
      description: "Hilly, forested south with the university city of Tartu",
    },
  ],
};

export default country;
