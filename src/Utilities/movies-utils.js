const API_KEY = "9aea0f73";
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const getMoviesByName = async (title) => {
  const result = await fetch(`${BASE_URL}&s=${title}`);
  const { Search: moviesFound } = await result.json();

  return moviesFound;
};

const getMovieDetailsById = async (id) => {
  const result = await fetch(`${BASE_URL}&i=${id}`);
  const movie = await result.json();

  return movie;
};

// named export
export { getMoviesByName, getMovieDetailsById };
