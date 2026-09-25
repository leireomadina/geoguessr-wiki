import type { Country } from "@/types/country";

const country: Country = {
  id: "HR",
  name: "Croatia",
  continent: "Europe",
  difficulty: "medium",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/croatia" },
  ],
  regions: [
    {
      name: "Northern Croatia",
      icon: "🏡",
      cities: "Varaždin, Čakovec, Krapina",
      description: "Green hills of Zagorje and Međimurje with small villages",
    },
    {
      name: "Zagreb",
      icon: "🏙️",
      cities: "Zagreb",
      description: "Capital and largest city at the foot of Medvednica",
    },
    {
      name: "Slavonia",
      icon: "🌾",
      cities: "Osijek, Slavonski Brod, Vukovar",
      description: "Flat eastern farmland between the Drava and Sava rivers",
    },
    {
      name: "Central Croatia",
      icon: "🌳",
      cities: "Karlovac, Sisak",
      description: "Rivers and forests between Zagreb and the mountains",
    },
    {
      name: "Istria",
      icon: "🫒",
      cities: "Pula, Rovinj, Poreč",
      description: "Heart-shaped peninsula with Italian influence and bilingual signs",
    },
    {
      name: "Kvarner",
      icon: "⚓",
      cities: "Rijeka, Opatija, Krk",
      description: "Bay with islands and the port city of Rijeka",
    },
    {
      name: "Lika",
      icon: "🌲",
      cities: "Gospić, Otočac",
      description: "Sparse mountainous interior with Plitvice Lakes",
    },
    {
      name: "Dalmatia",
      icon: "⛵",
      cities: "Split, Zadar, Šibenik",
      description: "Long Adriatic coast with stone towns and many islands",
    },
    {
      name: "Dubrovnik",
      icon: "🏰",
      cities: "Dubrovnik",
      description: "Southernmost exclave with the walled old town",
    },
  ],
};

export default country;
