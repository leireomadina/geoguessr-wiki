import { expect, test } from "./fixtures";

// Paths are relative to the base URL (/geoguessr-wiki/), so no leading slash.
const pages = [
  { path: "", heading: /WHERE THE/ },
  { path: "continent/europe", heading: "Europe" },
  { path: "country/ES", heading: "Spain" },
  { path: "country/PL", heading: "Poland" }, // has an interactive region map
  { path: "no/such/page", heading: "404" },
];

for (const { path, heading } of pages) {
  test(`loads /${path} without errors`, async ({ page }) => {
    await page.goto(path);

    await expect(page.getByRole("heading", { level: 1, name: heading })).toBeVisible();
  });
}
