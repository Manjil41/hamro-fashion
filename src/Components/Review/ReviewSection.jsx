import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const ReviewCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const reviews = [
    {
      id: 1,
      name: 'Alex M',
      avatar: '/api/placeholder/40/40',
      rating: 5,
      comment: 'Absolutely love this denim jacket! The fit is perfect, and the distressed detailing gives it a rugged yet stylish look. It\'s become my go-to piece for casual outings. Highly recommend!'
    },
    {
      id: 2,
      name: 'Emily S',
      avatar: '/api/placeholder/40/40',
      rating: 5,
      comment: 'Great quality and versatile styling options. The buttons are sturdy, and the jacket feels well-made. I deducted one star because I wish it had an inside pocket, but overall!'
    },
    {
      id: 3,
      name: 'Chris B',
      avatar: '/api/placeholder/40/40',
      rating: 5,
      comment: 'Urban Explorer exceeded my expectations. The denim is of excellent quality, and the fit is just right. It\'s become my favorite jacket for weekend adventures.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Previous review"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Next review"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        {/* Reviews Container */}
        <div className="overflow-hidden px-8">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <Quote className="absolute -bottom-2 -right-2 w-6 h-6 text-gray-400 transform rotate-180" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{review.name}</h3>
                      <div className="flex gap-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-blue-600 w-4' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;