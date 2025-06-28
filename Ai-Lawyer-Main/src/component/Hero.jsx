// src/components/Hero.jsx
import React from "react";
import { CheckCircle } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Hero = ({ isVisible }) => {
  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.home ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Your AI-Powered
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 block animate-gradient">
                Indian Legal Assistant
              </span>
            </h1>
            <p className="text-xl text-gray-300 mt-6 leading-relaxed">
              Get instant legal guidance based on the Indian Constitution and laws. Our AI provides document review and expert advice powered by advanced technology tailored to Indian legal frameworks. Available 24/7 to help you navigate complex legal matters with confidence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              
              <a href="/login">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 transform">
                Start Free Consultation
              </button>
              </a>

              <a href="#advantages">
              <button className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
                Learn More
              </button>
              </a>
            </div>

            <div className="mt-8 flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center animate-fadeInUp delay-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                No Credit Card Required
              </div>
              <div className="flex items-center animate-fadeInUp delay-500">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Instant Responses
              </div>
            </div>
          </div>

        {/* Image */}
        <DotLottieReact
            src="https://lottie.host/73b28b61-2606-41a2-811b-40276fe2082a/2mH0sa28nv.lottie"
            loop
            autoplay
        />
          {/* left-150 bottom-20 */}
            <div className="absolute  bottom-0 bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-700 animate-bounce">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-200">AI Assistant Online</span>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
