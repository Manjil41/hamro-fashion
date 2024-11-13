import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className='flex sticky justify-between items-center py-3 px-4 md:px-10 bg-white drop-shadow-md font-medium transition-all duration-500'>
                <Link to="/">
                    <img src="./logo.png" className='h-10 hover:scale-105 transition-transform duration-300' alt="logo" />
                </Link>

                {/* Desktop Menu */}
                <ul className='hidden xl:flex items-center gap-3 text-base'>
                    <li className='p-3 transition-all duration-300 ease-in-out cursor-pointer'>
                        <NavLink to="/"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-black" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className='p-3 transition-all duration-300 ease-in-out cursor-pointer'>
                        <NavLink to="/men"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-black" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
                            }
                        >
                            Men
                        </NavLink>
                    </li>
                    <li className='p-3 transition-all duration-300 ease-in-out cursor-pointer'>
                        <NavLink to="/women"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-black" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
                            }
                        >
                            Women
                        </NavLink>
                    </li>
                    <li className='p-3 transition-all duration-300 ease-in-out cursor-pointer'>
                        <NavLink to="/combos"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-black" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
                            }
                        >
                            Combos
                        </NavLink>
                    </li>
                </ul>

                {/* Search, Wishlist, Cart, User - Icons */}
                <div className='relative hidden md:flex items-center justify-center gap-1'>
                    <i className="fa-solid fa-magnifying-glass absolute left-3 text-gray-500"></i>
                    <input type="text" placeholder='Search...' className='py-2 pl-10 rounded-xl border-2 border-gray-700 focus:bg-slate-100 focus:outline-gray-200 transition-all duration-300 ease-in-out' />

                    <Link to="#" className="text-gray-800 hover:bg-gray-50 transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg p-2">
                        <i className="fa-regular fa-heart"></i>
                    </Link>

                    <Link to="/mycart" className="text-gray-800 hover:bg-gray-50 transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg p-2">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </Link>

                    <Link to="/signin" className="text-gray-800 hover:bg-gray-50 transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg p-2">
                        <i className="fa-regular fa-user"></i>
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <i
                    className="fa-solid fa-bars xl:hidden block text-3xl cursor-pointer transition-transform duration-300 hover:scale-110"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                ></i>

                {/* Mobile Dropdown Menu */}
                <div
                    className={`absolute xl:hidden top-20 left-0 w-full bg-white flex flex-col items-center gap-6 text-lg transform transition-transform ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} duration-500 ease-in-out`}
                >
                    <Link to="/" className='list-none w-full text-center p-4 hover:text-gray-700 transition-all duration-300 cursor-pointer'>Home</Link>
                    <Link to="/men" className='list-none w-full text-center p-4 hover:text-gray-700 transition-all duration-300 cursor-pointer'>Men</Link>
                    <Link to="/women" className='list-none w-full text-center p-4 hover:text-gray-700 transition-all duration-300 cursor-pointer'>Women</Link>
                    <Link to="/combos" className='list-none w-full text-center p-4 hover:text-gray-700 transition-all duration-300 cursor-pointer'>Combos</Link>
                    <Link to="/signin" className='list-none w-full text-center p-4 hover:text-gray-700 transition-all duration-300 cursor-pointer'>Sign In</Link>
                </div>
            </header>
        </>
    );
}

export default Header;
