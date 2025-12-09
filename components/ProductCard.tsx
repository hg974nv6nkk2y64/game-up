import React from 'react';
import { Star, Download, ExternalLink, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-gaming-800 rounded-xl border border-slate-800 overflow-hidden hover:border-gaming-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-gaming-secondary/10 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-3 left-3 bg-gaming-900/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gaming-accent border border-gaming-accent/20">
          {product.category}
        </div>
        {product.price === 'Free' && (
           <div className="absolute top-3 right-3 bg-emerald-500/90 text-white px-2 py-1 rounded text-xs font-bold shadow-md">
             FREE
           </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-gaming-secondary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 bg-slate-900/50 px-2 py-1 rounded">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-slate-400 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Features Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {product.features.slice(0, 2).map((feature, idx) => (
            <span key={idx} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded border border-slate-700">
              {feature}
            </span>
          ))}
          {product.features.length > 2 && (
             <span className="text-xs text-slate-500 px-1 py-1">+ {product.features.length - 2} more</span>
          )}
        </div>

        {/* Actions - Sticky at bottom */}
        <div className="mt-auto flex gap-3">
          <Link 
            to={`/review/${product.id}`}
            className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
          >
            Review <ChevronRight size={14} />
          </Link>
          <a 
            href={product.affiliateLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-gaming-accent hover:bg-gaming-accentHover text-white py-2.5 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2"
          >
            Get Deal <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
