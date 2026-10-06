import { describe, expect, it } from "vitest";
import { CONTINENTS } from "@/data/enums";
import { slugContinent, unslugContinent } from "./continentSlug";

describe("slugContinent", () => {
  it("hyphenates a multi-word continent", () => {
    expect(slugContinent("North America")).toBe("north-america");
    expect(slugContinent("South America")).toBe("south-america");
  });

  it.each(CONTINENTS)("produces a valid slug for %s", (continent) => {
    // Lowercase words joined by single hyphens, e.g. "north-america"
    expect(slugContinent(continent)).toMatch(/^[a-z]+(-[a-z]+)*$/);
  });
});

describe("unslugContinent", () => {
  it("capitalizes each word of a multi-segment slug", () => {
    expect(unslugContinent("north-america")).toBe("North America");
  });

  it.each(["NORTH-AMERICA", "North-America", "nOrTh-AmErIcA"])(
    "is case-insensitive (%s)",
    (slug) => {
      expect(unslugContinent(slug)).toBe("North America");
    },
  );

  it("does not throw on an empty string", () => {
    expect(unslugContinent("")).toBe("");
  });

  it("does not throw on malformed slugs with stray hyphens", () => {
    expect(() => unslugContinent("-africa")).not.toThrow();
    expect(() => unslugContinent("north--america")).not.toThrow();
  });
});

describe("slugContinent / unslugContinent round-trip", () => {
  it.each(CONTINENTS)(
    "recovers %s after slugging and unslugging",
    (continent) => {
      expect(unslugContinent(slugContinent(continent))).toBe(continent);
    },
  );
});
