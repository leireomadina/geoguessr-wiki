import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useTheme from "@/hooks/useTheme";

const defaultMatchMedia = window.matchMedia;

// Returns a controllable matchMedia object plus helpers to flip its `matches`
// value and fire its "change" listeners (useTheme subscribes to those).
function createMatchMediaMock(initialMatches: boolean) {
  const listeners: Array<() => void> = [];
  const mql = {
    matches: initialMatches,
    media: "",
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: (_type: string, listener: () => void) => {
      listeners.push(listener);
    },
    removeEventListener: (_type: string, listener: () => void) => {
      const index = listeners.indexOf(listener);
      if (index >= 0) listeners.splice(index, 1);
    },
    dispatchEvent: () => false,
  };

  return {
    mql,
    setMatches: (matches: boolean) => {
      mql.matches = matches;
    },
    emitChange: () => {
      for (const listener of listeners) listener();
    },
  };
}

afterEach(() => {
  window.matchMedia = defaultMatchMedia;
  delete document.documentElement.dataset.theme;
});

describe("useTheme", () => {
  it("defaults to the OS preference when nothing is stored", () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("light"); // setup mock reports light
    expect(document.documentElement.dataset.theme).toBe("light");
  });

  it("honors a stored theme over the OS preference", () => {
    localStorage.setItem("theme", "dark");

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("dark");
    expect(document.documentElement.dataset.theme).toBe("dark");
  });

  it("toggles, persists, and reflects the theme on the html element", () => {
    const { result } = renderHook(() => useTheme());

    act(() => result.current.toggleTheme());
    expect(result.current.theme).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(document.documentElement.dataset.theme).toBe("dark");

    act(() => result.current.toggleTheme());
    expect(result.current.theme).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("follows OS theme changes until the user picks manually", () => {
    const mock = createMatchMediaMock(false);
    window.matchMedia = vi.fn().mockReturnValue(mock.mql);

    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("light");

    mock.setMatches(true);
    act(() => mock.emitChange());
    expect(result.current.theme).toBe("dark");

    // A manual choice stops the OS listener from applying.
    act(() => result.current.toggleTheme());
    mock.setMatches(false);
    act(() => mock.emitChange());
    expect(result.current.theme).toBe("light");
  });
});
