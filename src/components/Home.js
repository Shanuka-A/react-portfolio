import React, { useState } from 'react';
import { generateVCard } from '../utils';
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaMoon, FaSun, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';
import picture from '../Assets/DSC_0064.jpg'; // Import the profile picture

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const name = 'Thanuja';
  const phoneNumber = '123';
  const email = 'your.email@example.com';
  const address = '123 Main St, Anytown, USA';

  const handleSaveContact = () => {
    generateVCard(name, phoneNumber, email, address);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'bg-gray-900 text-white min-h-screen flex justify-center items-center' : 'bg-white text-black min-h-screen flex justify-center items-center'}>
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 flex items-center"
      >
        {darkMode ? <FaSun size={20} className="mr-2" /> : <FaMoon size={20} className="mr-2" />}
         {darkMode} 
      </button>
      <div className={darkMode ? 'bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-4' : 'bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-lg mx-4'}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <img
            src={picture}
            alt="Profile"
            className="w-36 h-36 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 mt-6 text-blue-600">Social Media</h3>
          <div className="flex justify-center space-x-4 mb-6">
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <FaTwitter size={30} />
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
              <FaGithub size={30} />
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
          <p className="mb-6">Hi, I'm {name}, a [Your Profession].</p>
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
          
          <button
            onClick={handleSaveContact}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Save Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
