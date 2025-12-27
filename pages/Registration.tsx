import React from 'react';
import { PricingSection, Footer } from '../components/ConferenceSections';
import { CreditCard } from 'lucide-react';

const Registration: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-deepNavy">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-sans font-bold text-white mb-6">Registration</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Secure your spot at ICBMB 2025. Early bird rates apply until August 1st.
          </p>
        </div>

        <PricingSection />

        <div className="max-w-3xl mx-auto mt-16 glass-card rounded-3xl overflow-hidden border border-white/10">
            <div className="bg-white/5 p-6 text-center border-b border-white/10">
                <h3 className="text-xl font-bold text-white">Registration Form</h3>
                <p className="text-slate-400 text-sm">Please fill in your details</p>
            </div>
            <div className="p-8">
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-1">Full Name</label>
                            <input type="text" className="w-full px-4 py-3 bg-deepNavy/50 border border-white/10 rounded-xl text-white outline-none focus:border-bioCyan" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                            <input type="email" className="w-full px-4 py-3 bg-deepNavy/50 border border-white/10 rounded-xl text-white outline-none focus:border-bioCyan" />
                        </div>
                    </div>

                    <div>
                         <label className="block text-sm font-medium text-slate-400 mb-2">Registration Type</label>
                         <div className="grid md:grid-cols-3 gap-4">
                            {['Student', 'Professional', 'Listener'].map((type) => (
                                <label key={type} className="border border-white/10 bg-deepNavy/50 p-4 rounded-xl flex items-center gap-2 cursor-pointer hover:border-bioCyan transition-colors">
                                    <input type="radio" name="regType" className="accent-bioCyan" />
                                    <span className="text-sm font-medium text-white">{type}</span>
                                </label>
                            ))}
                         </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-1">Dietary Requirements</label>
                        <textarea className="w-full px-4 py-3 bg-deepNavy/50 border border-white/10 rounded-xl text-white outline-none focus:border-bioCyan h-24" placeholder="Vegetarian, Halal, Allergies, etc."></textarea>
                    </div>

                    <div className="bg-scienceBlue/10 border border-scienceBlue/20 p-4 rounded-xl flex items-start gap-3">
                         <div className="mt-1"><CreditCard size={20} className="text-bioCyan"/></div>
                         <div>
                            <h4 className="text-sm font-bold text-white">Payment Method</h4>
                            <p className="text-xs text-slate-400 mt-1">We accept Bank Transfer and Credit Card. Details will be emailed after registration.</p>
                         </div>
                    </div>

                    <button className="w-full bg-scienceBlue text-white py-4 rounded-xl font-bold hover:bg-bioCyan transition-colors shadow-lg shadow-scienceBlue/20">
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