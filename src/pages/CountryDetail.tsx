import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { countries } from "@/data/countries";
import { getFlagEmoji } from "@/utils/countryUtils";
import "@/styles/CountryDetail.css";
import RegionCard from "@/components/RegionCard";
import RegionMap from "@/components/RegionMap";
import type { Difficulty } from "@/types/country";
import NotFound from "./NotFound";

const CountryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isRegionToggleOpen, setRegionToggleOpen] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState(0);

  const country = countries.find(
    (country) => country.id.toLowerCase() === id?.toLowerCase(),
  );

  const difficultyOrder: Difficulty[] = ["easy", "medium", "hard", "very_hard"];

  const sortedMeta = country?.meta
    ? [...country.meta].sort(
        (a, b) =>
          difficultyOrder.indexOf(a.tag) - difficultyOrder.indexOf(b.tag),
      )
    : [];

  const hasRegionMap = country?.id === "AU";

  if (!country) {
    return <NotFound />;
  }

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

      {country && country.meta && country.meta.length > 0 && (
        <section className="resources-section">
          <h2 className="section-title">Meta</h2>
          <dl className="key-data-grid">
            {sortedMeta.map((item, i) => (
              <div key={i} className="key-data-item">
                <dd>{item.value}</dd>
                <div className="meta-tag-row">
                  <span className={`meta-tag-dot ${item.tag}`} />
                  <span className="meta-tag-text">
                    {item.tag.replace("_", " ")}
                  </span>
                </div>
              </div>
            ))}
          </dl>
        </section>
      )}

      {country && country.regions && (
        <section className="resources-section">
          <h2
            className="section-title regions-toggle"
            onClick={() => setRegionToggleOpen((prev) => !prev)}
          >
            Regions
            <span className={`regions-arrow ${isRegionToggleOpen ? "open" : ""}`}>
              ▼
            </span>
          </h2>
          <div className={`regions-grid-wrapper ${isRegionToggleOpen ? "open" : ""}`}>
            <div className="regions-grid">
              {country.regions.length > 0 ? (
                country.regions.map((region, i) => (
                  <RegionCard
                    key={i}
                    region={region}
                    selected={hasRegionMap && i === selectedRegion}
                    onSelect={hasRegionMap ? () => setSelectedRegion(i) : undefined}
                  />
                ))
              ) : (
                <div className="region-card region-placeholder">
                  <span className="region-icon">🚧</span>
                  <div className="region-info">
                    <h3 className="region-name">Coming soon</h3>
                    <p className="region-description">
                      Regions for this country are currently being prepared. Check back later!
                    </p>
                  </div>
                </div>
              )}
            </div>

            {hasRegionMap && country.regions.length > 0 && (
              <div className="regions-explore">
                <div className="region-map-frame">
                  <RegionMap
                    countryId={country.id}
                    regions={country.regions}
                    selectedIndex={selectedRegion}
                    onSelect={setSelectedRegion}
                  />
                </div>
                <aside className="region-detail-panel">
                  {country.regions[selectedRegion] && (
                    <>
                      <span className="region-detail-index">
                        Region {selectedRegion + 1} / {country.regions.length}
                      </span>
                      <span className="region-detail-icon">
                        {country.regions[selectedRegion].icon}
                      </span>
                      <h3 className="region-detail-name">
                        {country.regions[selectedRegion].name}
                      </h3>
                      {country.regions[selectedRegion].cities && (
                        <p className="region-detail-cities">
                          {country.regions[selectedRegion].cities}
                        </p>
                      )}
                      <p className="region-detail-description">
                        {country.regions[selectedRegion].description}
                      </p>
                    </>
                  )}
                </aside>
              </div>
            )}
          </div>
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
