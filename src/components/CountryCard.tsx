import React from "react";
import { Link } from "react-router-dom";
import { getFlagEmoji } from "@/utils/countryUtils";
import type { Country } from "@/types/country";
import "@/styles/CountryCard.css";

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <Link to={`/country/${country.id}`} className="country-card">
      <div className="country-card-header">
        <span className="country-flag">{getFlagEmoji(country.id)}</span>
        <div className="country-info">
          <h2>{country.name}</h2>
          <div className="country-badges">
            <span className="iso-badge">.{country.id.toLowerCase()}</span>
            <span className={`side-badge ${country.drivingSide}`}>
              {country.drivingSide === "left" ? "🚗 L" : "R 🚗"}
            </span>
            <span className={`difficulty-badge ${country.difficulty}`}>
              {country.difficulty.replace("_", " ")}
            </span>
          </div>
        </div>
      </div>
      <div className="card-arrow">→</div>
    </Link>
  );
};
export default CountryCard;
