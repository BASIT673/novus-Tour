

import React from 'react';
import { Link } from 'react-scroll'; 

const HeroSection = () => {
  return (
    <section 
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')`,
      }}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6 md:px-16 text-white">
       
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          <span className="hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-105">
            Explore the World
          </span>{' '}
          <span className="hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-105">
            with Us
          </span>
        </h1>

        
        <p className="text-lg md:text-xl mb-8 animate-slide-in-up">
          <span className="hover:underline decoration-yellow-500">
            Discover breathtaking destinations
          </span>
          , unforgettable experiences, and tailor-made travel packages.
        </p>

        <div className="flex space-x-4">
          
          <Link 
            to="destinations" 
            smooth={true} 
            duration={500} 
            className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition transform hover:scale-105 animate-slide-in-up"
          >
            View Tours
          </Link>
          
          <Link 
            to="contact"
            smooth={true} 
            duration={500} 
            className="px-8 py-3 bg-transparent border border-white text-white rounded-lg text-lg font-medium hover:bg-white hover:text-black transition transform hover:scale-105 animate-slide-in-up delay-150"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
