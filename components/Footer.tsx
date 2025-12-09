import React from 'react';
import { Gamepad2, Twitter, Github, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gaming-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-slate-800 p-1.5 rounded-lg">
                <Gamepad2 className="text-gaming-accent" size={20} />
              </div>
              <span className="text-lg font-bold text-white">NexusForge</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your ultimate destination for game mods, reliable hosting, and essential gaming tools. Level up your experience today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-gaming-accent transition-colors"><Twitter size={18} /></a>
              <a href="#" className="text-slate-500 hover:text-gaming-accent transition-colors"><Github size={18} /></a>
              <a href="#" className="text-slate-500 hover:text-gaming-accent transition-colors"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Discover</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/category/mods" className="hover:text-gaming-accent">Trending Mods</Link></li>
              <li><Link to="/category/hosting" className="hover:text-gaming-accent">Server Hosting</Link></li>
              <li><Link to="/category/tools" className="hover:text-gaming-accent">Essential Tools</Link></li>
              <li><Link to="/blog" className="hover:text-gaming-accent">Gaming Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-gaming-accent">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gaming-accent">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-gaming-accent">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-gaming-accent">Terms of Service</Link></li>
            </ul>
          </div>

           {/* Disclosure */}
           <div className="md:col-span-1 bg-slate-900/50 p-4 rounded-lg border border-slate-800/50">
            <h4 className="text-slate-300 font-semibold mb-2 text-xs uppercase tracking-wider">Affiliate Disclosure</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              NexusForge is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you. We only recommend products we trust.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} NexusForge. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-600 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            System Operational
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
