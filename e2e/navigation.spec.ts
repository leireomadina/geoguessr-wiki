import { expect, test } from "./fixtures";

test("browses from home to a country and back", async ({ page }) => {
  await page.goto("");

  await page.getByRole("link", { name: /Europe/ }).click();
  await expect(page).toHaveURL(/\/geoguessr-wiki\/continent\/europe$/);
  await expect(page.getByRole("heading", { level: 1, name: "Europe" })).toBeVisible();

  await page.getByRole("link", { name: /Poland/ }).click();
  await expect(page).toHaveURL(/\/geoguessr-wiki\/country\/PL$/);
  await expect(page.getByRole("heading", { level: 1, name: "Poland" })).toBeVisible();

  await page.getByRole("button", { name: "←" }).click();
  await expect(page.getByRole("heading", { level: 1, name: "Europe" })).toBeVisible();

  await page.getByRole("link", { name: "Home" }).click();
  await expect(page.getByRole("heading", { level: 1, name: /WHERE THE/ })).toBeVisible();
});

test("search on a continent page narrows the list", async ({ page }) => {
  await page.goto("continent/europe");

  await page.getByRole("textbox").fill("pol");

  await expect(page.getByRole("heading", { level: 2 })).toHaveText(["Poland"]);
});

test("opening a country URL directly and reloading keeps the page", async ({ page }) => {
  await page.goto("country/ES");
  await expect(page.getByRole("heading", { level: 1, name: "Spain" })).toBeVisible();

  await page.reload();
  await expect(page.getByRole("heading", { level: 1, name: "Spain" })).toBeVisible();
});

test("the 404 page links back home", async ({ page }) => {
  await page.goto("no/such/page");

  await page.getByRole("link", { name: "Back to the start" }).click();
  await expect(page.getByRole("heading", { level: 1, name: /WHERE THE/ })).toBeVisible();
});
