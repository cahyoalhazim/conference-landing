'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Dna, Microscope, Activity, Boxes, 
  FileText, CheckCircle, 
  Send, Layers, Globe, Mail,
  MapPin, Clock,
  BookOpen, Award, Users, Download, Brain, Sprout
} from 'lucide-react';
import { Topic, TimelineEvent, Speaker, PricingTier } from '../types';

// --- DATA ---
const topics: Topic[] = [
  { title: "DNA/RNA & Genomics", description: "Gene regulation, Genome engineering, and CRISPR technologies.", icon: Dna },
  { title: "Cancer Mechanisms", description: "Disease mechanisms, oncology, and immunology.", icon: Activity },
  { title: "Proteins & Enzymes", description: "Protein engineering, structural biology, and bioinformatics.", icon: Layers },
  { title: "Signal Transduction", description: "Cell signaling pathways and therapeutic innovation.", icon: Activity },
  { title: "Microbiology & Immunology", description: "Molecular microbiology and infectious disease response.", icon: Microscope },
  { title: "Stem Cell & Development", description: "Cell biology, developmental biology, and regenerative medicine.", icon: Boxes },
  { title: "Genome Engineering", description: "Biotechnology applications and synthetic biology.", icon: FileText },
  { title: "Plant Science & TCM", description: "Plant molecular biology and Chinese medicine research.", icon: Sprout },
  { title: "Molecular Neuroscience", description: "Neural circuits, neurodegeneration, and brain health.", icon: Brain },
  { title: "Biochemical Education", description: "Advancing education in biochemistry and molecular biology.", icon: BookOpen },
];

const timeline: TimelineEvent[] = [
  { date: "Early 2027", title: "Registration Opens", description: "Super Early Bird & Submission system opens.", status: 'future' },
  { date: "Mid 2027", title: "Call for Papers", description: "Abstract submission deadline.", status: 'future' },
  { date: "Early 2028", title: "Program Release", description: "Full detailed agenda publication.", status: 'future' },
  { date: "12-15 Sept 2028", title: "Conference Days", description: "Event held at Ubud, Bali.", status: 'future' },
];

const speakers: Speaker[] = [
  { 
    name: "Prof. Dennis Lo", 
    affiliation: "Chinese University of Hong Kong", 
    topic: "Lasker Award 2022 for discovering cell-free fetal DNA in maternal blood", 
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=200&h=200" 
  },
  { 
    name: "Prof. Kwok-Yung Yuen", 
    affiliation: "The University of Hong Kong", 
    topic: "Future Science Prize 2021 for understanding emerging infectious diseases", 
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&q=80&w=200&h=200" 
  },
  { 
    name: "Prof. Feng Shao", 
    affiliation: "National Institute of Biological Sciences, Beijing", 
    topic: "Future Science Prize 2019 for cytosolic LPS receptors and downstream signaling", 
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200&h=200" 
  },
];

const pricing: PricingTier[] = [
  { category: "Student", priceLocal: "TBA", priceIntl: "TBA", features: ["Access to all sessions", "Conference kit", "Certificate", "Lunch & Coffee Break"], recommended: false },
  { category: "Regular", priceLocal: "TBA", priceIntl: "TBA", features: ["Access to all sessions", "Conference kit", "Certificate", "Gala Dinner Invitation"], recommended: true },
];

// --- SECTIONS ---

export const AboutSection: React.FC = () => (
  <section id="about" className="py-24 relative z-10 bg-slate-50 dark:bg-deepNavy transition-colors duration-300">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-scienceBlue/10 dark:bg-scienceBlue/20 text-scienceBlue dark:text-bioCyan px-4 py-1.5 rounded-full text-sm font-bold tracking-wide border border-scienceBlue/20 dark:border-scienceBlue/30">About FAOBMB 2028</span>
            <h2 className="text-4xl font-sans font-bold text-slate-900 dark:text-white mt-6 mb-6 leading-tight">
               Post-Pandemic Innovation <br/> 
               <span className="text-slate-500 dark:text-slate-400">in Disease Mechanisms.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-6">
              The <span className="font-semibold text-slate-900 dark:text-white">33rd Federation of Asian & Oceanian Biochemists and Molecular Biologists Conference</span> is a premier international forum designed to bring together scientists, clinicians, and biotech industry leaders.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Focusing on <strong>"Breaking New Grounds on Disease Mechanism in the Post-Pandemic Era"</strong>, the conference will cover cutting-edge research in CRISPR, mRNA vaccines, stem cells, genomics, and translational biomedicine.
            </p>
            
            <button className="flex items-center gap-2 text-slate-800 dark:text-white bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/20 px-6 py-3 rounded-xl transition-colors border border-slate-200 dark:border-white/10 shadow-sm">
                <Download size={20} className="text-scienceBlue dark:text-bioCyan" />
                <span>Download First Circular</span>
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-5">
              {[
                  { title: "Keynote Speakers", val: "World Class", icon: Award },
                  { title: "Symposiums", val: "Parallel", icon: Users },
                  { title: "Networking", val: "Asia-Oceania", icon: Globe },
                  { title: "Showcase", val: "Tech Demo", icon: Microscope },
              ].map((item, i) => (
                  <div key={i} className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-scienceBlue/50 dark:hover:border-bioCyan/30 hover:bg-white dark:hover:bg-white/10 transition-all group">
                      <item.icon className="text-scienceBlue dark:text-bioCyan mb-4 group-hover:scale-110 transition-transform" size={32} />
                      <h4 className="text-slate-900 dark:text-white font-bold text-xl mb-1">{item.val}</h4>
                      <p className="text-slate-500 dark:text-slate-500 text-sm font-medium">{item.title}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  </section>
);

export const TargetAudienceSection: React.FC = () => (
    <section className="py-20 bg-white dark:bg-cardNavy/50 border-y border-slate-200 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-sans font-bold text-slate-900 dark:text-white mb-12">Who Should Attend?</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {[
                    "Biochemists & Molecular Biologists",
                    "Academics & Lecturers",
                    "Medical Practitioners & Clinicians",
                    "Biotech & Pharma Researchers",
                    "Postgraduate & PhD Students",
                    "Academic Institutions",
                    "Health Industry Professionals"
                ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 dark:bg-deepNavy border border-slate-200 dark:border-white/10 px-6 py-3 rounded-full text-slate-700 dark:text-slate-300 font-medium hover:border-scienceBlue dark:hover:border-bioCyan hover:text-scienceBlue dark:hover:text-white transition-colors cursor-default shadow-sm">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const CallForPapersSection: React.FC = () => (
    <section className="py-20 relative overflow-hidden bg-slate-50 dark:bg-deepNavy transition-colors duration-300">
       <div className="container mx-auto px-6 relative z-10">
          <div className="glass-card rounded-3xl p-10 md:p-16 text-center border border-slate-200 dark:border-white/10 relative overflow-hidden bg-white/80 dark:bg-cardNavy/50">
              <div className="absolute top-0 right-0 w-64 h-64 bg-scienceBlue/10 rounded-full blur-[80px]"></div>
              
              <h2 className="text-3xl font-sans font-bold text-slate-900 dark:text-white mb-6">Call for Papers</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto mb-8">
                  We invite researchers to submit abstracts in the fields of Biochemistry, Molecular Biology, Biomedical Sciences, and Health & Translational Medicine.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-6">
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 px-6 py-4 rounded-xl border border-slate-200 dark:border-white/5">
                      <FileText className="text-scienceBlue dark:text-bioCyan"/> 
                      <span>Biochemistry</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 px-6 py-4 rounded-xl border border-slate-200 dark:border-white/5">
                      <Dna className="text-scienceBlue dark:text-bioCyan"/> 
                      <span>Molecular Biology</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 px-6 py-4 rounded-xl border border-slate-200 dark:border-white/5">
                      <Activity className="text-scienceBlue dark:text-bioCyan"/> 
                      <span>Translational Medicine</span>
                  </div>
              </div>
              
              <div className="mt-12">
                  <button className="bg-scienceBlue text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 dark:hover:bg-bioCyan transition-all shadow-lg shadow-scienceBlue/20">
                      View Submission Guidelines
                  </button>
                  <p className="text-slate-500 text-sm mt-4">Abstract submission opens in 2027.</p>
              </div>
          </div>
       </div>
    </section>
);

export const ScopesSection: React.FC = () => (
  <section id="scopes" className="py-24 relative bg-white dark:bg-deepNavy transition-colors duration-300">
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-sans font-bold text-slate-900 dark:text-white">Key Thematic Areas</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Explore the key tracks for submission</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, idx) => (
          <motion.div 
            key={idx}
            className="glass-card p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all group border border-slate-200 dark:border-white/5"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="bg-slate-100 dark:bg-deepNavy w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-scienceBlue transition-colors duration-300 border border-slate-200 dark:border-white/10">
              <topic.icon className="text-scienceBlue group-hover:text-white transition-colors duration-300" size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{topic.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{topic.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const TimelineSection: React.FC = () => (
  <section id="timeline" className="py-20 relative bg-slate-50 dark:bg-deepNavy transition-colors duration-300">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-sans font-bold text-slate-900 dark:text-white">Important Dates</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Mark your calendar</p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-4">
          {timeline.map((event, idx) => (
            <div key={idx} className={`relative p-6 rounded-2xl border flex flex-col justify-between min-h-[160px] ${
                event.date.includes("2028")
                ? 'bg-scienceBlue/10 dark:bg-scienceBlue/20 border-scienceBlue dark:border-bioCyan shadow-lg dark:shadow-[0_0_30px_rgba(34,211,238,0.2)]' 
                : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/5'
            }`}>
               <div>
                   <div className={`text-xs font-bold uppercase tracking-wider mb-2 opacity-70 ${
                       event.date.includes("2028") ? 'text-scienceBlue dark:text-white' : 'text-slate-500'
                   }`}>Phase {idx + 1}</div>
                   <div className={`font-bold text-lg mb-1 ${
                       event.date.includes("2028") ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-300'
                    }`}>{event.date}</div>
               </div>
               <div className={`text-sm leading-tight ${
                    event.date.includes("2028") ? 'text-slate-700 dark:text-slate-200' : 'text-slate-500'
               }`}>{event.title}</div>
               
               {event.date.includes("2028") && (
                   <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-scienceBlue dark:bg-bioCyan animate-pulse"></div>
               )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const SpeakersSection: React.FC = () => (
  <section id="speakers" className="py-24 relative overflow-hidden bg-white dark:bg-deepNavy transition-colors duration-300">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-scienceBlue/5 dark:bg-scienceBlue/10 rounded-full blur-[100px]"></div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-sans font-bold text-slate-900 dark:text-white">Confirmed Speakers</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Distinguished Scientists</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {speakers.map((speaker, idx) => (
          <motion.div 
            key={idx}
            className="glass-card rounded-3xl p-8 hover:border-scienceBlue/50 dark:hover:border-bioCyan/50 transition-colors text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-scienceBlue dark:border-bioCyan mb-6 p-1 bg-white dark:bg-deepNavy">
                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{speaker.name}</h3>
            <p className="text-scienceBlue dark:text-bioCyan text-sm font-medium mb-4">{speaker.affiliation}</p>
            <div className="bg-slate-100 dark:bg-white/5 rounded-xl p-4 border border-slate-200 dark:border-white/5">
                <Award size={16} className="text-yellow-500 dark:text-yellow-400 mx-auto mb-2"/>
                <p className="text-slate-600 dark:text-slate-300 text-xs italic leading-relaxed">"{speaker.topic}"</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const VenueSection: React.FC = () => (
  <section className="py-24 relative bg-slate-50 dark:bg-deepNavy transition-colors duration-300">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div>
            <h2 className="text-3xl font-sans font-bold text-slate-900 dark:text-white mb-4">Venue & Location</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
            The conference will be held in <span className="font-semibold text-slate-900 dark:text-white">Ubud, Bali, Indonesia</span>. Known as a center for traditional crafts and dance, Ubud provides a serene and inspiring environment for scientific exchange.
            </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="glass-card flex items-center gap-4 p-4 rounded-2xl hover:bg-white dark:hover:bg-white/10 transition-colors">
            <div className="bg-scienceBlue/10 dark:bg-scienceBlue/20 p-3 rounded-full text-scienceBlue dark:text-bioCyan"><MapPin size={24} /></div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white">Ubud Convention Center</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Bali, Indonesia</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[400px] rounded-3xl overflow-hidden relative shadow-2xl border border-slate-200 dark:border-white/10 group">
        <img 
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000" 
          alt="Ubud Bali" 
          className="w-full h-full object-cover opacity-90 dark:opacity-60 group-hover:opacity-100 dark:group-hover:opacity-80 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent dark:from-deepNavy dark:to-transparent flex flex-col justify-end p-8">
             <div className="text-white">
                 <h4 className="font-bold text-xl mb-2">Ubud, Bali</h4>
                 <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-bioCyan hover:text-white transition-colors">
                    <Globe size={18}/> View on Google Maps
                 </a>
             </div>
        </div>
      </div>
    </div>
  </section>
);

export const SponsorsSection: React.FC = () => (
    <section className="py-16 bg-white dark:bg-deepNavy border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
            <p className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-10">Hosted By</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-80 hover:opacity-100 transition-all duration-500">
                <div className="text-2xl font-serif font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <div className="w-8 h-8 bg-red-600 rounded-full"></div> ISBMB
                </div>
                <div className="h-8 w-[1px] bg-slate-200 dark:bg-white/20 hidden md:block"></div>
                <div className="text-2xl font-serif font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <div className="w-8 h-8 bg-scienceBlue rounded-full"></div> FAOBMB
                </div>
            </div>
        </div>
    </section>
);

export const SubmissionFlow: React.FC = () => (
  <section className="py-12 relative bg-slate-50 dark:bg-deepNavy transition-colors duration-300">
    <div className="container mx-auto px-6">
       <div className="flex flex-col md:flex-row justify-between items-center relative max-w-4xl mx-auto">
          {/* Progress Bar Background */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-white/10 -z-10 -translate-y-1/2"></div>
          
          {[
            { step: 1, title: "Submit Abstract", date: "May 2027" },
            { step: 2, title: "Review Process", date: "July 2027" },
            { step: 3, title: "Notification", date: "Aug 2027" },
            { step: 4, title: "Registration", date: "Sept 2027" },
            { step: 5, title: "Conference", date: "Sept 2028" },
          ].map((item, index) => (
             <div key={index} className="flex flex-col items-center bg-slate-50 dark:bg-deepNavy px-2 z-10 py-4 md:py-0 w-full md:w-auto transition-colors duration-300">
                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-deepNavy border-2 border-scienceBlue dark:border-bioCyan text-scienceBlue dark:text-bioCyan flex items-center justify-center font-bold text-lg mb-3 shadow-md shadow-blue-500/10 dark:shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                     {item.step}
                 </div>
                 <h4 className="text-slate-900 dark:text-white font-bold text-sm text-center">{item.title}</h4>
                 <p className="text-slate-500 dark:text-slate-500 text-xs text-center">{item.date}</p>
             </div>
          ))}
       </div>
    </div>
  </section>
);

export const PricingSection: React.FC = () => (
    <section className="py-12 bg-white dark:bg-deepNavy transition-colors duration-300">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricing.map((tier, idx) => (
                <div key={idx} className={`relative p-8 rounded-3xl border flex flex-col transition-all duration-300 ${
                    tier.recommended 
                    ? 'bg-scienceBlue/5 dark:bg-scienceBlue/10 border-scienceBlue dark:border-bioCyan shadow-xl dark:shadow-[0_0_30px_rgba(34,211,238,0.1)]' 
                    : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 shadow-sm'
                }`}>
                    {tier.recommended && (
                        <div className="absolute top-0 right-0 bg-scienceBlue dark:bg-bioCyan text-white dark:text-deepNavy text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                            RECOMMENDED
                        </div>
                    )}
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{tier.category}</h3>
                    <div className="mb-6">
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">Local Participants</p>
                        <p className="text-3xl font-bold text-slate-800 dark:text-white">{tier.priceLocal}</p>
                    </div>
                     <div className="mb-8">
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">International Participants</p>
                        <p className="text-3xl font-bold text-slate-800 dark:text-white">{tier.priceIntl}</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8 flex-grow">
                        {tier.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm">
                                <CheckCircle size={16} className="text-scienceBlue dark:text-bioCyan shrink-0 mt-0.5" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    
                    <button disabled className={`w-full py-3 rounded-xl font-bold transition-all cursor-not-allowed opacity-70 ${
                        tier.recommended 
                        ? 'bg-scienceBlue dark:bg-bioCyan text-white dark:text-deepNavy' 
                        : 'bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white'
                    }`}>
                        Opening 2027
                    </button>
                </div>
            ))}
        </div>
    </section>
);

export const Footer: React.FC = () => (
  <footer className="bg-slate-50 dark:bg-cardNavy border-t border-slate-200 dark:border-white/5 pt-20 pb-8 relative transition-colors duration-300">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-tr from-red-600 to-scienceBlue p-1.5 rounded-lg">
                <Dna size={24} className="text-white" />
            </div>
            <span className="font-bold text-xl text-slate-900 dark:text-white tracking-wide">FAOBMB 2028</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
            Breaking New Grounds on Disease Mechanism in the Post-Pandemic Era.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Quick Links</h4>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li><Link href="/about" className="hover:text-scienceBlue dark:hover:text-bioCyan transition-colors">About</Link></li>
            <li><Link href="/speakers" className="hover:text-scienceBlue dark:hover:text-bioCyan transition-colors">Confirmed Speakers</Link></li>
            <li><Link href="/registration" className="hover:text-scienceBlue dark:hover:text-bioCyan transition-colors">Registration</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li className="flex items-center gap-2"><MapPin size={16} className="text-scienceBlue"/> Ubud, Bali</li>
            <li className="flex items-center gap-2"><Clock size={16} className="text-scienceBlue"/> 12–15 September 2028</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-scienceBlue"/> info@faobmb2028.org</li>
          </ul>
        </div>

        <div className="glass-card rounded-2xl p-6 bg-white dark:bg-white/5">
           <h4 className="font-bold mb-2 text-slate-900 dark:text-white">Newsletter</h4>
           <div className="flex mt-4">
               <input type="email" placeholder="Email" className="bg-slate-100 dark:bg-deepNavy border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white px-3 py-2 rounded-l-lg w-full text-sm outline-none focus:border-scienceBlue dark:focus:border-bioCyan placeholder:text-slate-400" />
               <button className="bg-scienceBlue px-3 py-2 rounded-r-lg hover:bg-blue-600 dark:hover:bg-bioCyan transition-colors text-white"><Send size={16} /></button>
           </div>
        </div>
      </div>
      
      <div className="border-t border-slate-200 dark:border-white/5 pt-8 text-center text-xs text-slate-500">
        &copy; 2028 FAOBMB & ISBMB. All rights reserved.
      </div>
    </div>
  </footer>
);