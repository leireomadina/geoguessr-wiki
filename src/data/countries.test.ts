import { describe, expect, it } from "vitest";
import { countries } from "@/data/countries";
import { CONTINENTS } from "@/data/enums";

// Every assertion below passes a message naming the country (and item), so a
// failure points straight at the data file to fix, e.g. "ES studyLinks[1]".
//
// Enum fields (continent, difficulty, platforms, ...) aren't checked here: their
// types come from src/data/enums.ts and every country file is typed as Country,
// so the type-check already rejects invalid values. These tests cover what
// TypeScript can't: uniqueness, formats, URLs and empty text.

describe("country data", () => {
  it("has at least one country", () => {
    expect(countries.length).toBeGreaterThan(0);
  });

  it("has unique, 2-letter uppercase ISO ids", () => {
    const ids = countries.map((country) => country.id);
    expect(new Set(ids).size, "duplicate country id").toBe(ids.length);
    for (const country of countries) {
      expect(country.id, country.name).toMatch(/^[A-Z]{2}$/); // e.g., 'ES', 'CZ'
    }
  });

  it("has unique, non-empty names", () => {
    const names = countries.map((country) => country.name);
    expect(new Set(names).size, "duplicate country name").toBe(names.length);
    for (const country of countries) {
      expect(country.name.trim(), country.id).not.toBe("");
    }
  });


  it("covers every continent", () => {
    const present = new Set(countries.map((country) => country.continent));
    for (const continent of CONTINENTS) {
      expect(present, continent).toContain(continent);
    }
  });

  it("has non-empty studyLinks with valid http(s) URLs", () => {
    for (const country of countries) {
      expect(country.studyLinks.length, `${country.id} studyLinks`).toBeGreaterThan(0);
      country.studyLinks.forEach((link, i) => {
        const where = `${country.id} studyLinks[${i}]`;
        expect(link.label.trim(), where).not.toBe("");
        expect(URL.canParse(link.url), `${where} url`).toBe(true);
        expect(["http:", "https:"], `${where} url`).toContain(
          new URL(link.url).protocol,
        );
      });
    }
  });

  it("validates optional fields when present", () => {
    for (const country of countries) {
      if (country.regions) {
        const names = country.regions.map((region) => region.name);
        expect(new Set(names).size, `${country.id} duplicate region name`).toBe(
          names.length,
        );
        country.regions.forEach((region, i) => {
          expect(region.name.trim(), `${country.id} regions[${i}]`).not.toBe("");
        });
      }

      country.videos?.forEach((video, i) => {
        const where = `${country.id} videos[${i}]`;
        expect(video.label.trim(), where).not.toBe("");
        expect(URL.canParse(video.url), `${where} url`).toBe(true);
        expect(["http:", "https:"], `${where} url`).toContain(
          new URL(video.url).protocol,
        );
      });

      country.meta?.forEach((item, i) => {
        const where = `${country.id} meta[${i}]`;
        expect(item.label.trim(), `${where} label`).not.toBe("");
        expect(item.value.trim(), `${where} value`).not.toBe("");
      });

      country.images?.forEach((image, i) => {
        const where = `${country.id} images[${i}]`;
        expect(image.src.trim(), `${where} src`).not.toBe("");
        expect(image.alt.trim(), `${where} alt`).not.toBe("");
        expect(image.label.trim(), `${where} label`).not.toBe("");
      });
    }
  });
});
