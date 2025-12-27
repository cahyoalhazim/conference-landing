import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Speakers from './pages/Speakers';
import Schedule from './pages/Schedule';
import Submission from './pages/Submission';
import Registration from './pages/Registration';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <HashRouter>
      <div className="font-sans text-slate-300 bg-deepNavy min-h-screen flex flex-col selection:bg-bioCyan selection:text-deepNavy">
        <ScrollToTop />
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
    </HashRouter>
  );
}

export default App;