import React, { useState } from 'react';
import { User, Heart, ShoppingCart, MapPin, Lock, LogOut, ChevronRight, Camera, Trash2 } from 'lucide-react';

const AccountDetails = () => {
  const [currentView, setCurrentView] = useState('detail');
  const [profileImage, setProfileImage] = useState("MM"); // Default to initials

  const menuItems = [
    { icon: <User className="w-5 h-5" />, title: 'Account Detail', id: 'detail' },
    { icon: <Heart className="w-5 h-5" />, title: 'Wishlist', id: 'wishlist' },
    { icon: <ShoppingCart className="w-5 h-5" />, title: 'Orders', id: 'orders' },
    { icon: <MapPin className="w-5 h-5" />, title: 'Address', id: 'address' },
    { icon: <Lock className="w-5 h-5" />, title: 'Password', id: 'password' },
  ];


    const orders = [
      {
        id: 1,
        name: 'Polaroid Gray Hoodie With Yellow Pocket',
        color: 'Yellow',
        size: 'XL',
        status: 'Processing',
        orderedOn: '30 Nov 2024'
      },
      {
        id: 2,
        name: 'Polaroid Gray Hoodie With Yellow Pocket',
        color: 'Yellow',
        size: 'XL',
        status: 'Completed',
        orderedOn: '30 Nov 2024'
      },
      {
        id: 3,
        name: 'Polaroid Gray Hoodie With Yellow Pocket',
        color: 'Yellow',
        size: 'XL',
        status: 'Processing',
        orderedOn: '30 Nov 2024'
      },
      {
        id: 4,
        name: 'Polaroid Gray Hoodie With Yellow Pocket',
        color: 'Yellow',
        size: 'XL',
        status: 'Completed',
        orderedOn: '30 Nov 2024'
      }
    ];

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...');
  };
  

  const renderMainContent = () => {
    switch(currentView) {
      case 'detail':
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Account Details</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className='grid grid-cols-2 md:grid-cols-2 gap-6'>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact No.
                </label>
                <input
                  type="tel"
                  placeholder="Contact No."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail Address
                </label>
                <input
                  type="email"
                  placeholder="E-mail address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
              </div>
                  </div>

              <button
                type="submit"
                className="w-full md:w-auto px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Save Changes
              </button>
            </form>
          </div>
        );
        
      case 'wishlist':
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">My Wishlist</h2>
            <div className="space-y-6">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between border-b border-gray-200 pb-6 space-y-4 md:space-y-0 md:space-x-6 transition-all hover:shadow-md hover:border-gray-300 rounded-lg p-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={profileImage || '/path/to/default/image.png'}
                alt="Wishlist Item"
                className="w-20 h-20 rounded-lg border border-gray-300 object-cover"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-800">Polaroid Gray Hoodie</h3>
                <p className="text-sm text-gray-500">Color: Yellow | Size: XL</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end space-y-2">
              <p className="text-lg font-semibold text-gray-800">₹599</p>
              <div className="flex items-center space-x-2">
                <button
                  className="px-4 py-2 text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition-all"
                  onClick={() => console.log('Added to Cart')}
                >
                  Add to Cart
                </button>
                <button
                    onClick={() => removeFromWishlist()}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-all"
                  >
                    <Trash2 size={20} />
                  </button>
              </div>
            </div>
          </div>
        ))}
      </div>
          </div>
        );


        case 'orders':
          return (
            <div className='bg-white rounded-lg shadow-sm p-6'>
              <h2 className='text-xl font-semibold mb-6'>Order</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src="https://via.placeholder.com/150"
              alt={order.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{order.name}</h3>
              <p className="text-gray-500 mb-2">
                Color: {order.color} | Size: {order.size}
              </p>
              <p className="text-gray-500 mb-2">Ordered On: {order.orderedOn}</p>
              <div className="flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    order.status === 'Processing'
                      ? 'bg-yellow-200 text-yellow-800'
                      : 'bg-green-200 text-green-800'
                  }`}
                >
                  {order.status}
                </span>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300">
                  View Item
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
            </div>
          );

        case 'address':
            return (
                <div className='bg-white rounded-lg shadow-sm p-6'>
                    <h2 className='text-xl font-semibold mb-6'>Address</h2>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country / Region
                  </label>
                  <input
                    type="text"
                    placeholder="Country / Region"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors mb-6"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className='grid grid-cols-2 md:grid-cols-2 gap-6'>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                 City
                </label>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zip / Postal Code
                </label>
                <input
                  type="text"
                  placeholder="Zip / Postal Code"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors mb-6"
                  />
              </div>
                  </div>

              <button
                type="submit"
                className="w-full md:w-auto px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Save Changes
              </button>
                </div>
            );

        case 'password':
            return (
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold mb-6">Password</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your new password"
                    className="w-2/5 px-4 py-2 border border-gray-300 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors mb-6"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Your new password"
                    className="w-2/5 px-4 py-2 border border-gray-300 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors mb-6"
                  />
                </div>
                <button
                  className="px-4 py-2 text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition-all"
                >
                  Save Changes
                </button>
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
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-8">My Account</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex flex-col items-center mb-6">
                <div className="relative">
                  {typeof profileImage === 'string' && profileImage.startsWith('data:image') ? (
                    <img 
                      src={profileImage} 
                      alt="Profile" 
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-semibold">
                      {profileImage}
                    </div>
                  )}
                  <label className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md cursor-pointer">
                    <Camera className="w-4 h-4 text-gray-600" />
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
                <h2 className="mt-4 font-semibold">Manjil Mahato</h2>
                <p className="text-sm text-gray-500">Change Profile Picture</p>
              </div>

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