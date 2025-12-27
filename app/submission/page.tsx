import React from 'react';
import { SubmissionFlow, Footer } from '../../components/ConferenceSections.tsx';
import { Upload, FileText } from 'lucide-react';

export default function Submission() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-deepNavy transition-colors duration-300">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-sans font-bold text-slate-900 dark:text-white mb-6">Paper Submission</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            We invite authors to submit original research papers for FAOBMB 2028.
            Accepted papers will be published in Scopus/WoS indexed proceedings.
          </p>
        </div>

        <SubmissionFlow />

        <div className="grid md:grid-cols-2 gap-12 mt-16 max-w-6xl mx-auto">
          {/* Guidelines */}
          <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <FileText className="text-scienceBlue dark:text-bioCyan"/> Submission Guidelines
            </h3>
            <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                <li className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-scienceBlue flex items-center justify-center font-bold text-xs shrink-0 text-white">1</span>
                    <span>Papers must be written in English and not exceed 6 pages.</span>
                </li>
                <li className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-scienceBlue flex items-center justify-center font-bold text-xs shrink-0 text-white">2</span>
                    <span>Use the official FAOBMB 2028 template (Word/LaTeX).</span>
                </li>
                <li className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-scienceBlue flex items-center justify-center font-bold text-xs shrink-0 text-white">3</span>
                    <span>Remove all author names for the blind review process.</span>
                </li>
            </ul>
            <div className="mt-8 p-4 bg-yellow-100 dark:bg-yellow-500/10 border border-yellow-200 dark:border-yellow-500/20 rounded-xl text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Important:</strong> Abstract submission will open in mid-2027.
            </div>
          </div>

          {/* Submission Form */}
          <div className="glass-card p-8 rounded-3xl border-t-4 border-t-scienceBlue dark:border-t-bioCyan opacity-60">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Submit Abstract</h3>
            <div className="absolute inset-0 z-10"></div> {/* Block interaction */}
            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">First Name</label>
                        <input type="text" disabled className="w-full px-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white outline-none" placeholder="John" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Last Name</label>
                        <input type="text" disabled className="w-full px-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white outline-none" placeholder="Doe" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Email Address</label>
                    <input type="email" disabled className="w-full px-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white outline-none" placeholder="john.doe@university.edu" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Paper Title</label>
                    <input type="text" disabled className="w-full px-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white outline-none" placeholder="Enter title" />
                </div>

                <button type="button" disabled className="w-full bg-slate-300 dark:bg-slate-700 text-white py-4 rounded-xl font-bold cursor-not-allowed mt-4">
                    Submissions Closed (Opens 2027)
                </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}