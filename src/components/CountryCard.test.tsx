import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import CountryCard from "@/components/CountryCard";
import { countries } from "@/data/countries";
import type { Country } from "@/types/country";
import { getFlagEmoji } from "@/utils/countryUtils";

const renderCard = (country: Country) =>
  render(
    <MemoryRouter>
      <CountryCard country={country} />
    </MemoryRouter>,
  );

const leftDriving = countries.find((c) => c.drivingSide === "left")!;
const rightDriving = countries.find((c) => c.drivingSide === "right")!;

describe("CountryCard", () => {
  it("links to the country's page", () => {
    renderCard(rightDriving);

    expect(screen.getByRole("link")).toHaveAttribute("href", `/country/${rightDriving.id}`);
  });

  it("shows the name, flag and ISO badge", () => {
    renderCard(rightDriving);

    expect(screen.getByRole("heading", { name: rightDriving.name })).toBeInTheDocument();
    expect(screen.getByText(getFlagEmoji(rightDriving.id))).toBeInTheDocument();
    expect(screen.getByText(`.${rightDriving.id.toLowerCase()}`)).toBeInTheDocument();
  });

  it.each([
    ["left", leftDriving, "🚗 L"],
    ["right", rightDriving, "R 🚗"],
  ])("shows the %s-hand driving badge", (_side, country, badge) => {
    renderCard(country);

    expect(screen.getByText(badge)).toBeInTheDocument();
  });

  it("shows the difficulty with underscores replaced by spaces", () => {
    renderCard({ ...rightDriving, difficulty: "very_hard" });

    expect(screen.getByText("very hard")).toBeInTheDocument();
  });
});
