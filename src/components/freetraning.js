import React from 'react';
import { Target, TrendingUp, Instagram, Music, Youtube, Sparkles, CheckCircle, Users, Award, Zap, Star } from 'lucide-react';

const ViralCoachLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 pt-24 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 bg-opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-32 w-40 h-40 bg-pink-200 bg-opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-purple-300 bg-opacity-20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-purple-400 bg-opacity-20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-pink-300 bg-opacity-25 rounded-full blur-2xl"></div>

      {/* Training Section */}
      <div className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          {/* Hero Content */}
          <div className="text-center mb-16">
            {/* Icon Badge */}
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight">
              Scale Your Content
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-600 font-medium mb-4">
              You've got goals. We've got strategies.
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-12"></div>
            
            <p className="text-gray-500 text-xl mb-16 max-w-3xl mx-auto leading-relaxed text-justify font-light">
              Learn the same strategies that helped 2,000+ business owners replace expensive 
              marketing with organic video content that generates consistent leads, sales, and 
              measurable growth.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Main Training Card */}
            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl p-12 text-center shadow-xl border border-white border-opacity-50 mb-8 hover:shadow-2xl transition-all duration-500">
              {/* Premium Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-purple-100 bg-opacity-80 text-purple-600 rounded-full text-sm font-semibold mb-8 hover:scale-105 transition-transform duration-300">
                <Star className="w-4 h-4 mr-2" />
                Free Viral Coach Training
                <div className="w-2 h-2 bg-purple-500 rounded-full ml-3 animate-pulse"></div>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                Grow Your Business Through 
                <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Viral Content
                </span>
              </h3>
              
              <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed text-justify">
                Transform your business with proven viral content strategies that convert viewers into loyal customers and generate measurable growth.
              </p>

              {/* Features List */}
              <div className="bg-purple-50 bg-opacity-50 rounded-2xl p-8 mb-10 max-w-2xl mx-auto border border-purple-100 border-opacity-50">
                <p className="text-gray-700 font-semibold mb-6 text-lg flex items-center justify-center">
                  <Target className="w-5 h-5 mr-2 text-purple-500" />
                  Perfect for you if:
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start text-justify group">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-base">You're starting a new business and need cost-effective marketing strategies</span>
                  </li>
                  <li className="flex items-start text-justify group">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-base">You want marketing that doesn't cost thousands in advertising</span>
                  </li>
                  <li className="flex items-start text-justify group">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-base">You want a proven system to scale your content creation faster</span>
                  </li>
                </ul>
              </div>

              {/* CTA Section */}
              <div className="relative">
                <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl p-8 border border-orange-200 border-opacity-50">
                  <p className="text-orange-600 text-xl font-bold mb-6 flex items-center justify-center">
                    <Users className="w-5 h-5 mr-2" />
                    Join thousands of entrepreneurs already inside!
                    <span className="w-3 h-3 bg-orange-400 rounded-full ml-2 animate-pulse"></span>
                  </p>
                  <button className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold py-5 px-16 rounded-full text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 active:scale-95 group mb-4">
                    <span className="flex items-center">
                      JOIN NOW
                      <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-180 transition-transform duration-500" />
                    </span>
                  </button>
                  <p className="text-gray-500 text-sm font-medium">✨ 100% free forever • No credit card required</p>
                </div>
              </div>
            </div>

            {/* FAQ Style Cards */}
            <div className="space-y-4">
              {/* What You'll Learn Card */}
              <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white border-opacity-50 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-700">What you'll master inside</h4>
                  </div>
                  <div className="text-purple-500 group-hover:rotate-180 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Why This Works Card */}
              <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white border-opacity-50 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-700">Why viral content works</h4>
                  </div>
                  <div className="text-purple-500 group-hover:rotate-180 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* How to Get Started Card */}
              <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white border-opacity-50 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-700">How do I know this will work for me?</h4>
                  </div>
                  <div className="text-purple-500 group-hover:rotate-180 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <div className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl p-12 text-center shadow-xl border border-white border-opacity-50">
              <div className="mb-12">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">See it in practice...</h3>
                <h4 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Our founder's socials</h4>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Instagram */}
                <div className="text-center group cursor-pointer">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <Instagram className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">200K+</div>
                  <div className="text-gray-600 font-medium">Instagram Followers</div>
                  <div className="mt-3 text-sm text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-justify">
                    Daily engaging content that converts followers into customers
                  </div>
                </div>

                {/* TikTok */}
                <div className="text-center group cursor-pointer">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <Music className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">1.2M+</div>
                  <div className="text-gray-600 font-medium">TikTok Followers</div>
                  <div className="mt-3 text-sm text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-justify">
                    Viral strategies generating millions of views
                  </div>
                </div>

                {/* YouTube */}
                <div className="text-center group cursor-pointer">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <Youtube className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">800K+</div>
                  <div className="text-gray-600 font-medium">YouTube Subscribers</div>
                  <div className="mt-3 text-sm text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-justify">
                    Educational content generating substantial revenue
                  </div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="mt-12 pt-8 border-t border-purple-100">
                <p className="text-gray-600 text-lg font-medium">
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