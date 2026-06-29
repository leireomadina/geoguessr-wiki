import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { countries } from "@/data/countries";
import {
  getFlagEmoji,
  sortCountriesByName,
  formatCountryCount,
} from "@/utils/countryUtils";
import "@/styles/ContinentDetail.css";

const ContinentDetail: React.FC = () => {
  const { continentName } = useParams<{ continentName: string }>();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("");

  const countriesInContinent = sortCountriesByName(
    countries.filter(
      (country) => country.continent.toLowerCase() === continentName,
    ),
  );

  const filteredCountries = countriesInContinent.filter(
    (country) =>
      (country.name.toLowerCase().includes(searchText.toLowerCase()) ||
        country.id.toLowerCase().includes(searchText.toLowerCase())) &&
      (difficultyFilter === "" || country.difficulty === difficultyFilter),
  );

  const getStatsText = () => {
    return `${formatCountryCount(filteredCountries.length)}`;
  };

  return (
    <div className="continent-detail-container">
      <section className="hero">
        <div className="hero-header">
          <button onClick={() => navigate(-1)} className="back-arrow-btn">
            ←
          </button>
          <h1>{continentName}</h1>
          <p className="stats-text">{getStatsText()}</p>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search country or ISO code..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search-input"
          />
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="difficulty-filter"
          >
            <option value="">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            <option value="very_hard">Very Hard</option>
          </select>
        </div>
      </section>

      <div className="country-grid">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
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
          ))
        ) : (
          <div className="no-results">
            <p>No countries found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContinentDetail;
