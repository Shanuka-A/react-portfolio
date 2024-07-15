import React from 'react';
import picture2 from '../Assets/5490520.jpg';
import picture3 from '../Assets/5357388.jpg';
import company2 from '../Assets/company (2).jpg';
import '../components/Gallery.css';

const Gallery = ({ darkMode }) => {
  return (
    <div className={darkMode ? 'bg-gray-900 text-white min-h-screen flex justify-center items-center' : 'bg-white text-black min-h-screen flex justify-center items-center'}>
      <div className={darkMode ? 'bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-4' : 'bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-lg mx-4'}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="box">
              <img src={company2} alt="Company 2" className="profile-image w-full h-auto rounded" />
            </div>
            <div>
              <img src={picture2} alt="Picture 2" className="profile-image w-full h-auto rounded" />
            </div>
            <div>
              <img src={picture3} alt="Picture 3" className="profile-image w-full h-auto rounded" />
            </div>
            <div>
              <img src={picture3} alt="Picture 3" className="profile-image w-full h-auto rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
