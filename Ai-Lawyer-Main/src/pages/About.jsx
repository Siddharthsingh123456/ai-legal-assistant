// File: src/pages/About.jsx
import { CheckCircle, ArrowLeft, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import profile from "../assets/profile.png"
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const About = () => {
  const teamMembers = [
    {
      name: "Arpit Sharma",
      position: "Founder & CEO",
      image: "profilesq.png",
      bio: "Former Supreme Court advocate with 15 years of experience in constitutional law. PhD in AI and Legal Systems from IIT Delhi.",
    },
    {
      name: "Rinshika Dubey",
      position: "Chief Legal Officer",
      image: "profilesq.png",
      bio: "Specialist in Indian corporate law with experience at top law firms in Mumbai and Delhi. Graduate of National Law School of India University.",
    },
    {
      name: "Rahul Jha",
      position: "Chief Technology Officer",
      image: "profilesq.png",
      bio: "AI expert with background in machine learning and natural language processing. Previously led AI initiatives at major Indian tech companies.",
    },
    {
      name: "Rishabh Mishra",
      position: "Head of Customer Success",
      image: "profilesq.png",
      bio: "Former legal consultant with expertise in client relations and legal service delivery. Passionate about making legal services accessible.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description: "AI Lawyer was founded in Bangalore with a mission to democratize legal services across India.",
    },
    {
      year: "2021",
      title: "First AI Model",
      description: "Launched our first AI model trained specifically on Indian constitutional law and Supreme Court judgments.",
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Expanded services to cover all major Indian legal domains and opened offices in Delhi and Mumbai.",
    },
    {
      year: "2023",
      title: "Recognition",
      description: "Recognized as one of India's most innovative legal tech startups by the Ministry of Law and Justice.",
    },
    {
      year: "2024",
      title: "AI Advancement",
      description: "Released our most advanced AI model with enhanced understanding of regional laws and multilingual support for 12 Indian languages.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="inline-flex items-center text-purple-500 hover:text-purple-400">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 relative overflow-hidden py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About AI Lawyer</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionizing legal services in India through artificial intelligence and a deep commitment to making
            justice accessible to all.
          </p>
        </section>

        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                At AI Lawyer, we believe that access to legal knowledge is a fundamental right. Our mission is to
                democratize legal services across India by leveraging cutting-edge AI technology to provide accurate,
                affordable, and accessible legal guidance.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Our AI is trained on Indian law to ensure relevance and accuracy.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold">Democratizing Legal Access</h4>
                    <p className="text-gray-300">
                      Making legal guidance available to all regardless of location or economic status
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold">Indian Law Expertise</h4>
                    <p className="text-gray-300">
                      Specialized in Indian constitutional, civil, and criminal law
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <DotLottieReact
                src="https://lottie.host/029a0e16-8545-4a93-bca4-828e9b172ed0/erj1CarFIJ.lottie"
                loop
                autoplay
              />
              {/* <img src="/images/mission-image.png" alt="Our Mission" className="rounded-lg shadow-xl" /> */}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From a small startup in Bangalore to India's leading AI-powered legal assistant
              </p>
            </div>

            <div className="space-y-12 relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="hidden md:block w-1/2"></div>
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                      <div className="bg-purple-500 rounded-full h-8 w-8 flex items-center justify-center">
                        <div className="bg-white rounded-full h-3 w-3"></div>
                      </div>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg md:w-1/2">
                      <span className="text-purple-500 font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-bold mt-1 mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Legal experts, technologists, and innovators committed to transforming India's legal landscape
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                  <img src={member.image || "/profile.png"} alt={member.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-purple-500 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-300">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              {/* <img src="/images/ai-technology.png" alt="AI Technology" className="rounded-lg shadow-xl" /> */}
              <DotLottieReact
                src="https://lottie.host/d3578768-e1be-423c-91d1-9b2fc2f15814/FAhxEUUuLM.lottie"
                loop
                autoplay
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Technology</h2>
              <p className="text-lg text-gray-300 mb-6">
                Our AI uses advanced NLP and machine learning, specifically trained on Indian legal frameworks. It
                continuously learns from judgments, law amendments, and more.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold">Multilingual Support</h4>
                    <p className="text-gray-300">Supports 12 Indian languages including Hindi, Tamil, Bengali</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold">Continuous Learning</h4>
                    <p className="text-gray-300">AI improves with every interaction, updating its knowledge base</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-purple-600 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join the Legal Revolution in India</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            See how AI is making legal guidance accessible across India. Start your journey with AI Lawyer.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/login">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100">
                Get Started Free
              </button>
            </a>
            <a href="/contact">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700">
                Schedule a Demo
              </button>
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
