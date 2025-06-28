import React from "react";
import { Phone, Mail, Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-16 border-t border-gray-800 ">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 mx-5">
        <div className="flex justify-between ">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Scale className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold">AI Lawyer</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionizing legal services in India with AI-powered solutions. Making legal guidance accessible,
              affordable, and available 24/7 based on Indian constitutional law.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Phone className="w-5 h-5 mr-2" />
                <span>1800-AI-LAWYER</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/about" className="hover:text-purple-400 transition-colors duration-300 inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors duration-300 inline-block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors duration-300 inline-block">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-purple-400 transition-colors duration-300 inline-block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm hover:text-gray-300">© 2025 AI Lawyer. All rights reserved.</p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0 group">
            <Mail className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
            <span className="text-gray-400 text-sm group-hover:text-purple-400 transition-colors duration-300">support@ailawyer.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;