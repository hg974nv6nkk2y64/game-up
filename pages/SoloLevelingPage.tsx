import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, BLOG_POSTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Shield, Zap, Swords, Users, ArrowRight } from 'lucide-react';

const SoloLevelingPage: React.FC = () => {
  const soloLevelingProduct = PRODUCTS.find(p => p.id === 'prod-6');
  // Recommend some general PC performance tools
  const recommendedTools = PRODUCTS.filter(p => ['prod-1', 'prod-5'].includes(p.id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!soloLevelingProduct) {
    return <div className="p-20 text-center text-white">Game data could not be loaded.</div>;
  }

  return (
    <div className="bg-gaming-900">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] py-16 flex items-center justify-center text-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${soloLevelingProduct.image})` }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gaming-900 to-transparent"></div>
        </div>
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
            Solo Leveling: <span className="text-purple-400">Arise</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-300 mb-8 drop-shadow-md">
            {soloLevelingProduct.tagline} Become the Shadow Monarch and command your army.
          </p>
          <a
            href={soloLevelingProduct.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg shadow-purple-500/20 transition-all transform hover:-translate-y-0.5"
          >
            Play For Free <ArrowRight size={20} />
          </a>

          <div className="mt-12">
            <p className="text-sm text-slate-400 mb-3">Also check out these popular games:</p>
            <div className="flex justify-center gap-4">
              <Link to="/review/prod-7" className="bg-slate-800/50 border border-slate-700 text-slate-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 hover:border-slate-600 transition-colors">
                Garena Free Fire
              </Link>
              <Link to="/review/prod-8" className="bg-slate-800/50 border border-slate-700 text-slate-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 hover:border-slate-600 transition-colors">
                PUBG: Battlegrounds
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Game Details Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">About The Game</h2>
              <p className="text-slate-400 leading-relaxed">
                {soloLevelingProduct.description} Dive into the world of Hunters, Gates, and monstrous beasts. This action RPG faithfully recreates the beloved webtoon, allowing you to control Sung Jinwoo and his powerful shadows in visceral, fast-paced combat.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-4 rounded-lg text-center border border-slate-800">
                <Swords size={24} className="mx-auto text-purple-400 mb-2" />
                <h3 className="font-semibold text-white">Live Action Combat</h3>
              </div>
               <div className="bg-slate-800/50 p-4 rounded-lg text-center border border-slate-800">
                <Users size={24} className="mx-auto text-purple-400 mb-2" />
                <h3 className="font-semibold text-white">Shadow Army</h3>
              </div>
               <div className="bg-slate-800/50 p-4 rounded-lg text-center border border-slate-800">
                <Shield size={24} className="mx-auto text-purple-400 mb-2" />
                <h3 className="font-semibold text-white">Hunter Guilds</h3>
              </div>
               <div className="bg-slate-800/50 p-4 rounded-lg text-center border border-slate-800">
                <Zap size={24} className="mx-auto text-purple-400 mb-2" />
                <h3 className="font-semibold text-white">Fast-Paced</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recommended Add-ons */}
      <section className="py-20 bg-gaming-950/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Recommended Tools for PC Players</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
            {recommendedTools.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Guides & News */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Latest Guides & News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {BLOG_POSTS.slice(0,3).map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl aspect-video mb-4">
                  <img src={post.image} alt={post.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span>{post.date}</span><span>•</span><span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gaming-accent transition-colors">{post.title}</h3>
                <p className="text-slate-400 text-sm line-clamp-2">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoloLevelingPage;