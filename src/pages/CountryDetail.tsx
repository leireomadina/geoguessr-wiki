import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { countries } from "@/data/countries";
import { getFlagEmoji } from "@/utils/countryUtils";
import "@/styles/CountryDetail.css";

const CountryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const country = countries.find((country) => country.id === id);

  return (
    <div className="country-detail-container">
      <section className="hero">
        <div className="hero-header">
          <button onClick={() => navigate(-1)} className="back-arrow-btn">
            ←
          </button>
          <h1>{country?.name ?? id}</h1>
        </div>
        <div className="country-meta">
          <span className="country-flag-large">
            {country ? getFlagEmoji(country.id) : "🏳"}
          </span>
          <div className="country-badges">
            <span className="iso-badge">.{id}</span>
            {country && (
              <span className={`side-badge ${country.drivingSide}`}>
                {country.drivingSide === "left" ? "🚗 L" : "R 🚗"}
              </span>
            )}
            {country && (
              <span className={`difficulty-badge ${country.difficulty}`}>
                {country.difficulty.replace("_", " ")}
              </span>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountryDetail;
