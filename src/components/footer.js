import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MessageCircle,
  Linkedin,
  Twitter,
  Instagram,
  Github,
} from 'lucide-react';

const Footer = () => {
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isResourceDropdownOpen, setIsResourceDropdownOpen] = useState(false);

  const handleDropdownItemClick = () => {
    setIsCompanyDropdownOpen(false);
    setIsResourceDropdownOpen(false);
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Main Footer Content - Horizontal Layout */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">

        {/* Top Section - Brand Centered */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center group cursor-pointer mb-6">
            <Link to="/" className="text-4xl font-bold">
              <span className="text-white">RELORT</span>
              <span className="text-orange-500">MEDIA</span>
            </Link>
          </div>

          {/* Navigation - Horizontal Cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {/* Company Links Card */}
            <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-white text-lg font-semibold mb-4 text-center relative">
                Company
                <div
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full"
                  style={{ backgroundColor: '#9112BC' }}
                ></div>
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  onClick={handleDropdownItemClick}
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    About Us
                  </span>
                </Link>
                <Link
                  to="/career"
                  onClick={handleDropdownItemClick}
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Careers
                  </span>
                </Link>
                <Link
                  to="/contact"
                  onClick={handleDropdownItemClick}
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Contact
                  </span>
                </Link>
              </div>
            </div>

            {/* Resources Links Card */}
            <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-white text-lg font-semibold mb-4 text-center relative">
                Resources
                <div
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full"
                  style={{ backgroundColor: '#9112BC' }}
                ></div>
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/blog"
                  onClick={handleDropdownItemClick}
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Blog
                  </span>
                </Link>
                <Link
                  to="/free-training"
                  onClick={handleDropdownItemClick}
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200 flex items-center">
                    Free Training
                    <span className="ml-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      FREE
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Testimonial Disclaimer - Centered with Card Style */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <p className="text-gray-300 text-sm leading-relaxed text-center">
                All testimonials shown are real but do not claim to represent
                typical results. Any success depends on many variables which are
                unique to each individual, including commitment and effort.
                Testimonial results are meant to demonstrate what the most
                dedicated students have done and should not be considered average.
                Viral Coach makes no guarantee of any financial gain from the use
                of its products.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2025 Relort Media. All rights reserved.
              </p>

              {/* Router Links */}
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline">
                  Terms of Service
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: '#9112BC' }}
                ></div>
                <span>Built with passion</span>
              </div>
              <a
                href="#"
                className="text-green-500 hover:text-green-400 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;