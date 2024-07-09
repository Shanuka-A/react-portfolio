// src/components/Footer.js
import React from 'react';
import { generateVCard } from '../utils';

const Footer = () => {
  const phoneNumber = '0710533285'; // Replace with the existing phone number
  const name = 'Shanuka Amarasinghe'; // Replace with the existing name

  const handleSave = () => {
    generateVCard(name, phoneNumber);
    alert(`Phone number ${phoneNumber} saved!`);
  };

  return (
    <footer>
      <h2>Contact Me</h2>
      <button onClick={handleSave}>Save Contact</button>
    </footer>
  );
};

export default Footer;
