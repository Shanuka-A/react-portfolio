import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import './index.css';
import './App.css';
import Home from './components/Home';
import Company from './components/Company';
import Gallery from './components/Gallery';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
        <header className="App-header">
          
          <button onClick={toggleDarkMode} className="toggle-button">
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <nav>
            <Link to="/">About</Link>
            <Link to="/company">Company</Link>
            <Link to="/gallery">Gallery</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/company" element={<Company darkMode={darkMode} />} />
            <Route path="/gallery" element={<Gallery darkMode={darkMode} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
