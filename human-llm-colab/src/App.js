import React from 'react';
import Chat from './Chat';
import WebsitePreview from './WebsitePreview';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        {/* Chat */}
        <div className="chat-section">
          <Chat />
        </div>

        {/* Website Preview */}
        <div className="website-preview-section">
          <WebsitePreview />
        </div>

        {/* Scratch Pad */}
        <div className="scratch-pad-section">
          <h2>Scratch Pad</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
