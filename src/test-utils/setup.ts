import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import { createMatchMediaMock } from "./matchMedia";

// Default: the OS reports a light preference. Tests that need to change it
// replace window.matchMedia with their own createMatchMediaMock.
if (typeof window.matchMedia !== "function") {
  window.matchMedia = (query: string) => createMatchMediaMock(false, query).mql;
}

afterEach(() => {
  // Testing Library only auto-unmounts when Vitest globals are enabled (they
  // aren't here), so unmount whatever render/renderHook mounted in the test.
  cleanup();
  localStorage.clear();
});
