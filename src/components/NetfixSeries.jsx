import { seriesData } from "../api/seriesData";
import "./NetflixSeries.css";

export const NetflixSeries = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1>Netflix Series</h1>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Top Rated</a></li>
          <li><a href="#">Genres</a></li>
        </ul>
      </nav>

      {/* Series List */}
      <ul className="series-container">
        {seriesData.map((currElem) => (
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
    </div>
  );
};

export default NetflixSeries;
