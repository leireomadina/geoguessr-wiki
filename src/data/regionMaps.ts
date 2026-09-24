import australiaLow from "@/assets/maps/australiaLow.svg?raw";
import czechiaLow from "@/assets/maps/czechiaLow.svg?raw";
import polandLow from "@/assets/maps/polandLow.svg?raw";
import russiaLow from "@/assets/maps/russiaLow.svg?raw";
import type { RegionMap, RegionMapConfig, RegionShape } from "@/types/regionMap";

const MAP_CONFIGS: Record<string, RegionMapConfig> = {
  AU: {
    viewBox: "0 0 500 600",
    svg: australiaLow,
    labels: {
      "Northern Territory": { label: "NT" },
      "Western Australia": { label: "WA" },
      "Australian Capital Territory": { label: "ACT" },
      "New South Wales": { label: "NSW" },
      "South Australia": { label: "SA" },
      "Victoria": { label: "Victoria" },
      "Queensland": { label: "Queensland" },
      "Tasmania": { label: "Tasmania" },
    },
  },
  CZ: {
    viewBox: "0 440 612 355",
    svg: czechiaLow,
    labels: {
      "Praha": { label: "Prague" },
      "Středočeský kraj": { label: "Středoč." },
      "Jihočeský kraj": { label: "Jihoč." },
      "Plzeňský kraj": { label: "Plzeň" },
      "Karlovarský kraj": { label: "Karl. Vary" },
      "Ústecký kraj": { label: "Ústí n.L." },
      "Liberecký kraj": { label: "Liberec" },
      "Královéhradecký kraj": { label: "Hr. Králové" },
      "Pardubický kraj": { label: "Pardubice" },
      "Vysočina": { label: "Vysočina" },
      "Jihomoravský kraj": { label: "Jihomor." },
      "Olomoucký kraj": { label: "Olom." },
      "Zlínský kraj": { label: "Zlín" },
      "Moravskoslezský kraj": { label: "Morav." },
    },
  },
  PL: {
    viewBox: "-15 -29 627 606",
    svg: polandLow,
    labels: {
      "Dolnośląskie": { label: "Dolnośl." },
      "Kujawsko-Pomorskie": { label: "Kuj.-Pomor." },
      "Lubelskie": { label: "Lubel." },
      "Lubuskie": { label: "Lubusk." },
      "Łódzkie": { label: "Łódź" },
      "Małopolskie": { label: "Małopol." },
      "Mazowieckie": { label: "Mazow." },
      "Opolskie": { label: "Opol." },
      "Podkarpackie": { label: "Podkarp." },
      "Podlaskie": { label: "Podlas." },
      "Pomorskie": { label: "Pomor." },
      "Śląskie": { label: "Śląsk" },
      "Świętokrzyskie": { label: "Świętok." },
      "Warmińsko-Mazurskie": { label: "Warm.-Mazur." },
      "Wielkopolskie": { label: "Wielkopol." },
      "Zachodniopomorskie": { label: "Zach.-Pomor." },
    },
  },
  RU: {
    viewBox: "522 328 450 300",
    svg: russiaLow,
    labels: {
      "Altai Krai": { label: "Altai Krai" },
      "Altai Republic": { label: "Altai Rep." },
      "Amur Oblast": { label: "Amur" },
      "Arkhangelsk Oblast": { label: "Arkhangelsk" },
      "Astrakhan Oblast": { label: "Astrakhan" },
      "Belgorod Oblast": { label: "Belgorod" },
      "Bryansk Oblast": { label: "Bryansk" },
      "Chechen Republic": { label: "Chechnya" },
      "Chelyabinsk Oblast": { label: "Chelyabinsk" },
      "Chukotka Autonomous Okrug": { label: "Chukotka" },
      "Chuvash Republic": { label: "Chuvashia" },
      "Irkutsk Oblast": { label: "Irkutsk" },
      "Ivanovo Oblast": { label: "Ivanovo" },
      "Jewish Autonomous Oblast": { label: "Jewish AO" },
      "Kabardino-Balkarian Republic": { label: "Kabardino-Balkaria" },
      "Kaliningrad Oblast": { label: "Kaliningrad" },
      "Kaluga Oblast": { label: "Kaluga" },
      "Kamchatka Krai": { label: "Kamchatka" },
      "Karachay-Cherkess Republic": { label: "Karachay-Cherkessia" },
      "Kemerovo Oblast": { label: "Kemerovo" },
      "Khabarovsk Krai": { label: "Khabarovsk" },
      "Khanty-Mansi Autonomous Okrug": { label: "Khanty-Mansi" },
      "Kirov Oblast": { label: "Kirov" },
      "Komi Republic": { label: "Komi" },
      "Kostroma Oblast": { label: "Kostroma" },
      "Krasnodar Krai": { label: "Krasnodar" },
      "Krasnoyarsk Krai": { label: "Krasnoyarsk" },
      "Kurgan Oblast": { label: "Kurgan" },
      "Kursk Oblast": { label: "Kursk" },
      "Leningrad Oblast": { label: "Leningrad" },
      "Lipetsk Oblast": { label: "Lipetsk" },
      "Magadan Oblast": { label: "Magadan" },
      "Mari El Republic": { label: "Mari El" },
      "Moscow": { label: "Moscow" },
      "Moscow Oblast": { label: "Moscow Obl." },
      "Murmansk Oblast": { label: "Murmansk" },
      "Nenets Autonomous Okrug": { label: "Nenets" },
      "Nizhny Novgorod Oblast": { label: "Nizhny Novgorod" },
      "Novgorod Oblast": { label: "Novgorod" },
      "Novosibirsk Oblast": { label: "Novosibirsk" },
      "Omsk Oblast": { label: "Omsk" },
      "Orenburg Oblast": { label: "Orenburg" },
      "Oryol Oblast": { label: "Oryol" },
      "Penza Oblast": { label: "Penza" },
      "Perm Krai": { label: "Perm" },
      "Primorsky Krai": { label: "Primorsky" },
      "Pskov Oblast": { label: "Pskov" },
      "Republic of Adygea": { label: "Adygea" },
      "Republic of Bashkortostan": { label: "Bashkortostan" },
      "Republic of Buryatia": { label: "Buryatia" },
      "Republic of Dagestan": { label: "Dagestan" },
      "Republic of Ingushetia": { label: "Ingushetia" },
      "Republic of Kalmykia": { label: "Kalmykia" },
      "Republic of Karelia": { label: "Karelia" },
      "Republic of Khakassia": { label: "Khakassia" },
      "Republic of Mordovia": { label: "Mordovia" },
      "Republic of North Ossetia–Alania": { label: "North Ossetia" },
      "Republic of Tatarstan": { label: "Tatarstan" },
      "Rostov Oblast": { label: "Rostov" },
      "Ryazan Oblast": { label: "Ryazan" },
      "Saint Petersburg": { label: "St. Petersburg" },
      "Sakha Republic": { label: "Sakha" },
      "Sakhalin Oblast": { label: "Sakhalin" },
      "Samara Oblast": { label: "Samara" },
      "Saratov Oblast": { label: "Saratov" },
      "Smolensk Oblast": { label: "Smolensk" },
      "Stavropol Krai": { label: "Stavropol" },
      "Sverdlovsk Oblast": { label: "Sverdlovsk" },
      "Tambov Oblast": { label: "Tambov" },
      "Tomsk Oblast": { label: "Tomsk" },
      "Tula Oblast": { label: "Tula" },
      "Tuva Republic": { label: "Tuva" },
      "Tver Oblast": { label: "Tver" },
      "Tyumen Oblast": { label: "Tyumen" },
      "Udmurt Republic": { label: "Udmurtia" },
      "Ulyanovsk Oblast": { label: "Ulyanovsk" },
      "Vladimir Oblast": { label: "Vladimir" },
      "Volgograd Oblast": { label: "Volgograd" },
      "Vologda Oblast": { label: "Vologda" },
      "Voronezh Oblast": { label: "Voronezh" },
      "Yamalo-Nenets Autonomous Okrug": { label: "Yamalo-Nenets" },
      "Yaroslavl Oblast": { label: "Yaroslavl" },
      "Zabaykalsky Krai": { label: "Zabaykalsky" },
    },
  },
};

