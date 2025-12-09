import React, { useState } from 'react';
import { Menu, X, Gamepad2, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Mods', path: '/category/mods' },
    { name: 'Hosting', path: '/category/hosting' },
    { name: 'VPNs', path: '/category/vpn' },
    { name: 'Tools', path: '/category/tools' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => location.pathname.includes(path.toLowerCase());

  return (
    <header className="sticky top-0 z-40 bg-gaming-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gaming-secondary p-1.5 rounded-lg group-hover:bg-gaming-secondary/80 transition-colors">
              <Gamepad2 className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Nexus<span className="text-gaming-accent">Forge</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-gaming-accent ${
                  isActive(link.path) ? 'text-gaming-accent' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-slate-400 hover:text-white transition-colors">
              <Search size={20} />
            </button>
            <Link 
              to="/about"
              className="text-sm font-medium text-slate-300 hover:text-white"
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-md"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gaming-900 border-b border-slate-800 animate-in slide-in-from-top-5 duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
