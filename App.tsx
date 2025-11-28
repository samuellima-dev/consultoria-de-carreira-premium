import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-graphite-800 selection:bg-linkedin-200 selection:text-linkedin-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Methodology />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;