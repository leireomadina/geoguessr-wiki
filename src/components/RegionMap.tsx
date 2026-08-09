import React, { useLayoutEffect, useRef } from "react";
import type { Region } from "@/types/country";
import { getRegionMap } from "@/data/regionMaps";
import { assignRegionColors } from "@/data/regionColors";
import "@/styles/RegionMap.css";

interface RegionMapProps {
  countryId: string;
  regions: Region[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

// Splits a path's `d` data into its sub-paths (each new sub-path starts with an M command).
const splitSubPaths = (d: string): string[] => {
  const parts: string[] = [];
  let current = "";
  for (const ch of d) {
    if ((ch === "M" || ch === "m") && current) {
      parts.push(current);
      current = "";
    }
    current += ch;
  }
  if (current) parts.push(current);
  return parts;
};

interface Box {
  x: number;
  y: number;
  width: number;
  height: number;
  area: number;
}

const RegionMap: React.FC<RegionMapProps> = ({
  countryId,
  regions,
  selectedIndex,
  onSelect,
}) => {
  const map = getRegionMap(countryId);
  const svgRef = useRef<SVGSVGElement>(null);

  // Positions each label automatically: centered on the shape when it fits,
  // or placed beside the shape when the shape is too small for the text.
  // The shape's box comes from its main sub-path only: source maps sometimes
  // include tiny extra sub-paths (e.g. a dot in a corner) that would drag
  // the label off the actual region. The same boxes also drive the automatic
  // fill colors, which are assigned once so adjacent shapes never match.
  useLayoutEffect(() => {
    const svg = svgRef.current;
    if (!svg || !map) return;

    if (import.meta.env.DEV) {
      const shapeNames = new Set(Object.keys(map.regions));
      const regionNames = new Set(regions.map((region) => region.name));
      for (const region of regions) {
        if (!shapeNames.has(region.name)) {
          console.warn(
            `[RegionMap] No map shape for region "${region.name}" - check that the SVG <path title> matches Region.name in the country data.`,
          );
        }
      }
      for (const name of shapeNames) {
        if (!regionNames.has(name)) {
          console.warn(
            `[RegionMap] Map shape "${name}" has no matching region in the country data.`,
          );
        }
      }
    }

    const vbWidth = Number(map.viewBox.split(" ")[2]);

    const mainBox = (pathEl: SVGPathElement): Box | undefined => {
      const d = pathEl.getAttribute("d") ?? "";
      let best: Box | undefined;
      for (const sub of splitSubPaths(d)) {
        const el = document.createElementNS("http://www.w3.org/2000/svg", "path");
        el.setAttribute("d", sub);
        svg.appendChild(el);
        const b = el.getBBox();
        el.remove();
        const box = {
          x: b.x,
          y: b.y,
          width: b.width,
          height: b.height,
          area: b.width * b.height,
        };
        if (!best || box.area > best.area) best = box;
      }
      return best;
    };

    const groups = Array.from(
      svg.querySelectorAll<SVGGElement>(".region-map-group")
    );

    const boxes = groups.map((group) => {
      const path = group.querySelector<SVGPathElement>(".region-shape");
      return path ? mainBox(path) : undefined;
    });
    const colors = assignRegionColors(boxes);

    for (let i = 0; i < groups.length; i++) {
      const group = groups[i];
      const path = group.querySelector<SVGPathElement>(".region-shape");
      const text = group.querySelector<SVGTextElement>(".region-label");
      if (!path || !text) continue;
      const box = boxes[i];
      if (!box) continue;

      path.style.fill = colors[i] ?? "";

      const textBox = text.getBBox();
      const cx = box.x + box.width / 2;
      const cy = box.y + box.height / 2;
      const fits = textBox.width <= box.width * 0.85;
      text.setAttribute("y", String(cy));
      text.setAttribute("dominant-baseline", "central");
      if (fits) {
        text.setAttribute("x", String(cx));
        text.setAttribute("text-anchor", "middle");
      } else if (box.x + box.width + 8 + textBox.width <= vbWidth) {
        text.setAttribute("x", String(box.x + box.width + 8));
        text.setAttribute("text-anchor", "start");
      } else {
        text.setAttribute("x", String(box.x - 8));
        text.setAttribute("text-anchor", "end");
      }
    }
  }, [map, regions]);

  if (!map) return null;

  return (
    <>
      <svg
        ref={svgRef}
        className="region-map"
        viewBox={map.viewBox}
        role="group"
        aria-label={`Interactive region map for ${regions.length} regions - use the region cards to select`}
      >
        {regions.map((region, i) => {
          const shape = map.regions[region.name];
          if (!shape) return null;
          const selected = i === selectedIndex;
          return (
            <g
              key={region.name}
              role="button"
              tabIndex={0}
              aria-label={`Select ${region.name}`}
              aria-pressed={selected}
              onClick={() => onSelect(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(i);
                }
              }}
              className={`region-map-group${selected ? " selected" : ""}`}
            >
              <path
                className={`region-shape${selected ? " selected" : ""}`}
                d={shape.d}
              />
              <text className="region-label">{shape.label}</text>
            </g>
          );
        })}
      </svg>
      <span className="sr-only" aria-live="polite">
        {regions[selectedIndex]
          ? `${regions[selectedIndex].name} selected`
          : ""}
      </span>
    </>
  );
};

export default RegionMap;
