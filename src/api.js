import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;
const LANGUAGE = "id-ID";
export const getMovies = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}&language=${LANGUAGE}`);
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}&language=${LANGUAGE}`);
  return search.data;
};
