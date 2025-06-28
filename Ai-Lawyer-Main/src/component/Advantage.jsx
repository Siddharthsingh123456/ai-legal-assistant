import React from "react";
import { Clock, Scale, Shield, Users } from "lucide-react";

const data = [
  {
    icon: <Clock className="w-8 h-8 text-purple-400" />,
    title: "24/7 Availability",
    description:
      "Get legal guidance anytime, anywhere. Our AI never sleeps, ensuring you have access to legal support whenever you need it.",
  },
  {
    icon: <Shield className="w-8 h-8 text-purple-400" />,
    title: "Confidential & Secure",
    description:
      "Your legal matters remain private with enterprise-grade security and strict confidentiality protocols protecting your information.",
  },
  {
    icon: <Scale className="w-8 h-8 text-purple-400" />,
    title: "Expert Indian Legal Knowledge",
    description:
      "Powered by comprehensive Indian legal databases and trained on thousands of cases to provide accurate, up-to-date legal guidance based on Indian law.",
  },
  {
    icon: <Users className="w-8 h-8 text-purple-400" />,
    title: "Cost-Effective",
    description:
      "Get professional legal advice at a fraction of traditional lawyer fees, making legal support accessible to everyone across India.",
  },
];

const Advantages = ({ isVisible }) => {
  return (
    <section id="advantages" className="py-20 bg-gray-800 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-800/30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.advantages ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose AI Lawyer?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of legal services with our innovative AI-powered platform designed to make Indian
            legal expertise accessible, affordable, and available anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className={`bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group transform ${
                isVisible.advantages ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;