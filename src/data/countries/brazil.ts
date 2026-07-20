import type { Country } from "@/types/country";

const country: Country = {
  id: "BR",
  name: "Brazil",
  continent: "South America",
  difficulty: "easy",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/brazil" },
    {
      label: "Brazil Gen 4 coverage data",
      url: "https://docs.google.com/document/d/12FLRcFGEDUfFrkD6jKLkEOXAeCIdn0SAZEMCusPNwg8/edit?tab=t.0#heading=h.n9yqjhjgk3ma",
    },
  ],
  videos: [
    {
      label: "Z8 Brazil guide",
      url: "https://www.youtube.com/watch?v=RQ9y44HoxQY",
      platform: "youtube",
    },
    {
      label: "3 Levels of GeoGuessr Tips from a Pro - BRAZIL",
      url: "https://www.youtube.com/watch?v=UZ9rfE3QU2M",
      platform: "youtube",
    },
  ],
  meta: [
    { label: "meta", value: "Red soil", tag: "easy" },
    { label: "meta", value: "Black back signs", tag: "easy" },
    { label: "meta", value: "Phone numbers", tag: "medium" },
  ],
  regions: [
    // North
    { name: "Acre", icon: "🌿", description: "Western Amazon border with Peru and Bolivia, capital Rio Branco" },
    { name: "Amapá", icon: "🌳", description: "Northern Amazon on the French Guiana border, capital Macapá" },
    { name: "Amazonas", icon: "🌴", description: "Largest state, heart of the Amazon rainforest and Manaus" },
    { name: "Pará", icon: "🏞️", description: "Northern Amazon with Belém and the mouth of the Amazon River" },
    { name: "Rondônia", icon: "🪵", description: "Western Amazon with timber and cattle frontier, capital Porto Velho" },
    { name: "Roraima", icon: "⛰️", description: "Northernmost state with Mount Roraima tepui and Boa Vista" },
    { name: "Tocantins", icon: "🌾", description: "Transition between Amazon and cerrado biomes, capital Palmas" },
    // Northeast
    { name: "Alagoas", icon: "🏖️", description: "Small coastal state with coconut palms and Maceió" },
    { name: "Bahia", icon: "🪘", description: "Largest northeastern state, Afro-Brazilian culture and Salvador" },
    { name: "Ceará", icon: "🌬️", description: "Northeast coast with dunes and Fortaleza" },
    { name: "Maranhão", icon: "🏜️", description: "Northeast with Lençóis Maranhenses dunes and São Luís" },
    { name: "Paraíba", icon: "🏖️", description: "Northeast coast with cliffs and João Pessoa" },
    { name: "Pernambuco", icon: "🎶", description: "Northeast with Recife, frevo, and carnival" },
    { name: "Piauí", icon: "🪨", description: "Inland northeast with canyons and Teresina" },
    { name: "Rio Grande do Norte", icon: "🏄", description: "Easternmost point of the Americas, beaches and Natal" },
    { name: "Sergipe", icon: "🦐", description: "Smallest state in Brazil, coastal northeast and Aracaju" },
    // Central-West
    { name: "Distrito Federal", icon: "🏛️", description: "Capital Brasília with modernist architecture" },
    { name: "Goiás", icon: "🐂", description: "Cerrado heartland with cattle and Goiânia" },
    { name: "Mato Grosso", icon: "🐊", description: "Pantanal wetlands and Cuiabá" },
    { name: "Mato Grosso do Sul", icon: "🦜", description: "Pantanal, caves, and Campo Grande" },
    // Southeast
    { name: "Espírito Santo", icon: "🏔️", description: "Coastal state with mountains and Vitória" },
    { name: "Minas Gerais", icon: "⛏️", description: "Largest southeastern state, colonial towns and Belo Horizonte" },
    { name: "Rio de Janeiro", icon: "🎭", description: "Iconic Rio de Janeiro with beaches and carnival" },
    { name: "São Paulo", icon: "🏙️", description: "Most populous state, economic powerhouse and São Paulo city" },
    // South
    { name: "Paraná", icon: "🌲", description: "Southern state with Curitiba and Itaipu Dam" },
    { name: "Santa Catarina", icon: "🏖️", description: "Southern beaches and Florianópolis" },
    { name: "Rio Grande do Sul", icon: "🍷", description: "Southernmost state with gaucho culture and Porto Alegre" },
  ],
};

export default country;
