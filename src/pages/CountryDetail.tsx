import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { countries } from "@/data/countries";
import { getFlagEmoji } from "@/utils/countryUtils";
import "@/styles/CountryDetail.css";

const CountryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [regionsOpen, setRegionsOpen] = useState(false);

  const country = countries.find(
    (country) => country.id.toLowerCase() === id?.toLowerCase(),
  );

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
            <span className="iso-badge">.{id?.toLowerCase()}</span>
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
            {country?.studyLinks
              .filter((link) => link.url.includes("plonkit"))
              .map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="plonkit-badge"
                >
                  plonkit →
                </a>
              ))}
          </div>
        </div>
      </section>

      {country && country.regions && country.regions.length > 0 && (
        <section className="resources-section">
          <button
            className="section-title regions-toggle"
            onClick={() => setRegionsOpen((prev) => !prev)}
          >
            Regions
            <span className={`regions-arrow ${regionsOpen ? "open" : ""}`}>
              ▼
            </span>
          </button>
          <div className={`regions-grid-wrapper ${regionsOpen ? "open" : ""}`}>
            <div className="regions-grid">
              {country.regions.map((region, i) => (
                <div key={i} className="region-card">
                  <span className="region-icon">{region.icon}</span>
                  <div className="region-info">
                    <h3 className="region-name">{region.name}</h3>
                    <p className="region-description">{region.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {country && country.meta && country.meta.length > 0 && (
        <section className="resources-section">
          <h2 className="section-title">Meta</h2>
          <dl className="key-data-grid">
            {country.meta.map((item, i) => (
              <div key={i} className="key-data-item">
                <dd>{item.value}</dd>
                <span className={`meta-tag-dot ${item.tag}`} />
                <span className="meta-tag-text">
                  {item.tag.replace("_", " ")}
                </span>
              </div>
            ))}
          </dl>
        </section>
      )}

      <section className="resources-section">
        <h2 className="section-title">Study links</h2>
        {country && country.studyLinks.length > 0 ? (
          <ul className="resources-list">
            {country.studyLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  {link.url.includes("plonkit") && (
                    <img
                      src="https://www.plonkit.net/favicon-32x32.png"
                      alt=""
                      className="plonkit-icon"
                    />
                  )}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-resources">No study links yet :(</p>
        )}
      </section>

      {country && country.videos && country.videos.length > 0 && (
        <section className="resources-section">
          <h2 className="section-title">Videos</h2>
          <ul className="resources-list">
            {country.videos.map((video, i) => (
              <li key={i}>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  <span
                    className={`platform-icon ${video.platform ?? "other"}`}
                  >
                    {video.platform === "youtube" ? "▶" : "🎬"}
                  </span>
                  {video.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default CountryDetail;
