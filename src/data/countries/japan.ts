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
      description: "Northernmost island, known for snow festivals and Sapporo",
    },
    {
      name: "Tohoku",
      icon: "🌸",
      description: "Northern Honshu with hot springs, autumn foliage, and Sendai",
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
        "Sea of Japan coast with heavy snowfall, traditional towns, and Kanazawa",
    },
    {
      name: "Chubu",
      icon: "🗻",
      description: "Central region with Mount Fuji, the Japanese Alps, and Nagoya",
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
      description: "Smallest main island with 88 temple pilgrimage and Matsuyama",
    },
    {
      name: "Kyushu",
      icon: "🌋",
      description: "Southern island with volcanoes, hot springs, and Fukuoka",
    },
    {
      name: "Okinawa",
      icon: "🏝️",
      description: "Tropical islands with unique Ryukyu culture and Naha",
    },
  ],
};

export default country;
