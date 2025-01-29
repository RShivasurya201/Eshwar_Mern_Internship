// import React from 'react'
// import {Link} from "react-router-dom"
// import '../App.css'
// const Navbar = () => {
//   return (
//     <nav>
//       <Link to="/" className="nav-link">Home</Link>
//       <Link to="/about" className="nav-link">About</Link>
//       <Link to="/skills" className="nav-link">Skills</Link>
//     </nav>
    
//   )
// }

// export default Navbar
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Navbar styles are in App.css

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">About</Link>
      <Link to="/skills" className="nav-link">Skills</Link>
      <Link to="/projects" className="nav-link">Projects</Link>
    </nav>
  );
};

export default Navbar;
