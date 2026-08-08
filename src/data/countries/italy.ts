import type { Country } from "@/types/country";

const country: Country = {
  id: "IT",
  name: "Italy",
  continent: "Europe",
  difficulty: "hard",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/italy" },
  ],
  regions: [
    { name: "Abruzzo", icon: "🏔️", cities: "L'Aquila", description: "Central Apennines with high mountains" },
    { name: "Basilicata", icon: "🏜️", cities: "Potenza", description: "Southern mountains and badlands" },
    { name: "Calabria", icon: "🌊", cities: "Catanzaro", description: "Toe of the boot, rugged coast" },
    { name: "Campania", icon: "🌋", cities: "Napoli", description: "Volcanic coast around Vesuvius" },
    { name: "Emilia-Romagna", icon: "🌾", cities: "Bologna", description: "Po valley farmland, flat plains" },
    { name: "Friuli-Venezia Giulia", icon: "⛰️", cities: "Trieste", description: "Northeast corner on the Slovenia border" },
    { name: "Lazio", icon: "🏛️", cities: "Roma", description: "Central west, capital region" },
    { name: "Liguria", icon: "🌊", cities: "Genova", description: "Narrow coast along the sea" },
    { name: "Lombardia", icon: "🏙️", cities: "Milano", description: "Northern plains and Alps" },
    { name: "Marche", icon: "⛰️", cities: "Ancona", description: "Central-east hilly region" },
    { name: "Molise", icon: "🌾", cities: "Campobasso", description: "Small southern inland region" },
    { name: "Piemonte", icon: "🏔️", cities: "Torino", description: "Northwest with Alps and rice fields" },
    { name: "Puglia", icon: "🌾", cities: "Bari", description: "Heel of the boot, flat south-east" },
    { name: "Sardegna", icon: "🏖️", cities: "Cagliari", description: "Island with rocky coast" },
    { name: "Sicilia", icon: "🌋", cities: "Palermo", description: "Large island, Mediterranean" },
    { name: "Toscana", icon: "🌳", cities: "Firenze", description: "Rolling hills with cypresses" },
    { name: "Trentino-Alto Adige", icon: "🏔️", cities: "Trento", description: "Alpine north with mountain towns" },
    { name: "Umbria", icon: "🌿", cities: "Perugia", description: "Central green hills" },
    { name: "Valle d'Aosta", icon: "❄️", cities: "Aosta", description: "Smallest region, alpine mountains" },
    { name: "Veneto", icon: "🌊", cities: "Venezia", description: "Northeast, from the Alps to the lagoon" },
  ],
};

export default country;
