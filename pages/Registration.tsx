import React from 'react';
import { PricingSection, Footer } from '../components/ConferenceSections';
import { CreditCard, Lock } from 'lucide-react';

const Registration: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-deepNavy transition-colors duration-300">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-sans font-bold text-slate-900 dark:text-white mb-6">Registration</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Registration for FAOBMB 2028 will open officially in 2027. Stay tuned for updates.
          </p>
        </div>

        <PricingSection />

        <div className="max-w-3xl mx-auto mt-16 glass-card rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 relative">
            {/* Locked Overlay */}
            <div className="absolute inset-0 bg-white/60 dark:bg-deepNavy/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-6">
                <div className="bg-slate-100 dark:bg-white/10 p-4 rounded-full mb-4">
                    <Lock size={32} className="text-slate-400 dark:text-slate-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Registration Locked</h3>
                <p className="text-slate-600 dark:text-slate-400">The registration portal will open in early 2027.</p>
            </div>

            <div className="bg-slate-100 dark:bg-white/5 p-6 text-center border-b border-slate-200 dark:border-white/10 blur-sm select-none">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Registration Form</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Please fill in your details</p>
            </div>
            <div className="p-8 blur-sm select-none pointer-events-none">
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Full Name</label>
                            <input type="text" className="w-full px-4 py-3 bg-slate-50 dark:bg-deepNavy/50 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white outline-none focus:border-scienceBlue dark:focus:border-bioCyan" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Email</label>
                            <input type="email" className="w-full px-4 py-3 bg-slate-50 dark:bg-deepNavy/50 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white outline-none focus:border-scienceBlue dark:focus:border-bioCyan" />
                        </div>
                    </div>

                    <button className="w-full bg-scienceBlue text-white py-4 rounded-xl font-bold hover:bg-blue-600 dark:hover:bg-bioCyan transition-colors shadow-lg shadow-scienceBlue/20">
                        Proceed to Payment
                    </button>
                </form>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;