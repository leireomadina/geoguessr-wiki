import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";

// Minimal mock shape for jsdom's missing matchMedia — only what useTheme calls
// (matches + listener registration), not the whole MediaQueryList type.
interface MediaQueryListMock {
  matches: boolean;
  media: string;
  onchange: null;
  addListener: (listener: () => void) => void;
  removeListener: (listener: () => void) => void;
  addEventListener: (type: string, listener: () => void) => void;
  removeEventListener: (type: string, listener: () => void) => void;
  dispatchEvent: () => boolean;
}

// jsdom does not implement matchMedia; the useTheme hook relies on it.
function matchMediaMock(query: string): MediaQueryListMock {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  };
}

if (typeof window.matchMedia !== "function") {
  window.matchMedia = matchMediaMock as unknown as typeof window.matchMedia;
}

afterEach(() => {
  localStorage.clear();
});
