import type { Country } from "@/types/country";

const country: Country = {
  id: "UY",
  name: "Uruguay",
  continent: "South America",
  difficulty: "medium",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/uruguay" },
  ],
  regions: [
    { name: "Montevideo", icon: "🏙️", cities: "Montevideo", description: "Capital on the Río de la Plata" },
    { name: "Canelones", icon: "🏖️", cities: "Canelones", description: "Coastal department around the capital" },
    { name: "San José", icon: "🌾", cities: "San José de Mayo", description: "Flat farmland west of Montevideo" },
    { name: "Colonia", icon: "🏛️", cities: "Colonia del Sacramento", description: "Historic river town, Portuguese heritage" },
    { name: "Soriano", icon: "🌾", cities: "Mercedes", description: "Farmland on the Río Negro" },
    { name: "Río Negro", icon: "🌾", cities: "Fray Bentos", description: "Pampas along the Negro river" },
    { name: "Paysandú", icon: "🐄", cities: "Paysandú", description: "Cattle country on the Argentina border" },
    { name: "Salto", icon: "🌊", cities: "Salto", description: "Northwest citrus orchards and waterfalls" },
    { name: "Artigas", icon: "🌅", cities: "Artigas", description: "Northernmost, hot and on the Brazil border" },
    { name: "Rivera", icon: "🌾", cities: "Rivera", description: "Border town with Brazil" },
    { name: "Tacuarembó", icon: "🐴", cities: "Tacuarembó", description: "Large ranching department in the north" },
    { name: "Cerro Largo", icon: "🌾", cities: "Melo", description: "Eastern plains near the Brazilian border" },
    { name: "Durazno", icon: "🌾", cities: "Durazno", description: "Flat central heartland" },
    { name: "Flores", icon: "🌾", cities: "Trinidad", description: "Small central farming department" },
    { name: "Florida", icon: "🌾", cities: "Florida", description: "Pampas in the centre of the country" },
    { name: "Lavalleja", icon: "⛰️", cities: "Minas", description: "Hilliest region with quarries and springs" },
    { name: "Treinta y Tres", icon: "🌿", cities: "Treinta y Tres", description: "Eastern wetlands and plains" },
    { name: "Rocha", icon: "🏖️", cities: "Rocha", description: "Wild Atlantic beaches and lagoons" },
    { name: "Maldonado", icon: "🏖️", cities: "Maldonado", description: "Beaches and Punta del Este" },
  ],
};

export default country;
