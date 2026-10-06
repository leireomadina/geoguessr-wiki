import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import { createMatchMediaMock } from "./matchMedia";

// Default: the OS reports a light preference. Tests that need to change it
// replace window.matchMedia with their own createMatchMediaMock.
if (typeof window.matchMedia !== "function") {
  window.matchMedia = (query: string) => createMatchMediaMock(false, query).mql;
}

// jsdom has no SVG layout engine, so getBBox doesn't exist. RegionMap calls it to
// place labels; a zero box lets it render. Real positions are checked in e2e.
if (!("getBBox" in SVGElement.prototype)) {
  Object.defineProperty(SVGElement.prototype, "getBBox", {
    configurable: true,
    value: () => ({ x: 0, y: 0, width: 0, height: 0 }),
  });
}

afterEach(() => {
  // Testing Library only auto-unmounts when Vitest globals are enabled (they
  // aren't here), so unmount whatever render/renderHook mounted in the test.
  cleanup();
  localStorage.clear();
});
