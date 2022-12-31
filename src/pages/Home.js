import React from 'react';
import About from '../components/About';
import Collab from '../components/Collab';
import Projects from '../components/Projects';
import ContactBanner from '../components/ContactBanner';
import Hero from '../components/Hero';
import Skills from '../components/Skills';

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Collab />
      <Projects />
      <Skills />
      <ContactBanner />
    </div>
  );
}

export default Home;