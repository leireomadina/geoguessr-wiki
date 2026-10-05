import type { Country } from "@/types/country";

const country: Country = {
  id: "AU",
  name: "Australia",
  continent: "Oceania",
  difficulty: "hard",
  drivingSide: "left",
  studyLinks: [
    {
      label: "Plonkit Guide",
      url: "https://www.plonkit.net/australia",
    },
  ],
  meta: [
    { label: "meta", value: "Eucalyptus trees", tag: "easy" },
    { label: "meta", value: "White road lines", tag: "easy" },
    { label: "meta", value: "Give way signs (white background)", tag: "easy" },
    { label: "meta", value: "White rectangle speed signs", tag: "easy" },
    { label: "meta", value: "White bollards with red reflector", tag: "medium" },
    { label: "meta", value: "Left-hand driving", tag: "easy" },
    { label: "meta", value: "Chevrons: white/black or black/yellow", tag: "medium" },
  ],
  regions: [
    {
      name: "Queensland",
      icon: "🌴",
      cities: "Brisbane",
      description: "Tropical rainforest in north; dry grassland inland",
    },
    {
      name: "New South Wales",
      icon: "🏖️",
      cities: "Sydney",
      description: "Coast with beaches and eucalyptus bushland",
    },
    {
      name: "Australian Capital Territory",
      icon: "🌿",
      cities: "Canberra",
      description: "High plateau with grass and mountains",
    },
    {
      name: "Victoria",
      icon: "🌊",
      cities: "Melbourne",
      description: "Green hills, cool weather, rocky coast",
    },
    {
      name: "Tasmania",
      icon: "🌲",
      cities: "Hobart",
      description: "Cool island with rainforest",
    },
    {
      name: "South Australia",
      icon: "🏜️",
      cities: "Adelaide",
      description: "Red desert inland; cooler coast",
    },
    {
      name: "Western Australia",
      icon: "🌅",
      cities: "Perth",
      description: "Huge desert with red sand; wild coastline",
    },
    {
      name: "Northern Territory",
      icon: "🏜️",
      cities: "Darwin",
      description: "Tropical savanna; red desert with big rocks",
    },
  ],
};

export default country;
