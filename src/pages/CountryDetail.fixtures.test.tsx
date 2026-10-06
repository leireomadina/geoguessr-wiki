import { screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { Country } from "@/types/country";
import { renderRoute } from "@/test-utils/renderRoute";

// States the real data doesn't contain right now (empty regions, no study
// links, meta written out of order) need a fixture. Kept in their own file
// because vi.mock replaces the module for the whole file.
vi.mock("@/data/countries", () => ({
  countries: [
    {
      id: "XA",
      name: "Fixtureland",
      continent: "Europe",
      difficulty: "easy",
      drivingSide: "right",
      studyLinks: [],
      regions: [],
      meta: [
        { label: "meta", value: "Very hard clue", tag: "very_hard" },
        { label: "meta", value: "Easy clue", tag: "easy" },
        { label: "meta", value: "Hard clue", tag: "hard" },
        { label: "meta", value: "Medium clue", tag: "medium" },
      ],
    } satisfies Country,
  ],
}));

describe("Country page (fixture data)", () => {
  it("sorts meta clues from easiest to hardest, whatever the data order", () => {
    renderRoute("/country/XA");

    const meta = screen.getByRole("heading", { level: 2, name: "Meta" }).closest("section")!;
    expect(within(meta).getAllByRole("definition").map((clue) => clue.textContent)).toEqual([
      "Easy clue",
      "Medium clue",
      "Hard clue",
      "Very hard clue",
    ]);
  });

  it("shows a 'Coming soon' placeholder when regions are empty", () => {
    renderRoute("/country/XA");

    expect(screen.getByRole("heading", { level: 2, name: /Regions/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Coming soon" })).toBeInTheDocument();
  });

  it("shows a message when there are no study links", () => {
    renderRoute("/country/XA");

    expect(screen.getByText("No study links yet :(")).toBeInTheDocument();
  });
});
