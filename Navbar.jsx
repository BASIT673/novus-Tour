
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <div className="text-2xl font-bold tracking-wide">
          <a href="/" className="hover:text-yellow-400 transition duration-300">
            Novus Tour and Travel
          </a>
        </div>

       
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <a
              href="#home"
              className="hover:text-yellow-400 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#destinations"
              className="hover:text-yellow-400 transition duration-300"
            >
              Destinations
            </a>
          </li>
          <li>
            <a
              href="#packages"
              className="hover:text-yellow-400 transition duration-300"
            >
              Packages
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-yellow-400 transition duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-yellow-400 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 py-4 px-4">
          <ul className="space-y-4 text-lg">
            <li>
              <a
                href="#home"
                className="block hover:text-yellow-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#destinations"
                className="block hover:text-yellow-400 transition duration-300"
              >
                Destinations
              </a>
            </li>
            <li>
              <a
                href="#packages"
                className="block hover:text-yellow-400 transition duration-300"
              >
                Packages
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block hover:text-yellow-400 transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block hover:text-yellow-400 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
