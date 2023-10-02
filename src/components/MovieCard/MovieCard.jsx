/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = ({ movieProp }) => {
  return (
    <div className="MovieCard">
      <div className="movie-image">
        <img
          src={`https://image.tmdb.org/t/p/w1280${movieProp.poster_path}`}
          alt={movieProp.title}
        />
      </div>

      <div className="movie-description">
        <h3>{movieProp.title}</h3>
        <Link to={`/movie/${movieProp.id}`} className="btn-details">
          <button>
            <span className="text">Ver detalhes</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
