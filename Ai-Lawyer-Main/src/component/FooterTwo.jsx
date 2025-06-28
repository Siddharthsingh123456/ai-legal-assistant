import React from 'react'
import { Phone, Mail, Scale } from "lucide-react";

function FooterTwo() {
    return (

        <footer className="bg-gray-950 text-white py-16 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            
        </footer>
    )
}

export default FooterTwo