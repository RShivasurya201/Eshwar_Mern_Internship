import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeftSide from './components/leftside';
import RightSide from './components/rightside';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <LeftSide />
        <div className="right-side">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;
