import React from 'react';
import Hero from '../components/Hero';
import { AboutSection, ScopesSection, SpeakersSection, TimelineSection, Footer, PricingSection, VenueSection } from '../components/ConferenceSections';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="bg-deepNavy relative">
          {/* Transition Gradient */}
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-deepNavy to-transparent z-10 pointer-events-none"></div>
          
          <AboutSection />
          <ScopesSection />
          <SpeakersSection />
          <TimelineSection />
          <PricingSection />
          <VenueSection />
          <Footer />
      </div>
    </>
  );
};

export default Home;