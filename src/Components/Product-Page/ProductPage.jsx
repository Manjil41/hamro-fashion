import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Minus, Plus, Heart } from 'lucide-react';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('gray');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('details');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const colors = ['gray', 'yellow', 'pink', 'blue'];
  const images = [
    '/api/placeholder/400/500',
    '/api/placeholder/400/500',
    '/api/placeholder/400/500',
    '/api/placeholder/400/500'
  ];

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleImageNavigation = (direction) => {
    setCurrentImageIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % images.length;
      } else {
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      }
    });
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to cart - Size: ${selectedSize}, Color: ${selectedColor}`);
  };

  const handleBuyNow = () => {
    alert(`Proceeding to checkout - ${quantity} item(s), Size: ${selectedSize}, Color: ${selectedColor}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Images */}
        <div className="md:w-1/2">
          <div className="relative">
            <img src={images[currentImageIndex]} alt="Polaroid Gray Hoodie" className="w-full rounded-lg" />
            <button 
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2"
              onClick={() => handleImageNavigation('prev')}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2"
              onClick={() => handleImageNavigation('next')}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="flex mt-4 gap-4 overflow-x-auto">
            {images.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`Thumbnail ${index + 1}`} 
                className={`w-24 h-24 rounded-md cursor-pointer ${index === currentImageIndex ? 'border-2 border-black' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-2">Polaroid Gray Hoodie With Colored Design</h1>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <Star className="w-5 h-5 text-gray-300 fill-current" />
            </div>
            <span className="ml-2 text-sm text-gray-600">120 Reviews</span>
          </div>
          <p className="text-2xl font-bold mb-4">₹ 4999</p>
          
          {/* Size Selection */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Select Size</h3>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 border rounded ${
                    selectedSize === size ? 'bg-black text-white' : 'bg-white text-black'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Color Selection */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Colours Available</h3>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full border-2 ${
                    selectedColor === color ? 'border-black' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>
          
          {/* Quantity */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Quantity</h3>
            <div className="flex items-center">
              <button
                className="border rounded-l px-2 py-1"
                onClick={() => handleQuantityChange(-1)}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="border-t border-b px-4 py-1">{quantity}</span>
              <button
                className="border rounded-r px-2 py-1"
                onClick={() => handleQuantityChange(1)}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-4 mb-4">
            <button className="flex-1 bg-black text-white py-2 rounded" onClick={handleAddToCart}>
              Add To Cart
            </button>
            <button className="flex-1 bg-gray-200 text-black py-2 rounded" onClick={handleBuyNow}>
              Buy This Product
            </button>
            <button 
              className={`border p-2 rounded ${isWishlisted ? 'bg-red-100' : ''}`}
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              <Heart className={`w-6 h-6 ${isWishlisted ? 'text-red-500 fill-current' : ''}`} />
            </button>
          </div>
          
          <p className="text-sm text-gray-600">Estimated Delivery: 2-3 business days</p>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-8">
        <div className="border-b">
          <button 
            className={`py-2 px-4 ${activeTab === 'details' ? 'border-b-2 border-black' : 'text-gray-500'}`}
            onClick={() => setActiveTab('details')}
          >
            Details
          </button>
          <button 
            className={`py-2 px-4 ${activeTab === 'reviews' ? 'border-b-2 border-black' : 'text-gray-500'}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
        </div>
        <div className="mt-4">
          {activeTab === 'details' ? (
            <>
              <p className="mb-4">100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.</p>
              <h3 className="font-semibold mb-2">Materials</h3>
              <p className="mb-2">Composition:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Cotton 62%</li>
                <li>Polyester 38%</li>
              </ul>
              <h3 className="font-semibold mb-2">Care Guide</h3>
              <ul className="list-disc list-inside">
                <li>Only non-chlorine bleach when needed</li>
                <li>Machine wash at 40°</li>
                <li>Medium iron</li>
                <li>Do not iron on print</li>
                <li>No dry clean</li>
                <li>Tumble dry medium</li>
              </ul>
            </>
          ) : (
            <p>Reviews content would go here.</p>
          )}
        </div>
      </div>

      {/* Similar Products */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border rounded-lg p-4">
              <img src="/api/placeholder/200/250" alt={`Similar Product ${i}`} className="w-full rounded-lg mb-2" />
              <h3 className="font-semibold mb-1">Trendy Summer Top</h3>
              <p className="text-sm text-gray-600 mb-1">AS's Brand</p>
              <p className="font-bold">₹ 699</p>
              <div className="flex items-center mt-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm">4.5</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;