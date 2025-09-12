import React from 'react';
import { Volume2, Settings, Maximize } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div 
      className="relative bg-gray-900/95 rounded-3xl p-8 border border-purple-500/40 hover:border-purple-400 transition-all duration-300 transform hover:scale-[1.01] w-full max-w-xl mx-auto overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
          repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(147, 51, 234, 0.03) 2px, rgba(147, 51, 234, 0.03) 4px),
          repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(168, 85, 247, 0.02) 2px, rgba(168, 85, 247, 0.02) 4px),
          linear-gradient(135deg, rgba(147, 51, 234, 0.02) 0%, transparent 50%, rgba(147, 51, 234, 0.02) 100%)
        `,
        backgroundSize: '400px 400px, 600px 600px, 15px 15px, 20px 20px, 100% 100%',
        boxShadow: '0 0 50px rgba(147, 51, 234, 0.4), 0 20px 40px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Purple glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-transparent to-purple-600/10 rounded-3xl"></div>
      
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-10 rounded-3xl"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0),
            radial-gradient(circle at 3px 3px, rgba(147, 51, 234, 0.1) 1px, transparent 0)
          `,
          backgroundSize: '10px 10px, 20px 20px'
        }}
      ></div>
      
      {/* Purple accent line at top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-500 rounded-b-full"></div>

      {/* Quote */}
      <div className="mb-8 relative z-10">
        <h3 className="text-white text-3xl font-bold text-center leading-tight">
          "{testimonial.quote}"
        </h3>
      </div>

      {/* Image Interface */}
      <div className="bg-gray-800/95 rounded-2xl overflow-hidden relative z-10 shadow-2xl border border-purple-500/30">


        {/* Single Image Display */}
        <div className="relative aspect-video bg-gray-900/90">
          <img 
            src={testimonial.image}
            alt={testimonial.clientName}
            className="w-full h-full object-cover"
          />
          

        </div>

      </div>

      {/* Client info */}
      <div className="mt-8 text-center relative z-10">
        <div className="text-white font-bold text-2xl">{testimonial.clientName}</div>
        <div className="text-purple-300 text-lg font-medium">{testimonial.business}</div>
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
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop&crop=face",

    },
    {
      id: 2,
      quote: "AMAZING RESULTS WITH VERY LITTLE INPUT FROM ME",
      clientName: "Sarah Mitchell", 
      business: "Business Coach",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=400&fit=crop&crop=face",
    },
    {
      id: 3,
      quote: "THIS SYSTEM COMPLETELY TRANSFORMED MY BUSINESS",
      clientName: "Mike Thompson",
      business: "Construction Company Owner",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop&crop=face",

    }
  ];

  return (
    <div className="min-h-screen py-16 px-8">
      {/* Content - One card per row with increased spacing */}
      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-16">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsGrid;