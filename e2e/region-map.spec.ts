import { expect, test } from "./fixtures";

// Real browser only: label placement and colors depend on SVG getBBox, which
// jsdom doesn't implement (the component tests stub it with zeros).

test.beforeEach(async ({ page }) => {
  await page.goto("country/PL");
  await expect(page.getByRole("group", { name: /Interactive region map/ })).toBeVisible();
});

test("places every label inside the map", async ({ page }) => {
  const labels = await page.locator(".region-map .region-label").evaluateAll((elements) =>
    elements.map((element) => {
      const svg = element.closest("svg")!;
      const [minX, minY, width, height] = svg.getAttribute("viewBox")!.split(" ").map(Number);
      return {
        text: element.textContent,
        x: Number(element.getAttribute("x")),
        y: Number(element.getAttribute("y")),
        minX,
        minY,
        maxX: minX + width,
        maxY: minY + height,
      };
    }),
  );

  expect(labels.length).toBeGreaterThan(0);
  for (const label of labels) {
    expect(label.x, `${label.text} x`).toBeGreaterThanOrEqual(label.minX);
    expect(label.x, `${label.text} x`).toBeLessThanOrEqual(label.maxX);
    expect(label.y, `${label.text} y`).toBeGreaterThanOrEqual(label.minY);
    expect(label.y, `${label.text} y`).toBeLessThanOrEqual(label.maxY);
  }
  // Positions come from each shape's real size, so they can't all be the same
  expect(new Set(labels.map((label) => `${label.x},${label.y}`)).size).toBe(labels.length);
});

test("fills every region with a color", async ({ page }) => {
  const fills = await page
    .locator(".region-map .region-shape")
    .evaluateAll((shapes) => shapes.map((shape) => (shape as SVGPathElement).style.fill));

  expect(fills.length).toBeGreaterThan(0);
  for (const fill of fills) expect(fill).not.toBe("");
});

test("clicking a region on the map selects it everywhere", async ({ page }) => {
  const shape = page.getByRole("button", { name: "Select Mazowieckie" });

  await shape.click();

  await expect(shape).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".region-detail-panel").getByRole("heading", { name: "Mazowieckie" })).toBeVisible();
  await expect(page.getByText("Mazowieckie selected")).toBeAttached();
});

test("regions can be selected with the keyboard", async ({ page }) => {
  const shape = page.getByRole("button", { name: "Select Pomorskie" });

  await shape.focus();
  await page.keyboard.press("Enter");

  await expect(shape).toHaveAttribute("aria-pressed", "true");
});
