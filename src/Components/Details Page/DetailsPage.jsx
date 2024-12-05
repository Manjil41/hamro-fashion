import React, { useState } from 'react';

const CustomerDeliveryDetails = () => {
  const [formData, setFormData] = useState({
    email: 'haha@gmail.com',
    firstName: 'ram',
    lastName: 'sherpa',
    phone: '9800000000',
    country: 'Nepal',
    address: 'Himalayas Mountain',
    city: 'Kathmandu',
    zipCode: '44600'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [deliveryMethod, setDeliveryMethod] = useState('Kathmandu');
  const [paymentMethod, setPaymentMethod] = useState('Cash On Delivery');

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Customer & Delivery Details</h2>

      {/* Customer Details */}
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border-gray-300 rounded-md px-3 py-2 w-full"
          required
        />
      </div>
      <div className="flex mb-4">
        <div className="mr-2 w-1/2">
          <label htmlFor="firstName" className="block font-medium mb-1">First name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border-gray-300 rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        <div className="ml-2 w-1/2">
          <label htmlFor="lastName" className="block font-medium mb-1">Last name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="border-gray-300 rounded-md px-3 py-2 w-full"
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block font-medium mb-1">Phone *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="border-gray-300 rounded-md px-3 py-2 w-full"
          required
        />
      </div>

      {/* Delivery Details */}
      <div className="mb-4">
        <label htmlFor="country" className="block font-medium mb-1">Country/Region *</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="border-gray-300 rounded-md px-3 py-2 w-full"
          required
        >
          <option value="Nepal">Nepal</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block font-medium mb-1">Address *</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="border-gray-300 rounded-md px-3 py-2 w-full"
          required
        />
      </div>
      <div className="flex mb-4">
        <div className="mr-2 w-1/2">
          <label htmlFor="city" className="block font-medium mb-1">City *</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="border-gray-300 rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        <div className="ml-2 w-1/2">
          <label htmlFor="zipCode" className="block font-medium mb-1">Zip / Postal code *</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className="border-gray-300 rounded-md px-3 py-2 w-full"
            required
          />
        </div>
      </div>

      {/* Delivery Method */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Delivery method</label>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="deliveryMethod"
              value="Kathmandu"
              checked={deliveryMethod === 'Kathmandu'}
              onChange={(e) => setDeliveryMethod(e.target.value)}
              className="mr-2"
            />
            Kathmandu
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="deliveryMethod"
              value="Bhaktapur"
              checked={deliveryMethod === 'Bhaktapur'}
              onChange={(e) => setDeliveryMethod(e.target.value)}
              className="mr-2"
            />
            Bhaktapur
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="deliveryMethod"
              value="Lalitpur"
              checked={deliveryMethod === 'Lalitpur'}
              onChange={(e) => setDeliveryMethod(e.target.value)}
              className="mr-2"
            />
            Lalitpur
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="deliveryMethod"
              value="Pokhara"
              checked={deliveryMethod === 'Pokhara'}
              onChange={(e) => setDeliveryMethod(e.target.value)}
              className="mr-2"
            />
            Pokhara
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="deliveryMethod"
              value="Out of valley"
              checked={deliveryMethod === 'Out of valley'}
              onChange={(e) => setDeliveryMethod(e.target.value)}
              className="mr-2"
            />
            Out of valley (₹100.00)
          </label>
        </div>
      </div>

      {/* Payment */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Payment</label>
        <div className="flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            value="Cash On Delivery"
            checked={paymentMethod === 'Cash On Delivery'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-2"
          />
          <span>Cash On Delivery</span>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
          Place Order & Pay
        </button>
      </div>
    </div>
  );
};

export default CustomerDeliveryDetails;