import React, { useState, useCallback } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuToggle = useCallback(() => {
    setToggleMenu(prev => !prev);
  }, []);


  return (
    <div className='local-navbar-container'>
      <div id='menu-icon'>
        <input type="checkbox" id="check-icon" hidden checked={toggleMenu} onChange={handleMenuToggle} />

        {/* Label references the checkbox via htmlFor, so any click toggles it */}
        <label className="icon-menu" htmlFor="check-icon">
          <div className="bar bar--1"></div>
          <div className="bar bar--2"></div>
          <div className="bar bar--3"></div>
        </label>
      </div>
      <ul className={`nav-links ${toggleMenu ? "active" : ""}`}>
        <li><a href="#hero" onClick={handleMenuToggle}>Resume</a></li>
        <li><a href="#about" onClick={handleMenuToggle}>About</a></li>
        <li><a href="#experience" onClick={handleMenuToggle}>Experience</a></li>
        <li><a href="#projects" onClick={handleMenuToggle}>Projects</a></li>
        <li><a href="#contact" onClick={handleMenuToggle}>Contact</a></li>
      </ul>



    </div>
  );
};

export default Navbar;