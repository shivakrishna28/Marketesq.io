import React from 'react';

const BookingDetails = ({ booking }) => {
  return (
    <div>
      <h2>Booking Details</h2>
      <p><strong>Location:</strong> {booking.location}</p>
      <p><strong>Check-in:</strong> {booking.checkIn}</p>
      <p><strong>Check-out:</strong> {booking.checkOut}</p>
      <p><strong>Rooms:</strong> {booking.rooms}</p>
      <p><strong>Price:</strong> {booking.price}</p>
    </div>
  );
};

export default BookingDetails;
