import React from "react";
import "./MovieCard.css";

function MovieCard({ title, type, posterUrl }) {
  return (
    <div className="movie-card">
      <img src={posterUrl} alt={title} className="movie-card__image" />

      <div style={{ padding: "10px" }}>
        <h3 className="movie-card__title">{title}</h3>

        <div className="movie-card__type">{type}</div>
      </div>
    </div>
  );
}

export default MovieCard;
