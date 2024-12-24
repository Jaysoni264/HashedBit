import React, { useState } from "react";

const BookingForm = ({ setBookingData, navigateTo }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingData({ ...formData, bookingId: Math.floor(Math.random() * 100000) });
    navigateTo("bookingConfirmation");
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="form-container">
        <h1>Book Your Seat</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BookingForm;
