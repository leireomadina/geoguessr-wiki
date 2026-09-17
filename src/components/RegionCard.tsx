import React from "react";
import type { Region } from "@/types/country";
import "@/styles/RegionCard.css";

interface RegionCardProps {
  region: Region;
  selected?: boolean;
  onSelect?: () => void;
}

const RegionCard: React.FC<RegionCardProps> = ({
  region,
  selected,
  onSelect,
}) => {
  return (
    <div
      className={`region-card${selected ? " selected" : ""}${
        onSelect ? " selectable" : ""
      }`}
      onClick={onSelect}
      role={onSelect ? "button" : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onKeyDown={
        onSelect
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect();
              }
            }
          : undefined
      }
    >
      <span className="region-icon">{region.icon}</span>
      <div className="region-info">
        <h3 className="region-name">{region.name}</h3>
        {region.cities && <p className="region-cities">{region.cities}</p>}
        <p className="region-description">{region.description}</p>
      </div>
    </div>
  );
};
export default RegionCard;
