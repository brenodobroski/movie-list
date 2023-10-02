/* eslint-disable no-unused-vars */
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "c5ec5dbd66ea50ce62b096dca322543c";

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService {
  static getMovies() {
    return axios(withBaseUrl("movie/popular"));
  }

  static getMovieDetails(id) {
    return axios(withBaseUrl(`movie/${id}`));
  }

  static searchMovies(movie) {
    return axios(withBaseUrl("search/movie") + `&query=${movie}`);
  }
}
