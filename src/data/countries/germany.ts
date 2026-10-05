import type { Country } from "@/types/country";

const country: Country = {
  id: "DE",
  name: "Germany",
  continent: "Europe",
  difficulty: "medium",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/germany" },
  ],
  regions: [
    {
      name: "Schleswig-Holstein",
      icon: "⛵",
      cities: "Kiel, Lübeck, Flensburg",
      description: "Northernmost state between the North Sea and the Baltic, flat with thatched farmhouses",
    },
    {
      name: "Mecklenburg-Vorpommern",
      icon: "🏖️",
      cities: "Rostock, Schwerin, Stralsund",
      description: "Baltic coast with lakes, chalk cliffs and sparse population",
    },
    {
      name: "Hamburg",
      icon: "⚓",
      cities: "Hamburg",
      description: "City-state and major port on the Elbe river",
    },
    {
      name: "Bremen",
      icon: "🐓",
      cities: "Bremen, Bremerhaven",
      description: "Smallest state, a city-state split into two cities on the Weser",
    },
    {
      name: "Lower Saxony",
      icon: "🐄",
      cities: "Hanover, Brunswick, Osnabrück",
      description: "Large, flat northern plains with farmland and the Harz mountains",
    },
    {
      name: "Berlin",
      icon: "🏙️",
      cities: "Berlin",
      description: "Capital and largest city, a city-state surrounded by Brandenburg",
    },
    {
      name: "Brandenburg",
      icon: "🌲",
      cities: "Potsdam, Cottbus",
      description: "Flat and sandy with pine forests and many lakes around Berlin",
    },
    {
      name: "Saxony-Anhalt",
      icon: "🏰",
      cities: "Magdeburg, Halle",
      description: "Rural eastern state with the Elbe valley and medieval towns",
    },
    {
      name: "North Rhine-Westphalia",
      icon: "🏭",
      cities: "Cologne, Düsseldorf, Dortmund",
      description: "Most populous state, with the industrial Ruhr area",
    },
    {
      name: "Saxony",
      icon: "🎻",
      cities: "Dresden, Leipzig, Chemnitz",
      description: "Eastern state with baroque cities and the Ore Mountains",
    },
    {
      name: "Thuringia",
      icon: "🌳",
      cities: "Erfurt, Jena, Weimar",
      description: "Green heart of Germany, hilly and covered by the Thuringian Forest",
    },
    {
      name: "Hesse",
      icon: "💶",
      cities: "Frankfurt, Wiesbaden, Kassel",
      description: "Financial hub with wooded hills and low mountain ranges",
    },
    {
      name: "Rhineland-Palatinate",
      icon: "🍷",
      cities: "Mainz, Koblenz, Trier",
      description: "Rhine and Moselle valleys with steep vineyards and castles",
    },
    {
      name: "Saarland",
      icon: "⛏️",
      cities: "Saarbrücken",
      description: "Small former mining state bordering France and Luxembourg",
    },
    {
      name: "Bavaria",
      icon: "🍺",
      cities: "Munich, Nuremberg, Augsburg",
      description: "Largest state, with the Alps, onion-domed churches and beer culture",
    },
    {
      name: "Baden-Württemberg",
      icon: "🚗",
      cities: "Stuttgart, Karlsruhe, Freiburg",
      description: "Southwest state with the Black Forest and car industry",
    },
  ],
};

export default country;
