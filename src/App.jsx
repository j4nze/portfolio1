import './App.css';
import React from 'react';
import Navbar from './navbar.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-16">
        {/* ABOUT ME Section */}
        <section id="about" className="h-screen p-8">
        <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>
        <p className="text-lg text-justify mb-6 w-1/2 mx-auto text-center">
          I am John Rancel C. Batulan, and presently taking the OJT program. I am interested in Web Development using Javascript and Windows Application Development using Visual Basic and C#.
        </p>
        <p className="text-lg text-justify mb-20 w-1/2 mx-auto text-center">
          I am aiming on crafting digital solutions that enable seamless user experience, blending both functionality and aesthetics with a keen eye for details. Committed to continuous learning, I keep myself up-to-date with industry trends and best practices, enabling me to tackle complex challenges with cutting-edge solutions.
        </p>
        <a
          className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          href="public/resume_BATULAN.pdf"
          download
        >
          <span className="absolute -end-full transition-all group-hover:end-4">
            <svg
              className="size-5 rtl:rotate-180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span className="text-sm font-medium transition-all group-hover:me-4 text-white"> Download Resume </span>
        </a>      
      </section>

        {/* PROJECT Section */}
        <section id="proj" className="h-screen p-8">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded shadow-lg">
              <a href="public/desktop.jpg" target="_blank" rel="noopener noreferrer">
                <img src="public/desktop.jpg" alt="desktop" className="w-full h-auto rounded mb-7"/>
              </a>
              <h3 className="text-xl font-semibold text-black mb-16">POS and Inventory System</h3>
              <div className="flex items-center">
                <img src="public/vb.png" alt="Visual Basic Logo" className="w-10 h-10 mr-2"/>
                <span className="text-md text-black">Visual Basic</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow-lg">
              <a href="public/web.png" target="_blank" rel="noopener noreferrer">
                <img src="public/web.png" alt="web" className="w-full h-auto rounded mb-14"/>
              </a>
              <h3 className="text-xl font-semibold text-black mb-10">ST Health +: Clinic Information Management System</h3>
              <div className="flex flex-wrap items-center mt-2 ">
                <div className="flex items-center mr-4 mb-2 mr-10">
                  <img src="public/mongodb.png" alt="MongoDB Logo" className="w-10 h-10 mr-2"/>
                  <span className="text-md text-black">MongoDB</span>
                </div>
                <div className="flex items-center mr-4 mb-2">
                  <img src="public/expressjs.png" alt="Express.js Logo" className="w-10 h-10 mr-2"/>
                  <span className="text-md text-black">Express.js</span>
                </div>
                <div className="flex items-center mb-2 mr-14">
                  <img src="public/reactjs.png" alt="React.js Logo" className="w-10 h-10 mr-2"/>
                  <span className="text-md text-black">React.js</span>
                </div>
                <div className="flex items-center mr-4 mb-2">
                  <img src="public/nodejs.png" alt="Node.js Logo" className="w-10 h-10 mr-2"/>
                  <span className="text-md text-black">Node.js</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow-lg">
              <a href="public/prototyping.jpg" target="_blank" rel="noopener noreferrer">
                <img src="public/prototyping.jpg" alt="prototyping" className="w-full h-auto rounded mb-10"/>
              </a>
              <h3 className="text-xl font-semibold text-black mb-10">Bumo: Music Player with E-Book Reader Mobile Application</h3>
              <div className="flex items-center">
                <img src="public/adobexd.png" alt="Adobe XD Logo" className="w-10 h-10 mr-2"/>
                <span className="text-md text-black">Adobe XD</span>
              </div>
            </div>
          </div>
        </section>
        {/* CERTIFICATES Section */}
        <section id="cert" className="h-screen p-8">
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded shadow-lg flex flex-col items-center">
              <a href="public/nc2.jpg" target="_blank" rel="noopener noreferrer">
                <img src="public/nc2.jpg" alt="nc2" className="w-auto rounded mb-2" style={{ height: '300px' }} />
              </a>
              <h3 className="text-xl font-semibold text-black">National Certificate II: <br></br>Computer System Servicing</h3>
            </div>
            <div className="bg-white p-4 rounded shadow-lg">
              <a href="public/public-def-cert.jpg" target="_blank" rel="noopener noreferrer">
                <img src="public/public-def-cert.jpg" alt="public-def-cert" className="w-full h-auto rounded mb-10"/>
              </a>
              <h3 className="text-xl font-semibold text-black mb-10">Public Defense Certificate</h3>
            </div>
            <div className="bg-white p-4 rounded shadow-lg">
              <a href="public/prototyping-cert.jpg" target="_blank" rel="noopener noreferrer">
                <img src="public/prototyping-cert.jpg" alt="prototyping-cert" className="w-full h-auto rounded mb-10"/>
              </a>
              <h3 className="text-xl font-semibold text-black mb-10">Upscaled Webinar Series:<br></br>Prototyping</h3>
            </div>
          </div>
        </section>
        {/* EXPERIENCE Section */}
        {/* <section id="exp" className="h-screen p-8">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
        </section> */}
        {/* CONTACT Section */}
        <section id="contact" className="h-screen p-8">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-2xl mb-20">You can reach me through the following:</p>
          <p className="text-lg mb-6">Mobile: +63 976 246 6916</p>
          <p className="text-lg mb-6">Gmail: johnrancelb26@gmail.com</p>
          <div className="flex flex-col gap-4 items-center"> 
          <a
              className="group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
              href="https://www.facebook.com/janc3b/"
              target="_blank"
            >
              <span className="font-medium text-white group-hover:text-white"> Facebook </span>

              <span
                className="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500"
              >
                <svg
                  className="size-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>
            <a
              className="group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
              href="https://github.com/ranzuru"
              target="_blank"
            >
              <span className="font-medium text-white group-hover:text-white"> Github </span>

              <span
                className="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500"
              >
                <svg
                  className="size-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>
          </div>
        </section>
        <footer className="color-transition">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="mt-4 text-center text-sm lg:mt-0 lg:text-right color-white">
              Copyright &copy; 2022. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;
