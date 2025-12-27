import React from 'react';
import { AboutSection, ScopesSection, Footer } from '../../components/ConferenceSections.tsx';

const committee = [
    { role: "Conference Chair", name: "Prof. Dr. Rina Wijaya", affiliation: "Institut Teknologi Bandung" },
    { role: "Co-Chair", name: "Prof. Alan Smith", affiliation: "University of Melbourne" },
    { role: "Scientific Committee Head", name: "Dr. Budi Hartono", affiliation: "Universitas Indonesia" },
    { role: "Technical Chair", name: "Dr. Sarah Lee", affiliation: "National University of Singapore" },
    { role: "Publication Chair", name: "Prof. James Doe", affiliation: "Stanford University" },
    { role: "Treasurer", name: "Dr. Anita Rahman", affiliation: "Universitas Padjadjaran" },
];

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-deepNavy transition-colors duration-300">
      <div className="text-center py-10">
        <h1 className="text-5xl font-sans font-bold text-slate-900 dark:text-white mb-4">About & Scopes</h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">Exploring the frontiers of Biochemistry</p>
      </div>
      
      <AboutSection />
      
      {/* Committee Section */}
      <section className="py-20 relative">
          <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-sans font-bold text-slate-900 dark:text-white">Organizing Committee</h2>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">The dedicated team behind FAOBMB 2028</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {committee.map((member, idx) => (
                      <div key={idx} className="glass-card p-6 rounded-2xl hover:bg-white dark:hover:bg-white/5 transition-colors border border-slate-200 dark:border-white/5">
                          <p className="text-xs font-bold text-scienceBlue dark:text-bioCyan uppercase tracking-wide mb-2">{member.role}</p>
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white">{member.name}</h4>
                          <p className="text-slate-600 dark:text-slate-400 text-sm">{member.affiliation}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <ScopesSection />
      <Footer />
    </div>
  );
}