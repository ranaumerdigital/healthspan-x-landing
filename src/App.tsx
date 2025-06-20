import React from 'react';
import Hero from './components/Hero';
import Speaker from './components/Speaker';
import Vision from './components/Vision';
import Features from './components/Features';
import Audience from './components/Audience';
import Sponsorship from './components/Sponsorship';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Speaker />
      <Vision />
      <Features />
      <Audience />
      <Sponsorship />
      <Contact />
    </div>
  );
}

export default App;