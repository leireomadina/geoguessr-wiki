import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import RegionMap from "@/components/RegionMap";
import { countries } from "@/data/countries";
import { hasRegionMap } from "@/data/regionMaps";

const country = countries.find((c) => hasRegionMap(c.id) && !!c.regions?.length)!;
const regions = country.regions!;

function renderMap(selectedIndex = 0) {
  const onSelect = vi.fn();
  render(
    <RegionMap
      countryId={country.id}
      regions={regions}
      selectedIndex={selectedIndex}
      onSelect={onSelect}
    />,
  );
  return { onSelect, user: userEvent.setup() };
}

describe("RegionMap", () => {
  it("renders one selectable shape per region", () => {
    renderMap();

    for (const region of regions) {
      expect(screen.getByRole("button", { name: `Select ${region.name}` })).toBeInTheDocument();
    }
  });

  it("marks only the selected region as pressed", () => {
    renderMap(1);

    const pressed = screen
      .getAllByRole("button")
      .filter((button) => button.getAttribute("aria-pressed") === "true");
    expect(pressed.map((button) => button.getAttribute("aria-label"))).toEqual([
      `Select ${regions[1].name}`,
    ]);
  });

  it("announces the selected region to screen readers", () => {
    renderMap(1);

    expect(screen.getByText(`${regions[1].name} selected`)).toBeInTheDocument();
  });

  it("calls onSelect with the region's index when a shape is clicked", async () => {
    const { onSelect, user } = renderMap();

    await user.click(screen.getByRole("button", { name: `Select ${regions[2].name}` }));

    expect(onSelect).toHaveBeenCalledWith(2);
  });

  it.each(["{Enter}", " "])("calls onSelect when %j is pressed on a focused shape", async (key) => {
    const { onSelect, user } = renderMap();

    screen.getByRole("button", { name: `Select ${regions[2].name}` }).focus();
    await user.keyboard(key);

    expect(onSelect).toHaveBeenCalledWith(2);
  });

  it("renders nothing for a country without a map", () => {
    const { container } = render(
      <RegionMap countryId="XX" regions={regions} selectedIndex={0} onSelect={() => {}} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("skips regions that have no shape on the map, warning in dev", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    render(
      <RegionMap
        countryId={country.id}
        regions={[...regions, { name: "Not on the map" }]}
        selectedIndex={0}
        onSelect={() => {}}
      />,
    );

    expect(screen.getAllByRole("button")).toHaveLength(regions.length);
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('"Not on the map"'));
    warn.mockRestore();
  });
});
