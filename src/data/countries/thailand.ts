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
  meta: [
    { label: "meta", value: "Thai script", tag: "easy" },
    { label: "meta", value: "Concrete roads", tag: "easy" },
    { label: "meta", value: "Long thin lamp posts", tag: "easy" },
    { label: "meta", value: "Green big signs with thai script", tag: "easy" },
    { label: "meta", value: "Square poles with holes", tag: "medium" },
    { label: "meta", value: "Black & white striped bollards", tag: "medium" },
    { label: "meta", value: "Yellow middle lines", tag: "medium" },
     { label: "meta", value: "Black & white or red & black striped bottom poles", tag: "medium" },
    { label: "meta", value: "Royal flags (mostly yellow)", tag: "hard" },
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
