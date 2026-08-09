import { describe, expect, it } from "vitest";
import { CONTINENTS } from "@/data/enums";
import { slugContinent, unslugContinent } from "./continentSlug";

describe("slugContinent", () => {
  it("hyphenates a multi-word continent", () => {
    expect(slugContinent("North America")).toBe("north-america");
    expect(slugContinent("South America")).toBe("south-america");
  });

  it.each(CONTINENTS)("produces a valid slug for %s", (continent) => {
    const slug = slugContinent(continent);
    expect(slug).toBe(slug.toLowerCase());
    expect(slug).not.toMatch(/\s/);
  });
});

describe("unslugContinent", () => {
  it("capitalizes each word of a multi-segment slug", () => {
    expect(unslugContinent("north-america")).toBe("North America");
  });

  it("does not lowercase the rest of an already-uppercase word", () => {
    // Documents current behavior: only the first character of each segment
    // is touched, so non-lowercase input is not normalized (only its hyphens
    // are replaced with spaces). If the function is ever changed to lowercase
    // the remainder first, update this.
    expect(unslugContinent("NORTH-AMERICA")).toBe("NORTH AMERICA");
  });

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
