import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="vismai-header">
      <div className="header-container">
        <img
          src="https://vismaifood.com/themes/pivisions/assets/images/logo.png"
          alt="Vismai Food Logo"
          className="logo"
        />
        <nav className="nav-menu">
          <a href="#">Home</a>
          <a href="#">Recipes</a>
          <a href="#">Videos</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
