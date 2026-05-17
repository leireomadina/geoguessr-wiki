import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { countries } from "../data/countries";
import {
  getFlagEmoji,
  sortCountriesByName,
  formatCountryCount,
} from "../utils/countryUtils";
import "../styles/ContinentDetail.css";

const ContinentDetail: React.FC = () => {
  const { continentName } = useParams<{ continentName: string }>();
  const navigate = useNavigate();

  const countriesInContinent = sortCountriesByName(
    countries.filter((country) => country.continent === continentName),
  );

  const getStatsText = () => {
    return `${formatCountryCount(countriesInContinent.length)} found`;
  };

  return (
    <div className="continent-detail-container">
      <section className="hero">
        <button onClick={() => navigate(-1)} className="back-arrow-btn">
          ←
        </button>
        <h1>{continentName}</h1>
        <p>{getStatsText()}</p>
      </section>

      <div className="country-grid">
        {countriesInContinent.map((country) => (
          <Link
            key={country.id}
            to={`/country/${country.id}`}
            className="country-card"
          >
            <div className="country-card-header">
              <span className="country-flag">{getFlagEmoji(country.id)}</span>
              <div className="country-info">
                <h2>{country.name}</h2>
                <div className="country-badges">
                  <span className="iso-badge">{country.id}</span>
                  <span className={`side-badge ${country.drivingSide}`}>
                    {country.drivingSide === "left" ? "⬅ L" : "R ➡"}
                  </span>
                  <span className={`difficulty-badge ${country.difficulty}`}>
                    {country.difficulty.replace("_", " ")}
                  </span>
                </div>
              </div>
            </div>
            <div className="card-arrow">→</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinentDetail;
