import React from 'react';
import { ArrowRight, Zap, Shield, Box, Sparkles, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, BLOG_POSTS } from '../constants';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 3);
  const featuredGames = PRODUCTS.filter(p => ['prod-6', 'prod-7', 'prod-8'].includes(p.id));

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gaming-secondary blur-[120px] rounded-full mix-blend-screen"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gaming-accent blur-[120px] rounded-full mix-blend-screen"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gaming-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gaming-accent"></span>
            </span>
            <span className="text-xs font-medium text-gaming-accent uppercase tracking-wider">New Mods Added Daily</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            Level Up Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gaming-accent to-gaming-secondary">
              Gaming Experience
            </span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
            Discover the highest-rated mods, lag-free server hosting, and essential tools to optimize your gameplay. Curated by gamers, for gamers.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/category/mods" 
              className="px-8 py-4 bg-white text-gaming-900 rounded-lg font-bold text-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              Explore Mods <Zap size={20} />
            </Link>
            <Link 
              to="/category/hosting" 
              className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-lg font-bold text-lg hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              Find Hosting <Server size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-gaming-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Mods', icon: Box, color: 'text-blue-400', path: '/category/mods' },
              { name: 'Hosting', icon: Server, color: 'text-purple-400', path: '/category/hosting' },
              { name: 'Security', icon: Shield, color: 'text-emerald-400', path: '/category/vpn' },
              { name: 'Tools', icon: Sparkles, color: 'text-orange-400', path: '/category/tools' },
            ].map((cat) => (
              <Link 
                key={cat.name}
                to={cat.path}
                className="group bg-gaming-800/50 hover:bg-gaming-800 border border-slate-800 p-6 rounded-xl transition-all duration-300 flex flex-col items-center justify-center text-center gap-3"
              >
                <cat.icon className={`w-8 h-8 ${cat.color} group-hover:scale-110 transition-transform`} />
                <span className="font-semibold text-slate-200">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Trending Add-ons</h2>
              <p className="text-slate-400">Top rated by our community this week.</p>
            </div>
            <Link to="/category/mods" className="text-gaming-accent hover:text-white transition-colors flex items-center gap-1 text-sm font-medium">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-24 bg-gaming-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Featured Games</h2>
              <p className="text-slate-400">Explore popular titles and new releases.</p>
            </div>
            <Link to="/category/mods" className="text-gaming-accent hover:text-white transition-colors flex items-center gap-1 text-sm font-medium">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGames.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-gaming-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gaming-secondary">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Trustworthy Reviews</h3>
              <p className="text-slate-400 leading-relaxed">
                We strictly test every mod and tool. No malware, no bloatware, just performance.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-gaming-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gaming-accent">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Performance First</h3>
              <p className="text-slate-400 leading-relaxed">
                Our benchmarks focus on FPS impact and stability so you know what to expect.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-pink-500">
                <Box size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Curated Collections</h3>
              <p className="text-slate-400 leading-relaxed">
                Don't waste time searching. We bundle the best compatible mods for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12">Latest Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl aspect-video mb-4">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gaming-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;