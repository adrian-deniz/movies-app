import React, { useEffect } from "react";

import PropTypes from "prop-types";

function MovieDetails({
  posterUrl,
  title,
  rated,
  runtime,
  genre,
  plot,
  actors,
  rating,
}) {
  return (
    <section style={{ border: "3px solid blue" }}>
      <div>
        <img src={posterUrl} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
        <span>{rating}</span>

        <ul>
          <li>{rated}</li>
          <li>{runtime}</li>
          <li>{genre}</li>
        </ul>

        <div>
          <h3>Plot</h3>
          <p>{plot}</p>
        </div>

        <div>
          <h3>Actors</h3>
          <p>{actors}</p>
        </div>
      </div>
    </section>
  );
}

MovieDetails.defaultProps = {
  genre: "Unknown",
};

MovieDetails.propTypes = {
  posterUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rated: PropTypes.string,
  runtime: PropTypes.string,
  genre: PropTypes.string,
  plot: PropTypes.string,
  actors: PropTypes.string,
  rating: PropTypes.number,
};

export default MovieDetails;

// // useState hook
// function useState(initialValue) {

//     let value = initialValue;

//     function updaterFunction(newValue) {
//         value = newValue;
//     }

//     return [value, updaterFunction];
// }

// function ScoreBoard() {
//     // let score = 0;
//     const [score, setScore] = useState(0);

//     setScore(4);

//     // score = score + 1;
//     setScore(score + 1);

//     useEffect(() => {
//         console.log("some function");

//         const doSomething =  () => {
//             // some thing to do when clicked
//         }

//         document.getElementById("sdlfjdsl").addEventListener("click", doSomething);

//         // lots of code with side effects

//         return () => {

//             document.getElementById("sdlfjdsl").removeEventListener("click", doSomething);

//         }

//     }, [score])

//     return <div>{score}</div>
// }

// // invoking component function (rendering)
// ScoreBoard(); // 1
// ScoreBoard(); // 1
// ScoreBoard(); // 1
// ScoreBoard(); // 1
