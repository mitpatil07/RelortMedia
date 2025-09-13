import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div 
      className="relative bg-gray-900/95 rounded-xl p-4 sm:p-6 lg:p-8 border border-purple-500/40 hover:border-purple-400 transition-all duration-300 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto overflow-hidden group hover:shadow-2xl"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)
        `,
        backgroundSize: '200px 200px, 300px 300px',
        boxShadow: '0 0 30px rgba(147, 51, 234, 0.3), 0 10px 20px rgba(0, 0, 0, 0.2)',
        fontFamily: '"Inter", "Segoe UI", "Roboto", -apple-system, BlinkMacSystemFont, sans-serif'
      }}
    >
      {/* Enhanced purple glow with hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-purple-600/5 rounded-xl group-hover:from-purple-500/15 group-hover:to-purple-600/8 transition-all duration-300"></div>
      
      {/* Purple accent line at top - responsive width */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 lg:w-20 h-0.5 bg-gradient-to-r from-purple-400 to-purple-500 rounded-b-full"></div>

      {/* Quote - Enhanced typography and spacing */}
      <div className="mb-4 sm:mb-6 lg:mb-8 relative z-10">
        <h3 className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-center leading-tight sm:leading-snug lg:leading-relaxed tracking-wide px-2 sm:px-0">
          <span className="inline-block">"{testimonial.quote}"</span>
        </h3>
      </div>

      {/* Video Interface - Enhanced responsiveness */}
      <div className="bg-gray-800/95 rounded-lg sm:rounded-xl overflow-hidden relative z-10 shadow-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
        <div className="aspect-video relative">
          <iframe
            src={`${testimonial.vimeoUrl}?autoplay=0&title=0&byline=0&portrait=0&color=9333ea`}
            className="w-full h-full rounded-lg sm:rounded-xl"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={`${testimonial.clientName} Testimonial`}
            loading="lazy"
          ></iframe>
          
          {/* Loading overlay for better UX */}
          <div className="absolute inset-0 bg-gray-800 rounded-lg sm:rounded-xl flex items-center justify-center opacity-0 transition-opacity duration-300 pointer-events-none">
            <div className="animate-spin w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Client info - Enhanced typography and spacing */}
      <div className="mt-4 sm:mt-6 lg:mt-8 text-center relative z-10 space-y-1 sm:space-y-2">
        <div className="text-white font-bold text-base sm:text-lg lg:text-xl tracking-wide">
          {testimonial.clientName}
        </div>
        <div className="text-purple-300 text-sm sm:text-base lg:text-lg font-medium tracking-wide opacity-90">
          {testimonial.business}
        </div>
      </div>
    </div>
  );
};

const TestimonialsGrid = () => {
  const testimonials = [
    {
      id: 1,
      quote: "I TURNED OFF $60K/MO IN ADS AND AM WAY MORE PROFITABLE",
      clientName: "Jered Williams",
      business: "Plumbing Coach",
      vimeoUrl: "https://player.vimeo.com/video/1090680159",
      vimeoId: "1090680159"
    },
    {
      id: 2,
      quote: "AMAZING RESULTS WITH VERY LITTLE INPUT FROM ME",
      clientName: "Sarah Mitchell", 
      business: "Business Coach",
      vimeoUrl: "https://player.vimeo.com/video/1000555789",
      vimeoId: "1000555789"
    },
    {
      id: 3,
      quote: "THIS SYSTEM COMPLETELY TRANSFORMED MY BUSINESS",
      clientName: "Mike Thompson",
      business: "Construction Company Owner",
      vimeoUrl: "https://player.vimeo.com/video/1090680159",
      vimeoId: "1090680159"
    },
    {
      id: 4,
      quote: "I TURNED OFF $60K/MO IN ADS AND AM WAY MORE PROFITABLE",
      clientName: "Jered Williams",
      business: "Plumbing Coach",
      vimeoUrl: "https://player.vimeo.com/video/1090680159",
      vimeoId: "1090680159"
    },
    {
      id: 5,
      quote: "AMAZING RESULTS WITH VERY LITTLE INPUT FROM ME",
      clientName: "Sarah Mitchell", 
      business: "Business Coach",
      vimeoUrl: "https://player.vimeo.com/video/1000555789",
      vimeoId: "1000555789"
    },
    {
      id: 6,
      quote: "THIS SYSTEM COMPLETELY TRANSFORMED MY BUSINESS",
      clientName: "Mike Thompson",
      business: "Construction Company Owner",
      vimeoUrl: "https://player.vimeo.com/video/1090680159",
      vimeoId: "1090680159"
    },
    {
      id: 7,
      quote: "I TURNED OFF $60K/MO IN ADS AND AM WAY MORE PROFITABLE",
      clientName: "Jered Williams",
      business: "Plumbing Coach",
      vimeoUrl: "https://player.vimeo.com/video/1090680159",
      vimeoId: "1090680159"
    },
    {
      id: 8,
      quote: "AMAZING RESULTS WITH VERY LITTLE INPUT FROM ME",
      clientName: "Sarah Mitchell", 
      business: "Business Coach",
      vimeoUrl: "https://player.vimeo.com/video/1000555789",
      vimeoId: "1000555789"
    },
    {
      id: 9,
      quote: "THIS SYSTEM COMPLETELY TRANSFORMED MY BUSINESS",
      clientName: "Mike Thompson",
      business: "Construction Company Owner",
      vimeoUrl: "https://player.vimeo.com/video/1090680159",
      vimeoId: "1090680159"
    }
  ];

  return (
    <div 
      className="min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
      style={{
        fontFamily: '"Inter", "Segoe UI", "Roboto", -apple-system, BlinkMacSystemFont, sans-serif'
      }}
    >
      {/* Content - Enhanced spacing and responsive layout */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="animate-fade-in"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'both'
              }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Enhanced focus states for accessibility */
        iframe:focus {
          outline: 2px solid rgb(147, 51, 234);
          outline-offset: 2px;
        }
        
        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(17, 24, 39, 0.8);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(147, 51, 234, 0.6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(147, 51, 234, 0.8);
        }
      `}</style>
    </div>
  );
};

export default TestimonialsGrid;