import React, { useState, useEffect } from 'react';
import { Star, ChevronRight, Award, Users, TrendingUp } from 'lucide-react';

const ReviewsComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const reviews = [
    {
      name: "Dave Polykoff",
      date: "Jul 16, 2025",
      title: "Amazing strategies around content conversion",
      content: "I've been using Viral Coach's content strategies for about a year now and I love how simple and effective they are. The way they approach content creation and then converting that content into clients for my brand is incredible. Highly recommend.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James Zheng",
      date: "Jul 15, 2025",
      title: "Confused Network Marketer - Now Empowered",
      content: "As a business professional with 16 years of experience, much of that spent in the online space, I've spent countless hours scouring the internet for every possible hack, tool, and strategy to grow organically on social media. I've studied algorithms, tested trends, and tried nearly every \"proven\" system out there. The problem? Most of what I found felt out of alignment. It was either inconsistent, dependent on paid ads, or constantly chasing the latest trend...none of which felt sustainable or authentic to me. What I've loved most about Viral Coach is that their content actually works because it's built on real, proven experience. It's not gimmicky, trend-chasing fluff. It's evergreen, value-driven content from mentors who've been in the trenches and know how to build true authority online.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Katie Frederickson",
      date: "Mar 18, 2025",
      title: "Totally worth it!",
      content: "Just started using Viral Coach to jumpstart my business and I'm blown away by how much information I've already gained access to! Excited to put it all to work and grow with their support!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Brandon True",
      date: "Feb 7 2025",
      title: "Fantastic Team",
      content: "Danny and his team are a CLASS ACT. Danny was a super early adopter of short-form content - I first discovered him early on when TikTok was on the come up. He built a following and leveraged it HARD to build an amazing network. Now, he and his team are genuinely fantastic at executing your content strategy. No agency branding and culture BS. What are your sales goals? Let's get you there.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lynnette Jaiswal",
      date: "Mar 16, 2025",
      title: "Streamlined and Helpful",
      content: "I just started using Viral Coach and I'm already so impressed by how helpful and streamlined everything is. As someone who wears multiple hats in my business, having a platform that brings clarity, structure, and proven strategies all in one place has been a game changer.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Adrian Alexander",
      date: "Jan 22, 2025",
      title: "Exceeded Expectations",
      content: "The coaching, the community, and the strategy have all been world-class. I'm already implementing what I've learned and for the first time in a long time, I feel excited, aligned, and confident about how I'm showing up on social media. Highly recommend.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 p-4 sm:p-6 lg:p-8">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Mobile and Desktop Layout */}
        <div className={`lg:flex lg:gap-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          {/* Left Section - Hero */}
          <div className="lg:w-2/5 mb-8 lg:mb-0">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-white/20 relative overflow-hidden">

              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600 to-transparent"></div>
                <div className="absolute -top-24 -left-24 w-48 h-48 border-4 border-purple-300 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute -bottom-24 -right-24 w-48 h-48 border-4 border-purple-300 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
              </div>

              <div className="relative z-10">

                <div className="mb-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-2 leading-tight">
                    <span className=" text-gray-800 bg-clip-text ">
                      4.9/5 Stars
                    </span>
                  </h1>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mb-4">
                    in 500+ Reviews
                  </h2>

                  <p className="text-gray-600 text-lg sm:text-xl leading-relaxed text-justify">
                    Check out a collection of our top reviews from TrustPilot and see why thousands of clients trust us.
                  </p>
                </div>

                {/* Trustpilot-style rating */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-2xl inline-flex items-center space-x-3 mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <span className="font-bold text-lg">Excellent</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg">
                    4.9 out of 5 based on <span className="font-bold text-purple-600">600+ reviews</span>
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                    <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <div className="font-bold text-lg text-gray-800">500+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200">
                    <TrendingUp className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                    <div className="font-bold text-lg text-gray-800">98%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl border border-pink-200">
                    <Award className="w-6 h-6 text-pink-600 mx-auto mb-2" />
                    <div className="font-bold text-lg text-gray-800">4.9</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                </div>

                <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-lg px-8 py-4 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
                  <span>SEE MORE SUCCESS STORIES</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Features */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    {[
                      "Proven strategies that actually work",
                      "Real results from real clients",
                      "Ongoing support and community"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3 group">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Reviews */}
          <div className="lg:w-3/5">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
              {/* Reviews Header */}
              <div className="p-6 sm:p-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Client Reviews</h3>
                <p className="text-gray-600">See what our clients are saying about us</p>
              </div>

              {/* Scrollable Reviews Container */}
              <div className="h-[600px] lg:h-[700px] overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                <div className="p-6 sm:p-8 space-y-6">
                  {reviews.map((review, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group relative overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-indigo-50 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl"></div>

                      <div className="relative z-10">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="relative">
                            <img
                              src={review.avatar}
                              alt={review.name}
                              className="w-12 h-12 rounded-full object-cover border-2 border-purple-100 group-hover:border-purple-300 transition-colors duration-300"
                            />
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-gray-800 group-hover:text-purple-700 transition-colors duration-300">{review.name}</h3>
                            <p className="text-gray-500 text-sm">{review.date}</p>
                          </div>
                        </div>

                        <h4 className="font-semibold text-base text-gray-800 mb-3 group-hover:text-purple-700 transition-colors duration-300">{review.title}</h4>

                        <div className="text-gray-700 leading-relaxed text-sm">
                          {review.content}
                        </div>

                        {/* Rating stars */}
                        <div className="flex items-center mt-4 pt-3 border-t border-gray-100">
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gray-500">5.0</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsComponent;