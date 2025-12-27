import React, { useState } from 'react';
import { VenueSection, Footer } from '../components/ConferenceSections';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
    { q: "Is it possible to attend the conference virtually?", a: "Yes, FAOBMB 2028 will be a hybrid event. You can register as a virtual participant to access live streams and digital proceedings." },
    { q: "Are the proceedings indexed?", a: "All accepted papers will be published in Scopus and Web of Science (WoS) indexed proceedings. Selected papers may be invited for special issues in partner journals." },
    { q: "Can I get a refund if I cannot attend?", a: "Refund requests must be submitted in writing before August 15, 2028. A 50% cancellation fee applies. No refunds are available after this date." },
    { q: "Do you provide visa invitation letters?", a: "Yes, invitation letters for visa purposes are available upon request after registration and payment are completed." },
    { q: "Is there a student discount?", a: "Yes, we offer significantly reduced rates for undergraduate and graduate students. A valid student ID is required at registration." },
];

const Contact: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-deepNavy transition-colors duration-300">
      <div className="text-center py-10">
         <h1 className="text-5xl font-sans font-bold text-slate-900 dark:text-white mb-4">Contact & Venue</h1>
         <p className="text-slate-600 dark:text-slate-400 text-lg">We are here to help you</p>
      </div>
      
      <VenueSection />
      
      <div className="py-20 relative">
         <div className="container mx-auto px-6 max-w-6xl">
             <div className="grid md:grid-cols-2 gap-12">
                 {/* Contact Form */}
                 <div>
                     <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h2>
                     <form className="glass-card p-8 rounded-3xl text-left border border-slate-200 dark:border-white/10">
                         <div className="grid md:grid-cols-2 gap-6 mb-6">
                             <div>
                                 <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Name</label>
                                 <input type="text" className="w-full bg-slate-50 dark:bg-deepNavy/50 border border-slate-200 dark:border-white/10 rounded-xl p-3 text-slate-900 dark:text-white outline-none focus:border-scienceBlue dark:focus:border-bioCyan"/>
                             </div>
                             <div>
                                 <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Email</label>
                                 <input type="email" className="w-full bg-slate-50 dark:bg-deepNavy/50 border border-slate-200 dark:border-white/10 rounded-xl p-3 text-slate-900 dark:text-white outline-none focus:border-scienceBlue dark:focus:border-bioCyan"/>
                             </div>
                         </div>
                         <div className="mb-6">
                             <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Subject</label>
                             <select className="w-full bg-slate-50 dark:bg-deepNavy/50 border border-slate-200 dark:border-white/10 rounded-xl p-3 text-slate-900 dark:text-white outline-none focus:border-scienceBlue dark:focus:border-bioCyan">
                                 <option>General Inquiry</option>
                                 <option>Submission Issue</option>
                                 <option>Registration & Payment</option>
                                 <option>Sponsorship</option>
                             </select>
                         </div>
                         <div className="mb-6">
                             <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Message</label>
                             <textarea className="w-full bg-slate-50 dark:bg-deepNavy/50 border border-slate-200 dark:border-white/10 rounded-xl p-3 h-32 text-slate-900 dark:text-white outline-none focus:border-scienceBlue dark:focus:border-bioCyan"></textarea>
                         </div>
                         <button className="bg-scienceBlue text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-600 dark:hover:bg-bioCyan transition-colors w-full md:w-auto">Send Message</button>
                     </form>
                 </div>

                 {/* FAQ Section */}
                 <div>
                     <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                        <HelpCircle className="text-scienceBlue dark:text-bioCyan" /> Frequently Asked Questions
                     </h2>
                     <div className="space-y-4">
                         {faqs.map((faq, idx) => (
                             <div key={idx} className="glass-card border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden">
                                 <button 
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full text-left p-4 flex justify-between items-center font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                                 >
                                     {faq.q}
                                     {openFaq === idx ? <ChevronUp size={20} className="text-scienceBlue dark:text-bioCyan"/> : <ChevronDown size={20} className="text-slate-500"/>}
                                 </button>
                                 {openFaq === idx && (
                                     <div className="p-4 pt-0 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-200 dark:border-white/5">
                                         {faq.a}
                                     </div>
                                 )}
                             </div>
                         ))}
                     </div>
                     <div className="mt-8 p-6 bg-scienceBlue/10 rounded-2xl border border-scienceBlue/20">
                         <h4 className="font-bold text-slate-900 dark:text-white mb-2">Still have questions?</h4>
                         <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Our secretariat is available Mon-Fri, 9am - 5pm (GMT+8).</p>
                         <a href="mailto:info@faobmb2028.org" className="text-scienceBlue dark:text-bioCyan font-bold hover:underline">info@faobmb2028.org</a>
                     </div>
                 </div>
             </div>
         </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;