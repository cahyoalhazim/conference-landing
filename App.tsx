import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';

// Import pages from the app directory structure with explicit extensions
import Home from './app/page.tsx';
import About from './app/about/page.tsx';
import Speakers from './app/speakers/page.tsx';
import Schedule from './app/schedule/page.tsx';
import Submission from './app/submission/page.tsx';
import Registration from './app/registration/page.tsx';
import Contact from './app/contact/page.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-deepNavy selection:bg-scienceBlue dark:selection:bg-bioCyan selection:text-white dark:selection:text-deepNavy transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/submission" element={<Submission />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;