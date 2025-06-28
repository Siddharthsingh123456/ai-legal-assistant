import React from "react";
import { CheckCircle } from "lucide-react";
import Lady_Justice from "../assets/Lady_Justice.jpg";

const About = ({ isVisible }) => {
  return (
    <section id="about" className="py-20 bg-gray-800 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-800/50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.about ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About AI Lawyer</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're revolutionizing legal services in India by combining cutting-edge artificial intelligence with deep
            expertise in Indian law to make professional legal guidance accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-22 items-center">
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible.about ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}>
            <div className="relative group">
              <img
                src={Lady_Justice}
                alt="Legal Technology"
                className="rounded-lg shadow-xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
          <div className={`space-y-6 transform transition-all duration-1000 delay-500 ${
            isVisible.about ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}>
            <h3 className="text-3xl font-bold text-white">Transforming Legal Services with AI for India</h3>
            <p className="text-gray-300 leading-relaxed">
              Our platform leverages advanced machine learning algorithms trained on millions of Indian legal
              documents and case studies to provide accurate, reliable legal guidance tailored to Indian contexts.
            </p>
            <div className="space-y-5">
                <div className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-white">Comprehensive Indian Legal Database</h4>
                    <p className="text-gray-300">
                      Access to millions of Indian legal precedents and current regulations
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-white">Real-time Updates on Indian Law</h4>
                    <p className="text-gray-300">
                      Stay current with the latest legal changes and interpretations in Indian legislation
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-white">Human-AI Collaboration</h4>
                    <p className="text-gray-300">Seamless integration with Indian legal experts when needed</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
