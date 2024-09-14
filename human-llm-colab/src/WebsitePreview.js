import React from 'react';
import './WebsitePreview.css'; 

const WebsitePreview = () => {
  return (
    <div className="website-preview">
      <header className="header">
        <h1>Website Title</h1>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <h2>Welcome to the Website</h2>
        <p>This is a simple skeleton of a website.</p>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
};

export default WebsitePreview;
