import type { Country } from "@/types/country";

const country: Country = {
  id: "HU",
  name: "Hungary",
  continent: "Europe",
  difficulty: "medium",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/hungary" },
  ],
  regions: [
    {
      name: "Northern Hungary",
      icon: "⛰️",
      cities: "Miskolc, Eger",
      description: "Hilly northeast with the Mátra and Bükk mountains and wine regions",
    },
    {
      name: "Northern Great Plain",
      icon: "🐎",
      cities: "Debrecen, Nyíregyháza, Szolnok",
      description: "Flat eastern plain with the Hortobágy puszta",
    },
    {
      name: "Budapest",
      icon: "🏛️",
      cities: "Budapest",
      description: "Capital split by the Danube into Buda and Pest",
    },
    {
      name: "Pest",
      icon: "🏘️",
      cities: "Érd, Vác, Szentendre",
      description: "County surrounding the capital along the Danube Bend",
    },
    {
      name: "Western Transdanubia",
      icon: "🏰",
      cities: "Győr, Szombathely, Sopron",
      description: "Western border area near Austria with rolling hills",
    },
    {
      name: "Central Transdanubia",
      icon: "🌊",
      cities: "Székesfehérvár, Veszprém, Tatabánya",
      description: "Lake Balaton's northern shore and industrial towns",
    },
    {
      name: "Southern Great Plain",
      icon: "🌶️",
      cities: "Szeged, Kecskemét, Békéscsaba",
      description: "Flat farmland famous for paprika and sunflowers",
    },
    {
      name: "Southern Transdanubia",
      icon: "🍇",
      cities: "Pécs, Kaposvár, Szekszárd",
      description: "Southern hills and forests near the Croatian border",
    },
  ],
};

export default country;
