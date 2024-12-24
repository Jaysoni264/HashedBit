import React from "react";
import movies from "../assets/movies";

const MovieList = ({ setSelectedMovie, navigateTo }) => {
  return (
    <div className="container">
      <h1 className="title">Book Your Movie Ticket Now !...</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => {
              setSelectedMovie(movie);
              navigateTo("movieDetails");
            }}
          >
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
