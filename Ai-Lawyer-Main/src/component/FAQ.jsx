import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How accurate is the AI legal advice based on Indian law?",
    answer:
      "Our AI is trained extensively on the Indian Constitution, legal precedents from the Supreme Court and High Courts, and all relevant Indian statutes. It provides highly accurate preliminary advice tailored to Indian legal contexts. However, we always recommend consulting with a human lawyer for complex cases and final decisions.",
  },
  {
    question: "Is my information secure and confidential?",
    answer:
      "Absolutely. We use bank-level encryption and follow strict confidentiality protocols in compliance with Indian data protection regulations. Your data is never shared with third parties and is protected by attorney-client privilege principles.",
    },
    {
      question: "What types of Indian legal issues can the AI help with?",
      answer:
        "Our AI can assist with contract review under Indian Contract Act, legal document drafting, compliance questions related to Indian regulations, employment law matters, family law basics under personal laws, consumer protection issues, and general legal guidance across multiple practice areas relevant to Indian jurisdiction.",
    },
    // {
    //   question: "How much does the service cost?",
    //   answer:
    //     "We offer flexible pricing plans starting from ₹999/month for basic consultations, with premium plans for businesses and complex legal needs. Contact us for custom enterprise solutions tailored to Indian businesses.",
    // },
    {
      question: "Can the AI replace my lawyer entirely?",
      answer:
        "While our AI is highly sophisticated and well-versed in Indian law, it's designed to complement, not replace, human legal expertise. For court representation and complex legal strategies within the Indian judicial system, human lawyers remain essential.",
    },
];

const FAQ = ({ isVisible }) => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <section id="faq" className="py-20 bg-gray-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.faq ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300">
            Get answers to common questions about our AI-powered Indian legal services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg bg-gray-800 hover:border-purple-500 transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700/50 transition-colors duration-300 group"
              >
                <span className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-purple-400 ${
                    openFaq === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;