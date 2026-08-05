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
      cities: "Sapporo",
      description: "Northernmost island, known for snow festivals",
    },
    {
      name: "Tohoku",
      icon: "🌸",
      cities: "Sendai",
      description: "Northern Honshu with hot springs and autumn foliage",
    },
    {
      name: "Kanto",
      icon: "🏙️",
      cities: "Tokyo, Yokohama",
      description: "Largest metropolitan area in the world",
    },
    {
      name: "Hokoriku",
      icon: "🏔️",
      cities: "Kanazawa",
      description: "Sea of Japan coast with heavy snowfall and traditional towns",
    },
    {
      name: "Chubu",
      icon: "🗻",
      cities: "Nagoya",
      description: "Central region with Mount Fuji and the Japanese Alps",
    },
    {
      name: "Chugoku",
      icon: "⛩️",
      cities: "Hiroshima",
      description: "Western Honshu with historic sites",
    },
    {
      name: "Kansai",
      icon: "🏯",
      cities: "Osaka, Kyoto, Nara",
      description: "Cultural heartland",
    },
    {
      name: "Shikoku",
      icon: "🌊",
      cities: "Matsuyama",
      description: "Smallest main island with 88 temple pilgrimage",
    },
    {
      name: "Kyushu",
      icon: "🌋",
      cities: "Fukuoka",
      description: "Southern island with volcanoes and hot springs",
    },
    {
      name: "Okinawa",
      icon: "🏝️",
      cities: "Naha",
      description: "Tropical islands with unique Ryukyu culture",
    },
  ],
};

export default country;
