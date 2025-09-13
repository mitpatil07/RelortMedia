import React from 'react';
import { Target, TrendingUp, Instagram, Music, Youtube, Sparkles, CheckCircle, Users, Award, Zap, Star } from 'lucide-react';

const ViralCoachLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 pt-16 sm:pt-16 md:pt-20 lg:pt-24 relative overflow-hidden font-sans">
      {/* Floating Background Elements */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-purple-200 bg-opacity-30 rounded-full blur-2xl sm:blur-3xl"></div>
      <div className="absolute top-20 sm:top-40 right-8 sm:right-32 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 bg-pink-200 bg-opacity-30 rounded-full blur-2xl sm:blur-3xl"></div>
      <div className="absolute bottom-40 left-1/4 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-purple-300 bg-opacity-20 rounded-full blur-xl sm:blur-2xl"></div>
      <div className="absolute top-1/3 right-8 sm:right-20 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 bg-purple-400 bg-opacity-20 rounded-full blur-lg sm:blur-xl"></div>
      <div className="absolute bottom-20 right-1/3 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 bg-pink-300 bg-opacity-25 rounded-full blur-xl sm:blur-2xl"></div>

      {/* Training Section */}
      <div className="py-10 sm:py-16 lg:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            {/* Icon Badge */}
            <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg">
              <Sparkles className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight tracking-tight font-serif px-4">
              Scale Your Content
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium mb-3 sm:mb-4 px-4 leading-relaxed">
              You've got goals. We've got strategies.
            </h2>
            
            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-8 sm:mb-10 lg:mb-12"></div>
            
            <p className="text-gray-500 text-base sm:text-lg md:text-xl mb-10 sm:mb-12 lg:mb-16 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed text-justify font-light px-4 hyphens-auto">
              Learn the same strategies that helped 2,000+ business owners replace expensive 
              marketing with organic video content that generates consistent leads, sales, and 
              measurable growth.
            </p>
          </div>

          <div className="max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
            {/* Main Training Card */}
            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center shadow-xl border border-white border-opacity-50 mb-6 sm:mb-8 hover:shadow-2xl transition-all duration-500 mx-4 sm:mx-0">
              {/* Premium Badge */}
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-purple-100 bg-opacity-80 text-purple-600 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 hover:scale-105 transition-transform duration-300">
                <Star className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                Free Viral Coach Training
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-500 rounded-full ml-2 sm:ml-3 animate-pulse"></div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-6 sm:mb-8 leading-tight font-serif px-2">
                Grow Your Business Through 
                <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mt-2">
                  Viral Content
                </span>
              </h3>
              
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed text-justify px-2 hyphens-auto">
                Transform your business with proven viral content strategies that convert viewers into loyal customers and generate measurable growth.
              </p>

              {/* Features List */}
              <div className="bg-purple-50 bg-opacity-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto border border-purple-100 border-opacity-50">
                <p className="text-gray-700 font-semibold mb-4 sm:mb-6 text-sm sm:text-base md:text-lg flex items-center justify-center flex-wrap px-2">
                  <Target className="w-4 sm:w-5 h-4 sm:h-5 mr-2 text-purple-500 flex-shrink-0" />
                  <span>Perfect for you if:</span>
                </p>
                <ul className="space-y-3 sm:space-y-4 text-gray-600">
                  <li className="flex items-start text-justify group px-2">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-1.5 sm:mt-2 mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-xs sm:text-sm md:text-base leading-relaxed hyphens-auto">You're starting a new business and need cost-effective marketing strategies</span>
                  </li>
                  <li className="flex items-start text-justify group px-2">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-1.5 sm:mt-2 mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-xs sm:text-sm md:text-base leading-relaxed hyphens-auto">You want marketing that doesn't cost thousands in advertising</span>
                  </li>
                  <li className="flex items-start text-justify group px-2">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-1.5 sm:mt-2 mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-xs sm:text-sm md:text-base leading-relaxed hyphens-auto">You want a proven system to scale your content creation faster</span>
                  </li>
                </ul>
              </div>

              {/* CTA Section */}
              <div className="relative px-2">
                <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-orange-200 border-opacity-50">
                  <p className="text-orange-600 text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-4 sm:mb-6 flex items-center justify-center flex-wrap px-2">
                    <Users className="w-4 sm:w-5 h-4 sm:h-5 mr-2 flex-shrink-0" />
                    <span className="text-center">Join thousands of entrepreneurs already inside!</span>
                    <span className="w-2 sm:w-3 h-2 sm:h-3 bg-orange-400 rounded-full ml-2 animate-pulse flex-shrink-0"></span>
                  </p>
                  <button className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold py-3 sm:py-4 md:py-5 px-8 sm:px-12 md:px-16 rounded-full text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 active:scale-95 group mb-3 sm:mb-4 w-full sm:w-auto">
                    <span className="flex items-center justify-center">
                      JOIN NOW
                      <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:rotate-180 transition-transform duration-500" />
                    </span>
                  </button>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium px-2">✨ 100% free forever • No credit card required</p>
                </div>
              </div>
            </div>

            {/* FAQ Style Cards */}
            <div className="space-y-3 sm:space-y-4 mx-4 sm:mx-0">
              {/* What You'll Learn Card */}
              <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-white border-opacity-50 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1 min-w-0">
                    <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Award className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-700 leading-tight">What you'll master inside</h4>
                  </div>
                  <div className="text-purple-500 group-hover:rotate-180 transition-transform duration-300 flex-shrink-0 ml-2">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Why This Works Card */}
              <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-white border-opacity-50 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1 min-w-0">
                    <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <TrendingUp className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-700 leading-tight">Why viral content works</h4>
                  </div>
                  <div className="text-purple-500 group-hover:rotate-180 transition-transform duration-300 flex-shrink-0 ml-2">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* How to Get Started Card */}
              <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-white border-opacity-50 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1 min-w-0">
                    <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Zap className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-700 leading-tight">How do I know this will work for me?</h4>
                  </div>
                  <div className="text-purple-500 group-hover:rotate-180 transition-transform duration-300 flex-shrink-0 ml-2">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="py-10 sm:py-16 lg:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center shadow-xl border border-white border-opacity-50 mx-4 sm:mx-0">
              <div className="mb-8 sm:mb-10 lg:mb-12">
                <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Star className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">See it in practice...</h3>
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 sm:mb-6 font-serif px-2">Our founder's socials</h4>
                <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
                {/* Instagram */}
                <div className="text-center group cursor-pointer">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <Instagram className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">200K+</div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base mb-2">Instagram Followers</div>
                  <div className="text-xs sm:text-sm text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-justify px-2 leading-relaxed">
                    Daily engaging content that converts followers into customers
                  </div>
                </div>

                {/* TikTok */}
                <div className="text-center group cursor-pointer">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <Music className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">1.2M+</div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base mb-2">TikTok Followers</div>
                  <div className="text-xs sm:text-sm text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-justify px-2 leading-relaxed">
                    Viral strategies generating millions of views
                  </div>
                </div>

                {/* YouTube */}
                <div className="text-center group cursor-pointer">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <Youtube className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">800K+</div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base mb-2">YouTube Subscribers</div>
                  <div className="text-xs sm:text-sm text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-justify px-2 leading-relaxed">
                    Educational content generating substantial revenue
                  </div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="pt-6 sm:pt-8 border-t border-purple-100">
                <p className="text-gray-600 text-sm sm:text-base md:text-lg font-medium px-2 leading-relaxed">
                  <span className="text-purple-600 font-bold">2,000+</span> businesses transformed • 
                  <span className="text-purple-600 font-bold ml-2">50M+</span> total views • 
                  <span className="text-purple-600 font-bold ml-2">Proven</span> results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViralCoachLanding;