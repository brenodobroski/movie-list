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
        <div className="movie-description__title">
          <h3>{movieProp.title}</h3>

          <div className="note">
            <img src="star.svg" alt="" className="star" />
            <p>{movieProp.vote_average}</p>
          </div>
        </div>
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
