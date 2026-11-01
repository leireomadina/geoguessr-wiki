import { describe, expect, it } from "vitest";
import type { Country } from "@/types/country";
import {
  formatCountryCount,
  getFlagEmoji,
  sortCountriesByName,
} from "@/utils/countryUtils";

const createCountry = (name: string, id: string): Country => ({
  id,
  name,
  continent: "Europe",
  difficulty: "easy",
  drivingSide: "right",
  studyLinks: [{ label: "Guide", url: "https://example.com" }],
});

describe("getFlagEmoji", () => {
  it("converts a 2-letter ISO code to its flag emoji", () => {
    expect(getFlagEmoji("US")).toBe("🇺🇸");
    expect(getFlagEmoji("JP")).toBe("🇯🇵");
  });

  it("is case-insensitive", () => {
    expect(getFlagEmoji("us")).toBe("🇺🇸");
  });

  it("returns an empty string for an empty code", () => {
    // Documents current behavior: String.fromCodePoint() with no arguments
    // returns "" rather than throwing.
    expect(getFlagEmoji("")).toBe("");
  });
});

describe("formatCountryCount", () => {
  it("returns 'No countries' for zero", () => {
    expect(formatCountryCount(0)).toBe("No countries");
  });

  it("uses the singular form for one", () => {
    expect(formatCountryCount(1)).toBe("1 country");
  });

  it("uses the plural form at the singular/plural boundary", () => {
    expect(formatCountryCount(2)).toBe("2 countries");
  });

  it("uses the plural form for larger counts", () => {
    expect(formatCountryCount(5)).toBe("5 countries");
  });
});

describe("sortCountriesByName", () => {
  it("sorts alphabetically by name", () => {
    const input = [
      createCountry("Spain", "ES"),
      createCountry("France", "FR"),
      createCountry("Germany", "DE"),
    ];
    expect(sortCountriesByName(input).map((country) => country.name)).toEqual([
      "France",
      "Germany",
      "Spain",
    ]);
  });

  it("does not mutate the input array", () => {
    const input = [createCountry("Spain", "ES"), createCountry("France", "FR")];
    sortCountriesByName(input);
    expect(input.map((country) => country.name)).toEqual(["Spain", "France"]);
  });

  it("returns an empty array for an empty input", () => {
    expect(sortCountriesByName([])).toEqual([]);
  });
});
