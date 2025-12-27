'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, FileText } from 'lucide-react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[110vh] flex flex-col justify-center items-center overflow-hidden bg-slate-50 dark:bg-deepNavy transition-colors duration-300">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-scienceBlue/10 dark:bg-scienceBlue/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-300/10 dark:bg-bioCyan/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 dark:opacity-20 mix-blend-overlay"></div>
        {/* Dark Mode Grid */}
        <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-300" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', 
               backgroundSize: '50px 50px' 
             }}>
        </div>
        {/* Light Mode Grid */}
        <div className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-300" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)', 
               backgroundSize: '50px 50px' 
             }}>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <motion.div 
          className="absolute top-[20%] left-[5%] text-scienceBlue/20 dark:text-scienceBlue/30"
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 200 400" className="w-64 h-auto drop-shadow-xl">
               <path d="M100,20 Q160,50 100,80 T100,140 T100,200" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
               <path d="M100,20 Q40,50 100,80 T100,140 T100,200" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.5"/>
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-20 pt-20">
        
        {/* Main Central Content */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-scienceBlue dark:bg-bioCyan animate-pulse"></span>
              <span className="text-sm font-medium text-scienceBlue dark:text-bioCyan tracking-wide">33rd FAOBMB Conference</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-sans font-bold text-slate-900 dark:text-white leading-tight mb-6">
              Breaking New Grounds <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-scienceBlue via-blue-600 to-cyan-500 dark:from-bioCyan dark:via-white dark:to-scienceBlue text-glow">
                On Disease Mechanism
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-white/80 font-medium mb-2">
              In the Post-Pandemic Era
            </p>
            
            <p className="text-lg text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Join 800–1,200 scientists across Asia and Oceania to explore the latest breakthroughs 
              in biochemistry and molecular biology.
            </p>

            {/* Smart Action Bar */}
            <div className="w-full max-w-3xl bg-white/70 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl p-2 flex flex-col md:flex-row gap-2 shadow-2xl shadow-slate-200/50 dark:shadow-scienceBlue/10">
               <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-white/50 dark:bg-deepNavy/50 rounded-xl border border-slate-200 dark:border-white/5">
                  <MapPin className="text-slate-400" size={20} />
                  <div className="text-left">
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Location</p>
                    <p className="text-sm text-slate-800 dark:text-white font-medium">Ubud, Bali, Indonesia</p>
                  </div>
               </div>
               <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-white/50 dark:bg-deepNavy/50 rounded-xl border border-slate-200 dark:border-white/5 cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                  <Calendar className="text-slate-400" size={20} />
                  <div className="text-left">
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Date</p>
                    <p className="text-sm text-slate-800 dark:text-white font-medium">12–15 September 2028</p>
                  </div>
               </div>
               <Link href="/submission" className="bg-scienceBlue hover:bg-blue-600 dark:hover:bg-bioCyan text-white px-8 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-scienceBlue/30">
                  Submit Abstract
                  <ArrowRight size={18} />
               </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Glass Cards Grid */}
        <div className="relative w-full h-[400px] hidden md:block">
           
           {/* Card 1: Stats */}
           <motion.div 
             className="absolute left-10 top-10 glass-card p-5 rounded-2xl w-64 z-20"
             initial={{ x: -100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.4 }}
           >
              <div className="flex justify-between items-start mb-4">
                 <div>
                    <p className="text-slate-500 dark:text-slate-400 text-xs uppercase">Participants</p>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">1,200+</h3>
                 </div>
                 <div className="bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 dark:bg-green-400 rounded-full"></div> Asia-Oceania
                 </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Connecting researchers & industry</p>
           </motion.div>

           {/* Card 2: Call for Papers Highlight */}
           <motion.div 
             className="absolute left-1/2 -translate-x-1/2 top-0 backdrop-blur-xl bg-white/80 dark:bg-[#0F172A]/80 p-6 rounded-3xl w-80 text-center z-30 group border border-white/40 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 overflow-hidden"
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.6 }}
             whileHover={{ y: -10 }}
           >
              {/* Glossy Reflection Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent dark:from-white/5 pointer-events-none"></div>

              {/* Icon Container with Glow */}
              <div className="relative mx-auto mb-5 w-16 h-16">
                 <div className="absolute inset-0 bg-scienceBlue/40 dark:bg-bioCyan/30 blur-2xl rounded-full"></div>
                 <div className="relative w-16 h-16 bg-gradient-to-br from-scienceBlue to-blue-600 dark:from-bioCyan dark:to-cyan-600 rounded-2xl shadow-lg shadow-scienceBlue/30 flex items-center justify-center group-hover:scale-105 transition-all duration-300 ring-4 ring-white/50 dark:ring-white/10">
                    <FileText className="text-white" size={30} strokeWidth={2} />
                 </div>
              </div>

              <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-1 relative z-10">Call for Papers</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-5 font-medium relative z-10">Biochemistry & Mol. Biology</p>
              
              {/* Pill Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6 relative z-10">
                 <span className="px-3 py-1.5 rounded-full bg-white/60 dark:bg-white/10 text-[11px] font-bold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 backdrop-blur-sm shadow-sm">Biomedical Sciences</span>
                 <span className="px-3 py-1.5 rounded-full bg-white/60 dark:bg-white/10 text-[11px] font-bold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 backdrop-blur-sm shadow-sm">Translational Medicine</span>
              </div>

              {/* CTA Link */}
              <Link href="/submission" className="relative z-10 flex items-center justify-center gap-1.5 text-scienceBlue dark:text-bioCyan text-sm font-bold group-hover:gap-2.5 transition-all cursor-pointer">
                  Submit Abstract <ArrowRight size={16} />
              </Link>
           </motion.div>

           {/* Card 3: Keynote */}
           <motion.div 
             className="absolute right-10 top-20 glass-card p-5 rounded-2xl w-72 z-20"
             initial={{ x: 100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.8 }}
           >
              <div className="flex items-center gap-3 mb-3">
                 <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-scienceBlue dark:border-bioCyan">
                    <img src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=100" alt="Speaker" />
                 </div>
                 <div>
                    <p className="text-xs text-scienceBlue dark:text-bioCyan font-bold">Confirmed Speaker</p>
                    <p className="text-slate-900 dark:text-white text-sm font-semibold">Prof. Dennis Lo</p>
                 </div>
              </div>
              <div className="bg-slate-100 dark:bg-white/5 rounded-lg p-3 border border-slate-200 dark:border-white/5">
                 <p className="text-xs text-slate-600 dark:text-slate-300 italic">"Lasker Award 2022 Winner"</p>
              </div>
           </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20">
         <svg viewBox="0 0 1440 200" className="w-full h-auto fill-slate-50 dark:fill-deepNavy translate-y-1 transition-colors duration-300">
             <path d="M0,64L80,69.3C160,75,320,85,480,106.7C640,128,800,160,960,160C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
         </svg>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-scienceBlue/10 dark:bg-scienceBlue/20 blur-[100px] z-10"></div>
    </section>
  );
};

export default Hero;