import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-black via-slate-900 to-purple-900 text-white py-12">
      <div className="container mx-auto text-center md:text-left px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          
          {/* Left Section - Company Info */}
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-3 flex justify-center md:justify-start items-center gap-2">
              <img src={logo} alt="AI NEXUS Logo" className="w-20"/>
              <span className="text-purple-500">AI NEXUS</span>
            </h2>
            <p className="text-gray-300 text-lg">
              We're a dedicated team committed to providing the best service for our customers. 
              Reach out to us anytime!
            </p>
          </div>
          
          {/* Center Section - Quick Links */}
          <div className="md:w-1/3 text-center">
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-purple-400">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-purple-400">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-purple-400">Contact</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-purple-400">About Us</a></li>
            </ul>
          </div>
          
          {/* Right Section - Social Media Icons */}
          <div className="md:w-1/3 text-center">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 text-2xl">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 text-2xl">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 text-2xl">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 text-2xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center">
          <p className="text-gray-400">
            &copy; 2025 AI NEXUS. All rights reserved. | Designed with ❤️ by Sameer Selokar.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
