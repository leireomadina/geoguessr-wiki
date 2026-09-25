import type { Country } from "@/types/country";

const country: Country = {
  id: "LV",
  name: "Latvia",
  continent: "Europe",
  difficulty: "hard",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/latvia" },
  ],
  regions: [
    {
      name: "Vidzeme",
      icon: "🌳",
      cities: "Valmiera, Cēsis, Sigulda",
      description: "Northeastern region with the Gauja valley and forests",
    },
    {
      name: "Riga",
      icon: "🏙️",
      cities: "Riga, Jūrmala",
      description: "Capital with Art Nouveau buildings and beach resorts",
    },
    {
      name: "Kurzeme",
      icon: "🌊",
      cities: "Liepāja, Ventspils, Kuldīga",
      description: "Western Courland coast with ports and long beaches",
    },
    {
      name: "Zemgale",
      icon: "🌾",
      cities: "Jelgava, Bauska, Jēkabpils",
      description: "Flat, fertile farmland south of Riga",
    },
    {
      name: "Latgale",
      icon: "💧",
      cities: "Daugavpils, Rēzekne",
      description: "Southeastern lake district with a large Russian-speaking population",
    },
  ],
};

export default country;
