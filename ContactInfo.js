import React from 'react';

const ContactInfo = ({ contact }) => {
  return (
    <div>
      <h3>Contact Us</h3>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
    </div>
  );
};

export default ContactInfo;
