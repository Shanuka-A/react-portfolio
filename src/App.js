// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';

import './App.css';
import Home from './components/Home';
import Company from './components/Company';
import Gallery from './components/Gallery';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My Portfolio</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/company">Company</Link>
            <Link to="/gallery">Gallery</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
