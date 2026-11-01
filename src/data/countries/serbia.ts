import type { Country } from "@/types/country";

const country: Country = {
  id: "RS",
  name: "Serbia",
  continent: "Europe",
  difficulty: "medium",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/serbia" },
  ],
  regions: [
    {
      name: "Vojvodina",
      icon: "🌻",
      cities: "Novi Sad, Subotica, Zrenjanin",
      description: "Flat northern plain with farmland and ethnic diversity",
    },
    {
      name: "Belgrade",
      icon: "🏙️",
      cities: "Belgrade",
      description: "Capital at the confluence of the Sava and Danube",
    },
    {
      name: "Šumadija",
      icon: "🍎",
      cities: "Kragujevac, Smederevo",
      description: "Central hilly region with orchards and small towns",
    },
    {
      name: "Eastern Serbia",
      icon: "⛏️",
      cities: "Zaječar, Bor, Negotin",
      description: "Danube gorge and mining towns near the Romanian and Bulgarian borders",
    },
    {
      name: "Western Serbia",
      icon: "🏞️",
      cities: "Čačak, Užice, Kraljevo",
      description: "Mountainous region with rivers and Zlatibor",
    },
    {
      name: "Southern Serbia",
      icon: "🌶️",
      cities: "Niš, Leskovac, Vranje",
      description: "Southern valleys and the Morava corridor",
    },
    {
      name: "Raška",
      icon: "🕌",
      cities: "Novi Pazar, Tutin",
      description: "Southwestern highlands with Ottoman heritage",
    },
  ],
};

export default country;
