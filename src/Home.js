// Home.js
import React from 'react';
import { generateVCard } from './utils';

const Home = () => {
  const name = 'Thanuja';
  const phoneNumber = '123';
  const email = 'your.email@example.com';
  const address = '123 Main St, Anytown, USA';

  const handleSaveContact = () => {
    generateVCard(name, phoneNumber, email, address);
  };

  return (
    <div>
      <h2>About Me</h2>
      <img src="path-to-your-profile-photo.jpg" alt="Profile" style={{ width: '150px', borderRadius: '50%' }} />
      <p>Hi, I'm {name}, a [Your Profession].</p>
      <h3>Contact Information</h3>
      <p>Phone: {phoneNumber}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
      <h3>Social Media</h3>
      <div>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <button onClick={handleSaveContact}>Save Contact</button>
    </div>
  );
};

export default Home;
