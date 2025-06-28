// File: src/pages/Contact.jsx
import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowLeft, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    urgency: "normal",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setIsLoading(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      urgency: "normal",
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-purple-400" />, title: "Phone Support", details: "1800-AI-LAWYER", subtext: "Available 24/7"
    },
    {
      icon: <Mail className="w-6 h-6 text-purple-400" />, title: "Email Support", details: "support@ailawyer.com", subtext: "2–4 hours response"
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-400" />, title: "Headquarters", details: "Bangalore, India", subtext: "Other cities: Delhi, Mumbai, Chennai"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />, title: "Business Hours", details: "24/7 AI Support", subtext: "Human: Mon–Fri 9–6 IST"
    }
  ];

    return (
        <>
            <Navbar/>
    <div className="min-h-screen bg-gray-900 pt-24 text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/" className="inline-flex items-center text-purple-500 hover:text-purple-400">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

                
                
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 relative overflow-hidden text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Get in touch with our team of legal experts and AI specialists. We're here to help you.
        </p>
      </section>

      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all">
              <div className="mb-4">{info.icon}</div>
              <h3 className="text-lg font-bold mb-1">{info.title}</h3>
              <p className="text-purple-400 font-medium">{info.details}</p>
              <p className="text-sm text-gray-400">{info.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 ">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input name="name" required value={formData.name} onChange={handleInputChange} placeholder="Full Name" className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white" />
              <input name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder="Email Address" className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white" />
              <input name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white" />
              <select name="urgency" value={formData.urgency} onChange={handleInputChange} className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white">
                <option value="low">Low - General Inquiry</option>
                <option value="normal">Normal - Standard Support</option>
                <option value="high">High - Urgent Matter</option>
                <option value="critical">Critical - Emergency</option>
              </select>
              <input name="subject" required value={formData.subject} onChange={handleInputChange} placeholder="Subject" className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white" />
              <textarea name="message" rows={6} required value={formData.message} onChange={handleInputChange} placeholder="Your message..." className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white resize-none" />
              <button type="submit" disabled={isLoading} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-md font-semibold w-full">
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
            <ul className="space-y-6 text-gray-300">
              {[
                { city: "Bangalore (HQ)", address: "Tin Factory, Bangalore, Karnataka", phone: "+91 80 4567 8900", email: "bangalore@ailawyer.com" },
                { city: "Delhi", address: "Connaught Place, New Delhi", phone: "+91 11 4567 8900", email: "delhi@ailawyer.com" },
                { city: "Mumbai", address: "Bandra Kurla Complex, Mumbai", phone: "+91 22 4567 8900", email: "mumbai@ailawyer.com" },
                { city: "Chennai", address: "T. Nagar, Chennai", phone: "+91 44 4567 8900", email: "chennai@ailawyer.com" },
              ].map((office, idx) => (
                <li key={idx} className="border border-gray-700 p-4 rounded bg-gray-800">
                  <h4 className="text-white font-bold mb-1">{office.city}</h4>
                  <p className="text-sm"><MapPin className="inline w-4 h-4 mr-1 text-purple-400" />{office.address}</p>
                  <p className="text-sm"><Phone className="inline w-4 h-4 mr-1 text-purple-400" />{office.phone}</p>
                  <p className="text-sm"><Mail className="inline w-4 h-4 mr-1 text-purple-400" />{office.email}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
