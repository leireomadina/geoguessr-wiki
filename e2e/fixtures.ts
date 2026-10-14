import { test as base, expect } from "@playwright/test";

/**
 * Shared Playwright `test` for all specs. Automatically, for every test:
 * - Answers requests to other sites (e.g. the plonkit favicon) with an empty
 *   response, so tests never depend on the network.
 * - Fails the test if the page logs a console error or throws an uncaught
 *   exception, so broken pages can't pass just because the asserted text is there.
 */
export const test = base.extend<{ failOnPageErrors: void }>({
  failOnPageErrors: [
    async ({ page, baseURL }, use) => {
      const origin = new URL(baseURL!).origin;
      await page.route(
        (url) => url.origin !== origin,
        (route) => route.fulfill({ status: 204 }),
      );

      const errors: string[] = [];
      page.on("console", (message) => {
        if (message.type() === "error") errors.push(message.text());
      });
      page.on("pageerror", (error) => errors.push(error.message));

      await use();

      expect(errors, "console errors or uncaught exceptions").toEqual([]);
    },
    { auto: true },
  ],
});

export { expect };
