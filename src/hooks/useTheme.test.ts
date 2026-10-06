import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useTheme from "@/hooks/useTheme";
import { createMatchMediaMock } from "@/test-utils/matchMedia";

const defaultMatchMedia = window.matchMedia;

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

  it("defaults to dark when the OS prefers dark", () => {
    window.matchMedia = vi
      .fn()
      .mockReturnValue(createMatchMediaMock(true).mql);

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("dark");
    expect(document.documentElement.dataset.theme).toBe("dark");
  });

  it("ignores an invalid stored value and falls back to the OS preference", () => {
    localStorage.setItem("theme", "blue");

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("light");
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

  it("stops listening to OS changes after unmounting", () => {
    const mock = createMatchMediaMock(false);
    window.matchMedia = vi.fn().mockReturnValue(mock.mql);

    const { unmount } = renderHook(() => useTheme());
    expect(mock.listenerCount()).toBe(1);

    unmount();
    expect(mock.listenerCount()).toBe(0);
  });
});
