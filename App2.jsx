import React from 'react';
import './App2.css';

function App2() {
  return (
    <footer className="vismai-footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Vismai Food</h2>
          <p>
            Vismai Food brings you the best, soul-touching recipes straight to your home. 
            We celebrate authentic Indian and international flavors, crafted with love and tradition.
            Our goal is to inspire home chefs and food lovers with easy-to-follow, flavorful recipes.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Get in Touch</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Our Recipes</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2021 Vismai Food. All rights reserved.</p>
        <p>Designed & Developed by <span>PiVisions</span></p>
      </div>
    </footer>
  );
}

export default App2;
