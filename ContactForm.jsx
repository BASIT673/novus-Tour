// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';

// const TravelInquiryForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     adults: '',
//     accommodation: '',
//     food: '',
//     arrivalDate: '',
//     departureDate: '',
//     tripType: '',
//     budget: '',
//   });

//   const [successMessage, setSuccessMessage] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // EmailJS Configuration
//     const serviceID = 'your_service_id';
//     const templateID = 'your_template_id';
//     const userID = 'your_user_id';

//     emailjs
//       .send(serviceID, templateID, formData, userID)
//       .then((response) => {
//         console.log('SUCCESS!', response.status, response.text);
//         setSuccessMessage('Form submitted successfully! We will get back to you soon.');
//       })
//       .catch((error) => {
//         console.error('FAILED...', error);
//         setSuccessMessage('Failed to submit the form. Please try again later.');
//       });
//   };

//   return (
//     <div className="container mx-auto py-12 px-4 bg-gray-100 rounded-lg shadow-lg">
//       <h2 className="text-3xl text-center font-bold mb-6">Travel Inquiry Form</h2>
//       {successMessage && (
//         <p className="text-center text-green-600 mb-4">{successMessage}</p>
//       )}
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-gray-700">Full Name</label>
//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleInputChange}
//               className="w-full p-3 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full p-3 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//         </div>

//         {/* (Include the rest of the form fields here) */}

//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
//           >
//             Submit Inquiry
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default TravelInquiryForm;

import React, { useState } from 'react';

const TravelInquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    adults: '',
    accommodation: '',
    food: '',
    arrivalDate: '',
    departureDate: '',
    tripType: '',
    budget: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div  id="contact"className="container mx-auto py-12 px-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl text-center font-bold mb-6">Travel Inquiry Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Number of Adults</label>
            <input
              type="number"
              name="adults"
              value={formData.adults}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">Accommodation Preferences</label>
            <select
              name="accommodation"
              value={formData.accommodation}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select accommodation</option>
              <option value="2 Star Hotel">2* Star Hotel</option>
              <option value="3 Star Hotel">3* Star Hotel</option>
              <option value="4 Star Hotel">4* Star Hotel</option>
              <option value="5 Star Hotel">5* Star Hotel</option>
              <option value="Houseboat Stay">Houseboat Stay</option>
              <option value="Villa">Villa</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Food Preferences</label>
            <select
              name="food"
              value={formData.food}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select food preference</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
              <option value="Jain">Jain</option>
              <option value="Continental">Continental</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">Date of Arrival</label>
            <input
              type="date"
              name="arrivalDate"
              value={formData.arrivalDate}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Date of Departure</label>
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">Trip Type</label>
            <select
              name="tripType"
              value={formData.tripType}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select trip type</option>
              <option value="Day Trip">Day Trip</option>
              <option value="Overnight Stay">Overnight Stay</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Estimated Budget</label>
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit Inquiry
          </button>
        </div>
      </form>
    </div>
  );
};

export default TravelInquiryForm;
