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
const splitSubPaths = (pathData: string): string[] => {
  const subPaths: string[] = [];
  let currentSubPath = "";

  for (const char of pathData) {
    if ((char === "M" || char === "m") && currentSubPath) {
      subPaths.push(currentSubPath);
      currentSubPath = "";
    }
    currentSubPath += char;
  }

  if (currentSubPath) subPaths.push(currentSubPath);

  return subPaths;
};

interface Box {
  x: number;
  y: number;
  width: number;
  height: number;
  area: number;
}

// Label layout tuning: how much of a shape's width a label may occupy before
// it is placed beside the shape instead, and the gap between shape and label.
const LABEL_FIT_RATIO = 0.85;
const LABEL_OFFSET_PX = 8;

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
    const svgElement = svgRef.current;
    if (!svgElement || !map) return;

    // Dev-only consistency check: a region renders on the map only when its
    // name exactly matches an SVG <path title> (the regionMaps config is keyed
    // by name). A typo, accent, or whitespace difference would otherwise drop
    // the region silently, so warn loudly in dev (tree-shaken from production
    // builds) instead of letting mismatches go unnoticed.
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

    const viewBoxWidth = Number(map.viewBox.split(" ")[2]);

    const mainSubPathBox = (shapeElement: SVGPathElement): Box | undefined => {
      const pathData = shapeElement.getAttribute("d") ?? "";
      let largestBox: Box | undefined;

      for (const subPath of splitSubPaths(pathData)) {
        const measureElement = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path",
        );
        measureElement.setAttribute("d", subPath);
        svgElement.appendChild(measureElement);

        const bbox = measureElement.getBBox();
        measureElement.remove();

        const subPathBox = {
          x: bbox.x,
          y: bbox.y,
          width: bbox.width,
          height: bbox.height,
          area: bbox.width * bbox.height,
        };

        if (!largestBox || subPathBox.area > largestBox.area) {
          largestBox = subPathBox;
        }
      }

      return largestBox;
    };

    const regionGroups = Array.from(
      svgElement.querySelectorAll<SVGGElement>(".region-map-group")
    );

    const regionBoxes = regionGroups.map((group) => {
      const shapeElement = group.querySelector<SVGPathElement>(".region-shape");
      return shapeElement ? mainSubPathBox(shapeElement) : undefined;
    });

    const fillColors = assignRegionColors(regionBoxes);

    for (
      let regionIndex = 0;
      regionIndex < regionGroups.length;
      regionIndex++
    ) {
      const group = regionGroups[regionIndex];
      const shapeElement = group.querySelector<SVGPathElement>(".region-shape");
      const labelElement = group.querySelector<SVGTextElement>(".region-label");
      if (!shapeElement || !labelElement) continue;

      const regionBox = regionBoxes[regionIndex];
      if (!regionBox) continue;

      shapeElement.style.fill = fillColors[regionIndex] ?? "";

      const labelBox = labelElement.getBBox();
      const centerX = regionBox.x + regionBox.width / 2;
      const centerY = regionBox.y + regionBox.height / 2;
      const labelFits = labelBox.width <= regionBox.width * LABEL_FIT_RATIO;
      labelElement.setAttribute("y", String(centerY));
      labelElement.setAttribute("dominant-baseline", "central");

      if (labelFits) {
        labelElement.setAttribute("x", String(centerX));
        labelElement.setAttribute("text-anchor", "middle");
      } else if (
        regionBox.x + regionBox.width + LABEL_OFFSET_PX + labelBox.width <=
        viewBoxWidth
      ) {
        labelElement.setAttribute(
          "x",
          String(regionBox.x + regionBox.width + LABEL_OFFSET_PX),
        );
        labelElement.setAttribute("text-anchor", "start");
      } else {
        labelElement.setAttribute("x", String(regionBox.x - LABEL_OFFSET_PX));
        labelElement.setAttribute("text-anchor", "end");
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
        {regions.map((region, regionIndex) => {
          const shape = map.regions[region.name];
          if (!shape) return null;

          const selected = regionIndex === selectedIndex;

          return (
            <g
              key={region.name}
              role="button"
              tabIndex={0}
              aria-label={`Select ${region.name}`}
              aria-pressed={selected}
              onClick={() => onSelect(regionIndex)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onSelect(regionIndex);
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
