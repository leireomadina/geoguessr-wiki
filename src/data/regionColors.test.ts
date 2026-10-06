import { describe, expect, it } from "vitest";
import { assignRegionColors, REGION_PALETTES } from "@/data/regionColors";
import type { BoxLike } from "@/data/regionColors";

const ALL_COLORS = Object.values(REGION_PALETTES).flat();

const box = (x: number, y: number, width = 10, height = 10): BoxLike => ({
  x,
  y,
  width,
  height,
});

// Every pair of boxes that overlap or touch must get different colors
function expectNoAdjacentDuplicates(
  boxes: BoxLike[],
  colors: (string | undefined)[],
) {
  for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      const a = boxes[i];
      const b = boxes[j];
      const overlap =
        a.x <= b.x + b.width &&
        b.x <= a.x + a.width &&
        a.y <= b.y + b.height &&
        b.y <= a.y + a.height;
      if (overlap) {
        expect(colors[i], `boxes ${i} and ${j}`).not.toBe(colors[j]);
      }
    }
  }
}

describe("assignRegionColors", () => {
  it("returns one color per box", () => {
    const boxes = [box(0, 0), box(100, 0), box(200, 0)];

    expect(assignRegionColors(boxes)).toHaveLength(boxes.length);
  });

  it("returns an empty array for no boxes", () => {
    expect(assignRegionColors([])).toEqual([]);
  });

  it("only uses colors from the palettes", () => {
    const boxes = Array.from({ length: 20 }, (_, i) => box(i * 100, 0));

    for (const color of assignRegionColors(boxes)) {
      expect(ALL_COLORS).toContain(color);
    }
  });

  it("gives overlapping boxes different colors", () => {
    const boxes = [box(0, 0), box(5, 5), box(8, 2)];

    expectNoAdjacentDuplicates(boxes, assignRegionColors(boxes));
  });

  it("treats boxes that only touch at an edge as adjacent", () => {
    const boxes = [box(0, 0), box(10, 0)]; // shared edge at x = 10

    const [first, second] = assignRegionColors(boxes);
    expect(first).not.toBe(second);
  });

  it("never repeats a color among neighbors on a dense grid", () => {
    // 5x5 grid of touching boxes, like a map of small adjacent regions
    const boxes = Array.from({ length: 25 }, (_, i) =>
      box((i % 5) * 10, Math.floor(i / 5) * 10),
    );

    expectNoAdjacentDuplicates(boxes, assignRegionColors(boxes));
  });

  it("avoids a neighbor's color even when the rotation would land on it", () => {
    // The starting color rotates per shape, so shape N and shape N + ALL_COLORS.length
    // start from the same color. Make exactly those two overlap: only the
    // conflict check (not the rotation) can keep them apart.
    const boxes = Array.from({ length: ALL_COLORS.length + 1 }, (_, i) =>
      box(i * 100, 0),
    );
    boxes[ALL_COLORS.length] = box(5, 5); // overlaps boxes[0]

    const colors = assignRegionColors(boxes);
    expect(colors[ALL_COLORS.length]).not.toBe(colors[0]);
  });

  it("is deterministic, so colors stay stable across re-renders", () => {
    const boxes = [box(0, 0), box(5, 5), box(50, 50), box(55, 55)];

    expect(assignRegionColors(boxes)).toEqual(assignRegionColors(boxes));
  });

  it("maps undefined boxes to undefined colors and still colors the rest", () => {
    const colors = assignRegionColors([box(0, 0), undefined, box(5, 5)]);

    expect(colors[1]).toBeUndefined();
    expect(colors[0]).toBeDefined();
    expect(colors[2]).toBeDefined();
    expect(colors[0]).not.toBe(colors[2]);
  });
});
