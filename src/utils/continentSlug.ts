import type { Continent } from "@/types/country";

export function slugContinent(continent: Continent): string {
  return continent.toLowerCase().replace(/\s+/g, "-");
}

// Case-insensitive: "north-america", "NORTH-AMERICA" and "North-America" all
// give "North America", so continent URLs work in any case.
export function unslugContinent(slug: string): string {
  return slug
    .toLowerCase()
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
