// src/Company.js
import React from 'react';

const Company = () => {
  return (
    <div>
      <h2>About the Company</h2>
      <p>Welcome to [Company Name]. We specialize in [Company's Specialization].</p>
      <h3>Contact Information</h3>
      <p>Phone: [Company Phone Number]</p>
      <p>Email: [Company Email]</p>
      <p>Address: [Company Address]</p>
      <h3>Social Media</h3>
      <div>
        <a href="https://twitter.com/company-profile" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com/company/company-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/company-profile" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default Company;
