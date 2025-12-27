import React from 'react';
import Link from 'next/link';
import { SpeakersSection, Footer } from '../../components/ConferenceSections.tsx';

// Additional invited speakers data
const invitedSpeakers = [
    { name: "Dr. Elena Rossi", affiliation: "University of Milan, Italy", topic: "Metabolic Disorders", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200" },
    { name: "Prof. Kenji Tanaka", affiliation: "University of Tokyo, Japan", topic: "Stem Cell Therapy", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200" },
    { name: "Dr. Maria Gonzalez", affiliation: "University of Barcelona, Spain", topic: "Bioinformatics in 2025", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200" },
    { name: "Prof. David Chen", affiliation: "Tsinghua University, China", topic: "Synthetic Biology", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200" },
];

export default function Speakers() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-deepNavy transition-colors duration-300">
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-sans font-bold text-slate-900 dark:text-white mb-6">Our Speakers</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We are honored to host distinguished scientists and researchers who are pioneering advancements in biochemistry and molecular biology.
        </p>
      </div>
      
      <SpeakersSection />

      {/* Invited Speakers Grid */}
      <section className="py-20 relative">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-sans font-bold text-slate-900 dark:text-white">Invited Speakers</h2>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">Expert sessions and workshop leads</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {invitedSpeakers.map((speaker, idx) => (
                      <div key={idx} className="glass-card rounded-2xl overflow-hidden hover:border-scienceBlue/50 dark:hover:border-bioCyan/50 transition-colors group">
                          <div className="h-48 overflow-hidden opacity-90 dark:opacity-80 group-hover:opacity-100 transition-opacity">
                              <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                          </div>
                          <div className="p-6">
                              <h3 className="font-bold text-lg text-slate-900 dark:text-white">{speaker.name}</h3>
                              <p className="text-sm text-scienceBlue dark:text-bioCyan font-medium mb-2">{speaker.affiliation}</p>
                              <p className="text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-white/10 pt-2 mt-2">Topic: {speaker.topic}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <div className="container mx-auto px-6 py-16 text-center">
         <div className="glass-card rounded-3xl p-10 max-w-3xl mx-auto border-dashed border-2 border-slate-300 dark:border-white/20 bg-white/80 dark:bg-white/5">
             <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Call for Workshop Proposals</h3>
             <p className="text-slate-600 dark:text-slate-400 mb-6">Interested in organizing a half-day workshop? Submit your proposal by June 30.</p>
             <Link href="/contact" className="px-8 py-3 bg-scienceBlue text-white rounded-xl font-bold hover:bg-blue-600 dark:hover:bg-bioCyan transition-colors">Submit Proposal</Link>
         </div>
      </div>
      <Footer />
    </div>
  );
}