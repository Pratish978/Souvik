import React, { useState } from "react";
import { seriesData, aboutInfo } from "../api/seriesData";
import "./NetflixSeries.css";

export const NetflixSeries = () => {
  const [filteredData, setFilteredData] = useState(seriesData);
  const [showAbout, setShowAbout] = useState(false);

  const handleTopRatedClick = () => {
    setFilteredData(seriesData.filter((series) => series.rating > 8.5));
    setShowAbout(false);
  };

  const handleHomeClick = () => {
    setFilteredData(seriesData);
    setShowAbout(false);
  };

  const handleAboutClick = () => {
    setShowAbout(true);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1>Netflix Series</h1>
        <ul className="nav-links">
          <li><a href="#" onClick={handleHomeClick}>Home</a></li>
          <li><a href="#" onClick={handleTopRatedClick}>Top Rated</a></li>
          <li><a href="#" onClick={handleAboutClick}>About</a></li>
        </ul>
      </nav>

      {/* Conditional rendering */}
      {showAbout ? (
        <div className="about-section">
          <h1>{aboutInfo.title}</h1>
          <p>{aboutInfo.description}</p>
          <p><strong>Creator:</strong> {aboutInfo.creator}</p>
          <p><strong>Purpose:</strong> {aboutInfo.purpose}</p>
          <p><strong>Technologies:</strong> {aboutInfo.technologies.join(", ")}</p>
        </div>
      ) : (
        <ul className="series-container">
          {filteredData.map((currElem) => (
            <li key={currElem.id} className="series-card">
              <img
                src={currElem.img_url}
                alt={currElem.name}
                width="200px"
                height="250px"
              />
              <h2>{currElem.name}</h2>
              <h3>Rating: {currElem.rating}</h3>
              <p><strong>Summary:</strong> {currElem.description}</p>
              <p><strong>Genre:</strong> {currElem.genre.join(", ")}</p>
              <p><strong>Cast:</strong> {currElem.cast.join(", ")}</p>
              <a href={currElem.watch_url} target="_blank" rel="noopener noreferrer">
                <button>Watch Now</button>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NetflixSeries;
