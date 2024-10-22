import React from 'react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Shirts',
    tag: 'Explore Now!',
    imageUrl: './Mens-Fashion/mens-model-1.png',
  },
  {
    id: 2,
    name: 'Hoodies & Sweetshirt',
    tag: 'Explore Now!',
    imageUrl: './Mens-Fashion/mens-model-2.png',
  },
  {
    id: 3,
    name: 'Jeans',
    tag: 'Explore Now!',
    imageUrl: './Mens-Fashion/mens-jeans.png',
  },
  {
    id: 4,
    name: 'T-Shirt',
    tag: 'Explore Now!',
    imageUrl: './Mens-Fashion/mens-model-3.png',
  },
];

const MensFashion = () => {
  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="p-4 md:p-6 bg-white rounded-lg">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center group">
            <span className="relative">
              Men's Fashion
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md 
                         transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl
                         opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden group">
                <img
                  className="w-full h-80 object-cover object-center 
                             transform transition-all duration-700 group-hover:scale-110"
                  src={product.imageUrl}
                  alt={product.name}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 
                               transition-all duration-300"></div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="transform transition-all duration-300 group-hover:translate-x-2">
                    <h3 className="text-lg font-semibold text-gray-800 
                                 hover:text-purple-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 group-hover:text-purple-500 
                                transition-colors duration-300">
                      {product.tag}
                    </p>
                  </div>
                  
                  <button className="p-2 rounded-lg bg-slate-100 hover:bg-purple-100 
                                   transform transition-all duration-300 
                                   hover:scale-110 hover:rotate-12 active:scale-95">
                    <ArrowRight className="w-6 h-6 text-gray-600 hover:text-purple-600 
                                         transition-colors duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MensFashion;