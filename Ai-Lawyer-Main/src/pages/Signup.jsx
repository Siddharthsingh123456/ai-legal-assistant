// File: src/pages/Signup.jsx
import React, { useState } from "react";
import { Eye, EyeOff, ArrowLeft, CheckCircle, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar"
import Footer from "../component/Footer";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "individual",
    agreeToTerms: false,
    agreeToMarketing: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions!");
      return;
    }
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Signup attempt:", formData);
    alert("Signup functionality would be implemented here!");
    setIsLoading(false);
  };

  const getPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(formData.password);
  console.log(passwordStrength);//just to remove error
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-900 pt-24 px-4">
      <div className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8 py-4">
        <Link
          to="/"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 group transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </Link>
      </div>

      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="max-w-md w-full space-y-8 animate-fadeInUp">
          <div className="text-center">
            <div className="flex justify-center">
              <Scale className="h-12 w-12 text-purple-400 animate-bounce" />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-white">Create your account</h2>
            <p className="mt-2 text-sm text-gray-400">
              Or{' '}
              <Link to="/login" className="font-medium text-purple-400 hover:text-purple-300">
                sign in to your existing account
              </Link>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input name="firstName" type="text" required placeholder="First Name" value={formData.firstName} onChange={handleInputChange} className="px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-md text-sm" />
                <input name="lastName" type="text" required placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} className="px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-md text-sm" />
              </div>
              <input name="email" type="email" required placeholder="Email address" value={formData.email} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-md text-sm" />
              <input name="phone" type="tel" required placeholder="Phone number" value={formData.phone} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-md text-sm" />
              <select name="userType" value={formData.userType} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-md text-sm">
                <option value="individual">Individual</option>
                <option value="business">Business</option>
                <option value="lawyer">Legal Professional</option>
              </select>
              <div className="relative">
                <input name="password" type={showPassword ? "text" : "password"} required placeholder="Password" value={formData.password} onChange={handleInputChange} className="w-full px-3 py-2 pr-10 border border-gray-600 bg-gray-800 text-white rounded-md text-sm" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
              <div className="relative">
                <input name="confirmPassword" type={showConfirmPassword ? "text" : "password"} required placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleInputChange} className="w-full px-3 py-2 pr-10 border border-gray-600 bg-gray-800 text-white rounded-md text-sm" />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  {showConfirmPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex items-start space-x-2">
                <input name="agreeToTerms" type="checkbox" checked={formData.agreeToTerms} onChange={handleInputChange} className="mt-1 h-4 w-4 text-purple-600 border-gray-600 rounded" />
                <label className="text-sm text-gray-300">
                  I agree to the <a href="#" className="text-purple-400 hover:text-purple-300">Terms</a> and <a href="#" className="text-purple-400 hover:text-purple-300">Privacy Policy</a>
                </label>
              </div>
              <div className="flex items-start space-x-2 mt-2">
                <input name="agreeToMarketing" type="checkbox" checked={formData.agreeToMarketing} onChange={handleInputChange} className="mt-1 h-4 w-4 text-purple-600 border-gray-600 rounded" />
                <label className="text-sm text-gray-300">
                  I would like to receive marketing updates
                </label>
              </div>
            </div>

            <button type="submit" disabled={isLoading} className="w-full py-2 px-4 rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-sm">
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>

            <div className="mt-4">
              <p className="text-xs text-gray-400">Or continue with</p>
              <div className="grid grid-cols-2 gap-3 mt-2">
                <button type="button" className="py-2 px-4 border border-gray-600 bg-gray-800 text-gray-300 rounded-md text-sm">Google</button>
                <button type="button" className="py-2 px-4 border border-gray-600 bg-gray-800 text-gray-300 rounded-md text-sm">Microsoft</button>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg border border-purple-500/30">
              <h3 className="text-sm font-medium text-purple-300 mb-3">What you get with AI Lawyer:</h3>
              <ul className="space-y-2">
                {["24/7 AI-powered legal assistance", "Expert guidance on Indian law", "Document review and analysis", "Secure and confidential service"].map((text, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-2 text-purple-400" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </form>
        </div>
      </div>
      </div>
      <Footer/>
      </>
  );
};

export default Signup;
