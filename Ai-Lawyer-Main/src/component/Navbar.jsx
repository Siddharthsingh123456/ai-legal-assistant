// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import Bot from "../component/bot/Bot"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900/95 backdrop-blur-md shadow-2xl fixed w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <Scale className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
              <span className="ml-2 text-xl font-bold text-white">AI Lawyer</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-white hover:text-purple-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">Home</a>
            <Link to="/about" className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">About</Link>
            {/* <a href="#advantages" className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">Advantages</a> */}
            {/* <a href="#testimonials" className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">Testimonials</a> */}
            <a href="/#faq" className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">FAQ</a>
            <Link to="/contact">
              <div
                className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">Contact Us</div>
            </Link>
            <div className="flex items-center space-x-3">
              <Link to="/login">
                <button className="border border-purple-500 text-purple-400 px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">Login</button>
              </Link>
              <Link to="/signup">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">Sign Up</button>
              </Link>
              <Link to="/bot">
                <button className="w-full text-left bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-fuchsia-500/40 relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 hover:opacity-30 transition-opacity duration-500 rounded-lg"></span>
                  🤖 Chatbot
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-purple-400 focus:outline-none transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-md border-t border-gray-700 animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/">
              <div className="block px-3 py-2 text-white hover:text-purple-400 font-medium transition-colors duration-300">Home</div>
            </Link>

            <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300">About</Link>
            {/* <a href="#advantages" className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300">Advantages</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300">Testimonials</a> */}
            <a href="#faq" className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300">FAQ</a>
            <Link to="/contact">
              <div className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300">
                Contact
              </div>
            </Link>
            <div className="flex flex-col space-y-2 mt-3 px-3">
              <Link to="/login">
                <button className="w-full text-left border border-purple-500 text-purple-400 px-3 py-2 rounded-md font-medium hover:bg-purple-500 hover:text-white transition-all duration-300">Login</button>
              </Link>
              <Link to="/signup">
                <button className="w-full text-left bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-2 rounded-md font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300">Sign Up</button>
              </Link>
              {/* <Link to="/bot">
                <button className="w-full text-left bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-2 rounded-md font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300">Chatbot</button>
              </Link> */}
              <Link to="/bot">
                <button className="w-full text-left bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-fuchsia-500/40 relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 hover:opacity-30 transition-opacity duration-500 rounded-lg"></span>
                  🤖 Chatbot
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
