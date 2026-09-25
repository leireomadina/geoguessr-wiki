import type { Country } from "@/types/country";

const country: Country = {
  id: "NZ",
  name: "New Zealand",
  continent: "Oceania",
  difficulty: "easy",
  drivingSide: "left",
  studyLinks: [
    {
      label: "Plonkit Guide",
      url: "https://www.plonkit.net/new-zealand",
    },
  ],
  regions: [
    // North Island
    { name: "Northland", icon: "🏖️", cities: "Whangārei", description: "Subtropical northern peninsula with beaches and kauri trees" },
    { name: "Auckland", icon: "🏙️", cities: "Auckland", description: "Largest city on a narrow isthmus between two harbours" },
    { name: "Waikato", icon: "🐄", cities: "Hamilton", description: "Rolling dairy farmland around the Waikato River" },
    { name: "Bay of Plenty", icon: "🌋", cities: "Tauranga", description: "Volcanic plateau coast with orchards and kiwi fruit" },
    { name: "Gisborne", icon: "🌊", cities: "Gisborne", description: "Sunniest region, east coast with surf beaches" },
    { name: "Hawke's Bay", icon: "🍷", cities: "Napier", description: "Wine country on the east coast with art deco city" },
    { name: "Taranaki", icon: "⛰️", cities: "New Plymouth", description: "Symmetrical Mount Taranaki surrounded by dairy farms" },
    { name: "Manawatū-Whanganui", icon: "🌾", cities: "Palmerston North", description: "Central lowland with rivers and farmland" },
    { name: "Wellington", icon: "🌬️", cities: "Wellington", description: "Capital on a windy harbour at the bottom of the North Island" },
    // South Island
    { name: "Tasman", icon: "🌳", cities: "Richmond", description: "Nelson-Marlborough neighbour with golden beaches and forests" },
    { name: "Nelson", icon: "🍎", cities: "Nelson", description: "Sunny region known for craft beer and orchards" },
    { name: "Marlborough", icon: "🍷", cities: "Blenheim", description: "Top of the South Island, famous sauvignon blanc" },
    { name: "West Coast", icon: "🌧️", cities: "Greymouth", description: "Rainy west coast with glaciers and dense rainforest" },
    { name: "Canterbury", icon: "🏔️", cities: "Christchurch", description: "Great Plains between the mountains and the sea" },
    { name: "Otago", icon: "🪨", cities: "Dunedin", description: "Dry interior with schist rocks and alpine lakes" },
    { name: "Southland", icon: "🦆", cities: "Invercargill", description: "Southernmost region, flat and green with Fiordland" },
  ],
};

export default country;
