import React from 'react';
import Chat from './Chat'; // Your Chat component
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
          <h2>Website Preview</h2>
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
