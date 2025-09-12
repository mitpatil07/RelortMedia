import React, { useState, useEffect } from 'react';
import { Play, Eye, Star, TrendingUp, Users, Award } from 'lucide-react';


import img1 from '../Sliderimgs/1mQzxqU39L2myWBpVjaXqeZy3TE.avif';
import img2 from '../Sliderimgs/7Ha24BXvRcKraCXO63AfzEkdg.avif';
import img3 from  '../Sliderimgs/DdNQElk4GpqbCvgcKCI9etdHwl0.avif';
import img4 from '../Sliderimgs/KLl9iM05d57BVthgLjQ934nOs.avif';
import img5 from '../Sliderimgs/MRDX9odme9Zzi8OfHbdlQsI2Bk.avif';
import img6 from '../Sliderimgs/TZ75qlDIRvwDRYLpjqwgjouRaQ.avif';
import img7 from '../Sliderimgs/W58wb3NCVUg7vPraGddstE6FpY.avif';
import img8 from '../Sliderimgs/cUTF8gLcy5qAt0UDSe1ZHBfnGVI.avif';
import img9 from '../Sliderimgs/iGJuUsoeVuXELa8N4cpVuefbE34.avif';
import img10 from '../Sliderimgs/mo7RffQndIafNQUUiDI8EboynZw.png'; 
import img11 from '../Sliderimgs/nuK27Hl6dmkcImnuq337gZeAb0.avif';
import img12 from '../Sliderimgs/nxsM5qrsiUjDo8c1FlCEzqkwLUA.avif';
import img13 from '../Sliderimgs/rjxLYuSQjAt3sZ7vJxX3PmkKU.avif';


