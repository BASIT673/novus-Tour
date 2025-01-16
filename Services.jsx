const Services = () => {
    const services = [
      {
        title: 'City Tours',
        description: 'Explore cities with expert guides and immerse yourself in the culture, history, and vibrancy of urban life.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      },
      {
        title: 'Adventure Trips',
        description: 'Experience thrilling outdoor adventures that push your limits and create unforgettable memories.',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      },
      {
        title: 'Custom Packages',
        description: 'Tailored travel experiences designed exclusively to match your preferences and desires.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      },
    ];
  
    return (
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 font-custom">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg bg-white"
              >
                {/* Image Section */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
                {/* Description Section */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                  <p className="mt-4 text-gray-600 font-light">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Additional Section Description */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 font-light leading-relaxed">
              Whether you're looking for a relaxing city escape, an adrenaline-pumping adventure, or a personalized experience, 
              we’ve got you covered. Our services are designed to create lasting memories and ensure your satisfaction at every step.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;

