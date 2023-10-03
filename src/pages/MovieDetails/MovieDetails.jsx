import { Link, useParams } from "react-router-dom";
import "./MovieDetails.scss";
import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService";
import { NumericFormat } from "react-number-format";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  async function getMovie() {
    const { data } = await MovieService.getMovieDetails(id);
    setMovie(data);
  }

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    console.log(movie);
  });

  function translateBudget() {
    return (
      <NumericFormat
        value={movie.budget}
        thousandSeparator=","
        displayType="text"
      />
    );
  }

  function translateNote() {
    return (
      <NumericFormat
        value={movie.vote_average}
        decimalScale={1}
        displayType="text"
      />
    );
  }

  return (
    <section className="MovieDetail">
      <div className="MovieDetail__container">
        <div className="MovieDetail__col">
          <div className="MovieDetail__image">
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              alt=""
            />
          </div>
        </div>

        <div className="MovieDetail__col">
          <div className="MovieDetail__details">
            <h1 className="MovieDetail__title">{movie.title}</h1>
            <div className="MovieDetail__detail">
              <span>Tempo de filme: </span> {movie.runtime}m
            </div>
            <div className="MovieDetail__detail">
              <span>Orçamento: </span> ${translateBudget()}M
            </div>
            <div className="MovieDetail__detail">
              <span>Nota: </span> {translateNote()}
            </div>
            <div className="MovieDetail__detail">
              <span>Descrição: </span> <br /> <br /> {movie.overview}
            </div>
          </div>
          <Link to={"/"}>
            <button onClick={getMovie()}>
              <span className="text">Voltar</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
