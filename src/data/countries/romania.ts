import type { Country } from "@/types/country";

const country: Country = {
  id: "RO",
  name: "Romania",
  continent: "Europe",
  difficulty: "medium",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/romania" },
  ],
  regions: [
    {
      name: "Maramureș",
      icon: "⛪",
      cities: "Baia Mare, Sighetu Marmației",
      description: "Northern region with wooden churches and traditional villages",
    },
    {
      name: "Bukovina",
      icon: "🎨",
      cities: "Suceava, Rădăuți",
      description: "Painted monasteries and forested hills in the northeast",
    },
    {
      name: "Moldavia",
      icon: "🍇",
      cities: "Iași, Bacău, Galați",
      description: "Eastern hills and plains bordering Moldova",
    },
    {
      name: "Crișana",
      icon: "🏛️",
      cities: "Oradea, Arad",
      description: "Western lowlands near the Hungarian border",
    },
    {
      name: "Transylvania",
      icon: "🏰",
      cities: "Cluj-Napoca, Brașov, Sibiu",
      description: "Carpathian plateau with Saxon towns and fortified churches",
    },
    {
      name: "Banat",
      icon: "🌾",
      cities: "Timișoara, Reșița",
      description: "Southwestern plain with multi-ethnic heritage",
    },
    {
      name: "Muntenia",
      icon: "🏙️",
      cities: "Bucharest, Ploiești, Pitești",
      description: "Southern plains with the capital and oil fields",
    },
    {
      name: "Dobruja",
      icon: "🏖️",
      cities: "Constanța, Tulcea",
      description: "Black Sea coast and the Danube Delta",
    },
    {
      name: "Oltenia",
      icon: "🌻",
      cities: "Craiova, Râmnicu Vâlcea, Drobeta-Turnu Severin",
      description: "Southwest region between the Carpathians and the Danube",
    },
  ],
};

export default country;
