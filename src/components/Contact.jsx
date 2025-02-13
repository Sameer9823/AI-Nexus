import React from "react";
import { FaRegEnvelope, FaUser, FaPen, FaComments, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center  py-12 bg-black text-white px-18">
      
      {/* Left Section */}
      <div className="md:w-1/2 container mx-auto text-center md:text-left">
        <button className="bg-purple-500 text-black px-6 py-2 rounded-full font-bold text-lg hover:bg-purple-400 transition">
          Contact Us
        </button>
        <h2 className="text-3xl sm:text-5xl font-bold mt-6">Get in Touch With Us</h2>
        <p className="mt-3 text-gray-300 text-base sm:text-lg">
          We're here to support you! Feel free to reach out for assistance, feedback, or any questions.
        </p>
        
        <h3 className="mt-8 text-2xl sm:text-3xl font-bold flex items-center gap-2 justify-center md:justify-start">
          <FaComments className="text-purple-300" /> Let's Talk About:
        </h3>
        
        <div className="mt-6 space-y-4">
          {["Customer Experience", "Quality and Trust", "Dependable Service"].map((item, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-3 bg-gray-800 px-5 py-3 rounded-full w-max text-base sm:text-lg font-medium"
            >
              <FaCheckCircle className="text-purple-300 text-xl" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="md:w-1/2 bg-gray-900 p-6 sm:p-8 rounded-xl border border-purple-400 mt-8 md:mt-0 shadow-lg w-full max-w-lg mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold">Get a Quote</h2>
        <p className="text-gray-400 mt-3 text-sm sm:text-lg">
          Fill up the form and our team will get back to you within 24 hours.
        </p>
        
        <form className="mt-6 space-y-5">
          {[
            { icon: <FaUser />, type: "text", placeholder: "Your Name" },
            { icon: <FaRegEnvelope />, type: "email", placeholder: "Your Email" },
            { icon: <FaPen />, type: "text", placeholder: "Subject" },
          ].map(({ icon, type, placeholder }, index) => (
            <div key={index} className="relative">
              <span className="absolute left-4 top-4 text-gray-400 text-lg">{icon}</span>
              <input 
                type={type}
                placeholder={placeholder} 
                className="w-full p-4 pl-12 bg-gray-800 rounded-md text-white text-base sm:text-lg focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>
          ))}

          <div className="relative">
            <textarea 
              placeholder="Your Message" 
              className="w-full p-4 bg-gray-800 rounded-md text-white text-base sm:text-lg h-28 resize-none focus:ring-2 focus:ring-purple-500 outline-none"
            ></textarea>
          </div>

          <button className="bg-purple-500 text-black px-6 py-3 rounded-full font-bold text-lg w-full hover:bg-purple-400 transition">
            Send Message
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default ContactUs;
