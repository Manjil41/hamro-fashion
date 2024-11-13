import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      email: '',
      password: ''
    };
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email or phone is required';
    } else if (formData.email.includes('@') && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted', formData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-8 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Image Section */}
        <div className="hidden md:block w-full md:w-1/2 lg:w-2/5">
          <div className="aspect-square relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/login-page.png" 
              alt="Welcome illustration" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 lg:w-2/5">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-all duration-300">
            <h1 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
              Welcome Back
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email/Phone Field */}
              <div>
                <label 
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email or Phone number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    id="email"
                    name="email"
                    type="text" 
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 transition-all duration-300`}
                    placeholder="Enter your email or phone"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                </div>
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label 
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    id="password"
                    name="password"
                    type="password" 
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 border ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 transition-all duration-300`}
                    placeholder="Enter your password"
                    aria-invalid={!!errors.password}
                    aria-describedby={errors.password ? "password-error" : undefined}
                  />
                </div>
                {errors.password && (
                  <p id="password-error" className="mt-1 text-sm text-red-500">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <button 
                  type="button"
                  onClick={() => console.log('Navigate to forgot password')}
                  className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 hover:underline transition-colors duration-200"
                >
                  Forgot your password?
                </button>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                Sign In
              </button>
            </form>

            {/* Social Login Section */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button 
                  type="button"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <Mail className="h-5 w-5" />
                  <span>Google</span>
                </button>
                <button 
                  type="button"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Mail className="h-5 w-5" />
                  <span>LinkedIn</span>
                </button>
              </div>
            </div>

            {/* Sign Up Link */}
            <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
              Don't have an account?{' '}
               <Link to="/signup" className='className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 hover:underline transition-colors duration-200"'> Sign Up Here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;