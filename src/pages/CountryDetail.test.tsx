import { screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { countries } from "@/data/countries";
import { DIFFICULTIES } from "@/data/enums";
import { hasRegionMap } from "@/data/regionMaps";
import type { Country } from "@/types/country";
import { renderRoute } from "@/test-utils/renderRoute";

// Picks a real country with the given trait, failing loudly if the data no
// longer has one (so the test is updated instead of silently passing).
function findCountry(description: string, match: (c: Country) => boolean) {
  const country = countries.find(match);
  if (!country) throw new Error(`No country in the data ${description}`);
  return country;
}

const sectionOf = (headingName: string) =>
  screen.getByRole("heading", { level: 2, name: headingName }).closest("section")!;

describe("Country page", () => {
  it("shows the country's name and badges", () => {
    const country = findCountry("at all", () => true);
    renderRoute(`/country/${country.id}`);

    expect(screen.getByRole("heading", { level: 1, name: country.name })).toBeInTheDocument();
    expect(screen.getByText(`.${country.id.toLowerCase()}`)).toBeInTheDocument();
    expect(screen.getByText(country.difficulty.replace("_", " "))).toBeInTheDocument();
  });

  it("finds the country regardless of the id's case in the URL", () => {
    const country = findCountry("at all", () => true);
    renderRoute(`/country/${country.id.toLowerCase()}`);

    expect(screen.getByRole("heading", { level: 1, name: country.name })).toBeInTheDocument();
  });

  it("shows the 404 page for an unknown country", () => {
    renderRoute("/country/XX");

    expect(screen.getByRole("heading", { name: "404" })).toBeInTheDocument();
  });

  it("lists meta clues sorted from easiest to hardest", () => {
    const country = findCountry("with meta of several difficulties", (c) =>
      new Set(c.meta?.map((m) => m.tag)).size > 1,
    );
    renderRoute(`/country/${country.id}`);

    const tagPattern = new RegExp(`^(${DIFFICULTIES.map((d) => d.replace("_", " ")).join("|")})$`);
    const shownTags = within(sectionOf("Meta"))
      .getAllByText(tagPattern)
      .map((tag) => tag.textContent!.replace(" ", "_"));
    const rank = (tag: string) => DIFFICULTIES.indexOf(tag as (typeof DIFFICULTIES)[number]);

    expect(shownTags).toHaveLength(country.meta!.length);
    expect(shownTags).toEqual([...shownTags].sort((a, b) => rank(a) - rank(b)));
  });

  it("hides the Meta section when a country has no meta", () => {
    const country = findCountry("without meta", (c) => !c.meta?.length);
    renderRoute(`/country/${country.id}`);

    expect(screen.queryByRole("heading", { name: "Meta" })).not.toBeInTheDocument();
  });

  it("opens every study link in a new tab safely, with a plonkit badge for plonkit links", () => {
    const country = findCountry("with a non-plonkit study link", (c) =>
      c.studyLinks.some((link) => !link.url.includes("plonkit")),
    );
    renderRoute(`/country/${country.id}`);

    const links = within(sectionOf("Study links")).getAllByRole("link");
    expect(links.map((link) => link.getAttribute("href"))).toEqual(
      country.studyLinks.map((link) => link.url),
    );
    for (const link of links) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }

    const plonkitCount = country.studyLinks.filter((l) => l.url.includes("plonkit")).length;
    expect(screen.queryAllByRole("link", { name: "plonkit →" })).toHaveLength(plonkitCount);
  });

  it("lists videos when the country has some", () => {
    const country = findCountry("with videos", (c) => !!c.videos?.length);
    renderRoute(`/country/${country.id}`);

    const links = within(sectionOf("Videos")).getAllByRole("link");
    expect(links.map((link) => link.textContent)).toEqual(
      country.videos!.map((video) => expect.stringContaining(video.label)),
    );
  });

  describe("Regions toggle", () => {
    const country = findCountry("with regions", (c) => !!c.regions?.length);
    const toggle = () => screen.getByRole("button", { name: "Regions" });
    const panel = () => document.getElementById(toggle().getAttribute("aria-controls")!)!;

    it("is a button inside the Regions heading, controlling the regions panel", () => {
      renderRoute(`/country/${country.id}`);

      expect(screen.getByRole("heading", { level: 2, name: "Regions" })).toContainElement(toggle());
      expect(panel()).toContainElement(
        screen.getByRole("heading", { level: 3, name: country.regions![0].name }),
      );
    });

    it("starts expanded, and collapses and expands on click", async () => {
      const { user } = renderRoute(`/country/${country.id}`);

      expect(toggle()).toHaveAttribute("aria-expanded", "true");
      expect(panel()).not.toHaveAttribute("inert");

      await user.click(toggle());
      expect(toggle()).toHaveAttribute("aria-expanded", "false");
      // Collapsed content stays in the DOM for the animation, but is inert:
      // no keyboard focus, hidden from screen readers
      expect(panel()).toHaveAttribute("inert");

      await user.click(toggle());
      expect(toggle()).toHaveAttribute("aria-expanded", "true");
      expect(panel()).not.toHaveAttribute("inert");
    });

    it.each(["{Enter}", " "])("toggles with the keyboard (%j)", async (key) => {
      const { user } = renderRoute(`/country/${country.id}`);

      toggle().focus();
      await user.keyboard(key);

      expect(toggle()).toHaveAttribute("aria-expanded", "false");
    });
  });

  it("shows region cards without a map for a country that has no map", () => {
    const country = findCountry("with regions but no map", (c) =>
      !!c.regions?.length && !hasRegionMap(c.id),
    );
    renderRoute(`/country/${country.id}`);

    for (const region of country.regions!) {
      expect(screen.getByRole("heading", { level: 3, name: region.name })).toBeInTheDocument();
    }
    expect(screen.queryByRole("group", { name: /Interactive region map/ })).not.toBeInTheDocument();
    // Cards are only selectable when there's a map to select on
    expect(screen.queryByRole("button", { name: new RegExp(country.regions![0].name) })).not.toBeInTheDocument();
  });

  describe("with an interactive region map", () => {
    const country = findCountry("with a region map", (c) => hasRegionMap(c.id) && !!c.regions?.length);
    const regions = country.regions!;
    const panel = () => screen.getByText(/^Region \d+ \/ \d+$/).closest("aside")!;

    it("selects the first region by default", () => {
      renderRoute(`/country/${country.id}`);

      expect(screen.getByText(`Region 1 / ${regions.length}`)).toBeInTheDocument();
      expect(within(panel()).getByRole("heading", { name: regions[0].name })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: `Select ${regions[0].name}` })).toHaveAttribute(
        "aria-pressed",
        "true",
      );
    });

    it("selects a region from its card", async () => {
      const { user } = renderRoute(`/country/${country.id}`);
      const card = screen
        .getAllByRole("button")
        .find((button) => within(button).queryByRole("heading", { name: regions[1].name }))!;

      await user.click(card);

      expect(screen.getByText(`Region 2 / ${regions.length}`)).toBeInTheDocument();
      expect(within(panel()).getByRole("heading", { name: regions[1].name })).toBeInTheDocument();
    });

    it("selects a region from the map, keeping the map and panel in sync", async () => {
      const { user } = renderRoute(`/country/${country.id}`);
      const last = regions[regions.length - 1];

      await user.click(screen.getByRole("button", { name: `Select ${last.name}` }));

      expect(screen.getByText(`Region ${regions.length} / ${regions.length}`)).toBeInTheDocument();
      expect(within(panel()).getByRole("heading", { name: last.name })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: `Select ${last.name}` })).toHaveAttribute("aria-pressed", "true");
      expect(screen.getByRole("button", { name: `Select ${regions[0].name}` })).toHaveAttribute(
        "aria-pressed",
        "false",
      );
    });
  });

  it("goes back to the previous page with the back button", async () => {
    const { user } = renderRoute("/continent/europe", "/country/ES");

    await user.click(screen.getByRole("button", { name: "←" }));

    expect(screen.getByRole("heading", { level: 1, name: "Europe" })).toBeInTheDocument();
  });
});
