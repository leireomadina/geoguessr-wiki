import React from "react";
import { countries } from "../data/countries";
import { useParams } from "react-router-dom";

const ContinentDetail: React.FC = () => {
  const { continentName } = useParams<{ continentName: string }>();

  const countriesByContinent = Array.from(new Set(countries)).filter(
    (country) => country.continent === continentName,
  );

  return (
    <div className="home-container">
      <section className="hero">
        <h1>{continentName}</h1>
        <p>{countriesByContinent.length} countries</p>
      </section>
      <section className="countriy-grid">
        {countriesByContinent.map((country) => (
          <div key={country.name} className="country">
            <h2>{country.name}</h2>
            <p>Difficulty: {country.difficulty}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ContinentDetail;
