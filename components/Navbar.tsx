import React, { useState, useEffect } from 'react';
import { Menu, X, Dna } from 'lucide-react';
import { NavItem } from '../types';
import { Link, useLocation } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Speakers', href: '/speakers' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Submission', href: '/submission' },
  { label: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  // Determine if we are on the home page (dark background) or inner pages (light/mixed)
  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-deepNavy/90 backdrop-blur-md shadow-lg py-3 border-b border-white/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-gradient-to-tr from-scienceBlue to-bioCyan p-2 rounded-xl text-white shadow-[0_0_15px_rgba(34,211,238,0.5)] group-hover:scale-105 transition-transform">
            <Dna size={24} />
          </div>
          <div className="leading-tight">
            <h1 className="font-bold text-xl text-white tracking-wide">ICBMB <span className="text-bioCyan">2025</span></h1>
            <span className="text-[10px] text-slate-300 font-medium tracking-widest uppercase">Biochemistry & Molecular Bio</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-bioCyan ${
                isActive(item.href) 
                  ? 'text-bioCyan' 
                  : (isHome || isScrolled ? 'text-slate-300' : 'text-slate-700')
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/registration"
            className="px-6 py-2.5 rounded-full bg-scienceBlue text-white text-sm font-semibold hover:bg-bioCyan hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all"
          >
            Register Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isHome || isScrolled ? 'text-white' : 'text-slate-800'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-deepNavy/95 backdrop-blur-xl border-t border-white/10 shadow-xl md:hidden">
          <div className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-lg font-medium hover:text-bioCyan ${isActive(item.href) ? 'text-bioCyan' : 'text-slate-300'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/registration"
              className="w-full text-center px-5 py-3 rounded-lg bg-scienceBlue text-white font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;