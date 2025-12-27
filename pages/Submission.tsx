import React from 'react';
import { SubmissionFlow, Footer } from '../components/ConferenceSections';
import { Upload, FileText, User, Mail, Shield } from 'lucide-react';

const Submission: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-deepNavy">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-sans font-bold text-white mb-6">Paper Submission</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We invite authors to submit original research papers. All submissions will be peer-reviewed.
            Accepted papers will be published in Scopus/WoS indexed proceedings.
          </p>
        </div>

        <SubmissionFlow />

        <div className="grid md:grid-cols-2 gap-12 mt-16 max-w-6xl mx-auto">
          {/* Guidelines */}
          <div className="glass-card p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FileText className="text-bioCyan"/> Submission Guidelines
            </h3>
            <ul className="space-y-4 text-slate-300">
                <li className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-scienceBlue flex items-center justify-center font-bold text-xs shrink-0 text-white">1</span>
                    <span>Papers must be written in English and not exceed 6 pages.</span>
                </li>
                <li className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-scienceBlue flex items-center justify-center font-bold text-xs shrink-0 text-white">2</span>
                    <span>Use the official ICBMB 2025 template (Word/LaTeX).</span>
                </li>
                <li className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-scienceBlue flex items-center justify-center font-bold text-xs shrink-0 text-white">3</span>
                    <span>Remove all author names for the blind review process.</span>
                </li>
            </ul>
            <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-sm text-yellow-200">
                <strong>Deadlines:</strong> Abstract submission closes on July 15, 2025.
            </div>
          </div>

          {/* Submission Form */}
          <div className="glass-card p-8 rounded-3xl border-t-4 border-t-bioCyan">
            <h3 className="text-2xl font-bold text-white mb-6">Submit Abstract</h3>
            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-1">First Name</label>
                        <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-bioCyan outline-none" placeholder="John" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-1">Last Name</label>
                        <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-bioCyan outline-none" placeholder="Doe" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-bioCyan outline-none" placeholder="john.doe@university.edu" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Paper Title</label>
                    <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-bioCyan outline-none" placeholder="Enter title" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Abstract (PDF)</label>
                    <div className="border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:bg-white/5 transition-colors cursor-pointer group">
                        <Upload size={32} className="mx-auto text-slate-500 group-hover:text-bioCyan mb-2 transition-colors" />
                        <p className="text-sm text-slate-400">Drag and drop or click to upload</p>
                    </div>
                </div>

                <button type="button" className="w-full bg-scienceBlue text-white py-4 rounded-xl font-bold hover:bg-bioCyan transition-all shadow-lg shadow-scienceBlue/20 mt-4">
                    Submit Abstract
                </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Submission;