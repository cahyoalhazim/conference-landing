import React from 'react';
import Navbar from '../components/Navbar';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FAOBMB 2028 | 33rd Federation of Asian & Oceanian Biochemists and Molecular Biologists Conference',
  description: 'Breaking New Grounds on Disease Mechanism in the Post-Pandemic Era. Join us in Ubud, Bali, Indonesia, September 2028.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto+Slab:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-deepNavy min-h-screen flex flex-col selection:bg-scienceBlue dark:selection:bg-bioCyan selection:text-white dark:selection:text-deepNavy transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}