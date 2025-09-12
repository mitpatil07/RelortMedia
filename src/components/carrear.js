import React, { useState, useEffect } from 'react';
import { ChevronRight, MapPin, Users, TrendingUp, DollarSign, Star, Play, Award, Target, User, Sparkles, Zap, Heart, Globe, ArrowRight, Briefcase, Coffee } from 'lucide-react';

const ViralCoachCareers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const benefits = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Work From Anywhere",
      description: "100% remote, outcome-driven culture that values your time, family, and work-life balance above all else.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Results-Driven",
      description: "Fast-paced environment where performance is rewarded and ownership drives meaningful impact.",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Growth Focused",
      description: "Continuous learning culture powered by smart tools and high-performance team collaboration.",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Competitive Pay",
      description: "Excellence rewarded with competitive compensation and performance-based bonuses.",
      color: "from-fuchsia-500 to-pink-600"
    }
  ];

  const testimonials = [
    {
      rating: 5,
      quote: "Viral Coach cares more than any other company I've worked for",
      author: "Team Member",
      description: "Very positive culture where they invest heavily in employee success. Regular team retreats build strong company culture. They empower you like a business owner without micromanaging.",
      accent: "purple",
      position: "Senior Developer"
    },
    {
      rating: 5,
      quote: "Stellar Team, Exceptional Experience",
      author: "Team Member", 
      description: "High-performance culture without ego. Data-driven approach focused on quality fulfillment where every team member genuinely cares about client success.",
      accent: "pink",
      position: "Marketing Manager"
    },
    {
      rating: 5,
      quote: "Best kept secret",
      author: "Team Member",
      description: "Thriving remote startup environment where client goals and trust are prioritized. This innovative content creation company is the place to be.",
      accent: "violet",
      position: "Content Strategist"
    },
    {
      rating: 5,
      quote: "Amazing team to be part of",
      author: "Team Member",
      description: "Exceptional support during success periods. Built on shared success principles where the entire business operates like a well-coordinated startup.",
      accent: "fuchsia",
      position: "Account Manager"
    }
  ];

  const jobOpenings = [
    {
      category: "Sales",
      position: "Future Sales Opportunities",
      type: "Remote - United States",
      icon: <Zap className="w-5 h-5" />,
      salary: "Competitive + Commission",
      experience: "2+ years"
    },
    {
      category: "Client Success",
      position: "Future Account Manager Opportunities", 
      type: "Remote - United States",
      icon: <Heart className="w-5 h-5" />,
      salary: "$60k - $80k",
      experience: "3+ years"
    }
  ];

  const stats = [
    { value: "100%", label: "Remote", icon: <Globe className="w-6 h-6" /> },
    { value: "24/7", label: "Support", icon: <Coffee className="w-6 h-6" /> },
    { value: "∞", label: "Growth", icon: <TrendingUp className="w-6 h-6" /> },
    { value: "50+", label: "Team", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Optimized Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`
          }}
        />
        <div 
          className="absolute bottom-1/4 -right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.005}px, ${mousePosition.y * -0.005}px)`
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white mb-8">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold">100% REMOTE COMPANY</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
              <span className="block text-white mb-2">JOIN US TO MAKE</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
                AN IMPACT
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed text-justify">
              Shape the future of business on social media with a team that values innovation, creativity, and results-driven performance in a collaborative remote environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-bold text-base hover:scale-105 transition-all duration-300 shadow-lg">
                <span className="flex items-center">
                  See Open Positions
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              
              <button className="group flex items-center space-x-2 text-white border-2 border-white/30 px-8 py-3 rounded-xl font-bold text-base hover:bg-white/10 transition-all duration-300">
                <Play className="w-5 h-5" />
                <span>Watch Our Story</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <Globe className="w-4 h-4 mr-2" />
                  REMOTE-FIRST CULTURE
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                  Your Next Big Break in
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-1">
                    Social Media
                  </span>
                </h2>
                
                <p className="text-gray-300 text-base leading-relaxed mb-8 text-justify">
                  Join a remote-first team of bold creators and growth-minded strategists using organic content to drive real traffic for business owners. At Viral Coach, we thrive on innovation, collaboration, and results while empowering every team member to push creative limits and turn views into clients.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group cursor-pointer">
                      <div className="flex justify-center mb-2">
                        <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <div className="text-purple-400">{stat.icon}</div>
                        </div>
                      </div>
                      <div className="text-2xl font-black text-purple-400 mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-400 uppercase font-semibold tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 lg:p-12 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl rotate-12 animate-bounce shadow-lg" />
                  <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl -rotate-12 animate-bounce delay-1000 shadow-lg" />
                  
                  <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-12 border border-white/20 shadow-xl">
                    <div className="text-center">
                      <div className="text-white text-3xl font-black mb-2">CAREER</div>
                      <div className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-5xl font-black">MOVE</div>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              Why You'll Love Working at{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Viral Coach
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed text-justify">
              We're all about high output and high reward. When you join our team, you step into a results-first environment built for ambitious individuals who want to make a real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`inline-flex p-3 bg-gradient-to-r ${benefit.color} rounded-lg mb-4 text-white transform group-hover:scale-110 transition-all duration-300`}>
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed text-justify group-hover:text-gray-200 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Hear it from our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-justify">
              We welcome feedback, embrace transparency, and foster a supportive environment where every voice matters and every contribution counts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current mr-0.5" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 font-bold bg-yellow-400/10 px-2 py-1 rounded-full">
                    {testimonial.rating}.0
                  </span>
                </div>
                
                <h4 className="text-lg font-black text-white mb-3 leading-relaxed group-hover:text-purple-300 transition-colors duration-300">
                  "{testimonial.quote}"
                </h4>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4 text-justify group-hover:text-gray-200 transition-colors duration-300">
                  {testimonial.description}
                </p>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-purple-300 font-bold">{testimonial.author}</p>
                    <p className="text-xs text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Current Job{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Openings
              </span>
            </h2>
            <p className="text-lg text-gray-300 text-justify">
              Discover exciting career opportunities and join our growing team of passionate professionals making a real difference.
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:-translate-y-1">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                  <div className="flex items-center space-x-6 flex-1 mb-4 lg:mb-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-300">
                      {job.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="inline-block text-xs font-bold text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full mb-2">
                        {job.category}
                      </div>
                      <h4 className="text-xl font-black text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        {job.position}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm">
                        <p className="text-gray-400 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.type}
                        </p>
                        <p className="text-gray-400 flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.salary}
                        </p>
                        <p className="text-gray-400 flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.experience}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    <span>Apply</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              <span className="flex items-center">
                Apply Now
                <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to make your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                impact?
              </span>
            </h3>
            <p className="text-gray-300 text-base mb-6 text-justify">
              Join a team that believes in your potential and provides the tools, support, and freedom you need to achieve extraordinary results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                Start Your Journey
              </button>
              <button className="border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/5 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViralCoachCareers;