import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer>
        <div className='flex flex-col justify-between'>
        <div className='bg-black text-white py-8'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6'>
                 <div className='flex flex-row item-start justify-between space-x-4 ml-36'>
                 <Link to="/">
                 <svg className='mt-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <g clip-path="url(#clip0_106_406)">
                        <path d="M23.6525 -0.0772143C23.9474 0.136756 24.0682 0.422341 24.015 0.779541L20.6085 21.3546C20.5641 21.6136 20.4215 21.8147 20.1806 21.9578C20.0557 22.0293 19.9173 22.0652 19.7655 22.0654C19.6673 22.0655 19.5601 22.0433 19.444 21.9987L13.3744 19.5276L10.1376 23.4819C9.97708 23.6875 9.75844 23.7904 9.48165 23.7907C9.36558 23.7908 9.26735 23.773 9.18695 23.7374C9.01724 23.6751 8.88097 23.5703 8.77813 23.4231C8.67529 23.2759 8.62378 23.113 8.62359 22.9344L8.61858 18.2603L20.1748 4.06491L5.87112 16.4686L0.578623 14.3047C0.248132 14.18 0.0692979 13.9347 0.0421199 13.5686C0.0238801 13.2115 0.166455 12.948 0.469844 12.778L22.7418 -0.103024C22.8756 -0.183525 23.0184 -0.223856 23.1702 -0.224019C23.3488 -0.22421 23.5095 -0.175275 23.6525 -0.0772143Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_106_406">
                        <rect width="24" height="24" fill="white" transform="translate(0.027832 0.281494) rotate(-0.0613952)"/>
                        </clipPath>
                    </defs>
                    </svg>
                 </Link>  
                        <p className="text-sm">
                        
                        SUBSCRIBE OUR NEWSLETTER & GET ALL OUR NEWS ABOUT NEW PRODUCTS, OFFERS AND BLOGS
                    </p>
                 </div>
                 {/* Right side button part */}
                     <div className="flex flex-col items-center space-y-4 mr-36">
                        <p className="text-xs italic text-gray-400">
                            *Get a 5% offer by subscribing our newsletter. Expires on 31 July.
                        </p>
                        <div className="flex">
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
                <div className="md:flex md:justify-between">
                    <div className="ml-20 p-8 mt-7">
                        <Link to="/" className="flex items-center">
                            <img
                                src="logo.png"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                        <pre className='font-sans flex p-1 font-medium'> <img src="loaction.png" alt="loaction"/>  Address: Bharatpur-26, Chitwan</pre>
                        <pre className='font-sans flex p-1 font-medium'> <img src="telephone.svg" alt="loaction"/>  Telephone: 9800000000</pre>
                        <pre className='font-sans flex p-1 font-medium'> <img src="email-address.svg" alt="loaction"/>  Email address: info@hamrofashion.com.np</pre>
                    </div>
                    <div className="flex grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 p-9 mr-20">
                        <div>
                            <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase">Pages</h2>
                            <ul className="text-gray-600 font-medium">
                                <li className="mb-3">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li className='mb-3'>
                                    <Link to="/about" className="hover:underline">
                                        About Us
                                    </Link>
                                </li>
                                <li className='mb-3'>
                                    <Link to="" className="hover:underline">
                                        Shop
                                    </Link>
                                </li>
                                <li className='mb-3'>
                                    <Link to="" className="hover:underline">
                                        Cart
                                    </Link>
                                </li>
                                <li className='mb-3'>
                                    <Link to="/signin" className="hover:underline">
                                        Login/Register
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg font-medium text-gray-900 uppercase">Categories</h2>
                            <ul className="text-gray- font-medium text-gray-600">
                                <li className="mb-3">
                                <Link to="" className="hover:underline">
                                        Shirt & T-Shirts
                                    </Link>
                                </li>
                                <li className='mb-3'>
                                    <Link to="/" className="hover:underline">
                                        Pants
                                    </Link>
                                </li>
                                <li className='mb-3'>
                                    <Link to="/" className="hover:underline">
                                        Hoodies
                                    </Link>
                                </li>
                                <li className='mb-3'>
                                    <Link to="/" className="hover:underline">
                                      Coates & Jackets
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg font-medium text-gray-900 uppercase">Support</h2>
                            <ul className="text-gray-600 font-medium">
                                <li className="mb-3">
                                    <Link to="#" className="hover:underline">
                                        My Account
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link to="#" className="hover:underline">
                                        My Order
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link to="#" className="hover:underline">
                                        Track Your Order
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link to="#" className="hover:underline">
                                      Return & Exchanges
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link to="#" className="hover:underline">
                                        Contact
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg font-medium text-gray-900 uppercase">Social Media</h2>
                            <ul className="font-medium text-gray-600">
                                <li className="mb-3">
                                <Link to="" className="flex hover:underline">
                                        <img className='mr-1' src="./instagram.svg" alt="insta png" />
                                        Instagram
                                    </Link>
                                </li>
                                <li className='mb-3'>
                                    <Link to="/" className="flex hover:underline">
                                    <img className='mr-1' src="./facebook-fill.svg" alt="fb png" />
                                        Facebook
                                    </Link>
                                </li>
                                <li className='mb-3'>
                                    <Link to="/" className="flex hover:underline">
                                      <img className='mr-1' src="./twitter.svg" alt="x logo" />
                                      Twitter
                                    </Link>
                                </li>
                                <li className='mb-3'>
                                    <Link to="/" className="flex hover:underline">
                                    <img className='mr-1' src="./google-plus.svg" alt="google png" />
                                      Google+
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-purple-500 w-auto">
                        <p className='text-white p-4 w-max'>© Hamro Fashion. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
