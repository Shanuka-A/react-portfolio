// src/Contact.js
import React from 'react';
import { generateVCard } from './utils';

const Contact = () => {
  const handleSaveContact = () => {
    const name = 'Your Name';
    const phoneNumber = 'Your Phone Number';
    const email = 'your.email@example.com';
    generateVCard(name, phoneNumber, email);
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <p>Name: Your Name</p>
      <p>Phone: Your Phone Number</p>
      <p>Email: your.email@example.com</p>
      <button onClick={handleSaveContact}>Save Contact</button>
    </div>
  );
};

export default Contact;
