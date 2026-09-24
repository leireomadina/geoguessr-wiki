import type { Country } from "@/types/country";

const country: Country = {
  id: "LV",
  name: "Latvia",
  continent: "Europe",
  difficulty: "medium",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/latvia" },
  ],
  regions: [
    { name: "Riga", icon: "🏙️", cities: "Riga", description: "Capital on the Daugava, Art Nouveau centre" },
    { name: "Pierīga", icon: "🌲", cities: "Jūrmala", description: "Coastal pine forests and beach towns around Riga" },
    { name: "Vidzeme", icon: "🌲", cities: "Cēsis, Valmiera", description: "Forested northeast, Gauja National Park" },
    { name: "Kurzeme", icon: "🌊", cities: "Liepāja, Ventspils", description: "Western Baltic coast, dunes and fishing ports" },
    { name: "Zemgale", icon: "🌾", cities: "Jelgava", description: "Flat southern plains, farmland" },
    { name: "Latgale", icon: "🏞️", cities: "Daugavpils, Rēzekne", description: "Eastern lakes and hills, Orthodox and latgalian culture" },
  ],
};

export default country;
