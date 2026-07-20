import type { Country } from "@/types/country";

const country: Country = {
  id: "JP",
  name: "Japan",
  continent: "Asia",
  difficulty: "hard",
  drivingSide: "left",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/japan" },
  ],
  regions: [
    {
      name: "Hokkaido",
      icon: "❄️",
      description: "Northernmost island, known for snow festivals and wildlife",
    },
    {
      name: "Tohoku",
      icon: "🌸",
      description: "Northern Honshu region with hot springs and autumn foliage",
    },
    {
      name: "Kanto",
      icon: "🏙️",
      description: "Home to Tokyo, the largest metropolitan area in the world",
    },
    {
      name: "Hokoriku",
      icon: "🏔️",
      description:
        "Sea of Japan coast with heavy snowfall and traditional towns",
    },
    {
      name: "Chubu",
      icon: "🗻",
      description: "Central region including Mount Fuji and the Japanese Alps",
    },
    {
      name: "Chugoku",
      icon: "⛩️",
      description: "Western Honshu with Hiroshima and historic sites",
    },
    {
      name: "Kansai",
      icon: "🏯",
      description: "Cultural heartland including Osaka, Kyoto, and Nara",
    },
    {
      name: "Shikoku",
      icon: "🌊",
      description: "Smallest main island with 88 temple pilgrimage route",
    },
    {
      name: "Kyushu",
      icon: "🌋",
      description: "Southern island with volcanoes and hot springs",
    },
    {
      name: "Okinawa",
      icon: "🏝️",
      description: "Tropical subtropical islands with unique Ryukyu culture",
    },
  ],
};

export default country;
