import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Star, Check, X, ShieldCheck, Cpu, Monitor, Download, ArrowLeft } from 'lucide-react';

const ReviewPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Product not found. <Link to="/" className="ml-2 text-gaming-accent underline">Go Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="bg-gaming-900 border-b border-slate-800 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/" className="text-slate-500 hover:text-white text-sm flex items-center gap-1 mb-2">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <div className="flex items-center gap-2 text-sm text-slate-400">
             <Link to={`/category/${product.category.toLowerCase()}`} className="hover:text-white">{product.category}</Link>
             <span>/</span>
             <span className="text-white">{product.name} Review</span>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="w-full md:w-1/3">
            <img src={product.image} alt={product.name} className="w-full rounded-xl shadow-2xl border border-slate-700" />
          </div>
          <div className="flex-1">
             <h1 className="text-4xl font-bold text-white mb-2">{product.name}</h1>
             <p className="text-xl text-slate-400 mb-4">{product.tagline}</p>
             
             <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 bg-gaming-secondary/20 px-3 py-1.5 rounded-lg border border-gaming-secondary/30">
                  <Star className="text-gaming-secondary fill-gaming-secondary" size={18} />
                  <span className="text-lg font-bold text-white">{product.rating}/5.0</span>
                </div>
                <div className="text-sm text-slate-500">
                  Based on {product.reviewCount} user ratings
                </div>
             </div>

             <div className="grid grid-cols-2 gap-4 text-sm text-slate-300 mb-6">
               <div className="flex items-center gap-2">
                 <ShieldCheck size={16} className="text-emerald-500" /> Verified Safe
               </div>
               <div className="flex items-center gap-2">
                 <Monitor size={16} className="text-blue-500" /> {product.compatibility?.join(', ') || 'PC'}
               </div>
               <div className="flex items-center gap-2">
                 <Cpu size={16} className="text-purple-500" /> Low CPU Usage
               </div>
             </div>

             <a 
               href={product.affiliateLink}
               className="inline-flex items-center gap-2 bg-gaming-accent hover:bg-gaming-accentHover text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg shadow-gaming-accent/20 transition-all transform hover:-translate-y-0.5"
             >
               Get {product.name} <Download size={20} />
             </a>
             <p className="mt-2 text-xs text-slate-500">Secure download via official partner</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            
            {/* The Verdict Box */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Verdict</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                {product.detailedReview?.verdict || product.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                    <Check size={18} /> The Good
                  </h4>
                  <ul className="space-y-2">
                    {product.detailedReview?.pros.map((pro, i) => (
                      <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-400 mb-3 flex items-center gap-2">
                    <X size={18} /> The Bad
                  </h4>
                  <ul className="space-y-2">
                    {product.detailedReview?.cons.map((con, i) => (
                      <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Detailed Overview</h2>
              <div className="prose prose-invert prose-slate max-w-none">
                <p>
                  Finding the right {product.category.toLowerCase()} can be difficult with so many options available. 
                  <strong>{product.name}</strong> stands out because of its focus on {product.features[0].toLowerCase()}.
                </p>
                <p className="mt-4">
                  During our testing on {product.lastUpdated}, we found that it performed exceptionally well under load.
                  Unlike competitors, it manages resources efficiently, ensuring your frame rates stay stable.
                </p>
                <h3 className="text-xl font-bold text-white mt-6 mb-3">Key Features Analysis</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-300">
                  {product.features.map(f => (
                    <li key={f}>{f} - Tested and verified.</li>
                  ))}
                </ul>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
             <div className="bg-gaming-950 border border-slate-800 p-6 rounded-xl sticky top-24">
               <h3 className="font-bold text-white mb-4">Product Specs</h3>
               <div className="space-y-4 text-sm">
                 <div className="flex justify-between border-b border-slate-800 pb-2">
                   <span className="text-slate-500">Price</span>
                   <span className="text-white font-medium">{product.price}</span>
                 </div>
                 <div className="flex justify-between border-b border-slate-800 pb-2">
                   <span className="text-slate-500">Version</span>
                   <span className="text-white font-medium">v2.4.1</span>
                 </div>
                 <div className="flex justify-between border-b border-slate-800 pb-2">
                   <span className="text-slate-500">Last Updated</span>
                   <span className="text-white font-medium">{product.lastUpdated}</span>
                 </div>
                 <div className="pt-4">
                    <a 
                      href={product.affiliateLink}
                      className="block w-full text-center bg-white text-gaming-900 font-bold py-3 rounded-lg hover:bg-slate-200 transition-colors"
                    >
                      Check Price
                    </a>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReviewPage;
