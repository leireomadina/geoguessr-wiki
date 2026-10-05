import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";
import { createMatchMediaMock } from "./matchMedia";

// Default: the OS reports a light preference. Tests that need to change it
// replace window.matchMedia with their own createMatchMediaMock.
if (typeof window.matchMedia !== "function") {
  window.matchMedia = (query: string) => createMatchMediaMock(false, query).mql;
}

afterEach(() => {
  localStorage.clear();
});
