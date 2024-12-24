import React from "react";

const BookingConfirmation = ({ bookingData }) => {
  return (
    <div className="container">
      <h1>Seat Booked Successfully!</h1>
      <p>Booking ID: {bookingData.bookingId}</p>
      <p>Name: {bookingData.name}</p>
      <p>Email: {bookingData.email}</p>
      <p>Mobile: {bookingData.mobile}</p>
    </div>
  );
};

export default BookingConfirmation;
