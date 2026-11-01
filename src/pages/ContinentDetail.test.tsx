import { screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { countries } from "@/data/countries";
import { DIFFICULTIES } from "@/data/enums";
import { renderRoute } from "@/test-utils/renderRoute";
import { formatCountryCount, sortCountriesByName } from "@/utils/countryUtils";

const europe = sortCountriesByName(
  countries.filter((country) => country.continent === "Europe"),
);

// Country cards render each country's name as a level-2 heading
const shownCountries = () =>
  screen
    .queryAllByRole("heading", { level: 2 })
    .map((heading) => heading.textContent);

describe("Continent page", () => {
  it("lists the continent's countries sorted by name, with the count", () => {
    renderRoute("/continent/europe");

    expect(screen.getByRole("heading", { level: 1, name: "Europe" })).toBeInTheDocument();
    expect(shownCountries()).toEqual(europe.map((country) => country.name));
    expect(screen.getByText(formatCountryCount(europe.length))).toBeInTheDocument();
  });

  it("filters by country name, case-insensitively", async () => {
    const { user } = renderRoute("/continent/europe");
    const target = europe[0];

    await user.type(screen.getByRole("textbox"), target.name.toUpperCase());

    expect(shownCountries()).toContain(target.name);
    expect(shownCountries()).toEqual(
      europe
        .filter((c) => c.name.toLowerCase().includes(target.name.toLowerCase()))
        .map((c) => c.name),
    );
  });

  it("filters by ISO code", async () => {
    const { user } = renderRoute("/continent/europe");
    const target = europe[europe.length - 1];

    await user.type(screen.getByRole("textbox"), target.id.toLowerCase());

    expect(shownCountries()).toContain(target.name);
  });

  it("offers every difficulty from the enums as a filter option", () => {
    renderRoute("/continent/europe");

    const options = within(screen.getByRole("combobox")).getAllByRole("option");
    expect(options.map((option) => option.getAttribute("value"))).toEqual(["", ...DIFFICULTIES]);
    expect(options.map((option) => option.textContent)).toEqual([
      "All Difficulties",
      "Easy",
      "Medium",
      "Hard",
      "Very Hard",
    ]);
  });

  it("filters by difficulty and updates the count", async () => {
    const { user } = renderRoute("/continent/europe");
    const hard = europe.filter((c) => c.difficulty === "hard");

    await user.selectOptions(screen.getByRole("combobox"), "hard");

    expect(shownCountries()).toEqual(hard.map((c) => c.name));
    expect(screen.getByText(formatCountryCount(hard.length))).toBeInTheDocument();
  });

  it("shows an empty state when nothing matches", async () => {
    const { user } = renderRoute("/continent/europe");

    await user.type(screen.getByRole("textbox"), "no such country");

    expect(shownCountries()).toEqual([]);
    expect(screen.getByText("No countries found matching your search.")).toBeInTheDocument();
    expect(screen.getByText("No countries")).toBeInTheDocument();
  });

  it.each(["/continent/EUROPE", "/continent/Europe"])(
    "accepts the continent in any case (%s)",
    (path) => {
      renderRoute(path);

      expect(screen.getByRole("heading", { level: 1, name: "Europe" })).toBeInTheDocument();
      expect(shownCountries()).toEqual(europe.map((country) => country.name));
    },
  );

  it("accepts multi-word continents in capitals", () => {
    renderRoute("/continent/NORTH-AMERICA");

    expect(screen.getByRole("heading", { level: 1, name: "North America" })).toBeInTheDocument();
  });

  it("shows the 404 page for an unknown continent", () => {
    renderRoute("/continent/atlantis");

    expect(screen.getByRole("heading", { name: "404" })).toBeInTheDocument();
  });

  it("goes back to the previous page with the back button", async () => {
    const { user } = renderRoute("/", "/continent/europe");

    await user.click(screen.getByRole("button", { name: "←" }));

    expect(screen.getByText(/WHERE THE/)).toBeInTheDocument();
  });
});
