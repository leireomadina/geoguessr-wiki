import React from "react";
import { useParams, Link } from "react-router-dom";
import { countries } from "../data/countries";
import { getFlagEmoji, sortCountriesByName } from "../utils/countryUtils";
import "../styles/ContinentDetail.css";

const ContinentDetail: React.FC = () => {
  const { continentName } = useParams<{ continentName: string }>();

  const countriesInContinent = sortCountriesByName(
    countries.filter((country) => country.continent === continentName)
  );

  return (
    <div className="continent-detail-container">
      <section className="hero">
        <h1>{continentName}</h1>
        <p>
          {countriesInContinent.length}{" "}
          {countriesInContinent.length === 1 ? "country" : "countries"} found
        </p>
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
