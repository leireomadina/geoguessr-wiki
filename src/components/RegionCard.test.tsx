import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import RegionCard from "@/components/RegionCard";
import type { Region } from "@/types/country";

const region: Region = {
  name: "Mazowieckie",
  icon: "🏙️",
  cities: "Warszawa",
  description: "Flat central region with the capital",
};

describe("RegionCard", () => {
  it("shows the region's name, cities and description", () => {
    render(<RegionCard region={region} />);

    expect(screen.getByRole("heading", { name: region.name })).toBeInTheDocument();
    expect(screen.getByText(region.cities!)).toBeInTheDocument();
    expect(screen.getByText(region.description!)).toBeInTheDocument();
  });

  it("omits the cities line when the region has none", () => {
    render(<RegionCard region={{ ...region, cities: undefined }} />);

    expect(screen.queryByText(region.cities!)).not.toBeInTheDocument();
  });

  it("is not a button when it can't be selected", () => {
    render(<RegionCard region={region} />);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("is a focusable button that selects on click", async () => {
    const onSelect = vi.fn();
    const user = userEvent.setup();
    render(<RegionCard region={region} onSelect={onSelect} />);

    await user.tab();
    expect(screen.getByRole("button")).toHaveFocus();

    await user.click(screen.getByRole("button"));
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it.each(["{Enter}", " "])("selects when %j is pressed", async (key) => {
    const onSelect = vi.fn();
    const user = userEvent.setup();
    render(<RegionCard region={region} onSelect={onSelect} />);

    screen.getByRole("button").focus();
    await user.keyboard(key);

    expect(onSelect).toHaveBeenCalledTimes(1);
  });
});
