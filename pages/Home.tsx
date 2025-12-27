import React from 'react';
import Hero from '../components/Hero';
import { 
  AboutSection, 
  ScopesSection, 
  SpeakersSection, 
  TimelineSection, 
  Footer, 
  VenueSection,
  TargetAudienceSection,
  CallForPapersSection,
  SponsorsSection 
} from '../components/ConferenceSections';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="bg-slate-50 dark:bg-deepNavy relative transition-colors duration-300">
          {/* Transition Gradient */}
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-50 to-transparent dark:from-deepNavy dark:to-transparent z-10 pointer-events-none"></div>
          
          <AboutSection />
          <TargetAudienceSection />
          <ScopesSection />
          <SpeakersSection />
          <CallForPapersSection />
          <TimelineSection />
          <VenueSection />
          <SponsorsSection />
          <Footer />
      </div>
    </>
  );
};

export default Home;