import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../css/navication.css';

export default function Navication() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="mainHeader">
      <nav className="mainNav">
        <div className="logoSection">
          <Link to='/'>
            <img src='/images/logo.jpg' alt="Michael-UI-Developer-Logo" className="mainLogo" />
          </Link>
        </div>
        {/* Hamburger icon for mobile view */}
        <div className="menuToggle" onClick={toggleMenu}>
            <span className="material-symbols-rounded">{isOpen ? 'close' : 'menu'}</span>
        </div>

        {/* Standard navigation list (visible on larger screens) */}
        <ul className="navList">
          <li className="listItem">
            <Link to='/'> Home </Link>
          </li>
          <li className="listItem">
            <Link to='/about'> About </Link>
          </li>
          <li className="listItem">
            <Link to='/user'> User </Link>
          </li>
          <li className="listItem">
            <Link to='/contact'> Contact </Link>
          </li>
        </ul>

        {/* Mobile navigation list (only shown on mobile view) */}
        <ul className={`mobileNavList ${isOpen ? 'open' : ''}`}>
          <li className="listItem">
            <Link to='/' onClick={() => setIsOpen(false)}> Home </Link>
          </li>
          <li className="listItem">
            <Link to='/about' onClick={() => setIsOpen(false)}> About </Link>
          </li>
          <li className="listItem">
            <Link to='/user' onClick={() => setIsOpen(false)}> User </Link>
          </li>
          <li className="listItem">
            <Link to='/contact' onClick={() => setIsOpen(false)}> Contact </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}