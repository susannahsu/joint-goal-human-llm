import React, { useState } from 'react';
import './WebsitePreview.css';

const WebsitePreview = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="website-preview">
      <header className="header">
        <h1>My Website</h1>
        <nav className="nav">
          <ul>
            <li>
              <button
                onClick={() => setCurrentPage('home')}
                className={currentPage === 'home' ? 'active' : ''}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('about')}
                className={currentPage === 'about' ? 'active' : ''}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('contact')}
                className={currentPage === 'contact' ? 'active' : ''}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        {currentPage === 'home' && (
          <div>
            <h2>Welcome to the Home Page</h2>
            <p>This is the home page of the website.</p>
          </div>
        )}
        {currentPage === 'about' && (
          <div>
            <h2>About Us</h2>
            <p>This is the about page of the website.</p>
          </div>
        )}
        {currentPage === 'contact' && (
          <div>
            <h2>Contact Us</h2>
            <p>This is the contact page of the website.</p>
          </div>
        )}
      </main>
      <footer className="footer">
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
};

export default WebsitePreview;
