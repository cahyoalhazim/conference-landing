import React from 'react';
import { motion } from 'framer-motion';
import { 
  Dna, Microscope, Activity, Boxes, 
  Pill, FileText, CheckCircle, 
  UserCheck, Send, Layers, Globe, Mail,
  Twitter, Linkedin, Facebook, MapPin, Clock
} from 'lucide-react';
import { Topic, TimelineEvent, Speaker, PricingTier } from '../types';

// --- DATA ---
const topics: Topic[] = [
  { title: "Molecular Genetics", description: "Gene expression, regulation, genomics, and CRISPR technologies.", icon: Dna },
  { title: "Protein Engineering", description: "Enzyme design, protein structure prediction, and stability optimization.", icon: Layers },
  { title: "Metabolomics & Systems Bio", description: "Metabolic pathways, cellular processes, and flux analysis.", icon: Activity },
  { title: "Stem Cell & Tissue Eng.", description: "Regenerative medicine, organoids, and scaffold development.", icon: Boxes },
  { title: "Drug Discovery & Pharma", description: "Target identification, pharmacology, and therapeutic development.", icon: Pill },
  { title: "Industrial Biotechnology", description: "Bio-manufacturing, fermentation, and sustainable bio-engineering.", icon: Microscope },
];

const timeline: TimelineEvent[] = [
  { date: "May 1, 2025", title: "Call for Papers Opens", description: "Submission system opens for abstract upload.", status: 'past' },
  { date: "July 15, 2025", title: "Submission Deadline", description: "Final date for full paper submission.", status: 'active' },
  { date: "August 15, 2025", title: "Notification of Acceptance", description: "Results sent to authors after blind review.", status: 'future' },
  { date: "August 30, 2025", title: "Camera Ready & Registration", description: "Final version upload and payment deadline.", status: 'future' },
  { date: "Sept 15, 2025", title: "Conference Day", description: "Opening ceremony in Bandung.", status: 'future' },
];

