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
    {
      name: "Aosta Valley",
      icon: "🏔️",
      cities: "Aosta",
      description: "Smallest region, alpine valley under Mont Blanc with French influence",
    },
    {
      name: "Trentino-South Tyrol",
      icon: "🌲",
      cities: "Trento, Bolzano",
      description: "Dolomites with German-speaking villages and bilingual signs",
    },
    {
      name: "Lombardy",
      icon: "🏙️",
      cities: "Milan, Bergamo, Brescia",
      description: "Most populous region with lakes Como and Garda",
    },
    {
      name: "Friuli-Venezia Giulia",
      icon: "⚓",
      cities: "Trieste, Udine",
      description: "Northeastern border region with Slovenian and Austrian influence",
    },
    {
      name: "Veneto",
      icon: "🛶",
      cities: "Venice, Verona, Padua",
      description: "Flat plains, lagoon canals and Prosecco hills",
    },
    {
      name: "Piedmont",
      icon: "🍷",
      cities: "Turin, Novara, Asti",
      description: "Alpine foothills with rice fields and Barolo vineyards",
    },
    {
      name: "Liguria",
      icon: "🌊",
      cities: "Genoa, La Spezia, Sanremo",
      description: "Narrow Riviera coast with colourful cliffside towns",
    },
    {
      name: "Emilia-Romagna",
      icon: "🧀",
      cities: "Bologna, Parma, Modena",
      description: "Flat Po Valley farmland and food capital of Italy",
    },
    {
      name: "Tuscany",
      icon: "🌻",
      cities: "Florence, Pisa, Siena",
      description: "Rolling hills with cypress trees and Renaissance cities",
    },
    {
      name: "Marche",
      icon: "🎻",
      cities: "Ancona, Pesaro, Urbino",
      description: "Adriatic coast and hilltop towns between sea and mountains",
    },
    {
      name: "Umbria",
      icon: "⛪",
      cities: "Perugia, Assisi, Terni",
      description: "Landlocked green heart of Italy with medieval villages",
    },
    {
      name: "Lazio",
      icon: "🏛️",
      cities: "Rome, Latina, Viterbo",
      description: "Home of the capital, with volcanic lakes and countryside",
    },
    {
      name: "Abruzzo",
      icon: "🐺",
      cities: "L'Aquila, Pescara",
      description: "Rugged Apennines with national parks and Adriatic beaches",
    },
    {
      name: "Molise",
      icon: "🐑",
      cities: "Campobasso, Isernia",
      description: "Small, rural and mountainous with few big towns",
    },
    {
      name: "Campania",
      icon: "🌋",
      cities: "Naples, Salerno, Caserta",
      description: "Vesuvius, Amalfi Coast and dense urban sprawl",
    },
    {
      name: "Apulia",
      icon: "🫒",
      cities: "Bari, Lecce, Taranto",
      description: "The heel of the boot, flat with olive groves and trulli",
    },
    {
      name: "Basilicata",
      icon: "🪨",
      cities: "Potenza, Matera",
      description: "Sparse hilly interior with the Sassi cave dwellings",
    },
    {
      name: "Sardinia",
      icon: "🏝️",
      cities: "Cagliari, Sassari, Olbia",
      description: "Large island with turquoise beaches and nuraghe towers",
    },
    {
      name: "Calabria",
      icon: "🌶️",
      cities: "Reggio Calabria, Cosenza, Catanzaro",
      description: "The toe of the boot, mountainous with steep coasts",
    },
    {
      name: "Sicily",
      icon: "🍋",
      cities: "Palermo, Catania, Messina",
      description: "Largest island, dry landscapes and Mount Etna",
    },
  ],
};

export default country;
