import type { Country } from "@/types/country";

const country: Country = {
  id: "PL",
  name: "Poland",
  continent: "Europe",
  difficulty: "medium",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/poland" },
  ],
  regions: [
    { name: "Dolnośląskie", icon: "⛰️", cities: "Wrocław", description: "Sudetes foothills in the southwest" },
    { name: "Kujawsko-Pomorskie", icon: "🌾", cities: "Bydgoszcz", description: "Central plains with lakes" },
    { name: "Lubelskie", icon: "🌾", cities: "Lublin", description: "Southeast farmland near the Ukraine border" },
    { name: "Lubuskie", icon: "🌲", cities: "Gorzów Wielkopolski", description: "Forests and plains on the German border" },
    { name: "Łódzkie", icon: "🌾", cities: "Łódź", description: "Central flat farmland" },
    { name: "Małopolskie", icon: "🏔️", cities: "Kraków", description: "Carpathian foothills, southern mountains" },
    { name: "Mazowieckie", icon: "🏙️", cities: "Warszawa", description: "Flat central region with the capital" },
    { name: "Opolskie", icon: "🌾", cities: "Opole", description: "Small southwestern region" },
    { name: "Podkarpackie", icon: "🌲", cities: "Rzeszów", description: "Southeastern corner with Bieszczady mountains" },
    { name: "Podlaskie", icon: "🌲", cities: "Białystok", description: "Forested northeast with lakes" },
    { name: "Pomorskie", icon: "🌊", cities: "Gdańsk", description: "Baltic coast with port cities" },
    { name: "Śląskie", icon: "🏭", cities: "Katowice", description: "Industrial south, mining towns" },
    { name: "Świętokrzyskie", icon: "⛰️", cities: "Kielce", description: "Central hills with forested ranges" },
    { name: "Warmińsko-Mazurskie", icon: "🏞️", cities: "Olsztyn", description: "Lakeland in the northeast" },
    { name: "Wielkopolskie", icon: "🌾", cities: "Poznań", description: "Flat western plains" },
    { name: "Zachodniopomorskie", icon: "🌊", cities: "Szczecin", description: "Baltic coast with islands" },
  ],
};

export default country;
