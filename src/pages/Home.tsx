import React from "react";
import { Link } from "react-router-dom";
import { countries } from "../data/countries";
import "../styles/Home.css";

const Home: React.FC = () => {
  // Get unique continents from our data
  const continents = Array.from(new Set(countries.map((c) => c.continent)));

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
            to={`/continent/${continent}`}
            className="continent-card"
          >
            <div className="continent-card-content">
              <h2>{continent}</h2>
              <span className="country-count">
                {countries.filter((c) => c.continent === continent).length}{" "}
                Countries
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
