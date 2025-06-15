import { seriesData } from "../api/seriesData";
import "./NetflixSeries.css"; 

  export const NetflixSeries=()=>{
  return(
    <ul className="series-container">
      {
        seriesData.map((currElem)=>{
          return(
    <li key={currElem.id}>
    <div>
    <img src={currElem.img_url} 
    alt="lr.jpg"
    width="20%"
    height="40%" />
    </div>
    <h2>Name:{currElem.name}</h2>
    <h3>Rating:{currElem.rating}</h3>
    <p>Summary:{currElem.description}</p>
    <p>Genre:{currElem.genre}</p>
    <p>Cast:{currElem.cast}</p>
    <a href={currElem.watch_url} target="_blank">
    <button>Watch Now</button>
    </a>
    </li>
    );
  })}
  </ul>
  );
}

export default NetflixSeries;//default export

