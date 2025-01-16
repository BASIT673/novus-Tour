import React from "react";

const Footer = () => {
  return (
    <footer id="about" className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-10">
      <div className="container mx-auto px-4">
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              Explore the world with us! We provide top-notch travel experiences
              with carefully curated packages for unforgettable journeys.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              © {new Date().getFullYear()} Your Travel Company. All Rights Reserved.
            </p>
          </div>

          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a
                  href="/destinations"
                  className="text-gray-300 hover:text-white block mb-2"
                >
                  Popular Destinations
                </a>
              </li>
              <li>
                <a
                  href="/packages"
                  className="text-gray-300 hover:text-white block mb-2"
                >
                  Travel Packages
                </a>
              </li>
              <li>
                <a
                  href="/reviews"
                  className="text-gray-300 hover:text-white block mb-2"
                >
                  Customer Reviews
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-white block mb-2"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300">
              <strong>Address:</strong> 123 Sidquui Line, Nowhara srinagar City, Earth
            </p>
            <p className="text-gray-300 mt-2">
              <strong>Email:</strong> @travelcompany.com
            </p>
            <p className="text-gray-300 mt-2">
              <strong>Phone:</strong> +123 456 7890
            </p>
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6">
      
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <img src="/Public/facebook.svg" alt="Facebook" className="h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <img src="/Public/instagram.svg" alt="Instagram" className="h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <img src="/Public/facebook.svg" alt="Twitter" className="h-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <img src="/Public/youtube.svg" alt="YouTube" className="h-6" />
            </a>
          </div>

          
          <div>
            <h3 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-72 p-2 rounded-l-md text-gray-800"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 text-white rounded-r-md hover:bg-yellow-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
