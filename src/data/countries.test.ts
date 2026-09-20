import { describe, expect, it } from "vitest";
import { countries } from "@/data/countries";
import { CONTINENTS, DIFFICULTIES, DRIVING_SIDES } from "@/data/enums";

describe("country data", () => {
  it("has at least one country", () => {
    expect(countries.length).toBeGreaterThan(0);
  });

  it("has unique, 2-letter uppercase ISO ids", () => {
    const ids = countries.map((country) => country.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) {
      expect(id).toMatch(/^[A-Z]{2}$/); // e.g., 'ES', 'CZ'
    }
  });

  it("has unique, non-empty names", () => {
    const names = countries.map((country) => country.name);
    expect(new Set(names).size).toBe(names.length);
    for (const name of names) {
      expect(name.trim().length).toBeGreaterThan(0);
    }
  });

  it("only uses valid enum values", () => {
    for (const country of countries) {
      expect(CONTINENTS).toContain(country.continent);
      expect(DIFFICULTIES).toContain(country.difficulty);
      expect(DRIVING_SIDES).toContain(country.drivingSide);
    }
  });

  it("covers every continent", () => {
    const present = new Set(countries.map((country) => country.continent));
    for (const continent of CONTINENTS) {
      expect(present).toContain(continent);
    }
  });

  it("has non-empty studyLinks with valid http(s) URLs", () => {
    for (const country of countries) {
      expect(country.studyLinks.length).toBeGreaterThan(0);
      for (const link of country.studyLinks) {
        expect(link.label.trim().length).toBeGreaterThan(0);
        expect(["http:", "https:"]).toContain(new URL(link.url).protocol);
      }
    }
  });

  it("validates optional fields when present", () => {
    for (const country of countries) {
      if (country.regions) {
        const names = country.regions.map((region) => region.name);
        expect(new Set(names).size).toBe(names.length);
        for (const region of country.regions) {
          expect(region.name.trim().length).toBeGreaterThan(0);
        }
      }

      if (country.videos) {
        for (const video of country.videos) {
          expect(video.label.trim().length).toBeGreaterThan(0);
          expect(["http:", "https:"]).toContain(new URL(video.url).protocol);
        }
      }

      if (country.meta) {
        for (const item of country.meta) {
          expect(DIFFICULTIES).toContain(item.tag);
          expect(item.label.trim().length).toBeGreaterThan(0);
          expect(item.value.trim().length).toBeGreaterThan(0);
        }
      }

      if (country.images) {
        for (const image of country.images) {
          expect(image.src.trim().length).toBeGreaterThan(0);
          expect(image.alt.trim().length).toBeGreaterThan(0);
          expect(image.label.trim().length).toBeGreaterThan(0);
        }
      }
    }
  });
});
