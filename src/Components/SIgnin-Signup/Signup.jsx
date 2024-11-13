import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Eye, EyeOff, AlertCircle, Check, Loader } from 'lucide-react'


const Signup = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [strength, setStrength] = useState(0);

  // Password strength checker
  const checkPasswordStrength = (password) => {
    let score = 0;
    if (password.length > 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    setStrength(score);
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        // Handle successful signup
        console.log('Signup successful!', formData);
      } catch (error) {
        console.error('Signup failed:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {/* Start of the Signup Form */}
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen py-10 px-4 bg-gray-900">

        {/* Signup Image */}
    
        <div className="hidden md:block w-full md:w-1/2 lg:w-2/5">
          <div className="aspect-square relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src="./signup-page.png" 
              alt="Welcome illustration" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Signup Form */}
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 animate-slide-in-right">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-all duration-300">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-200 animate-fade-in">
              Create Your Account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2 animate-fade-in">
                <label className="block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full px-4 py-2 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} 
                      focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <div className="absolute right-3 top-2.5 text-red-500">
                      <AlertCircle size={20} />
                    </div>
                  )}
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Password Input with Strength Indicator */}
              <div className="space-y-2 animate-fade-in">
                <label className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => {
                      setFormData({...formData, password: e.target.value});
                      checkPasswordStrength(e.target.value);
                    }}
                    className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="••••••••"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {/* Password Strength Indicator */}
                <div className="flex gap-2 mt-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 w-full rounded-full transition-all duration-300 ${
                        i < strength ? 
                          i === 3 ? 'bg-green-500' :
                          i === 2 ? 'bg-yellow-500' :
                          'bg-red-500'
                        : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-purple-600 text-white rounded-lg font-medium 
                  hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 
                  focus:ring-offset-2 transform hover:scale-105 transition-all duration-300 
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader className="animate-spin" size={20} />
                    Creating account...
                  </span>
                ) : (
                  'Get started'
                )}
              </button>
            </form>

           {/* Social Login */}
           <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    Or continue with
                  </span>
                </div>
            </div>

            <div className="space-y-4">
              <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300">
                <img src="google-icon.svg" alt="Google" className="w-5 h-5" />
                <span className="text-gray-300">Google</span>
              </button>
              
              <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300">
                <img src="linkedin-icon.svg" alt="Apple" className="w-5 h-5" />
                <span className="text-gray-300">LinkedIn</span>
              </button>
            </div>

            <p className='text-center mt-6 text-gray-400'>
                Already have an account? <Link to="/signin" className="text-blue-500 hover:underline">Sign In</Link>
            </p>
            </div>
        </div>
      </div>
      {/* End of the Signup Form */}
    </>
  );
}

export default Signup;
