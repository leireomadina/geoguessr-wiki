import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderRoute } from "@/test-utils/renderRoute";

describe("Layout", () => {
  it("shows the header navigation and the theme toggle on every page", () => {
    renderRoute("/country/ES");

    expect(screen.getByRole("link", { name: /GeoGuessr Wiki/ })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("button", { name: /Switch to (dark|light) theme/ })).toBeInTheDocument();
  });

  it("shows the current year in the footer", () => {
    renderRoute("/");

    expect(screen.getByText(`GeoGuessr Wiki © ${new Date().getFullYear()}`)).toBeInTheDocument();
  });

  it("returns home from the 404 page", async () => {
    const { user } = renderRoute("/some/unknown/page");

    expect(screen.getByRole("heading", { name: "404" })).toBeInTheDocument();
    await user.click(screen.getByRole("link", { name: "Back to the start" }));

    expect(screen.getByText(/WHERE THE/)).toBeInTheDocument();
  });
});
