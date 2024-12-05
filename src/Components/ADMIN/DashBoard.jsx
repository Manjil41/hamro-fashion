import React, { useState } from 'react';
import { LayoutDashboard, Archive, ShoppingCart, Users, Star, Ticket, Settings, LogOut, ChevronRight, Camera, Trash2, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccountDetails = () => {
    const [currentView, setCurrentView] = useState('detail');

  const menuItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, title: 'Dashboard', id: 'dashboard' },
    { icon: <Archive className="w-5 h-5" />, title: 'Products', id: 'products' },
    { icon: <ShoppingCart className="w-5 h-5" />, title: 'Orders', id: 'orders' },
    { icon: <Users className="w-5 h-5" />, title: 'Customers', id: 'customers' },
    { icon: <Star className="w-5 h-5" />, title: 'Reviwes', id: 'reviews' },
    { icon: <Ticket className="w-5 h-5" />, title: 'Coupons', id: 'coupons' },
    { icon: <Settings className="w-5 h-5" />, title: 'Settings', id: 'settings' },
  ];


  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: "₹1000", stock: 10 },
    { id: 2, name: "Product 2", price: "₹1500", stock: 5 },
    { id: 3, name: "Product 3", price: "₹1200", stock: 8 },
  ]);

  // Handle Delete Product
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };




  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...');
  };
  

  const renderMainContent = () => {
    switch(currentView) {
      case 'products':
        return (
            <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-4">Product Management</h2>

      {/* Add Product Button */}
      <div className="mb-4">
        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600">
          Add Product
        </button>
      </div>

      {/* Product Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Stock</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {product.id}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.name}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {product.price}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {product.stock}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mr-2"
                >
                  Delete
                </button>
                <button className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-600">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        );
      // Add other cases for different views
      default:
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">{currentView.charAt(0).toUpperCase() + currentView.slice(1)}</h2>
            <p className="text-gray-600">Content for {currentView} will appear here.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
        {/* Header */}

            <header className="flex items-center justify-between bg-white shadow-sm px-8 md:px-16 py-4">
            {/* Left Section: Logo */}
            <Link to="/"><div className="flex items-center gap-4">
                <img
                src="logo.png"
                alt="Logo"
                className="h-10 md:h-12"
                />
            </div></Link>
            

            {/* Center Section: Search Bar */}
            <div className="flex flex-1 mx-4 max-w-lg">
                <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-4 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-gray-400 focus:outline-none transition-all duration-200"
                />
            </div>

            {/* Right Section: User Profile and Notifications */}
            <div className="flex items-center gap-6">
                {/* Notification Icon */}
                <button className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full transform -translate-y-2 translate-x-2">
                    3
                </span>
                </button>

                {/* User Icon */}
                <div className="flex items-center gap-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                <p className="hidden md:block text-gray-800 text-sm font-medium">
                    Admin
                </p>
                </div>
            </div>
            </header>

      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8">
                       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4">

              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentView(item.id)}
                    className={`flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-50 transition-colors ${
                      currentView === item.id ? 'bg-gray-50' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3 text-gray-700">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                ))}
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-gray-50 transition-colors text-red-600"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            {renderMainContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;