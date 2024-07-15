import React from 'react';
import {Link} from 'react-router-dom'

function Navbar({setCategory, category}) {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Google News</div>
      <ul className="navbar__links">
        <li><Link to="/">General</Link></li>
        <li><Link to="/business">Business</Link></li>
        <li><Link to="/technology">Technology</Link></li>
        <li><Link to="/entertainment">Entertainment</Link></li>
        <li><Link to="/sports">Sports</Link></li>
        <li><Link to="/science">Science</Link></li>
        <li><Link to="/health">Health</Link></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
