

import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    
    setImages([
      {
        url: '/Public/img-2.png', 
        title: 'Pahalgam',
        price: '2000 Rs',
        details: 'Beautiful scenes in Pahalgam. 3 Nights, 4 Days package.',
      },
      {
        url: '/Public/img-1.png', 
        title: 'Sonamarg',
        price: '15000 Rs',
        details: 'Explore the serene beauty of Sonamarg. 5 Nights, 6 Days package.',
      },
      {
        url: '/Public/img-1.png',
        title: 'Gulmarg',
        price: '25000 Rs',
        details: 'Gulmarg adventure awaits you. 7 Nights, 8 Days package.',
      },
    ]);
  }, []);

  return (
    <section id="destinations" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-custom">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl flex flex-col"
              >
               
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-300"
                />

                
                <div className="flex flex-col justify-between flex-grow mt-4 text-left px-4 pb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{image.title}</h3>
                    <p className="text-lg font-medium text-gray-600">{image.price}</p>
                    <p className="text-sm text-gray-500 mt-2">{image.details}</p>
                  </div>
                  
                  <div className="mt-4 flex justify-center">
                    <a
                      href="/contact" 
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-110 hover:translate-y-1"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Loading images...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
