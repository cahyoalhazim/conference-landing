import React, { useState, useEffect } from 'react';
import { Menu, X, Dna, Sun, Moon } from 'lucide-react';
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
  const [isDark, setIsDark] = useState(true); // Default to dark match HTML class
  const location = useLocation();

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  // Determine styling based on scroll and theme
  const getNavBackground = () => {
    if (isScrolled) {
      return 'bg-white/90 dark:bg-deepNavy/90 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-white/10';
    }
    return 'bg-transparent';
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 md:py-4 ${getNavBackground()}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-gradient-to-tr from-red-600 to-scienceBlue p-2 rounded-xl text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-105 transition-transform">
            <Dna size={24} />
          </div>
          <div className="leading-tight">
            <h1 className="font-bold text-xl text-slate-900 dark:text-white tracking-wide">FAOBMB <span className="text-scienceBlue dark:text-bioCyan">2028</span></h1>
            <span className="text-[10px] text-slate-500 dark:text-slate-300 font-medium tracking-widest uppercase">33rd Conference</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-scienceBlue dark:hover:text-bioCyan ${
                isActive(item.href) 
                  ? 'text-scienceBlue dark:text-bioCyan' 
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="h-6 w-[1px] bg-slate-200 dark:bg-white/10 mx-2"></div>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link
            to="/registration"
            className="px-6 py-2.5 rounded-full bg-scienceBlue text-white text-sm font-semibold hover:bg-blue-600 dark:hover:bg-bioCyan hover:shadow-lg transition-all"
          >
            Register Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
          >
            {isDark ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          
          <button
            className="text-slate-800 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 dark:bg-deepNavy/95 backdrop-blur-xl border-t border-slate-200 dark:border-white/10 shadow-xl md:hidden">
          <div className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-lg font-medium hover:text-scienceBlue dark:hover:text-bioCyan ${
                  isActive(item.href) ? 'text-scienceBlue dark:text-bioCyan' : 'text-slate-800 dark:text-slate-300'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/registration"
              className="w-full text-center px-5 py-3 rounded-lg bg-scienceBlue text-white font-semibold shadow-md"
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