import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, useLocation } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
            <NavLink to="/company" className={({ isActive }) => isActive ? 'active' : ''}>Company</NavLink>
            <NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''}>Gallery</NavLink>
          </nav>
        </header>
        <main>
          <AnimatedRoutes darkMode={darkMode} />
        </main>
      </div>
    </Router>
  );
}

function AnimatedRoutes({ darkMode }) {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        <Routes location={location}>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/company" element={<Company darkMode={darkMode} />} />
          <Route path="/gallery" element={<Gallery darkMode={darkMode} />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
