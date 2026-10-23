import type { Country } from "@/types/country";

const country: Country = {
  id: "RU",
  name: "Russia",
  continent: "Asia",
  difficulty: "hard",
  drivingSide: "right",
  studyLinks: [
    { label: "Plonkit Guide", url: "https://www.plonkit.net/russia" },
  ],
  meta: [
    { label: "meta", value: "Cyrillic script", tag: "easy" },
    { label: "meta", value: "Birch forests", tag: "easy" },
    { label: "meta", value: "Special letters: Ы, Э, Ё and Ъ", tag: "medium" },
    { label: "meta", value: "Ulitsa (ul.) / улица (ул.) street sign", tag: "medium" },
    { label: "meta", value: "Gorod (g.) / город (г.) city sign", tag: "medium" },
    { label: "meta", value: "Big intersections with bollard spam", tag: "easy" },
    { label: "meta", value: "White bottom painted trees", tag: "easy" },
    { label: "meta", value: "Square concrete poles", tag: "easy" },
    { label: "meta", value: "White & yellow pedestrian crossings", tag: "easy" },
    { label: "meta", value: "Yellow border pedestrian signs", tag: "easy" },
    { label: "meta", value: "Concrete brutalist buildings", tag: "easy" },
    { label: "meta", value: "Wooden houses & metal roofs", tag: "easy" },
    { label: "meta", value: "Decorated window frames", tag: "easy" },
    { label: "meta", value: "Visible pipes", tag: "easy" },
  ],
  regions: [],
};

export default country;
