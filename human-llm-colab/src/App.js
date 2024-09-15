import React, {useState} from 'react';
import Chat from './Chat';
import WebsitePreview from './WebsitePreview';
import './App.css';

function App() {
  // const [htmlString, setHtmlString] = useState(`
  //   <div class="website-preview">
  //     <header class="header">
  //       <h1>My Website</h1>
  //       <nav class="nav">
  //         <ul>
  //           <li>
  //             <button onClick={() => setCurrentPage('home')} class={currentPage === 'home' ? 'active' : ''}>
  //               Home
  //             </button>
  //           </li>
  //           <li>
  //             <button onClick={() => setCurrentPage('about')} class={currentPage === 'about' ? 'active' : ''}>
  //               About
  //             </button>
  //           </li>
  //           <li>
  //             <button onClick={() => setCurrentPage('contact')} class={currentPage === 'contact' ? 'active' : ''}>
  //               Contact
  //             </button>
  //           </li>
  //         </ul>
  //       </nav>
  //     </header>
  //     <main class="main-content">
  //       {currentPage === 'home' && (
  //         <div>
  //           <h2>Welcome to the Home Page</h2>
  //           <p>This is the home page of the website.</p>
  //         </div>
  //       )}
  //       {currentPage === 'about' && (
  //         <div>
  //           <h2>About Us</h2>
  //           <p>This is the about page of the website.</p>
  //         </div>
  //       )}
  //       {currentPage === 'contact' && (
  //         <div>
  //           <h2>Contact Us</h2>
  //           <p>This is the contact page of the website.</p>
  //         </div>
  //       )}
  //     </main>
  //     <footer class="footer">
  //       <p>&copy; 2023 Your Company</p>
  //     </footer>
  //   </div>
  // `);
  const [htmlString, setHtmlString] = useState(`
    <div class="website-preview">
    <header class="header">
      <h1>My Website</h1>
      <nav class="nav">
        <ul>
          <li>
            <button id="home-btn" class="active">Home</button>
          </li>
          <li>
            <button id="about-btn">About</button>
          </li>
          <li>
            <button id="contact-btn">Contact</button>
          </li>
        </ul>
      </nav>
    </header>

    <main class="main-content">
      <div id="home-page">
        <h2>Welcome to the Home Page</h2>
        <p>This is the home page of the website.</p>
      </div>
      <div id="about-page" style="display: none;">
        <h2>About Us</h2>
        <p>This is the about page of the website.</p>
      </div>
      <div id="contact-page" style="display: none;">
        <h2>Contact Us</h2>
        <p>This is the contact page of the website.</p>
      </div>
    </main>

    <footer class="footer">
      <p>&copy; 2023 Your Company</p>
    </footer>
  </div>

  <script>
    const homeBtn = document.getElementById('home-btn');
    const aboutBtn = document.getElementById('about-btn');
    const contactBtn = document.getElementById('contact-btn');

    const homePage = document.getElementById('home-page');
    const aboutPage = document.getElementById('about-page');
    const contactPage = document.getElementById('contact-page');

    function setCurrentPage(page) {
      homePage.style.display = page === 'home' ? 'block' : 'none';
      aboutPage.style.display = page === 'about' ? 'block' : 'none';
      contactPage.style.display = page === 'contact' ? 'block' : 'none';

      homeBtn.classList.toggle('active', page === 'home');
      aboutBtn.classList.toggle('active', page === 'about');
      contactBtn.classList.toggle('active', page === 'contact');
    }

    homeBtn.addEventListener('click', () => setCurrentPage('home'));
    aboutBtn.addEventListener('click', () => setCurrentPage('about'));
    contactBtn.addEventListener('click', () => setCurrentPage('contact'));
  </script>

  `);
  return (
    <div className="App">
      <div className="container">
        {/* Chat */}
        <div className="chat-section">
          <Chat htmlString={htmlString} setHtmlString={setHtmlString} />
        </div>

        {/* Website Preview */}
        <div className="website-preview-section">
          <WebsitePreview htmlString={htmlString} />
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
