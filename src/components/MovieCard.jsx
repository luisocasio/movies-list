import React from "react";
import "./MovieCard.css";

const MovieCard = ({
  title,
  director,
  rated,
  released,
  runtime,
  boxOffice,
  plot,
  poster,
}) => {
  return (
    <div className="movie-card-wrapper">
      <div className="movie-card-header">
        <h1 className="movie-card-title">{title}</h1>
        <p className="movie-card-rating">{rated}</p>
      </div>

      <div className="movie-card-banner">
        <img src={poster} alt="Movie Poster" />
        <hr style={{ width: "100%" }}></hr>
        <p className="movie-card-plot">{plot}</p>
      </div>

      <div className="movie-card-details">
        <section className="details-section">
          <h3>Director of film: </h3>
          <p>{director}</p>
        </section>

        <section className="details-section">
          <h3>Movie released on:</h3>
          <p> {released}</p>
        </section>

        <section className="details-section">
          <h3>Total runtime:</h3>
          <p> {runtime}</p>
        </section>
        <section className="details-section">
          <h3>Revenue:</h3>
          <p> {boxOffice}</p>
        </section>
      </div>
    </div>
  );
};

export default MovieCard;
