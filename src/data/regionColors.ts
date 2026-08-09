/**
 * Region shape color palettes, grouped by temperature so the map stays varied:
 * warm and cool families are alternated when assigning colors, and shapes that
 * overlap (i.e. close to each other) are guaranteed to never share a color.
 */
export const REGION_PALETTES = {
  warm: ["#f87171", "#fb923c", "#fbbf24", "#f472b6", "#facc15"],
  cool: ["#38bdf8", "#22d3ee", "#2dd4bf", "#a78bfa", "#818cf8"],
  neutral: ["#4ade80", "#a3e635", "#34d399", "#94a3b8"],
} as const;

// Color candidates, alternated warm/cool/neutral so consecutive shapes tend to
// come from different families instead of forming same-colored stripes.
const CANDIDATES: string[] = [];
for (let i = 0; ; i++) {
  let added = false;
  for (const palette of ["warm", "cool", "neutral"] as const) {
    const color = REGION_PALETTES[palette][i];
    if (color) {
      CANDIDATES.push(color);
      added = true;
    }
  }
  if (!added) break;
}

export interface BoxLike {
  x: number;
  y: number;
  width: number;
  height: number;
}

const boxesOverlap = (a: BoxLike, b: BoxLike): boolean =>
  a.x <= b.x + b.width &&
  b.x <= a.x + a.width &&
  a.y <= b.y + b.height &&
  b.y <= a.y + a.height;

/**
 * Greedily picks a color per shape so that overlapping (adjacent) shapes never
 * share one. The starting color rotates per shape to keep the result varied;
 * the outcome is deterministic, so colors stay stable across re-renders.
 * Undefined boxes (shapes without geometry) map to undefined colors.
 */
export function assignRegionColors(
  boxes: (BoxLike | undefined)[],
): (string | undefined)[] {
  const assigned: (string | undefined)[] = new Array(boxes.length);

  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    if (!box) continue;

    const used = new Set<string>();
    for (let j = 0; j < i; j++) {
      const other = boxes[j];
      if (other && boxesOverlap(box, other)) used.add(assigned[j] as string);
    }

    let color = CANDIDATES[i % CANDIDATES.length];
    for (let offset = 0; offset < CANDIDATES.length; offset++) {
      const candidate = CANDIDATES[(i + offset) % CANDIDATES.length];
      if (!used.has(candidate)) {
        color = candidate;
        break;
      }
    }
    assigned[i] = color;
  }

  return assigned;
}
