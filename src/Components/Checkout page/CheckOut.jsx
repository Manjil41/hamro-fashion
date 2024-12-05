import React, { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    country: '',
    address: '',
    city: '',
    postalCode: '',
  });


  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);

  const items = [
    { id: 1, name: 'Polaroid Gray Hoodie', color: 'Yellow', size: 'XL', price: 599 },
    { id: 2, name: 'Polaroid Gray Hoodie', color: 'Yellow', size: 'XL', price: 599 },
    { id: 3, name: 'Polaroid Gray Hoodie', color: 'Yellow', size: 'XL', price: 599 },
  ];

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const couponDiscount = '';
  const shipping = '';
  const total = subtotal - couponDiscount + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDeliveryChange = (method) => {
    setDeliveryMethod(method);
  };

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col py-10 px-6 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-2">Check Out</h1>
      <div className="w-full max-w-full rounded-lg p-6 lg:p-8 grid lg:grid-cols-2 gap-6">
        {/* Customer Details */}
        <div className='shadow bg-white rounded-lg p-5'>
          <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-lg p-2"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-lg p-2"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-lg p-2"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-lg p-2"
                required
              />
            </div>
          </form>

          {/* Delivery Details */}
          <h2 className="text-xl font-semibold mt-6 mb-4">Delivery Details</h2>
          <div className="space-y-4">
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-lg p-2"
              required
            >
              <option value="" disabled>Select Country/Region</option>
              <option value="Nepal">Nepal</option>
              <option value="India">India</option>
            </select>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-lg p-2"
              required
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-lg p-2"
                required
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-lg p-2"
                required
              />
            </div>
          </div>

          {/* Save Information */}
          <div className="mt-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={saveInfo}
                onChange={() => setSaveInfo(!saveInfo)}
                className="h-4 w-4 border-gray-300 rounded"
              />
              <span>Save my information for a faster checkout</span>
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className='shadow bg-white rounded-lg p-5'>
          <h2 className="text-xl font-semibold mb-4">Order Summary ({items.length})</h2>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    Color: {item.color}, Size: {item.size}
                  </p>
                </div>
                <span className="text-sm font-semibold">₹ {item.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹ {subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Coupon Discount</span>
              <span>-₹ {couponDiscount}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹ {shipping}</span>
            </div>
          </div>
          <div className="mt-4 border-t pt-4 flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₹ {total}</span>
          </div>
        </div>
      </div>
      <button className="w-3/5 mt-6 mb-10 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700">
        Continue to Next
      </button>

              {/* Delivery Method */}
              <div>
          <h2 className="text-xl font-semibold mb-4">Delivery Method</h2>
          <div className="w-3/5 bg-gray-100 rounded-lg p-4 space-y-4">
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="Chitwan"
                  checked={deliveryMethod === 'Chitwan'}
                  onChange={() => handleDeliveryChange('Chitwan')}
                  className="h-4 w-4"
                />
                <span>Chitwan</span>
                <span className="ml-2 text-sm text-gray-500">Delivered within 1-3 business day</span>
              </label>
              <span>₹ 150</span>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="Kathmandu"
                  checked={deliveryMethod === 'Kathmandu'}
                  onChange={() => handleDeliveryChange('Kathmandu')}
                  className="h-4 w-4"
                />
                <span>Kathmandu</span>
                <span className="ml-2 text-sm text-gray-500">Delivered within 2-3 business day</span>
              </label>
              <span>₹ 150</span>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="Outside Valley"
                  checked={deliveryMethod === 'Outside Valley'}
                  onChange={() => handleDeliveryChange('Outside Valley')}
                  className="h-4 w-4"
                />
                <span>Outside Valley</span>
                <span className="ml-2 text-sm text-gray-500 d-flex flex-col">Delivered within 2-4 business day</span>
              </label>
              <span>₹ 250</span>
            </div>
          </div>
          <button className="w-3/5 mt-6 mb-10 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700">
        Continue to Next
      </button>
        </div>

        {/* Payment Method */}
        <div className='w-3/5'>
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <p className="text-sm text-gray-500 mb-4">All transactions are secure and encrypted.</p>
          <div className="bg-gray-100 rounded-lg p-4 space-y-4">
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash on delivery"
                  checked={paymentMethod === 'Cash on delivery'}
                  onChange={() => handlePaymentChange('Cash on delivery')}
                  className="h-4 w-4"
                />
                <span>Cash on delivery</span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="E-Sewa"
                  checked={paymentMethod === 'E-Sewa'}
                  onChange={() => handlePaymentChange('E-Sewa')}
                  className="h-4 w-4"
                />
                <span>E-Sewa</span>
              </label>
            </div>
          </div>
        </div>

        {/* Save Information and Place Order */}
        <div>
          <label className="flex items-center space-x-2 mb-4">
            <input
              type="checkbox"
              checked={saveInfo}
              onChange={() => setSaveInfo(!saveInfo)}
              className="h-4 w-4 border-gray-300 rounded"
            />
            <span>Save my information for a faster checkout</span>
          </label>
          <button
            className="w-3/5 bg-slate-800 text-white rounded-lg py-3 hover:bg-slate-700 transition"
            onClick={() => alert('Order Placed!')}
          >
            Place Order And Pay
          </button>
        </div>

    </div>
  );
};

export default Checkout;
