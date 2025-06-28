import React from "react";
import { Star } from "lucide-react";
import profile from "../assets/profile.png"
const testimonials = [
  {
    name: "Rahul Kumar Jha",
    position: "Café Owner, Bareilly",
    content:
      "AI Lawyer helped me navigate complex GST compliance issues for my business. The advice was spot-on and saved me lakhs in potential penalties.",
    rating: 5,
  },
  {
    name: "Rishabh Mishra",
    position: "CTO, Bangalore",
    content:
      "As an HR professional, I regularly use AI Lawyer to verify employment policies. It's incredibly accurate with Indian labor laws and available whenever I need guidance.",
    rating: 5,
  },
];

const Testimonials = ({ isVisible }) => {
  return (
    <section id="testimonials" className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.testimonials ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from individuals and businesses across India who have transformed their legal experience with our
            AI-powered assistant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 transform ${
                isVisible.testimonials ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={profile}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-purple-500/30"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

