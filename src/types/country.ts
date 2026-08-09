/** How hard a country is to guess in Geoguessr according to our personal experience. */
export type Difficulty = "easy" | "medium" | "hard" | "very_hard";

/** Which side of the road cars drive on. */
export type DrivingSide = "left" | "right";

/** The continent a country belongs to. */
export type Continent =
  | "Africa"
  | "Asia"
  | "Europe"
  | "North America"
  | "Oceania"
  | "South America";

/** Where a study guide link is hosted. */
export type StudyLinkPlatform = "website" | "google docs" | "other";

/** Where a video link is hosted. */
export type VideoLinkPlatform = "youtube" | "vimeo" | "other";

/** What kind of image a gallery image is. */
export type ImageCategory = "flag" | "landscape" | "infographic" | "other";

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
