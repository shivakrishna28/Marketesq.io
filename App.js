import React from 'react';
import ServiceList from './components/ServiceList';
import BookingDetails from './components/BookingDetails';
import ContactInfo from './components/ContactInfo';

const App = () => {
  const services = [
    'High Speed Internet',
    'Transportation',
    'Job Rental Service',
    'Online Shop',
    'Food Delivery',
    'Tourism',
  ];

  const bookingDetails = {
    location: 'Spituk, Ladakh, India, 194101',
    checkIn: '01 Feb 2022',
    checkOut: '07 Feb 2022',
    rooms: 1,
    price: '₹ 12,430',
  };

  const contactInfo = {
    email: 'amit.jha6700@gmail.com',
    phone: '+91 - 7764997033',
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to Brisphere</h1>
      <ServiceList services={services} />
      <BookingDetails booking={bookingDetails} />
      <ContactInfo contact={contactInfo} />
    </div>
  );
};

export default App;
