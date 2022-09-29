import { useState, useEffect } from "react";
import "./App.css";

import Header from "./Components/Header";
import MovieCard from "./Components/MovieCard";
import MovieDetails from "./Components/MovieDetails";

// import CartoonCard from "./Components/CartoonCard";

import { getMoviesByName, getMovieDetailsById } from "./Utilities/movies-utils";

// (async function () {
//   const movie = await getMovieDetailsById("tt1285016");

//   const movies = await getMoviesByName("batman");

//   // console.log(movie);
//   console.log(movies);
// })();

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const moviesResult = await getMoviesByName("batman");

      // console.log(moviesResult);

      setMovies(moviesResult);
    })();
  }, []);

  return (
    <div>
      {/* <Header
        title="Howdy!"
        textColor="orange"
        woohoo={[4, 5, 4, 6, 4, 34]}
        anotherOne="dj khaled"
      /> */}

      {/* <CartoonCard
        name="Rick"
        imageSource="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      />
      <CartoonCard
        name="Morty"
        imageSource="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      />
      <CartoonCard
        name="Summer"
        imageSource="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
      /> */}

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => {
          return (
            <MovieCard
              title={movie.Title}
              type={movie.Type}
              posterUrl={movie.Poster}
            />
          );
        })}
      </div>

      {/* <MovieCard
        title={movies[0].Title}
        type={movies[0].Type}
        posterUrl={movies[0].Poster}
      />

      <MovieCard
        title={movies[1].Title}
        type={movies[1].Type}
        posterUrl={movies[1].Poster}
      />

      <MovieCard
        title={movies[3].Title}
        type={movies[3].Type}
        posterUrl={movies[3].Poster}
      /> */}

      {/* <MovieDetails
        posterUrl="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        title="Jeepers Creepers"
        rated="R"
        runtime="90 min"
        // genre="Horror"
        plot="sdlfjlsdflk dslkfjlsdkj flkdsjfkj dslfjdslkj "
        actors="adsljfld sflkdjsflkjsdlkfjldskjf dslkfjldks flds"
        rating={4.8}
      /> */}
    </div>
  );
}

export default App;

// Header({title: "Howdy!", textColor: "green", woohoo: "yes"})
