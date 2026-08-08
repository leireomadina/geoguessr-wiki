import type { Country } from "@/types/country";

const country: Country = {
  id: "TH",
  name: "Thailand",
  continent: "Asia",
  difficulty: "medium",
  drivingSide: "left",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/thailand" },
  ],
  regions: [
    {
      name: "Northern Thailand",
      icon: "🏔️",
      cities: "Chiang Mai, Chiang Rai",
      description: "Mountains and jungle, hill tribe villages",
    },
    {
      name: "Isan",
      icon: "🌾",
      cities: "Khon Kaen, Nakhon Ratchasima",
      description: "Dry northeast plateau with rice paddies",
    },
    {
      name: "Central Thailand",
      icon: "🏙️",
      cities: "Bangkok, Ayutthaya",
      description: "Flat river plains around the capital",
    },
    {
      name: "Eastern Thailand",
      icon: "🏖️",
      cities: "Chonburi, Pattaya",
      description: "Coast with beaches and fruit orchards",
    },
    {
      name: "Western Thailand",
      icon: "🌳",
      cities: "Kanchanaburi",
      description: "Forested mountains on the Myanmar border",
    },
    {
      name: "Southern Thailand",
      icon: "🏝️",
      cities: "Phuket, Hat Yai",
      description: "Long peninsula with rubber and palm plantations",
    },
  ],
};

export default country;
