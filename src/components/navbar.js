import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, Home, Briefcase, Building2, Users, Phone, GraduationCap, BookOpen, ArrowRight, Sparkles, Star } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isResourceDropdownOpen, setIsResourceDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const resourceRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCompanyDropdownOpen(false);
      }
      if (resourceRef.current && !resourceRef.current.contains(event.target)) {
        setIsResourceDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdowns when route changes
  useEffect(() => {
    setIsCompanyDropdownOpen(false);
    setIsResourceDropdownOpen(false);
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsCompanyDropdownOpen(false);
    setIsResourceDropdownOpen(false);
  };

  const handleStartTesting = () => {
    navigate('/get-started');
  };

  const handleDropdownItemClick = () => {
    setIsCompanyDropdownOpen(false);
    setIsResourceDropdownOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-white/10' 
          : 'bg-gray-900'
      }`} style={{ backgroundColor: scrolled ? 'rgba(20, 20, 20, 0.95)' : '#141414' }}>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-1">
          <div className="flex justify-between items-center h-16">
            {/* Enhanced Logo */}
            <div className="flex-shrink-0 flex items-center group cursor-pointer">
              <Link to="/" className="flex items-center space-x-3 transform transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <img 
                      src="/logo.png" 
                      alt="Logo" 
                      className="w-15  relative z-10 transition-transform duration-300 group-hover:scale-2" 
                    />

                </div>
                <div className="hidden sm:block">
                  <div className="h-0.5 w-12 bg-gradient-to-r from-purple-500 to-transparent group-hover:from-purple-400 transition-all duration-300"></div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {/* Home */}
              <Link 
                to="/" 
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  location.pathname === '/' 
                    ? 'text-white bg-white/10' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="relative z-10">Home</span>
                {location.pathname === '/' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg animate-pulse"></div>
                )}
              </Link>

              {/* Our Work */}
              <Link 
                to="/work"
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  location.pathname === '/work' 
                    ? 'text-white bg-white/10' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="relative z-10">Our Work</span>
                {location.pathname === '/work' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg animate-pulse"></div>
                )}
              </Link>

              {/* Company Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                  className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    isCompanyDropdownOpen ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>Company</span>
                  <ChevronDown className={`w-4 h-4 transition-all duration-300 ${isCompanyDropdownOpen ? 'rotate-180 text-purple-400' : 'group-hover:text-purple-400'}`} />
                </button>
                
                {isCompanyDropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/20 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-white/95 backdrop-blur-xl border-l border-t border-gray-200/20 transform rotate-45"></div>
                    
                    <Link 
                      to="/about" 
                      onClick={handleDropdownItemClick}
                      className="flex items-center space-x-3 px-5 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-200 group"
                    >
                      <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors duration-200">
                        <Users className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold">About Us</span>
                        <p className="text-xs text-gray-500 mt-0.5">Learn our story</p>
                      </div>
                    </Link>
                    
                    <Link 
                      to="/contact" 
                      onClick={handleDropdownItemClick}
                      className="flex items-center space-x-3 px-5 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-200 group"
                    >
                      <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                        <Phone className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold">Contact</span>
                        <p className="text-xs text-gray-500 mt-0.5">Get in touch</p>
                      </div>
                    </Link>
                    
                    <Link 
                      to="/career" 
                      onClick={handleDropdownItemClick}
                      className="flex items-center space-x-3 px-5 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-200 group"
                    >
                      <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-200">
                        <GraduationCap className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold">Career</span>
                        <p className="text-xs text-gray-500 mt-0.5">Join our team</p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative" ref={resourceRef}>
                <button
                  onClick={() => setIsResourceDropdownOpen(!isResourceDropdownOpen)}
                  className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    isResourceDropdownOpen ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>Resources</span>
                  <ChevronDown className={`w-4 h-4 transition-all duration-300 ${isResourceDropdownOpen ? 'rotate-180 text-purple-400' : 'group-hover:text-purple-400'}`} />
                </button>
                
                {isResourceDropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/20 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-white/95 backdrop-blur-xl border-l border-t border-gray-200/20 transform rotate-45"></div>
                    
                    <Link 
                      to="/free-training" 
                      onClick={handleDropdownItemClick}
                      className="flex items-center justify-between px-5 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-200">
                          <GraduationCap className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold">Free Training</p>
                          <p className="text-xs text-gray-500 mt-0.5">Premium courses at no cost</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                          FREE
                        </span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={handleStartTesting}
                className="relative px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group overflow-hidden"
                style={{ backgroundColor: '#9112BC' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Start Testing</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="relative p-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-6 h-6 relative transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}>
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 absolute inset-0" />
                  ) : (
                    <Menu className="w-6 h-6 absolute inset-0" />
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen 
              ? 'max-h-screen opacity-100 pb-6' 
              : 'max-h-0 opacity-0'
          }`}>
            <div className="border-t border-gray-700/50 pt-4">
              <div className="space-y-2">
                
                {/* Home */}
                <Link 
                  to="/" 
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    location.pathname === '/' 
                      ? 'text-white bg-white/10 border-l-4 border-purple-500' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Home className="w-5 h-5" />
                  <span>Home</span>
                </Link>

                {/* Our Work */}
                <Link 
                  to="/work" 
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    location.pathname === '/work' 
                      ? 'text-white bg-white/10 border-l-4 border-purple-500' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Briefcase className="w-5 h-5" />
                  <span>Our Work</span>
                </Link>

                {/* Company Section */}
                <div className="px-4 py-3">
                  <div className="text-white font-semibold mb-3 flex items-center space-x-2">
                    <Building2 className="w-5 h-5 text-purple-400" />
                    <span>Company</span>
                  </div>
                  <div className="ml-7 space-y-2">
                    <Link 
                      to="/about" 
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white py-2 text-sm transition-all duration-200 hover:pl-2"
                    >
                      <Users className="w-4 h-4" />
                      <span>About Us</span>
                    </Link>
                    <Link 
                      to="/contact" 
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white py-2 text-sm transition-all duration-200 hover:pl-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Contact</span>
                    </Link>
                    <Link 
                      to="/career" 
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white py-2 text-sm transition-all duration-200 hover:pl-2"
                    >
                      <GraduationCap className="w-4 h-4" />
                      <span>Career</span>
                    </Link>
                  </div>
                </div>

                {/* Resources Section */}
                <div className="px-4 py-3">
                  <div className="text-white font-semibold mb-3 flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    <span>Resources</span>
                  </div>
                  <div className="ml-7 space-y-2">
                    <Link 
                      to="/free-training" 
                      onClick={closeMobileMenu}
                      className="flex items-center justify-between text-gray-300 hover:text-white py-2 text-sm transition-all duration-200 hover:pl-2"
                    >
                      <div className="flex items-center space-x-3">
                        <GraduationCap className="w-4 h-4" />
                        <span>Free Training</span>
                      </div>
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                        FREE
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Mobile Buttons */}
                <div className="px-4 pt-4">
                  <button 
                    onClick={() => {
                      handleStartTesting();
                      closeMobileMenu();
                    }}
                    className="w-full text-white px-6 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 hover:scale-105 bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg hover:shadow-purple-500/25"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Start Testing</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-5"></div>
    </>
  );
};

export default Navbar;