const speakers: Speaker[] = [
  { name: "Prof. Sarah Jenkins", affiliation: "University of Oxford, UK", topic: "CRISPR Advances & Gene Editing Ethics", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Dr. Ahmed Hassan", affiliation: "KAUST, Saudi Arabia", topic: "Enzyme Kinetics in Extreme Environments", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Prof. Budi Santoso", affiliation: "ITB, Indonesia", topic: "Genomic Diversity in Tropical Diseases", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200" },
];

const pricing: PricingTier[] = [
  { category: "Student", priceLocal: "IDR 1.500k", priceIntl: "USD 150", features: ["Access to all sessions", "Conference kit", "Certificate", "Lunch & Coffee Break"], recommended: false },
  { category: "Professional", priceLocal: "IDR 2.500k", priceIntl: "USD 250", features: ["Access to all sessions", "Conference kit", "Certificate", "Gala Dinner Invitation"], recommended: true },
  { category: "Listener", priceLocal: "IDR 750k", priceIntl: "USD 80", features: ["Access to all sessions", "Digital Certificate", "Lunch & Coffee Break"], recommended: false },
];

// --- SECTIONS ---

export const AboutSection: React.FC = () => (
  <section id="about" className="py-24 relative z-10">
    <div className="container mx-auto px-6">
      <div className="glass-card rounded-3xl p-10 max-w-5xl mx-auto text-center border border-white/10">
        <span className="bg-scienceBlue/20 text-bioCyan px-4 py-1.5 rounded-full text-sm font-bold tracking-wide border border-scienceBlue/30">About The Conference</span>
        <h2 className="text-4xl font-sans font-bold text-white mt-6 mb-6">
           Advancing Molecular Research <br/> 
           <span className="text-slate-400">Effortless Innovation.</span>
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
          The <span className="font-semibold text-white">ICBMB 2025</span> brings together the brightest minds to present and discuss innovations. With the theme <span className="text-bioCyan">"Advancing Molecular Research for Human Health"</span>, we aim to bridge the gap between fundamental science and real-world application.
        </p>
      </div>
    </div>
  </section>
);

export const ScopesSection: React.FC = () => (
  <section id="scopes" className="py-20 relative">
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-sans font-bold text-white">Conference Scopes</h2>
        <p className="text-slate-400 mt-2">Explore the key tracks for submission</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, idx) => (
          <motion.div 
            key={idx}
            className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-all group border border-white/5"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="bg-deepNavy w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-scienceBlue transition-colors duration-300 border border-white/10">
              <topic.icon className="text-scienceBlue group-hover:text-white transition-colors duration-300" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{topic.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{topic.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const TimelineSection: React.FC = () => (
  <section id="timeline" className="py-20 relative">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-sans font-bold text-white">Important Dates</h2>
        <p className="text-slate-400 mt-2">Mark your calendar</p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-4">
          {timeline.map((event, idx) => (
            <div key={idx} className={`relative p-6 rounded-2xl border flex flex-col justify-between min-h-[160px] ${
                event.status === 'active' 
                ? 'bg-scienceBlue/20 border-bioCyan text-white shadow-[0_0_30px_rgba(34,211,238,0.2)]' 
                : 'bg-white/5 border-white/5 text-slate-500'
            }`}>
               <div>
                   <div className="text-xs font-bold uppercase tracking-wider mb-2 opacity-70">Step {idx + 1}</div>
                   <div className={`font-bold text-lg mb-1 ${event.status === 'active' ? 'text-white' : 'text-slate-300'}`}>{event.date}</div>
               </div>
               <div className="text-sm leading-tight">{event.title}</div>
               
               {event.status === 'active' && (
                   <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-bioCyan animate-pulse"></div>
               )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const SpeakersSection: React.FC = () => (
  <section id="speakers" className="py-24 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-scienceBlue/10 rounded-full blur-[100px]"></div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-sans font-bold text-white">Keynote Speakers</h2>
        <p className="text-slate-400 mt-2">World-class insights</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {speakers.map((speaker, idx) => (
          <motion.div 
            key={idx}
            className="glass-card rounded-3xl p-8 hover:border-bioCyan/50 transition-colors text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-bioCyan mb-6 p-1 bg-deepNavy">
                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
            <p className="text-bioCyan text-sm font-medium mb-4">{speaker.affiliation}</p>
            <p className="text-slate-400 text-sm italic">"{speaker.topic}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const SubmissionFlow: React.FC = () => (
  <section className="py-20 relative">
     <div className="container mx-auto px-6">
       <div className="text-center mb-12">
        <h2 className="text-3xl font-sans font-bold text-white">Submission Process</h2>
        <p className="text-slate-400 mt-2">Get published in 5 steps</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4">
        {[
          { text: "Submit Abstract", icon: FileText },
          { text: "Blind Review", icon: UserCheck },
          { text: "Revision", icon: Activity },
          { text: "Acceptance", icon: CheckCircle },
          { text: "Publication", icon: Globe },
        ].map((item, idx) => (
          <div key={idx} className="glass-card px-8 py-6 rounded-full flex items-center gap-4 hover:bg-white/10 transition-colors">
            <item.icon size={20} className="text-bioCyan" />
            <span className="font-bold text-white text-sm">{item.text}</span>
            {idx < 4 && <div className="w-4 h-[1px] bg-white/20 hidden md:block ml-4"></div>}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const PricingSection: React.FC = () => (
  <section id="pricing" className="py-24 relative">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-sans font-bold text-white">Registration Fees</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricing.map((tier, idx) => (
          <div 
            key={idx} 
            className={`glass-card rounded-3xl p-8 relative flex flex-col ${
                tier.recommended 
                ? 'bg-scienceBlue/10 border-bioCyan shadow-[0_0_30px_rgba(34,211,238,0.15)]' 
                : 'bg-white/5 border-white/10'
            }`}
          >
            {tier.recommended && (
              <div className="absolute top-0 right-0 bg-bioCyan text-deepNavy text-xs font-bold px-4 py-2 rounded-bl-2xl uppercase tracking-wider">
                Recommended
              </div>
            )}
            <h3 className="text-lg font-bold mb-1 text-slate-300">{tier.category}</h3>
            <div className="mb-8 text-white">
              <span className="text-3xl font-bold">{tier.priceIntl}</span>
              <span className="text-sm ml-2 text-slate-500">/ {tier.priceLocal}</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {tier.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                  <CheckCircle size={18} className="text-bioCyan shrink-0 mt-0.5" />
                  {feat}
                </li>
              ))}
            </ul>
            
            <button className={`w-full py-4 rounded-xl font-bold transition-all ${
              tier.recommended 
                ? 'bg-scienceBlue hover:bg-bioCyan text-white' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}>
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const VenueSection: React.FC = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div>
            <h2 className="text-3xl font-sans font-bold text-white mb-4">Venue & Location</h2>
            <p className="text-lg text-slate-400 leading-relaxed font-light">
            The conference will be held at the <span className="font-semibold text-white">Grand Science Hall, Bandung</span>. Surrounded by volcanic mountains, it offers a refreshing environment.
            </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="glass-card flex items-center gap-4 p-4 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="bg-scienceBlue/20 p-3 rounded-full text-bioCyan"><MapPin size={24} /></div>
            <div>
              <h4 className="font-bold text-white">Grand Science Hall</h4>
              <p className="text-slate-400 text-sm">Bandung, Indonesia</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[400px] rounded-3xl overflow-hidden relative shadow-2xl border border-white/10 group">
        <img 
          src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=1000" 
          alt="Bandung City" 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deepNavy to-transparent flex flex-col justify-end p-8">
             <div className="text-white">
                 <h4 className="font-bold text-xl mb-2">Bandung, West Java</h4>
                 <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-bioCyan hover:text-white transition-colors">
                    <Globe size={18}/> View on Google Maps
                 </a>
             </div>
        </div>
      </div>
    </div>
  </section>
);

export const Footer: React.FC = () => (
  <footer className="bg-cardNavy border-t border-white/5 pt-20 pb-8 relative">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-tr from-scienceBlue to-bioCyan p-1.5 rounded-lg">
                <Dna size={24} className="text-white" />
            </div>
            <span className="font-bold text-xl text-white tracking-wide">ICBMB 2025</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Advancing Molecular Research for Human Health & Biotechnology Innovation.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-white">Quick Links</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><a href="/about" className="hover:text-bioCyan transition-colors">About</a></li>
            <li><a href="/speakers" className="hover:text-bioCyan transition-colors">Keynote Speakers</a></li>
            <li><a href="/registration" className="hover:text-bioCyan transition-colors">Registration</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2"><MapPin size={16} className="text-scienceBlue"/> Bandung, Indonesia</li>
            <li className="flex items-center gap-2"><Clock size={16} className="text-scienceBlue"/> Sept 15-17, 2025</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-scienceBlue"/> info@icbmb2025.org</li>
          </ul>
        </div>

        <div className="glass-card rounded-2xl p-6">
           <h4 className="font-bold mb-2 text-white">Newsletter</h4>
           <div className="flex mt-4">
               <input type="email" placeholder="Email" className="bg-deepNavy border border-white/10 text-white px-3 py-2 rounded-l-lg w-full text-sm outline-none focus:border-bioCyan" />
               <button className="bg-scienceBlue px-3 py-2 rounded-r-lg hover:bg-bioCyan transition-colors"><Send size={16} /></button>
           </div>
        </div>
      </div>
      
      <div className="border-t border-white/5 pt-8 text-center text-xs text-slate-500">
        &copy; 2025 ICBMB Committee. All rights reserved.
      </div>
    </div>
  </footer>
);