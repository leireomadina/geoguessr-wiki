import React from "react";
import { Link } from "react-router-dom";
import { countries } from "@/data/countries";
import { formatCountryCount } from "@/utils/countryUtils";
import "@/styles/Home.css";

const Home: React.FC = () => {
  // Get unique continents from our data and sort them
  const continents = Array.from(
    new Set(countries.map((country) => country.continent)),
  ).sort((a, b) => a.localeCompare(b));

  const getCountryCountText = (continent: string) => {
    const count = countries.filter(
      (country) => country.continent === continent,
    ).length;
    return formatCountryCount(count);
  };

  return (
    <div className="home-container">
      <section className="hero">
        <h1>
          WHERE THE <i>****</i> AM I?
        </h1>
        <p>Your survival guide for identifying Filipinadas & Argentinadas.</p>
      </section>

      <div className="continent-grid">
        {continents.map((continent) => (
          <Link
            key={continent}
            to={`/continent/${continent.toLowerCase()}`}
            className="continent-card"
          >
            <div className="continent-card-content">
              <h2>{continent}</h2>
              <span className="country-count">
                {getCountryCountText(continent)}
              </span>
            </div>
            <div className="card-arrow">→</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
