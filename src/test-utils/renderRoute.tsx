import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "@/App";

/**
 * Renders the whole app (real routes + Layout) at the given path(s).
 * Pass several paths to start with history behind the current page, e.g.
 * `renderRoute("/", "/country/ES")` so the back button has somewhere to go.
 */
export function renderRoute(...paths: string[]) {
  const entries = paths.length > 0 ? paths : ["/"];
  return {
    user: userEvent.setup(),
    ...render(
      <MemoryRouter initialEntries={entries} initialIndex={entries.length - 1}>
        <App />
      </MemoryRouter>,
    ),
  };
}
