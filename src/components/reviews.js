import React, { useState, useEffect } from 'react';
import { Star, ChevronRight, Award, Users, TrendingUp, User } from 'lucide-react';

const ReviewsComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const reviews = [
    {
      name: "Dave Polykoff",
      date: "Jul 16, 2025",
      title: "Amazing strategies around content conversion",
      content: "I have been using Viral Coach content strategies for about a year now and I love how simple and effective they are. The way they approach content creation and then converting that content into clients for my brand is incredible. Highly recommend.",
    },
    {
      name: "Katie Frederickson",
      date: "Mar 18, 2025",
      title: "Totally worth it!",
      content: "Just started using Viral Coach to jumpstart my business and I am blown away by how much information I have already gained access to! Excited to put it all to work and grow with their support!",
    },
    {
      name: "Brandon True",
      date: "Feb 7, 2025",
      title: "Fantastic Team",
      content: "Danny and his team are a CLASS ACT. Danny was a super early adopter of short-form content - I first discovered him early on when TikTok was on the come up. He built a following and leveraged it HARD to build an amazing network. Now, he and his team are genuinely fantastic at executing your content strategy. No agency branding and culture BS. What are your sales goals? Let us get you there.",
    },
    {
      name: "James Zheng",
      date: "Jul 15, 2025",
      title: "Confused Network Marketer - Now Empowered",
      content: "As a business professional with 16 years of experience, much of that spent in the online space, I have spent countless hours scouring the internet for every possible hack, tool, and strategy to grow organically on social media. I have studied algorithms, tested trends, and tried nearly every proven system out there. The problem? Most of what I found felt out of alignment. It was either inconsistent, dependent on paid ads, or constantly chasing the latest trend - none of which felt sustainable or authentic to me. What I have loved most about Viral Coach is that their content actually works because it is built on real, proven experience. It is not gimmicky, trend-chasing fluff. It is evergreen, value-driven content from mentors who have been in the trenches and know how to build true authority online. The coaching, the community, and the strategy have all been world-class. I am already implementing what I have learned and for the first time in a long time, I feel excited, aligned, and confident about how I am showing up on social media. Highly recommend.",
    },
    {
      name: "Lynnette Jaiswal",
      date: "Mar 16, 2025",
      title: "Streamlined and Helpful",
      content: "I just started using Viral Coach and I am already so impressed by how helpful and streamlined everything is. As someone who wears multiple hats in my business, having a platform that brings clarity, structure, and strategy to my social media presence is a total game changer. The content prompts, branding insights, and step-by-step guidance are not only helpful they are empowering. I feel like I finally have a system that aligns with my voice and vision. Cannot wait to see the momentum that builds from here. If you are just getting started or want to bring intention to your online presence, this is 100% worth it.",
    },
    {
      name: "Adrian Alexander",
      date: "Feb 16, 2025",
      title: "The viral coach has provided me 10x the skills",
      content: "The viral coach has provided me 10x the skills and clarity to create powerful content that speaks directly to my target audience. I could not imagine the growth would be at this stage. Its safe to say I am very happy.",
    },
    {
      name: "Karen Cedeno",
      date: "Apr 12, 2025",
      title: "A very insightful and high quality experience",
      content: "This has been a very insightful experience so far. You can tell they have done much work to simplify years of knowledge into easy-to-digest, easy-to-implement material with real-life examples. Different from other gurus and courses, this does not feel like the typical BS of decoding algorithms. Instead - They take us back to the foundation of sales and marketing psychology. So glad to start this journey!",
    },
    {
      name: "Mike Brady",
      date: "Apr 6, 2025",
      title: "Highly recommend",
      content: "Thomas and Viral Coach are awesome! After our first meeting, I made a few changes to my content and had more people respond in one day than had responded in the last month. Highly recommend.",
    },
    {
      name: "Marcus Adams",
      date: "Feb 19, 2025",
      title: "Eye-opening organic strategy",
      content: "I have always thought paid ads are king. But after learning Viral Coach strategy around organic content it has been a complete eye-opener. Free leads plus smoother sales process plus better clients equals NO BRAINER. I was not too sure about this at first because I have tried organic content in the past with no success - But this really broadened my understanding of how to actually make content work for my business.",
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen p-3 sm:p-4 md:p-6 lg:p-8" style={{ fontFamily: "Inter, Segoe UI, Roboto, Helvetica Neue, sans-serif" }}>
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Mobile and Desktop Layout */}
        <div className={`flex flex-col lg:flex-row lg:gap-6 xl:gap-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          {/* Left Section - Hero */}
          <div className="w-full lg:w-2/5 mb-6 lg:mb-0">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-xl border border-white/20 relative overflow-hidden">

              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600 to-transparent"></div>
                <div className="absolute -top-24 -left-24 w-48 h-48 border-4 border-purple-300 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute -bottom-24 -right-24 w-48 h-48 border-4 border-purple-300 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
              </div>

              <div className="relative z-10">
                <div className="mb-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-3 leading-tight">
                    <span className="text-gray-800 bg-clip-text">
                      4.9/5 Stars
                    </span>
                  </h1>

                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-700 mb-4">
                    in 500+ Reviews
                  </h2>

                  <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
                    Check out a collection of our top reviews from TrustPilot and see why thousands of clients trust us.
                  </p>
                </div>

                {/* Trustpilot-style rating */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-3 rounded-2xl inline-flex items-center space-x-2 sm:space-x-3 mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <span className="font-bold text-base sm:text-lg">Excellent</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-base sm:text-lg">
                    4.9 out of 5 based on <span className="font-bold text-purple-600">600+ reviews</span>
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
                  <div className="text-center p-2 sm:p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mx-auto mb-2" />
                    <div className="font-bold text-base sm:text-lg text-gray-800">500+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center p-2 sm:p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 mx-auto mb-2" />
                    <div className="font-bold text-base sm:text-lg text-gray-800">98%</div>
                    <div className="text-xs sm:text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center p-2 sm:p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl border border-pink-200">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600 mx-auto mb-2" />
                    <div className="font-bold text-base sm:text-lg text-gray-800">4.9</div>
                    <div className="text-xs sm:text-sm text-gray-600">Average Rating</div>
                  </div>
                </div>

                <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
                  <span className="text-center">SEE MORE SUCCESS STORIES</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Features */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    {[
                      "Proven strategies that actually work",
                      "Real results from real clients",
                      "Ongoing support and community"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3 group">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></div>
                        <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Reviews */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
              {/* Reviews Header */}
              <div className="p-4 sm:p-6 md:p-8 border-b border-gray-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Client Reviews</h3>
                <p className="text-gray-600 text-sm sm:text-base">See what our clients are saying about us</p>
              </div>

              {/* Scrollable Reviews Container */}
              <div className="h-[500px] sm:h-[600px] lg:h-[700px] overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                  {reviews.map((review, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 sm:p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group relative overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-indigo-50 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl"></div>
                      <div className="relative z-10">
                        <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                          <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                            <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-semibold border-2 border-purple-200 group-hover:border-purple-300 transition-colors duration-300 shadow-sm">
                                {review.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")
                                  .toUpperCase()}
                              </div>
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-base sm:text-lg text-gray-800 group-hover:text-purple-700 transition-colors duration-300 truncate">{review.name}</h3>
                            <p className="text-gray-500 text-xs sm:text-sm">{review.date}</p>
                          </div>
                        </div>

                        <h4 className="font-semibold text-sm sm:text-base text-gray-800 mb-3 group-hover:text-purple-700 transition-colors duration-300 leading-snug">{review.title}</h4>

                        <div className="text-gray-700 leading-relaxed text-xs sm:text-sm text-justify hyphens-auto">
                          {review.content}
                        </div>

                        {/* Rating stars */}
                        <div className="flex items-center mt-4 pt-3 border-t border-gray-100">
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="ml-2 text-xs sm:text-sm text-gray-500">5.0</span>
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