import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal } from 'lucide-react';

const CategoryListing: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [filter, setFilter] = useState('popular');

  // Normalize category string for comparison
  const normalizedCategory = category?.toUpperCase().replace('S', '') || '';
  
  // Filter products loosely based on route param
  const filteredProducts = PRODUCTS.filter(p => {
    if (!category) return true;
    if (category === 'mods') return p.category === 'Mods' || p.category === 'Resource Packs';
    return p.category.toLowerCase().includes(category.toLowerCase());
  });

  const displayTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Products';

  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">{displayTitle}</h1>
            <p className="text-slate-400">
              Showing {filteredProducts.length} results for top-tier gaming enhancements.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-gaming-800 text-white pl-4 pr-10 py-2.5 rounded-lg border border-slate-700 appearance-none focus:outline-none focus:border-gaming-secondary cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest Added</option>
                <option value="rating">Highest Rated</option>
              </select>
              <SlidersHorizontal size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gaming-800/30 rounded-xl border border-dashed border-slate-700">
            <h3 className="text-xl text-slate-300 font-semibold mb-2">No items found</h3>
            <p className="text-slate-500">We are constantly adding new products. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryListing;
