import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full">
      <div className='flex flex-col justify-between'>
        <div className='bg-black text-white py-8'>
          <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'>
            <div className='flex flex-col md:flex-row items-center md:items-start justify-between space-y-4 md:space-y-0 md:space-x-4 w-full md:w-1/2'>
              <Link to="/">
                <svg className='mt-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                  {/* SVG path content */}
                </svg>
              </Link>  
              <p className="text-sm text-center md:text-left">
                SUBSCRIBE OUR NEWSLETTER & GET ALL OUR NEWS ABOUT NEW PRODUCTS, OFFERS AND BLOGS
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 w-full md:w-1/2">
              <p className="text-xs italic text-gray-400 text-center md:text-right">
                *Get a 5% offer by subscribing our newsletter. Expires on 31 July.
              </p>
              <div className="flex w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="px-4 py-2 rounded-l-sm bg-white text-black w-full focus:outline-none"
                />
                <button className="px-4 py-2 bg-white text-black rounded-r-sm hover:bg-gray-300 transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* social links section  */}
      <div className='bg-green-200'>
        <div className="container mx-auto px-4 py-8 md:flex md:justify-between">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Link to="/" className="flex items-center justify-center md:justify-start">
              <img
                src="logo.png"
                className="mr-3 h-16"
                alt="Logo"
              />
            </Link>
            <div className='mt-4 space-y-2'>
              <pre className='font-sans flex items-center p-1 font-medium'> <img src="loaction.png" alt="location" className="mr-2"/>  Address: Bharatpur-26, Chitwan</pre>
              <pre className='font-sans flex items-center p-1 font-medium'> <img src="telephone.svg" alt="telephone" className="mr-2"/>  Telephone: 9800000000</pre>
              <pre className='font-sans flex items-center p-1 font-medium'> <img src="email-address.svg" alt="email" className="mr-2"/>  Email address: info@hamrofashion.com.np</pre>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:w-2/3">
            <div>
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase">Pages</h2>
              <ul className="text-gray-600 font-medium">
                <li className="mb-3">
                  <Link to="/" className="hover:underline">Home</Link>
                </li>
                <li className='mb-3'>
                  <Link to="/about" className="hover:underline">About Us</Link>
                </li>
                <li className='mb-3'>
                  <Link to="" className="hover:underline">Shop</Link>
                </li>
                <li className='mb-3'>
                  <Link to="" className="hover:underline">Cart</Link>
                </li>
                <li className='mb-3'>
                  <Link to="/signin" className="hover:underline">Login/Register</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-medium text-gray-900 uppercase">Categories</h2>
              <ul className="text-gray-600 font-medium">
                <li className="mb-3">
                  <Link to="" className="hover:underline">Shirt & T-Shirts</Link>
                </li>
                <li className='mb-3'>
                  <Link to="/" className="hover:underline">Pants</Link>
                </li>
                <li className='mb-3'>
                  <Link to="/" className="hover:underline">Hoodies</Link>
                </li>
                <li className='mb-3'>
                  <Link to="/" className="hover:underline">Coates & Jackets</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-medium text-gray-900 uppercase">Support</h2>
              <ul className="text-gray-600 font-medium">
                <li className="mb-3">
                  <Link to="#" className="hover:underline">My Account</Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline">My Order</Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline">Track Your Order</Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline">Return & Exchanges</Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline">Contact</Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-medium text-gray-900 uppercase">Social Media</h2>
              <ul className="font-medium text-gray-600">
                <li className="mb-3">
                  <Link to="" className="flex items-center hover:underline">
                    <img className='mr-2' src="./instagram.svg" alt="insta png" />
                    Instagram
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link to="/" className="flex items-center hover:underline">
                    <img className='mr-2' src="./facebook-fill.svg" alt="fb png" />
                    Facebook
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link to="/" className="flex items-center hover:underline">
                    <img className='mr-2' src="./twitter.svg" alt="x logo" />
                    Twitter
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link to="/" className="flex items-center hover:underline">
                    <img className='mr-2' src="./google-plus.svg" alt="google png" />
                    Google+
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-purple-500">
          <p className='text-white p-4 text-center'>© Hamro Fashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer