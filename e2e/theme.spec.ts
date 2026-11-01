import { expect, test } from "./fixtures";

test("follows the OS dark preference on a first visit", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("");

  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("a manual theme choice survives a reload", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");

  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(page.getByRole("button", { name: "Switch to light theme" })).toBeVisible();
});
