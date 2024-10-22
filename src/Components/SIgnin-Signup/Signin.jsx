import React, { useState } from 'react';
import './CSS/Signin.css';
import { Link } from 'react-router-dom';

const Signin = () => {
    // State for controlled inputs and error handling
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });

    // Form validation logic
    const validateForm = () => {
        let valid = true;
        let emailError = '';
        let passwordError = '';

        if (!email) {
            emailError = 'Email or phone is required';
            valid = false;
        }
        if (!password) {
            passwordError = 'Password is required';
            valid = false;
        }

        setErrors({ email: emailError, password: passwordError });
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted', { email, password });
        }
    };

    return (
        <>

            {/* START OF THE LOGIN FORM */}
            <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 px-4 md:px-8 lg:px-16 transition-all duration-300">
                
                {/* Image Section */}
                <div className="hidden md:block md:w-1/2 lg:w-2/5">
                    <img src="./login-page.png" alt="Login" className="max-h-lvh" />
                </div>

                {/* Form Section */}
                <div className="bg-white dark:bg-gray-800 p-6 md:w-1/2 lg:w-2/5 rounded-lg shadow-lg transition-opacity duration-700 ease-in-out opacity-100">
                    <h2 className="text-2xl font-semibold text-center mb-6 animate-fade-in text-gray-800 dark:text-gray-200">Login Page</h2>

                    <form onSubmit={handleSubmit}>
                        {/* Email or Phone Input */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email or Phone number</label>
                            <input 
                                type="text" 
                                placeholder="Enter your Email or Phone"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300`}
                                aria-label="Email or Phone"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* Password Input */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                            <input 
                                type="password" 
                                placeholder="Enter your Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300`}
                                aria-label="Password"
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>

                        {/* Forgot Password */}
                        <div className="text-right mb-6">
                            <a href="/" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline hover:text-indigo-800">Forgot your password?</a>
                        </div>

                        {/* Login Button */}
                        <button 
                            type="submit" 
                            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-105"
                        >
                            Get started
                        </button>
                    </form>

                    {/* Or Sign Up With */}
                    <p className="text-center text-gray-500 my-6 dark:text-gray-400">or sign up with</p>

                    {/* Social Logins */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <button className="flex items-center gap-2 px-4 py-2 w-1/2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300 ease-in-out transform hover:scale-105">
                            <i className="fa-brands fa-google"></i> Google
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 w-1/2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-all duration-300 ease-in-out transform hover:scale-105">
                            <i className="fa-brands fa-linkedin"></i> LinkedIn
                        </button>
                    </div>

                    {/* Signup Option */}
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                        Don't have an account? <Link to="/signup" className="text-indigo-600 dark:text-indigo-400 hover:underline hover:text-indigo-800">Sign up here</Link>
                    </p>
                </div>
            </div>
            {/* END OF THE LOGIN FORM */}
        </>
    );
};

export default Signin;
