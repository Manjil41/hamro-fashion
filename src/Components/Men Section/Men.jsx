import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Star, Filter, X, Heart, RefreshCw } from 'lucide-react';

const FilterSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <motion.div className="mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <motion.button
        className="flex justify-between items-center w-full text-left font-semibold mb-2"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {title}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="pl-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Checkbox = ({ label }) => (
  <motion.label 
    className="flex items-center mb-2 cursor-pointer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
    <span className="ml-2 text-sm">{label}</span>
  </motion.label>
);

const ColorOption = ({ color }) => (
  <motion.div
    className="w-6 h-6 rounded-full mr-2 mb-2 cursor-pointer border border-gray-300"
    style={{ backgroundColor: color }}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  />
);

const SizeOption = ({ size }) => (
  <motion.button 
    className="px-3 py-1 border border-gray-300 rounded-md mr-2 mb-2 text-sm hover:bg-gray-100"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {size}
  </motion.button>
);

const ProductCard = ({ image, name, price, rating }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-md overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <div className="relative">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <motion.button 
        className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Heart size={20} className="text-gray-500" />
      </motion.button>
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-sm mb-1">{name}</h3>
      <p className="text-gray-600 text-sm mb-2">RS. {price}</p>
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}
            fill={i < Math.floor(rating) ? "currentColor" : "none"}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">{rating}</span>
      </div>
    </div>
  </motion.div>
);

const Men = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const sidebarContent = (
    <>
      <div className="flex justify-between items-center mb-4 lg:hidden">
        <h2 className="text-xl font-bold">Filters</h2>
        <motion.button 
          onClick={toggleSidebar} 
          className="text-gray-500 hover:text-gray-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X size={24} />
        </motion.button>
      </div>

      <FilterSection title="Category">
        {["Shirts", "Sweat-Shirts", "Active T-shirts", "Hoodies", "Blazers", "Full sleeve T-shirts", "Joggers", "Jackets", "Jeans"].map(item => (
          <Checkbox key={item} label={item} />
        ))}
      </FilterSection>

      <FilterSection title="Price">
        <div className="mb-4">
          <input type="range" className="w-full" min="0" max="100" />
        </div>
        <div className="flex justify-between text-sm">
          <span>Min price</span>
          <span>Max price</span>
        </div>
      </FilterSection>

      <FilterSection title="Colors">
        <div className="flex flex-wrap">
          {["#FFA500", "#FF6347", "#000000", "#FFD700", "#00CED1", "#FFC0CB", "#FFFFFF", "#808080"].map(color => (
            <ColorOption key={color} color={color} />
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Size">
        <div className="flex flex-wrap">
          {["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"].map(size => (
            <SizeOption key={size} size={size} />
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Sort Order By">
        {["Price High - Low", "Price Low - High", "Newest", "Best Rating", "Most Popular"].map(option => (
          <Checkbox key={option} label={option} />
        ))}
      </FilterSection>

      <FilterSection title="Rating">
        {[5, 4, 3, 2, 1].map((rating) => (
          <motion.label 
            key={rating} 
            className="flex items-center mb-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="ml-2 flex">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} size={16} fill="#FFD700" stroke="#FFD700" />
              ))}
              {[...Array(5 - rating)].map((_, i) => (
                <Star key={i + rating} size={16} fill="none" stroke="#FFD700" />
              ))}
            </span>
          </motion.label>
        ))}
      </FilterSection>

      <div className="flex justify-between mt-6">
        <motion.button 
          className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Cancel
        </motion.button>
        <motion.button 
          className="px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply
        </motion.button>
      </div>
    </>
  );

  const products = [
    { image: "./Mens-Fashion/blackjacket-patagonia.png", name: "Black Jacket", price: 1600, rating: 4.5 },
    { image: "/api/placeholder/300/400", name: "Shszy", price: 39.99, rating: 4.3 },
    { image: "/api/placeholder/300/400", name: "Black Jacket", price: 69.99, rating: 4.2 },
    { image: "/api/placeholder/300/400", name: "Jeans Pants", price: 49.99, rating: 4.6 },
    { image: "/api/placeholder/300/400", name: "Hoodie For Boys", price: 34.99, rating: 4.4 },
    { image: "/api/placeholder/300/400", name: "White Joggers", price: 29.99, rating: 4.1 },
    { image: "/api/placeholder/300/400", name: "Boxers", price: 19.99, rating: 4.5 },
    { image: "/api/placeholder/300/400", name: "Marvel T-shirt", price: 24.99, rating: 4.3 },
    { image: "/api/placeholder/300/400", name: "Summer Shirt", price: 29.99, rating: 4.4 },
    { image: "/api/placeholder/300/400", name: "Minimalist Sweatshirt", price: 39.99, rating: 4.6 },
    { image: "/api/placeholder/300/400", name: "Trendy Jeans Pants", price: 54.99, rating: 4.3 },
    { image: "/api/placeholder/300/400", name: "Gray T-shirt", price: 19.99, rating: 4.2 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          {/* Mobile filter button */}
          <motion.div 
            className="lg:hidden mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              onClick={toggleSidebar}
              className="flex items-center px-4 py-2 bg-white rounded-md text-sm font-medium shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter size={20} className="mr-2" />
              Filters
            </motion.button>
          </motion.div>

          {/* Sidebar for larger screens */}
          <motion.div 
            className="hidden lg:block w-64 mr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-4 rounded-lg shadow-md">{sidebarContent}</div>
          </motion.div>

          {/* Modal for mobile screens */}
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.div 
                className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="fixed inset-y-0 left-0 w-full sm:w-96 bg-white p-4 overflow-y-auto"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 0.3 }}
                >
                  {sidebarContent}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Product grid */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
             <Link to={`/product`} className="group relative"> 
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
              </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Men;