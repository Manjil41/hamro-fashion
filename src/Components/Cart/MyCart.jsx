import React, { useState } from 'react';
import { Trash2, ArrowLeft, ChevronRight } from 'lucide-react';

const MyCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Polaroid Gray Hoodie With...",
      color: "Yellow",
      size: "XL",
      price: 599,
      quantity: 2,
      shipping: 150,
      image: "/api/placeholder/80/80",
      selected: true
    },
    {
      id: 2,
      name: "Polaroid Gray Hoodie With...",
      color: "Yellow",
      size: "XL",
      price: 599,
      quantity: 1,
      shipping: 150,
      image: "/api/placeholder/80/80",
      selected: false
    },
    {
      id: 3,
      name: "Polaroid Gray Hoodie With...",
      color: "Yellow",
      size: "XL",
      price: 599,
      quantity: 1,
      shipping: 150,
      image: "/api/placeholder/80/80",
      selected: false
    }
  ]);

  const [couponCode, setCouponCode] = useState("");

  const toggleSelectItem = (id) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const toggleSelectAll = () => {
    const allSelected = cartItems.every(item => item.selected);
    setCartItems(items =>
      items.map(item => ({ ...item, selected: !allSelected }))
    );
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const calculateShipping = () => {
    return cartItems.reduce((sum, item) => sum + item.shipping, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping() - 100; // Assuming 100 is coupon discount
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Cart Section */}
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">My Cart</h1>
            <span className="text-gray-600">{cartItems.length} items in your cart</span>
          </div>

          {/* Cart Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 p-4 bg-gray-800 text-white text-sm">
              <div className="col-span-1">
                <input
                  type="checkbox"
                  checked={cartItems.every(item => item.selected)}
                  onChange={toggleSelectAll}
                  className="rounded border-gray-300"
                />
              </div>
              <div className="col-span-5">PRODUCT DETAILS</div>
              <div className="col-span-2 text-center">PRICE</div>
              <div className="col-span-1 text-center">QUANTITY</div>
              <div className="col-span-1 text-center">SHIPPING</div>
              <div className="col-span-1 text-center">SUBTOTAL</div>
              <div className="col-span-1 text-center">ACTION</div>
            </div>

            {/* Cart Items */}
            {cartItems.map(item => (
              <div 
                key={item.id}
                className="grid grid-cols-12 gap-4 p-4 border-b items-center hover:bg-gray-50 transition-colors"
              >
                <div className="col-span-1">
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => toggleSelectItem(item.id)}
                    className="rounded border-gray-300"
                  />
                </div>
                <div className="col-span-5 flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">Color: {item.color}</p>
                    <p className="text-sm text-gray-600">Size: {item.size}</p>
                  </div>
                </div>
                <div className="col-span-2 text-center">₹{item.price}</div>
                <div className="col-span-1 flex justify-center">
                  <div className="flex border rounded">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border-x">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-span-1 text-center">₹{item.shipping}</div>
                <div className="col-span-1 text-center">
                  ₹{item.price * item.quantity}
                </div>
                <div className="col-span-1 flex justify-center">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-500 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Return to shop
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:w-80">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Have a coupon?</h2>
            <div className="flex gap-2 mb-6">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter coupon code"
                className="flex-grow px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors">
                Apply
              </button>
            </div>

            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{calculateShipping().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Coupon Discount</span>
                <span>-₹100.00</span>
              </div>
              <div className="flex justify-between font-semibold text-lg pt-3 border-t">
                <span>Total</span>
                <span>₹{calculateTotal().toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full py-3 bg-gray-800 text-white rounded flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors">
              Checkout
              <ChevronRight className="w-4 h-4" />
            </button>
            
            <button className="w-full mt-3 text-center text-gray-600 hover:text-gray-800 transition-colors">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;