import { screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { countries } from "@/data/countries";
import { renderRoute } from "@/test-utils/renderRoute";
import { slugContinent } from "@/utils/continentSlug";
import { formatCountryCount } from "@/utils/countryUtils";

const continents = [...new Set(countries.map((c) => c.continent))].sort();

describe("Home page", () => {
  it("shows one card per continent, in alphabetical order", () => {
    renderRoute("/");

    const headings = screen
      .getAllByRole("heading", { level: 2 })
      .map((heading) => heading.textContent);
    expect(headings).toEqual(continents);
  });

  it.each(continents)("links %s to its page with its country count", (continent) => {
    renderRoute("/");

    const card = screen.getByRole("link", { name: new RegExp(continent) });
    const count = countries.filter((c) => c.continent === continent).length;
    expect(card).toHaveAttribute("href", `/continent/${slugContinent(continent)}`);
    expect(within(card).getByText(formatCountryCount(count))).toBeInTheDocument();
  });

  it("navigates to a continent page when a card is clicked", async () => {
    const { user } = renderRoute("/");

    await user.click(screen.getByRole("link", { name: /Europe/ }));

    expect(screen.getByRole("heading", { level: 1, name: "Europe" })).toBeInTheDocument();
  });
});
