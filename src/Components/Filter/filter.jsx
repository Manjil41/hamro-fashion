import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Filter, X } from 'lucide-react';

const FilterSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && <div className="pl-2">{children}</div>}
    </div>
  );
};

const Checkbox = ({ label }) => (
  <label className="flex items-center mb-2 cursor-pointer">
    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
    <span className="ml-2 text-sm">{label}</span>
  </label>
);

const ColorOption = ({ color }) => (
  <div
    className="w-6 h-6 rounded-full mr-2 mb-2 cursor-pointer border border-gray-300"
    style={{ backgroundColor: color }}
  />
);

const SizeOption = ({ size }) => (
  <button className="px-3 py-1 border border-gray-300 rounded-md mr-2 mb-2 text-sm hover:bg-gray-100">
    {size}
  </button>
);

const FilterSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const sidebarContent = (
    <>
      <div className="flex justify-between items-center mb-4 lg:hidden">
        <h2 className="text-xl font-bold">Filters</h2>
        <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>

      <FilterSection title="Category">
        <Checkbox label="Shirts" />
        <Checkbox label="Sweat-Shirts" />
        <Checkbox label="Active T-shirts" />
        <Checkbox label="Hoodies" />
        <Checkbox label="Blazers" />
        <Checkbox label="Full sleeve T-shirts" />
        <Checkbox label="Joggers" />
        <Checkbox label="Jackets" />
        <Checkbox label="Jeans" />
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
          <ColorOption color="#FFA500" />
          <ColorOption color="#FF6347" />
          <ColorOption color="#000000" />
          <ColorOption color="#FFD700" />
          <ColorOption color="#00CED1" />
          <ColorOption color="#FFC0CB" />
          <ColorOption color="#FFFFFF" />
          <ColorOption color="#808080" />
        </div>
      </FilterSection>

      <FilterSection title="Size">
        <div className="flex flex-wrap">
          <SizeOption size="XXS" />
          <SizeOption size="XL" />
          <SizeOption size="XS" />
          <SizeOption size="S" />
          <SizeOption size="M" />
          <SizeOption size="L" />
          <SizeOption size="XXL" />
          <SizeOption size="3XL" />
          <SizeOption size="4XL" />
        </div>
      </FilterSection>

      <FilterSection title="Sort Order By">
        <Checkbox label="Price High - Low" />
        <Checkbox label="Price Low - High" />
        <Checkbox label="Newest" />
        <Checkbox label="Best Rating" />
        <Checkbox label="Most Popular" />
      </FilterSection>

      <FilterSection title="Rating">
        {[5, 4, 3, 2, 1].map((rating) => (
          <label key={rating} className="flex items-center mb-2 cursor-pointer">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="ml-2 flex">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} size={16} fill="#FFD700" stroke="#FFD700" />
              ))}
              {[...Array(5 - rating)].map((_, i) => (
                <Star key={i + rating} size={16} fill="none" stroke="#FFD700" />
              ))}
            </span>
          </label>
        ))}
      </FilterSection>

      <div className="flex justify-between mt-6">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-100">
          Cancel
        </button>
        <button className="px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800">
          Apply
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile filter button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={toggleSidebar}
          className="flex items-center px-4 py-2 bg-gray-200 rounded-md text-sm font-medium"
        >
          <Filter size={20} className="mr-2" />
          Filters
        </button>
      </div>

      {/* Sidebar for larger screens */}
      <div className="hidden lg:block w-64 bg-white p-4 border-r border-gray-200 h-screen overflow-y-auto">
        {sidebarContent}
      </div>

      {/* Modal for mobile screens */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="fixed inset-y-0 left-0 w-full sm:w-96 bg-white p-4 overflow-y-auto">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};

export default FilterSidebar;