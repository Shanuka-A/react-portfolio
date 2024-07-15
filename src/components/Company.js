import React from 'react';
import { generateVCard } from '../utils';
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaPhone,FaGlobe, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';
import picture from '../Assets/company (2).jpg'; // Import the profile picture

const Company = ({ darkMode }) => {
  const name = 'About Company';
  const phoneNumber = '011 8332145';
  const email = 'your.email@example.com';
  const address = '123 Main St, Anytown, USA';
  const website =  'https://www.example.com';

  const handleSaveContact = () => {
    generateVCard(name, phoneNumber, email, address);
  };

  const containerStyle = darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black';
  const cardStyle = darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black';

  return (
    <div className={`${containerStyle} min-h-screen flex justify-center items-center`}>
      <div className={`${cardStyle} p-6 rounded-lg shadow-lg w-full max-w-lg mx-4`}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Company Name</h2>
          <img src={picture} alt="Profile" className="w-36 h-36 rounded-full mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 mt-6 text-blue-600">Social Media</h3>
          <div className="flex justify-center space-x-4 mb-6">
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <FaTwitter size={30} />
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
              <FaLinkedin size={30} />
            </a>
            <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaFacebook size={30} />
            </a>
            <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
              <FaInstagram size={30} />
            </a>
            <a href="https://threads.net/your-profile" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
              <SiThreads size={30} />
            </a>
          </div>
          <p className="mb-6">{name}</p>
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Contact Information</h3>
          <p className="flex items-center justify-center mb-2">
            <FaPhone className="mr-2" /> {phoneNumber}
          </p>
          <p className="flex items-center justify-center mb-2">
            <FaEnvelope className="mr-2" /> {email}
          </p>
          <p className="flex items-center justify-center mb-2">
            <FaMapMarkerAlt className="mr-2" /> {address}
          </p>
          <p className="flex items-center justify-center mb-2">
            <FaGlobe className="mr-2" /> {website}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Company;
