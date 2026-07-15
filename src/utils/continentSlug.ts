import type { Continent } from "@/types/country";

export function slugContinent(continent: Continent): string {
  return continent.toLowerCase().replace(/\s+/g, "-");
}

export function unslugContinent(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
