import React from "react";
import type { Region } from "@/types/country";
import "@/styles/RegionCard.css";

interface RegionCardProps {
  region: Region;
}

const RegionCard: React.FC<RegionCardProps> = ({ region }) => {
  return (
    <div className="region-card">
      <span className="region-icon">{region.icon}</span>
      <div className="region-info">
        <h3 className="region-name">{region.name}</h3>
        {region.cities && (
          <p className="region-cities">{region.cities}</p>
        )}
        <p className="region-description">{region.description}</p>
      </div>
    </div>
  );
};
export default RegionCard;
