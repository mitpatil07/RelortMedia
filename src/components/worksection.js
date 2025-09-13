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
      description: "David's tiny home business went from 90 to 300+ weekly leads with content that eliminated ad spend and built an $80K+ follower base in under a year",
      videoUrl: "https://player.vimeo.com/video/1099048366",
      metrics: { leads: "300+", timeframe: "Weekly", savings: "$80K+" }
    },
    {
      id: 2,
      title: "Tripled Ad Effectiveness In Two Months",
      description: "Dan's insurance agency went from struggling with poor leads and considering shutdown to needing more staff to support new revenue growth in just 3 months",
      videoUrl: "https://player.vimeo.com/video/1099046144",
      metrics: { growth: "3x", timeframe: "2 Months", revenue: "Tripled" }
    },
    {
      id: 3,
      title: "How We Replaced $60K/Mo in Adspend",
      description: "Dr. Livingood went from 378K to 1.4M average views per video while building an automated system that converts followers into leads without any extra work",
      videoUrl: "https://player.vimeo.com/video/1099823690",
      metrics: { followers: "105K", views: "100M+", savings: "$60K/mo" }
    },    {
      id: 4,
      title: "10K Goal Achieved in Two Months",
      description: "Jay reached his year-long goal of 10k followers in 2 months, then scaled to 64K followers with content that drives actual business leads",
      videoUrl: "https://player.vimeo.com/video/1099051181",
      metrics: { leads: "300+", timeframe: "Weekly", savings: "$80K+" }
    },
    {
      id: 5,
      title: "Transformed Stagnant $10K Business",
      description: "Corson transformed his inconsistent $10K monthly revenue into a lead-generating machine through strategic top-of-funnel content and automated sales system",
      videoUrl: "https://player.vimeo.com/video/1099049328",
      metrics: { growth: "3x", timeframe: "2 Months", revenue: "Tripled" }
    },
    {
      id: 6,
      title: "500K Views in One Week",
      description: "From 38,000 views on her first strategic video to 500,000 views within the week, this business owner proved our content strategies work for any industry",
      videoUrl: "https://player.vimeo.com/video/1099049113",
      metrics: { followers: "105K", views: "100M+", savings: "$60K/mo" }
    },    {
      id: 7,
      title: "From No Views to 7M+ On Her First Video",
      description: "Amanda's first strategic video generated 7 million total views across platforms, free press coverage, and grew her $35/month Skool community to 4,600 members",
      videoUrl: "https://player.vimeo.com/video/1099048917",
      metrics: { leads: "300+", timeframe: "Weekly", savings: "$80K+" }
    },
    {
      id: 8,
      title: "Six Months of Struggling to Instant Success",
      description: "Dr. Richard went from 869 struggling posts with minimal traction to 4.6 million views in week two, transforming his content from 1,000 to 114,000 average views per video",
      videoUrl: "https://player.vimeo.com/video/1099048644",
      metrics: { growth: "3x", timeframe: "2 Months", revenue: "Tripled" }
    },
    {
      id: 9,
      title: "How We Replaced $60K/Mo in Adspend",
      description: "Jered went from 4,000 to 105,000 followers in under a year, generating 100+ million views and eliminating his entire paid ads budget and sales team",
      videoUrl: "https://player.vimeo.com/video/1099047554",
      metrics: { followers: "105K", views: "100M+", savings: "$60K/mo" }
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

  const successPostImages = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&h=300&fit=crop"
  ];

  const beforeAfterImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop"
  ];
  
  const videoReviews = [
    {
      id: 1,
      title: "Turned Off $60k in Adspend",
      description: "Proven content marketing systems helped Jered become the most followed plumber in his niche",
      videoUrl: "https://player.vimeo.com/video/942509042"
    },
    {
      id: 2,
      title: "Not having to always look for new customers",
      description: "Professional content creation built Amanda's community to 4,600 members with massive press coverage",
      videoUrl: "https://player.vimeo.com/video/942509042"
    },
    {
      id: 3,
      title: "Building a Million Dollar Brand",
      description: "How strategic content marketing transformed a small business into an industry leader with consistent organic growth",
      videoUrl: "https://player.vimeo.com/video/942509042"
    }
  ];
  

  const renderContent = () => {
    switch (activeTab) {
      case 'Case Studies':
        return (
          <div className="grid grid-cols-1 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-lg rounded-xl p-4 border border-white/30 hover:border-black/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-400/20 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'
                }`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex flex-col lg:flex-row gap-4 items-start">
                  {/* Smaller video */}
                  <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
                    <div className="relative w-full h-40 sm:h-48 lg:h-52">
                      <iframe
                        src={study.videoUrl}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full rounded-lg"
                      ></iframe>
                    </div>
                  </div>
      
                  {/* Text beside video */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-purple-100/80 text-sm sm:text-base leading-relaxed mb-3">
                      {study.description}
                    </p>
      
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div
                          key={key}
                          className="bg-purple-500/20 backdrop-blur-sm px-2 py-1 rounded-full border border-black/30"
                        >
                          <span className="text-purple-200 text-xs capitalize">{key}: </span>
                          <span className="text-white font-semibold text-xs">{value}</span>
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
            <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {successPostImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative group cursor-pointer ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-lg rounded-xl overflow-hidden border-2 border-white/50 hover:border-black/70 transition-all duration-500 hover:scale-[1.05] hover:shadow-xl hover:shadow-purple-500/20 aspect-video">
                    <img 
                      src={image} 
                      alt={`Success Post ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          );

      case 'Before & After':
        return (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {beforeAfterImages.map((image, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-lg rounded-xl overflow-hidden border-2 border-white/50 hover:border-black/70 transition-all duration-500 hover:scale-[1.05] hover:shadow-xl hover:shadow-purple-500/20 aspect-video">
                  <img 
                    src={image} 
                    alt={`Before & After ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'Video Reviews':
        return (
          <div className="space-y-6 lg:space-y-8 max-w-6xl mx-auto">
            {videoReviews.map((review, index) => (
              <div
                key={review.id}
                className={`bg-gradient-to-br from-purple-900/40 via-black/30 to-purple-800/40 backdrop-blur-lg rounded-2xl overflow-hidden border-2 border-white/50 hover:border-black/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/40 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="relative group cursor-pointer lg:w-80 xl:w-96 flex-shrink-0">
                    <div className="h-48 sm:h-56 lg:h-64 relative">
                      <iframe
                        src={review.videoUrl}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6 lg:p-8 flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 leading-tight">"{review.title}"</h3>
                    <p className="text-purple-100/80 text-sm sm:text-base lg:text-lg leading-relaxed">
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
    <div className="min-h-screen relative overflow-hidden font-['Inter',_'system-ui',_'-apple-system',_'BlinkMacSystemFont',_'Segoe_UI',_'Roboto',_'sans-serif']">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Trust indicator */}
      <div className="relative z-10 text-center pt-4 sm:pt-6 lg:pt-8 mb-4 sm:mb-6 lg:mb-8 px-4">
        <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border-2 border-black/40">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 text-green-400 fill-current" />
            ))}
          </div>
          <span className="text-green-300 text-xs sm:text-sm font-medium">Based on 20 Clutch reviews</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="relative z-10 mb-6 sm:mb-8 lg:mb-12 px-2 sm:px-4">
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-purple-900/40 via-purple-800/30 to-purple-900/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-1 sm:p-1.5 lg:p-2 border-2 border-white/50 shadow-2xl shadow-purple-500/20 w-full max-w-4xl overflow-x-auto">
            <div className="flex gap-1 sm:gap-2 justify-center sm:justify-center items-center min-w-max sm:min-w-0">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-2 sm:px-4 lg:px-8 py-2 sm:py-2.5 lg:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-500 text-xs sm:text-sm lg:text-base whitespace-nowrap group overflow-hidden flex-shrink-0 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 text-white shadow-xl shadow-purple-600/50 scale-105 transform'
                      : 'text-purple-200 hover:text-white hover:bg-gradient-to-r hover:from-purple-700/50 hover:to-purple-600/50 hover:scale-102'
                  }`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transform: activeTab === tab ? 'translateY(-2px)' : 'translateY(0)'
                  }}
                >
                  {/* Active tab glow effect */}
                  {activeTab === tab && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-purple-300/30 to-purple-400/20 rounded-xl sm:rounded-2xl blur-sm"></div>
                  )}
                  
                  {/* Tab content */}
                  <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                    {/* Show icons on mobile and desktop */}
                    <span className="block">
                      {tab === 'Case Studies' && <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4" />}
                      {tab === 'Success Posts' && <Users className="w-3 sm:w-4 h-3 sm:h-4" />}
                      {tab === 'Before & After' && <Eye className="w-3 sm:w-4 h-3 sm:h-4" />}
                      {tab === 'Video Reviews' && <Play className="w-3 sm:w-4 h-3 sm:h-4" />}
                    </span>
                    
                    {/* Shorter text for mobile, full text for desktop */}
                    <span className="sm:hidden">
                      {tab === 'Case Studies' && 'Stories'}
                      {tab === 'Success Posts' && 'Highlights'}
                      {tab === 'Before & After' && 'Progress'}
                      {tab === 'Video Reviews' && 'Videos'}
                    </span>
                    
                    {/* Full text for desktop */}
                    <span className="hidden sm:inline">{tab}</span>
                  </span>
                  
                  {/* Hover ripple effect */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-6 sm:pb-8 lg:pb-12">
        <div className="min-h-[300px] sm:min-h-[400px] lg:min-h-[600px]">
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default PurpleCaseStudies;