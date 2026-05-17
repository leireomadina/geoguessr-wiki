import type { Country } from "../types/country";

/**
 * Converts a 2-letter ISO country code (e.g., "US", "JP") into its corresponding emoji flag.
 * 
 * How it works:
 * 1. Unicode "Regional Indicator Symbols" start at 127462 (index for 'A').
 * 2. Standard ASCII capital 'A' is 65.
 * 3. The offset (127462 - 65 = 127397) is added to each character's code.
 * 4. Combining two Regional Indicator Symbols (e.g., 'U' + 'S') results in the flag emoji.
 */
export const getFlagEmoji = (countryCode: string): string => {
  return String.fromCodePoint(
    ...countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0))
  );
};

/**
 * Returns a formatted string for the country count (e.g., "1 country" or "5 countries").
 */
export const formatCountryCount = (count: number): string => {
  if (count === 0) return "No countries";
  return `${count} ${count === 1 ? "country" : "countries"}`;
};

/**
 * Sorts an array of countries alphabetically by name.
 */
export const sortCountriesByName = (countries: Country[]): Country[] => {
  return [...countries].sort((a, b) => a.name.localeCompare(b.name));
};