// True when a country has a map configured. Single source of truth so callers
// don't hardcode country IDs.
export function hasRegionMap(countryId: string): boolean {
  return countryId in MAP_CONFIGS;
}

// Caches parsed maps so the SVG is only parsed once per country.
const parsedCache = new Map<string, RegionMap>();

// Extracts each `<path>`'s `title` (region name) and `d` (shape data) from a
// raw SVG string. Knows nothing about labels or configs.
export function parseSvgRegions(svg: string): Record<string, string> {
  const svgDocument = new DOMParser().parseFromString(svg, "image/svg+xml");
  const regions: Record<string, string> = {};

  for (const pathElement of Array.from(svgDocument.querySelectorAll("path"))) {
    const name = pathElement.getAttribute("title");
    const pathData = pathElement.getAttribute("d");

    if (name && pathData) {
      regions[name] = pathData;
    }
  }

  return regions;
}

// Merges each shape's `d` with its configured label (falling back to the region
// name), keeping only names that have both a shape and a label.
export function matchLabels(
  shapes: Record<string, string>,
  labels: Record<string, Omit<RegionShape, "d">> = {},
): Record<string, RegionShape> {
  const regions: Record<string, RegionShape> = {};

  for (const [name, pathData] of Object.entries(shapes)) {
    if (labels[name]) {
      regions[name] = { d: pathData, ...labels[name] };
    } else {
      regions[name] = { d: pathData, label: name };
    }
  }

  return regions;
}

/**
 * Parses a country's raw SVG text into a render-ready RegionMap:
 * - Reads each `<path>` and matches it by its `title` (region name) to the config's labels.
 * - Keeps regions that have a name, shape data (`d`), and a label.
 * - Caches the result per country so the SVG is only parsed once.
 */
export function getRegionMap(countryId: string): RegionMap | undefined {
  const cachedMap = parsedCache.get(countryId);
  if (cachedMap) return cachedMap;

  const config = MAP_CONFIGS[countryId];
  if (!config) return undefined; // no map configured for this country

  const map = {
    viewBox: config.viewBox,
    regions: matchLabels(parseSvgRegions(config.svg), config.labels),
  };

  parsedCache.set(countryId, map);

  return map;
}
