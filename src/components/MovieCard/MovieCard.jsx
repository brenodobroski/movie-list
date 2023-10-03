/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";

import "./MovieCard.scss";

const MovieCard = ({ movieProp }) => {
  function translateNote() {
    return (
      <NumericFormat
        value={movieProp.vote_count}
        thousandSeparator=","
        displayType="text"
      />
    );
  }
  function translateNoteGeral() {
    return (
      <NumericFormat
        value={movieProp.vote_average}
        decimalScale={1}
        displayType="text"
      />
    );
  }

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

          <div className="imdb">
            <div className="note">
              <img src="star.svg" alt="" className="star" />
              <p>
                {translateNoteGeral()} <span className="imdb-10">/10</span>
              </p>
            </div>

            <p className="number-votes">{translateNote()}</p>
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
