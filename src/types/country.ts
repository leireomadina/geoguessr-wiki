import type {
  CONTINENTS,
  DIFFICULTIES,
  DRIVING_SIDES,
  IMAGE_CATEGORIES,
  STUDY_LINK_PLATFORMS,
  VIDEO_LINK_PLATFORMS,
} from "@/data/enums";

// The allowed values live in src/data/enums.ts; each type below is derived from
// its array, so the two can't drift apart.

/** How hard a country is to guess in Geoguessr according to our personal experience. */
export type Difficulty = (typeof DIFFICULTIES)[number];

/** Which side of the road cars drive on. */
export type DrivingSide = (typeof DRIVING_SIDES)[number];

/** The continent a country belongs to. */
export type Continent = (typeof CONTINENTS)[number];

/** Where a study guide link is hosted. */
export type StudyLinkPlatform = (typeof STUDY_LINK_PLATFORMS)[number];

/** Where a video link is hosted. */
export type VideoLinkPlatform = (typeof VIDEO_LINK_PLATFORMS)[number];

/** What kind of image a gallery image is. */
export type ImageCategory = (typeof IMAGE_CATEGORIES)[number];

/**
 * A link to a study guide for the country:
 * - `label`: the text shown for the link.
 * - `url`: the link's web address.
 * - `platform` (optional; enum)
 */
export interface StudyLink {
  label: string;
  url: string;
  platform?: StudyLinkPlatform;
}

/**
 * An image shown in the country's gallery:
 * - `src`: image file path.
 * - `alt`: text describing the image (used by screen readers).
 * - `label`: short caption shown under the image.
 * - `category` (enum)
 */
export interface CountryImage {
  src: string;
  alt: string;
  label: string;
  category: ImageCategory;
}

/**
 * A video link for the country:
 * - `label`: the text shown for the link.
 * - `url`: the video's web address.
 * - `platform` (optional; enum)
 */
export interface VideoLink {
  label: string;
  url: string;
  platform?: VideoLinkPlatform;
}

/**
 * A "meta" learneable clue: facts about a country that can be learned to identify it.
 * - `label`: the field's name (always "meta" in the current data).
 * - `value`: the clue itself (e.g. "Thai script").
 * - `tag` (enum)
 */
export interface Meta {
  label: string;
  value: string;
  tag: Difficulty;
}

/**
 * A region of a country:
 * - `name`: region name; must match the region's `title` on the SVG map if a map exists.
 * - `icon` (optional): emoji shown for the region.
 * - `cities` (optional): the region's main cities, as a single string.
 * - `description` (optional): what the region looks like (landscape, weather, etc.).
 */
export interface Region {
  name: string;
  icon?: string;
  cities?: string;
  description?: string;
}

/**
 * A country entry:
 * - `id`: ISO code (e.g. 'ES' for Spain).
 * - `name`: country name.
 * - `continent` (enum)
 * - `difficulty` (enum)
 * - `studyLinks`: study guides for this country.
 * - `drivingSide` (enum)
 * - `images` (optional): gallery images.
 * - `videos` (optional): video links.
 * - `meta` (optional): quick facts.
 * - `regions` (optional): regions of the country.
 */
export interface Country {
  id: string; // ISO Code (e.g., 'ES' for Spain)
  name: string;
  continent: Continent;
  difficulty: Difficulty;
  studyLinks: StudyLink[];
  drivingSide: DrivingSide;
  images?: CountryImage[];
  videos?: VideoLink[];
  meta?: Meta[];
  regions?: Region[];
}
