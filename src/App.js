import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import Resume from './components/Resume';
import './styles/App.css';
import GradientBackground from './components/GradientBG';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

import Footer from './components/Footer';
import ResumeButton from './components/ResumeButton';

// Lazy-loaded components
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Experience = lazy(() => import('./components/Experience'));
const Works = lazy(() => import('./components/Works'));

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title className='title-container'>Logan Falkenberg - Software Engineer</title>
        <meta
          name="description"
          content="Logan Falkenberg's portfolio showcasing experience, projects, and resume."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.loganfalkenberg.com" />
      </Helmet>
      <div className="app-container">
        <header>
          <Navbar />
        </header>
        <div className="background-container">
          <GradientBackground />
        </div>
        <main className="contents-container">
          {/* Hero Section with Title */}
          <section className="hero-section" id="hero">
            <div className="title-container">
              <h1>Logan Falkenberg</h1>
              <h2>Software Engineer</h2>
            </div>
          </section>
          
          {/* Suspense for Lazy-Loaded Sections */}
          <Suspense fallback={<div style={{ height: '100vh', textAlign: 'center' }}>Loading...</div>}>
            <div className="resume-container" id='resume'>
              {/* Resume and Loading will appear here */}
              <div className="resume-specific-container">
                <Resume />
              </div>
              <div className="button-container">
                <ResumeButton buttonText="Download Resume" />
              </div>
            </div>
            <section className="about-container" id="about">
              <About />
            </section>
            <section className="experience-section" id="experience">
              <Experience />
            </section>
            <section className="works-section" id="projects">
              <Works />
            </section>
            <section className="contact-section" id="contact">
              <Contact />
            </section>
          </Suspense>
          <footer className="footer-container">
            <Footer />
          </footer>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
