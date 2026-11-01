import type { Country } from "@/types/country";

const country: Country = {
  id: "PT",
  name: "Portugal",
  continent: "Europe",
  difficulty: "medium",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/portugal" },
  ],
  regions: [
    {
      name: "Norte",
      icon: "🍷",
      cities: "Porto, Braga, Guimarães",
      description: "Green, hilly north with granite villages and Douro vineyards",
    },
    {
      name: "Centro",
      icon: "🎓",
      cities: "Coimbra, Aveiro, Viseu",
      description: "Central region from the Atlantic coast to the Serra da Estrela",
    },
    {
      name: "Lisbon",
      icon: "🚋",
      cities: "Lisbon, Sintra, Setúbal",
      description: "Capital area on the Tagus estuary with hilly streets",
    },
    {
      name: "Azores",
      icon: "🌋",
      cities: "Ponta Delgada, Angra do Heroísmo",
      description: "Volcanic Atlantic islands with green pastures and hydrangeas",
    },
    {
      name: "Alentejo",
      icon: "🌳",
      cities: "Évora, Beja, Portalegre",
      description: "Vast dry plains with cork oaks and whitewashed towns",
    },
    {
      name: "Algarve",
      icon: "🏖️",
      cities: "Faro, Lagos, Portimão",
      description: "Sunny southern coast with cliffs and beaches",
    },
    {
      name: "Madeira",
      icon: "🌺",
      cities: "Funchal",
      description: "Steep subtropical island with terraced hillsides",
    },
  ],
};

export default country;
