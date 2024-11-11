import React from 'react';

const ServiceList = ({ services }) => {
  return (
    <div>
      <h2>Our Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