const ModernSuccessShowcase = () => {
  const [currentSet,] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

    const images = [
      {
        id: 1,
        image: img1,
      },
      {
        id: 2,
        image: img2, 
      },
      {
        id: 3,
        image: img3,
      },
      {
        id: 4,
        image: img4,
      },
      {
        id: 5,
        image:img5,
      },
      {
        id: 6,
        image: img6,
      },
      {
        id: 7,
        image: img13,
      },
      {
        id: 8,
        image: img7,
      },
      {
        id: 9,
        image: img8,
      },
      {
        id: 10,
        image: img9,
      },      {
        id: 11,
        image: img10,
      },      {
        id: 12,
        image: img11,
      },      {
        id: 13,
        image: img12,
      }
    ];
  
    const stats = [
      { label: "Niches", value: "250+", icon: TrendingUp },
      { label: "Monthly Views", value: "15.5M", icon: Eye },
      { label: "Leads Generated", value: "1M+", icon: Users },
      { label: "Happy Clients", value: "3K+", icon: Award }
    ];
  
    useEffect(() => {
      setIsLoaded(true);
    }, []);
  
    // Duplicate images for seamless loop
    const duplicatedImages = [...images, ...images, ...images];
  
    return (
      <div className="min-h-screen text-white relative overflow-hidden pt-16 sm:pt-20 md:pt-16 lg:pt-14">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-purple-500/30 rounded-full blur-3xl animate-float-1"></div>
          <div className="absolute -bottom-32 -left-32 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-indigo-500/30 rounded-full blur-3xl animate-float-2"></div>
          <div className="absolute top-1/4 left-1/3 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-pink-500/20 rounded-full blur-2xl animate-float-3"></div>
          <div className="absolute bottom-1/3 right-1/4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-blue-500/25 rounded-full blur-2xl animate-float-4"></div>
          <div className="absolute top-1/2 left-1/6 w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24 bg-yellow-400/15 rounded-full blur-xl animate-pulse-1"></div>
          <div className="absolute bottom-1/4 left-2/3 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-green-400/20 rounded-full blur-xl animate-pulse-2"></div>
          <div className="absolute top-3/4 right-1/3 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-orange-400/25 rounded-full blur-lg animate-pulse-3"></div>
          <div className="absolute top-1/5 right-1/5 w-1 h-1 sm:w-2 sm:h-2 bg-white/40 rounded-full animate-drift-1"></div>
          <div className="absolute bottom-1/5 left-1/5 w-1 h-1 sm:w-2 sm:h-2 bg-white/30 rounded-full animate-drift-2"></div>
          <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-purple-300/50 rounded-full animate-drift-3"></div>
        </div>
  
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
          
          {/* Header */}
          <div className={`text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-3 sm:mb-4 md:mb-6">
              <div className="flex items-center gap-1.5 mt-5 sm:gap-2 bg-purple-500/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-400/30 animate-glow">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current animate-twinkle" />
                <span className="text-purple-200 text-xs sm:text-sm font-medium">Success Stories</span>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-3 sm:mb-4 text-white leading-tight px-2 sm:px-4">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-gradient-flow">
                Client Transformations
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-200/80 max-w-3xl mx-auto px-4 text-center">
              Discover how our innovative approach transforms businesses across industries with measurable results that speak for themselves.
            </p>
          </div>
  
          {/* Continuous Scrolling Carousel */}
          <div className={`mb-8 sm:mb-10 md:mb-12 lg:mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-continuous gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                {duplicatedImages.map((image, index) => (
                  <div 
                    key={`${image.id}-${index}`}
                    className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 2xl:w-72 relative group cursor-pointer transform transition-all duration-500 hover:scale-105"
                  >
                    <div className="aspect-[9/16] bg-black rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden relative shadow-lg sm:shadow-xl md:shadow-2xl hover:shadow-purple-500/30">
                      {/* Image */}
                      <img 
                        src={image.image}
                        alt="Success story"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* Main Tagline */}
          <div className={`text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-3 sm:mb-4 text-white leading-tight">
              We create content that{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-flow">
                converts
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-200/80 max-w-2xl mx-auto">
              You show up, we do the rest. Our team handles everything from strategy to execution, delivering content that drives real business results.
            </p>
          </div>
  
          {/* Responsive Stats Grid */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2 sm:px-4 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={stat.label}
                  className="group bg-white/5 backdrop-blur-lg rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 border border-white/10 hover:border-purple-400/30 animate-fade-in-scale"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-1.5 sm:mb-2 md:mb-3">
                    <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors duration-300">
                      <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-purple-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-0.5 sm:mb-1 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  
                  <p className="text-purple-200 text-xs sm:text-sm md:text-base font-medium leading-tight">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
  
          {/* Reviews */}
          <div className={`text-center px-4 transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-2 sm:mb-3">
              Over{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                500+
              </span>
              {' '}5-Star Reviews
            </h3>
            <div className="flex justify-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current animate-twinkle" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
            <p className="text-xs sm:text-sm md:text-base text-purple-200/70 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have transformed their business with our proven content strategies and exceptional service delivery.
            </p>
          </div>
        </div>
  
        <style jsx>{`
          @keyframes scroll-continuous {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-33.333%);
            }
          }
          
          @keyframes float-1 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
            33% { transform: translate(15px, -15px) rotate(120deg); }
            66% { transform: translate(-10px, 10px) rotate(240deg); }
          }
          
          @keyframes float-2 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
            33% { transform: translate(-20px, -10px) rotate(-120deg); }
            66% { transform: translate(15px, 20px) rotate(-240deg); }
          }
          
          @keyframes float-3 {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(-8px, -12px) scale(1.1); }
          }
          
          @keyframes float-4 {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(10px, -8px) scale(0.9); }
          }
          
          @keyframes pulse-1 {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.2); }
          }
          
          @keyframes pulse-2 {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.3); }
          }
          
          @keyframes pulse-3 {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.1); }
          }
          
          @keyframes drift-1 {
            0% { transform: translate(0px, 0px); }
            25% { transform: translate(25px, -15px); }
            50% { transform: translate(-15px, -30px); }
            75% { transform: translate(-40px, -10px); }
            100% { transform: translate(0px, 0px); }
          }
          
          @keyframes drift-2 {
            0% { transform: translate(0px, 0px); }
            33% { transform: translate(-20px, 25px); }
            66% { transform: translate(30px, 15px); }
            100% { transform: translate(0px, 0px); }
          }
          
          @keyframes drift-3 {
            0% { transform: translate(0px, 0px); }
            50% { transform: translate(15px, -20px); }
            100% { transform: translate(0px, 0px); }
          }
          
          @keyframes gradient-flow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.2); }
            50% { box-shadow: 0 0 30px rgba(168, 85, 247, 0.4); }
          }
          
          @keyframes fade-in-scale {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes bounce-gentle {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          
          @keyframes twinkle {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.2); }
          }
          
          .animate-scroll-continuous { 
            animation: scroll-continuous 25s linear infinite; 
          }
          
          .animate-scroll-continuous:hover {
            animation-play-state: paused;
          }
          
          .animate-float-1 { animation: float-1 8s ease-in-out infinite; }
          .animate-float-2 { animation: float-2 10s ease-in-out infinite; }
          .animate-float-3 { animation: float-3 6s ease-in-out infinite; }
          .animate-float-4 { animation: float-4 7s ease-in-out infinite; }
          .animate-pulse-1 { animation: pulse-1 3s ease-in-out infinite; }
          .animate-pulse-2 { animation: pulse-2 4s ease-in-out infinite; }
          .animate-pulse-3 { animation: pulse-3 2.5s ease-in-out infinite; }
          .animate-drift-1 { animation: drift-1 15s linear infinite; }
          .animate-drift-2 { animation: drift-2 12s linear infinite; }
          .animate-drift-3 { animation: drift-3 18s linear infinite; }
          .animate-gradient-flow { 
            background-size: 400% 400%;
            animation: gradient-flow 3s ease infinite; 
          }
          .animate-glow { animation: glow 2s ease-in-out infinite; }
          .animate-fade-in-scale { animation: fade-in-scale 0.6s ease-out forwards; }
          .animate-bounce-gentle { animation: bounce-gentle 3s ease-in-out infinite; }
          .animate-twinkle { animation: twinkle 1.5s ease-in-out infinite; }
  
          /* Mobile specific optimizations */
          @media (max-width: 640px) {
            .animate-scroll-continuous { 
              animation: scroll-continuous 35s linear infinite; 
            }
            
            @keyframes float-1 {
              0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
              33% { transform: translate(10px, -10px) rotate(60deg); }
              66% { transform: translate(-8px, 8px) rotate(120deg); }
            }
            
            @keyframes bounce-gentle {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-2px); }
            }
          }
  
          /* Ultra-wide screen optimizations */
          @media (min-width: 1536px) {
            .animate-scroll-continuous { 
              animation: scroll-continuous 20s linear infinite; 
            }
          }
        `}</style>
    </div>
  );
};

export default ModernSuccessShowcase;