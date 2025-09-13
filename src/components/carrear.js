import React, { useState, useEffect } from 'react';
import { ChevronRight, MapPin, Users, TrendingUp, DollarSign, Star, Play, Award, Target, User, Sparkles, Zap, Heart, Globe, ArrowRight, Briefcase, Coffee, Building } from 'lucide-react';

const ViralCoachCareers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const benefits = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Work From Anywhere",
      description: "100% remote, outcome-driven culture that values your time, family, and work-life balance above all else.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven",
      description: "Fast-paced environment where performance is rewarded and ownership drives meaningful impact.",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth Focused",
      description: "Continuous learning culture powered by smart tools and high-performance team collaboration.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Pay",
      description: "Excellence rewarded with competitive compensation and performance-based bonuses.",
      color: "from-pink-500 to-rose-600"
    }
  ];

  const testimonials = [
    {
      rating: 5,
      quote: "Viral Coach cares more than any other company I've worked for",
      author: "Team Member",
      description: "Very positive culture where they invest heavily in employee success. Regular team retreats build strong company culture. They empower you like a business owner without micromanaging.",
      position: "Senior Developer"
    },
    {
      rating: 5,
      quote: "Stellar Team, Exceptional Experience",
      author: "Team Member",
      description: "High-performance culture without ego. Data-driven approach focused on quality fulfillment where every team member genuinely cares about client success.",
      position: "Marketing Manager"
    },
    {
      rating: 5,
      quote: "Best kept secret",
      author: "Team Member",
      description: "Thriving remote startup environment where client goals and trust are prioritized. This innovative content creation company is the place to be.",
      position: "Content Strategist"
    },
    {
      rating: 5,
      quote: "Amazing team to be part of",
      author: "Team Member",
      description: "Exceptional support during success periods. Built on shared success principles where the entire business operates like a well-coordinated startup.",
      position: "Account Manager"
    }
  ];

  const jobOpenings = [
    {
      category: "Sales",
      position: "Future Sales Opportunities",
      type: "Remote - United States",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      category: "Client Success",
      position: "Future Account Manager Opportunities",
      type: "Remote - United States",
      icon: <Users className="w-5 h-5" />,
    }
  ];

  const stats = [
    { value: "100%", label: "Remote", icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { value: "24/7", label: "Support", icon: <Coffee className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { value: "∞", label: "Growth", icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { value: "50+", label: "Team", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ];

  return (
    <div className="min-h-screen mt-16 sm:mt-10 bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 relative font-inter antialiased">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Company Badge */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-purple-800 mb-4 sm:mb-6">
                <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-semibold tracking-wide">VIRAL COACH CAREERS</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900 px-2">
                Join Our Team and Make
                <span className="block text-purple-600 mt-1 sm:mt-2">
                  An Impact
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4 text-justify">
                Shape the future of business on social media with a team that values innovation, creativity, and results-driven performance in a collaborative remote environment.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
                <button className="w-full sm:w-auto group bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-purple-700 transition-all duration-300 shadow-lg">
                  <span className="flex items-center justify-center">
                    See Open Positions
                    <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                <button className="w-full sm:w-auto group flex items-center justify-center space-x-2 text-purple-600 border-2 border-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-purple-50 transition-all duration-300">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Watch Our Story</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="border border-gray-200 bg-gray-50 rounded-xl shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-6 sm:p-8 lg:p-12">
                <div className="inline-flex items-center bg-purple-50 text-purple-700 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  REMOTE-FIRST CULTURE
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Your Next Big Break in
                  <span className="block text-purple-600 mt-1">
                    Social Media
                  </span>
                </h2>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 text-justify">
                  Join a remote-first team of bold creators and growth-minded strategists using organic content to drive real traffic for business owners. At Viral Coach, we thrive on innovation, collaboration, and results while empowering every team member to push creative limits and turn views into clients.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group cursor-pointer">
                      <div className="flex justify-center mb-2 sm:mb-3">
                        <div className="p-2 sm:p-3 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors duration-300">
                          <div className="text-purple-600">{stat.icon}</div>
                        </div>
                      </div>
                      <div className="text-lg sm:text-2xl font-bold text-purple-600 mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-12 flex items-center justify-center bg-gray-50">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-4 -left-4 w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-lg rotate-12 opacity-20" />
                  <div className="absolute -bottom-4 -right-4 w-4 h-4 sm:w-6 sm:h-6 bg-purple-500 rounded-lg -rotate-12 opacity-20" />

                  <div className="bg-white rounded-xl p-4 sm:p-8 border border-gray-200 shadow-sm">
                    <div className="aspect-video bg-gradient-to-br from-purple-50 to-purple-50 rounded-lg flex items-center justify-center overflow-hidden">
                      <img 
                        src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400&q=80' 
                        alt="Remote work setup"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-4">
              Why Choose Viral Coach
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 text-justify">
              We're all about high output and high reward. When you join our team, you step into a results-first environment built for ambitious individuals who want to make a real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`inline-flex p-2 sm:p-3 bg-gradient-to-r ${benefit.color} rounded-lg mb-3 sm:mb-4 text-white transform group-hover:scale-105 transition-all duration-300`}>
                  {benefit.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-justify">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              What Our Team Says
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 text-justify">
              We welcome feedback, embrace transparency, and foster a supportive environment where every voice matters and every contribution counts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex gap-1">
                    <img 
                      src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMTAwIDIwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTAgMTVMMTMuMDkgMTEuMjZMMTcgMTJMMTMuMDkgOC43NEwxMCA1TDYuOTEgOC43NEwzIDEyTDYuOTEgMTEuMjZMMTAgMTVaIiBmaWxsPSIjRkZCRjAwIi8+CjxwYXRoIGQ9IjMwIDEwIDMzLjA5IDE2LjI2IDM3IDExIDMzLjA5IDMuNzQgMzAgMCAyNi45MSAzLjc0IDIzIDExIDI2LjkxIDE2LjI2IDMwIDEwWiIgZmlsbD0iI0ZGQkYwMCIvPgo8cGF0aCBkPSI1MCAyMCA1My4wOSAxMS4yNiA1NyAxMiA1My4wOSA4Ljc0IDUwIDUgNDYuOTEgOC43NCA0MyAxMiA0Ni45MSAxMS4yNiA1MCAyMFoiIGZpbGw9IiNGRkJGMDAiLz4KPHA+aWQgZD0iNzAgMTUgNzMuMDkgMTEuMjYgNzcgMTIgNzMuMDkgOC43NCA3MCA1IDY2LjkxIDguNzQgNjMgMTIgNjYuOTEgMTEuMjYgNzAgMTVaIiBmaWxsPSIjRkZCRjAwIi8+CjxwYXRoIGQ9Ik05MCAyMCA5My4wOSAxMS4yNiA5NyAxMiA5My4wOSA4Ljc0IDkwIDUgODYuOTEgOC43NCA4MyAxMiA4Ni45MSAxMS4yNiA5MCAyMFoiIGZpbGw9IiNGRkJGMDAiLz4KPC9zdmc+Cg==' 
                      className='h-3 sm:h-4 ml-2' 
                      alt="5 stars"
                    />
                  </div>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 leading-relaxed group-hover:text-purple-600 transition-colors duration-300">
                  "{testimonial.quote}"
                </h4>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 group-hover:text-gray-700 transition-colors duration-300 text-justify">
                  {testimonial.description}
                </p>

                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-purple-600 font-semibold">{testimonial.author}</p>
                    <p className="text-xs text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Current Opportunities
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4 text-justify max-w-4xl mx-auto">
              Discover exciting career opportunities and join our growing team of passionate professionals making a real difference.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {jobOpenings.map((job, index) => (
              <div key={index} className="group bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {job.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="inline-block text-xs font-semibold text-purple-600 bg-purple-50 px-2 sm:px-3 py-1 rounded-full mb-2">
                        {job.category}
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-purple-600 transition-colors duration-300 break-words">
                        {job.position}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm">
                        <p className="text-gray-500 flex items-center">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                          <span className="break-words">{job.type}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm hover:bg-purple-700 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        .font-inter {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default ViralCoachCareers;