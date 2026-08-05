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
    { name: "Acre", icon: "🌿", cities: "Rio Branco", description: "Western Amazon border with Peru and Bolivia" },
    { name: "Amapá", icon: "🌳", cities: "Macapá", description: "Northern Amazon on the French Guiana border" },
    { name: "Amazonas", icon: "🌴", cities: "Manaus", description: "Largest state, heart of the Amazon rainforest" },
    { name: "Pará", icon: "🏞️", cities: "Belém", description: "Northern Amazon with the mouth of the Amazon River" },
    { name: "Rondônia", icon: "🪵", cities: "Porto Velho", description: "Western Amazon with timber and cattle frontier" },
    { name: "Roraima", icon: "⛰️", cities: "Boa Vista", description: "Northernmost state with Mount Roraima tepui" },
    { name: "Tocantins", icon: "🌾", cities: "Palmas", description: "Transition between Amazon and cerrado biomes" },
    // Northeast
    { name: "Alagoas", icon: "🏖️", cities: "Maceió", description: "Small coastal state with coconut palms" },
    { name: "Bahia", icon: "🪘", cities: "Salvador", description: "Largest northeastern state, Afro-Brazilian culture" },
    { name: "Ceará", icon: "🌬️", cities: "Fortaleza", description: "Northeast coast with dunes" },
    { name: "Maranhão", icon: "🏜️", cities: "São Luís", description: "Northeast with Lençóis Maranhenses dunes" },
    { name: "Paraíba", icon: "🏖️", cities: "João Pessoa", description: "Northeast coast with cliffs" },
    { name: "Pernambuco", icon: "🎶", cities: "Recife", description: "Northeast with frevo and carnival" },
    { name: "Piauí", icon: "🪨", cities: "Teresina", description: "Inland northeast with canyons" },
    { name: "Rio Grande do Norte", icon: "🏄", cities: "Natal", description: "Easternmost point of the Americas, beaches" },
    { name: "Sergipe", icon: "🦐", cities: "Aracaju", description: "Smallest state in Brazil, coastal northeast" },
    // Central-West
    { name: "Distrito Federal", icon: "🏛️", cities: "Brasília", description: "Capital with modernist architecture" },
    { name: "Goiás", icon: "🐂", cities: "Goiânia", description: "Cerrado heartland with cattle" },
    { name: "Mato Grosso", icon: "🐊", cities: "Cuiabá", description: "Pantanal wetlands" },
    { name: "Mato Grosso do Sul", icon: "🦜", cities: "Campo Grande", description: "Pantanal and caves" },
    // Southeast
    { name: "Espírito Santo", icon: "🏔️", cities: "Vitória", description: "Coastal state with mountains" },
    { name: "Minas Gerais", icon: "⛏️", cities: "Belo Horizonte", description: "Largest southeastern state, colonial towns" },
    { name: "Rio de Janeiro", icon: "🎭", cities: "Rio de Janeiro", description: "Iconic city with beaches and carnival" },
    { name: "São Paulo", icon: "🏙️", cities: "São Paulo", description: "Most populous state, economic powerhouse" },
    // South
    { name: "Paraná", icon: "🌲", cities: "Curitiba", description: "Southern state with Itaipu Dam" },
    { name: "Santa Catarina", icon: "🏖️", cities: "Florianópolis", description: "Southern beaches" },
    { name: "Rio Grande do Sul", icon: "🍷", cities: "Porto Alegre", description: "Southernmost state with gaucho culture" },
  ],
};

export default country;
