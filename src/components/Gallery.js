// Gallery.js
import React, { useState } from 'react';
import company2 from '../Assets/company (2).jpg'; // Import additional picture 1
import picture2 from '../Assets/5490520.jpg'; // Import additional picture 2
import picture3 from '../Assets/5357388.jpg'; // Import additional picture 3
import { FaSun, FaMoon } from 'react-icons/fa'; // Assuming you're using react-icons for sun and moon icons
import '../components/Gallery.css'; // Import your CSS file

const Gallery = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPicture] = useState();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <button
        onClick={toggleDarkMode}
        className="toggle-button"
      >
        {darkMode ? <FaSun size={20} className="icon" /> : <FaMoon size={20} className="icon" />}
       
      </button>
      <div className="content">
        <div className="text-center">
          <h2 className="profile-name">Your Name</h2>
          
          <div className="profile-images">
           
            <img src={company2} alt="Company 2" className="profile-image" onMouseEnter={() => (company2)} />
            <img src={picture2} alt="Picture 2" className="profile-image" onMouseEnter={() => (picture2)} />
            <img src={picture3} alt="Picture 3" className="profile-image" onMouseEnter={() => (picture3)} />
            <img src={picture3} alt="Picture 3" className="profile-image" onMouseEnter={() => (picture3)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
