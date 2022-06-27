import React from "react";
import "./MovieCard.css";

const MovieCard = ({ data, onSaveMovie }) => {
  function handleMovieSelect(e) {
    e.preventDefault();
    const movie = {
      title: data.Title,
    };
    onSaveMovie(movie);
  }

  return (
    <div className="movie-card-wrapper">
      <div className="movie-card-header">
        <h1 className="movie-card-title">{data.Title}</h1>
        <p className="movie-card-rating">{data.Rated}</p>
      </div>

      <div className="movie-card-banner">
        <img src={data.Poster} alt="Movie Poster" />
        <hr style={{ width: "100%" }}></hr>
        <p className="movie-card-plot">{data.Plot}</p>
      </div>

      <div className="movie-card-details">
        <section className="details-section">
          <h3>Director of film: </h3>
          <p>{data.Director}</p>
        </section>

        <section className="details-section">
          <h3>Movie released on:</h3>
          <p> {data.Released}</p>
        </section>

        <section className="details-section">
          <h3>Total runtime:</h3>
          <p> {data.Runtime}</p>
        </section>
        <section className="details-section">
          <h3>Revenue:</h3>
          <p> {data.BoxOffice}</p>
        </section>
        <button onClick={handleMovieSelect}>+</button>
      </div>
    </div>
  );
};

export default MovieCard;
