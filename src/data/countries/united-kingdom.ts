import type { Country } from "@/types/country";

const country: Country = {
  id: "GB",
  name: "United Kingdom",
  continent: "Europe",
  difficulty: "easy",
  drivingSide: "left",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/united-kingdom" },
  ],
  regions: [
    {
      name: "Scotland",
      icon: "🦌",
      cities: "Edinburgh, Glasgow, Aberdeen",
      description: "Highlands, lochs and islands with sparse single-track roads",
    },
    {
      name: "North East",
      icon: "⚓",
      cities: "Newcastle, Sunderland, Durham",
      description: "Former industrial area with moors and Hadrian's Wall",
    },
    {
      name: "Northern Ireland",
      icon: "🍀",
      cities: "Belfast, Derry, Newry",
      description: "Green countryside and the Giant's Causeway coast",
    },
    {
      name: "North West",
      icon: "⚽",
      cities: "Manchester, Liverpool, Lancaster",
      description: "Big industrial cities and the Lake District",
    },
    {
      name: "Yorkshire and the Humber",
      icon: "🐑",
      cities: "Leeds, Sheffield, York",
      description: "Dales and moors with dry stone walls",
    },
    {
      name: "East Midlands",
      icon: "🏭",
      cities: "Nottingham, Leicester, Derby",
      description: "Central England with the Peak District",
    },
    {
      name: "West Midlands",
      icon: "🚗",
      cities: "Birmingham, Coventry, Wolverhampton",
      description: "Industrial heartland and rolling countryside",
    },
    {
      name: "Wales",
      icon: "🐉",
      cities: "Cardiff, Swansea, Newport",
      description: "Mountainous nation with bilingual Welsh signs",
    },
    {
      name: "East of England",
      icon: "🌾",
      cities: "Norwich, Cambridge, Ipswich",
      description: "Very flat farmland and the Norfolk Broads",
    },
    {
      name: "London",
      icon: "🎡",
      cities: "London",
      description: "Capital and largest city on the Thames",
    },
    {
      name: "South East",
      icon: "🏰",
      cities: "Brighton, Oxford, Canterbury",
      description: "Commuter belt with chalk downs and white cliffs",
    },
    {
      name: "South West",
      icon: "🌊",
      cities: "Bristol, Plymouth, Exeter",
      description: "Cornwall and Devon with narrow hedged lanes and coastline",
    },
  ],
};

export default country;
