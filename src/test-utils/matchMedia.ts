// jsdom does not implement matchMedia; the useTheme hook relies on it.
// Returns a controllable matchMedia object plus helpers to flip its `matches`
// value and fire its "change" listeners (useTheme subscribes to those).
export function createMatchMediaMock(initialMatches = false, media = "") {
  const listeners: Array<() => void> = [];
  const mql = {
    matches: initialMatches,
    media,
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
    // Cast: the mock covers only what useTheme uses, not the whole MediaQueryList type.
    mql: mql as unknown as MediaQueryList,
    setMatches: (matches: boolean) => {
      mql.matches = matches;
    },
    emitChange: () => {
      for (const listener of listeners) listener();
    },
    listenerCount: () => listeners.length,
  };
}
