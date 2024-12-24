import React, { useState } from "react";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import BookingForm from "./components/BookingForm";
import BookingConfirmation from "./components/BookingConfirmation";

import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("movieList"); 
  const [selectedMovie, setSelectedMovie] = useState(null); 
  const [bookingData, setBookingData] = useState(null); 

  const navigateTo = (page) => setCurrentPage(page); 

  return (
    <div className="app">
      {currentPage === "movieList" && (
        <MovieList setSelectedMovie={setSelectedMovie} navigateTo={navigateTo} />
      )}
      {currentPage === "movieDetails" && (
        <MovieDetails
          movie={selectedMovie}
          navigateTo={navigateTo}
        />
      )}
      {currentPage === "bookingForm" && (
        <BookingForm
          setBookingData={setBookingData}
          navigateTo={navigateTo}
        />
      )}
      {currentPage === "bookingConfirmation" && (
        <BookingConfirmation
          bookingData={bookingData}
          navigateTo={navigateTo}
        />
      )}
    </div>
  );
};

export default App;
