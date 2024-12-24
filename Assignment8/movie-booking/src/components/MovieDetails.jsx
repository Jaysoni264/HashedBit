import React from "react";

const MovieDetails = ({ movie, navigateTo }) => {
  return (
    <div className="container movie-details-page">
      <div className="movie-image-container">
        <img src={movie.image} alt={movie.title} className="movie-image" />
      </div>
      <h1>{movie.title}</h1>
      <p>{movie.details}</p>
      <button onClick={() => navigateTo("bookingForm")}>Book Seat</button>
    </div>
  );
};

export default MovieDetails;
