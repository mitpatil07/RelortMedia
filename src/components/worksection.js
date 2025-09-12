import React, { useState, useEffect } from 'react';
import { Play, Star, Users, TrendingUp, DollarSign, Eye } from 'lucide-react';


const PurpleCaseStudies = () => {
  const [activeTab, setActiveTab] = useState('Case Studies');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = ['Case Studies', 'Success Posts', 'Before & After', 'Video Reviews'];

  const caseStudies = [
    {
      id: 1,
      title: "300+ Weekly Leads from Organic Content",
      description: "David's tiny home business went from from 90 to 300+ weekly leads with content that eliminated ad spend and built a $80K+ follower base in under a year",
      image: "/api/placeholder/300/200",
      metrics: { leads: "300+", timeframe: "Weekly", savings: "$80K+" }
    },
    {
      id: 2,
      title: "Tripled Ad Effectiveness In Two Months",
      description: "Dan's insurance agency went from struggling with poor leads and considering shutdown to needing more staff to support new revenue growth in just 3 months",
      image: "/api/placeholder/300/200",
      metrics: { growth: "3x", timeframe: "2 Months", revenue: "Tripled" }
    },
    {
      id: 3,
      title: "How We Replaced $60K/Mo in Adspend",
      description: "Jered went from 4,000 to 105,000 followers in under a year, generating 100+ million views and eliminating his entire paid ads budget and sales team",
      image: "/api/placeholder/300/200",
      metrics: { followers: "105K", views: "100M+", savings: "$60K/mo" }
    },
    {
      id: 4,
      title: "6M views + 4800% more leads",
      description: "Massive viral success leading to unprecedented lead generation and business growth through strategic content marketing",
      image: "/api/placeholder/300/200",
      metrics: { views: "6M", leads: "4800%", growth: "Viral" }
    }
  ];

  const successPosts = [
    {
      id: 1,
      author: "Amanda",
      time: "10:46 AM",
      content: "And...1Mil views! Wooo!!!! Okay back to my trainings. Thanks for letting me test the scripts. I guess they really work 🤷‍♀️",
      reactions: { likes: 2, fire: 1, heart: 1, smile: 1, thumbs: 1 },
      comments: 1
    },
    {
      id: 2,
      author: "Daniel",
      time: "10:42 AM",
      content: "I can't begin to explain how freaking awesome this has been for us! We've been spinning our wheels for the last 18 months trying to get this figured out. And you guys are the first one that's been bringing this to life!",
      reactions: { likes: 2, fire: 4, heart: 4, smile: 3 }
    },
    {
      id: 3,
      author: "Ashley",
      time: "12:19 PM",
      content: "Wanted to share a win - I know we're at the very beginning stages and still need to learn what the audience responds to, but I've already been averaging a few sales a day with $0 spend on them - pretty neat 😊",
      reactions: { likes: 6, fire: 9, heart: 6, smile: 2, thumbs: 2 }
    },
    {
      id: 4,
      author: "Jered",
      time: "8:09 AM",
      content: "Organic performance: 116 booked setter calls, 20 Set Sales Calls, 10 Sales",
      reactions: { likes: 1, fire: 1, heart: 1 }
    }
  ];

  const beforeAfterVideos = [
    {
      id: 1,
      title: "HERE IS HOW I FIXED THIS BUSINESS MODEL IN 1 MINUTE",
      views: "2,341",
      thumbnail: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Apple Product Transformation",
      views: "1.4M",
      thumbnail: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Business Trading Success",
      views: "1651",
      thumbnail: "/api/placeholder/300/200",
      isPinned: true
    },
    {
      id: 4,
      title: "Financial Freedom Story",
      views: "4.3M",
      thumbnail: "/api/placeholder/300/200"
    }
  ];

  const videoReviews = [
    {
      id: 1,
      title: "Turned Off $60k in Adspend",
      description: "Proven content marketing systems and audience targeting helped Jered become the most followed plumber in his niche and eliminated $60k/mo in ad costs",
      thumbnail: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Not having to always look for new customers",
      description: "Professional content creation built Amanda's community to 4,600 members with massive press coverage",
      thumbnail: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "I've already blown past my goals!",
      description: "Top-of-funnel strategies helped Jay's lead generation coaching business scale from under 10k followers to over 65k followers",
      thumbnail: "/api/placeholder/400/250"
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Case Studies':
        return (
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  <div className="relative group cursor-pointer">
                    <div className="w-full lg:w-64 h-40 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">
                        Case Study #{study.id}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-purple-100/80 text-lg leading-relaxed mb-4">
                      {study.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key} className="bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-400/30">
                          <span className="text-purple-200 text-sm capitalize">{key}: </span>
                          <span className="text-white font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'Success Posts':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {successPosts.map((post, index) => (
              <div
                key={post.id}
                className={`bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-[1.02] ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{post.author}</h4>
                    <p className="text-purple-300 text-sm">{post.time}</p>
                  </div>
                </div>
                
                <p className="text-purple-100 mb-4 leading-relaxed">{post.content}</p>
                
                <div className="flex items-center gap-2">
                  {Object.entries(post.reactions).map(([reaction, count]) => (
                    <div key={reaction} className="bg-purple-500/20 px-3 py-1 rounded-full text-sm">
                      <span className="text-purple-200">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'Before & After':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beforeAfterVideos.map((video, index) => (
              <div
                key={video.id}
                className={`relative group cursor-pointer ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="relative h-48 bg-gradient-to-br from-purple-600 to-purple-800">
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <Eye className="w-4 h-4 text-white" />
                      <span className="text-white font-semibold">{video.views}</span>
                    </div>
                  
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-white font-semibold text-sm leading-tight">{video.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'Video Reviews':
        return (
          <div className="space-y-8">
            {videoReviews.map((review, index) => (
              <div
                key={review.id}
                className={`bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="relative group cursor-pointer lg:w-96">
                    <div className="h-64 lg:h-full bg-gradient-to-br from-purple-600 to-purple-800 relative">
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">"{review.title}"</h3>
                    <p className="text-purple-100/80 text-lg leading-relaxed">
                      {review.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Trust indicator */}
      <div className="relative z-10 text-center pt-8 mb-8">
        <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-green-400 fill-current" />
            ))}
          </div>
          <span className="text-green-300 text-sm font-medium">Based on 20 Clutch reviews</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="relative z-10 flex justify-center mb-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 border border-white/20">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 scale-105'
                    : 'text-purple-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12">
        <div className="min-h-[600px]">
          {renderContent()}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PurpleCaseStudies;