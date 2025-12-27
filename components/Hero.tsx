import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Search, PlayCircle, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[110vh] flex flex-col justify-center items-center overflow-hidden bg-deepNavy">
      
      {/* Background Ambience - Glows resembling the reference */}
      <div className="absolute inset-0 z-0">
        {/* Top left blue glow */}
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-scienceBlue/20 rounded-full blur-[120px]"></div>
        {/* Bottom right cyan glow */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-bioCyan/10 rounded-full blur-[100px]"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', 
               backgroundSize: '50px 50px' 
             }}>
        </div>
      </div>

      {/* Floating Elements / 3D Objects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Floating Helix Left */}
        <motion.div 
          className="absolute top-[20%] left-[5%] text-scienceBlue/30"
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 200 400" className="w-64 h-auto drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
               <path d="M100,20 Q160,50 100,80 T100,140 T100,200" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
               <path d="M100,20 Q40,50 100,80 T100,140 T100,200" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.5"/>
          </svg>
        </motion.div>

        {/* Floating Sphere Right */}
        <motion.div 
          className="absolute top-[15%] right-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-bioCyan to-purple-500 opacity-20 blur-xl"
          animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-bioCyan animate-pulse"></span>
              <span className="text-sm font-medium text-bioCyan tracking-wide">Hybrid Event • Bandung & Virtual</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-sans font-bold text-white leading-tight mb-6">
              Advancing Research <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bioCyan via-white to-scienceBlue text-glow">
                For Human Health
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Join the International Conference on Biochemistry & Molecular Biology 2025. 
              Discover the latest breakthroughs, get personalized feedback on your research, and publish effortlessly.
            </p>

            {/* Smart Action Bar - Simulating the Search Bar in Reference */}
            <div className="w-full max-w-3xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2 flex flex-col md:flex-row gap-2 shadow-2xl shadow-scienceBlue/10">
               <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-deepNavy/50 rounded-xl border border-white/5">
                  <Search className="text-slate-400" size={20} />
                  <div className="text-left">
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Looking for?</p>
                    <p className="text-sm text-white font-medium">Paper Submission Guidelines</p>
                  </div>
               </div>
               <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-deepNavy/50 rounded-xl border border-white/5 cursor-pointer hover:bg-white/5 transition-colors">
                  <Calendar className="text-slate-400" size={20} />
                  <div className="text-left">
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Date</p>
                    <p className="text-sm text-white font-medium">Sept 15-17, 2025</p>
                  </div>
               </div>
               <a href="#pricing" className="bg-scienceBlue hover:bg-bioCyan text-white px-8 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  Register
                  <ArrowRight size={18} />
               </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Glass Cards Grid - Simulating Widgets */}
        <div className="relative w-full h-[400px] hidden md:block">
           
           {/* Card 1: Stats (Left) */}
           <motion.div 
             className="absolute left-10 top-10 glass-card p-5 rounded-2xl w-64 z-20"
             initial={{ x: -100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.4 }}
           >
              <div className="flex justify-between items-start mb-4">
                 <div>
                    <p className="text-slate-400 text-xs uppercase">Attendees</p>
                    <h3 className="text-3xl font-bold text-white">500+</h3>
                 </div>
                 <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div> Active
                 </div>
              </div>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                 <div className="h-full w-3/4 bg-bioCyan"></div>
              </div>
              <p className="text-xs text-slate-400 mt-2">Researchers from 30 countries</p>
           </motion.div>

           {/* Card 2: Center Highlight (Submission) */}
           <motion.div 
             className="absolute left-1/2 -translate-x-1/2 top-0 glass-card p-6 rounded-3xl w-80 text-center z-30 border-t-4 border-t-bioCyan"
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.6 }}
             whileHover={{ y: -10 }}
           >
              <div className="w-12 h-12 mx-auto bg-gradient-to-tr from-scienceBlue to-bioCyan rounded-full flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30">
                 <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Call for Papers</h3>
              <p className="text-slate-400 text-sm mb-4">Scopus Indexed Proceedings</p>
              <div className="flex justify-center items-center gap-2">
                 <span className="text-3xl font-bold text-bioCyan">94%</span>
                 <span className="text-xs text-slate-400 text-left leading-tight">Acceptance<br/>Rate Target</span>
              </div>
           </motion.div>

           {/* Card 3: Keynote (Right) */}
           <motion.div 
             className="absolute right-10 top-20 glass-card p-5 rounded-2xl w-72 z-20"
             initial={{ x: 100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.8 }}
           >
              <div className="flex items-center gap-3 mb-3">
                 <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-bioCyan">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" alt="Speaker" />
                 </div>
                 <div>
                    <p className="text-xs text-bioCyan font-bold">Keynote Speaker</p>
                    <p className="text-white text-sm font-semibold">Prof. Sarah Jenkins</p>
                 </div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                 <p className="text-xs text-slate-300 italic">"CRISPR Advances & Gene Editing Ethics"</p>
              </div>
           </motion.div>
        </div>
      </div>

      {/* Curved Divider Transition */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
         <svg viewBox="0 0 1440 200" className="w-full h-auto fill-white translate-y-1">
             <path d="M0,64L80,69.3C160,75,320,85,480,106.7C640,128,800,160,960,160C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
         </svg>
      </div>

      {/* Glow Effect Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-scienceBlue/20 blur-[100px] z-10"></div>
    </section>
  );
};

export default Hero;