import React from 'react';

import img1 from '../startassets/179x4jr2SHQ4GYogwC1l1t5s.avif'
import img2 from '../startassets/2IsHbecn7ZLTkj0l8XmYiz4Yq6I.avif';
import img3 from '../startassets/4gyPZ8TrPcvj4790laQ6uHnKY.avif';
import img4 from '../startassets/7vdgkJ3wWuxfy7FunAYNG4qG87s.avif';
import img5 from '../startassets/9IAMgkspAp50yjO1C2J5iUCq0o.avif';
import img6 from '../startassets/DBbH6F4ZXI1ePZeR6MZxj18AUE4.avif';
import img7 from '../startassets/FMHVnJ48qacexECMcEWpEWljPw.avif';
import img8 from '../startassets/ML5qr0Iz7W0CMHQUZUSmPL12U.avif';
import img9 from '../startassets/TUiZLdY7QdPZS1qHuvH6P4OLI.avif';
import img10 from '../startassets/YfEPhYr3xiZcvNrqD6Rw1pYW5OM.avif';
import GetStartedButton from '../items/button';


const generatePlaceholder = (clientName, index) => {
  const colors = [
    '#8B5CF6', '#A855F7', '#C084FC', '#E879F9', '#F0ABFC',
    '#6366F1', '#8B5CF6', '#A78BFA', '#C4B5FD', '#DDD6FE'
  ];

  return `data:image/svg+xml;base64,${btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
      <defs>
        <linearGradient id="grad${index}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors[index % colors.length]};stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:${colors[(index + 1) % colors.length]};stop-opacity:0.6" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#grad${index})"/>
      <circle cx="200" cy="120" r="40" fill="rgba(255,255,255,0.3)"/>
      <text x="200" y="200" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">
        ${clientName}
      </text>
    </svg>
  `)}`;
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className="relative bg-gray-900/95 rounded-3xl p-4 sm:p-6 md:p-8 border border-purple-500/40 w-full max-w-xl mx-auto overflow-hidden"
      style={{
        fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
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
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-500 rounded-b-full"></div>

      {/* Quote */}
      <div className="mb-6 sm:mb-8 relative z-10">
        <h3
          className="text-white font-bold text-center leading-tight px-2 sm:px-4"
          style={{
            fontSize: 'clamp(1.25rem, 4vw, 1.875rem)',
            lineHeight: '1.3',
            letterSpacing: '-0.025em',
            textAlign: 'center',
            hyphens: 'auto',
            wordBreak: 'break-word'
          }}
        >
          "{testimonial.quote}"
        </h3>
      </div>

      {/* Full Image Display */}
      <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 bg-gray-900/90 rounded-2xl overflow-hidden shadow-2xl border border-purple-500/30 relative z-10">
        <img
          src={testimonial.image || generatePlaceholder(testimonial.clientName, testimonial.id)}
          alt={testimonial.clientName}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            // Fallback if image fails to load
            e.target.src = generatePlaceholder(testimonial.clientName, testimonial.id);
          }}
        />
      </div>

      {/* Client info */}
      <div className="mt-6 sm:mt-8 text-center relative z-10 px-2">
        <div
          className="text-white font-bold mb-1"
          style={{
            fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)',
            lineHeight: '1.2',
            letterSpacing: '-0.015em'
          }}
        >
          {testimonial.clientName}
        </div>
        <div
          className="text-purple-300 font-medium"
          style={{
            fontSize: 'clamp(1rem, 3vw, 1.125rem)',
            lineHeight: '1.3',
            letterSpacing: '0.01em'
          }}
        >
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
      image: img1,
    },
    {
      id: 2,
      quote: "AMAZING RESULTS WITH VERY LITTLE INPUT FROM ME",
      clientName: "Sarah Mitchell",
      business: "Business Coach",
      image: img2,
    },
    {
      id: 3,
      quote: "THIS SYSTEM COMPLETELY TRANSFORMED MY BUSINESS",
      clientName: "Mike Thompson",
      business: "Construction Company Owner",
      image: img3,
    },
    {
      id: 4,
      quote: "ROI INCREASED BY 300% IN JUST 3 MONTHS",
      clientName: "Lisa Chen",
      business: "E-commerce Store Owner",
      image: img4,
    },
    {
      id: 5,
      quote: "BEST INVESTMENT I'VE MADE FOR MY COMPANY",
      clientName: "David Rodriguez",
      business: "Digital Marketing Agency",
      image: img5,
    },
    {
      id: 6,
      quote: "STREAMLINED OUR ENTIRE SALES PROCESS",
      clientName: "Amanda Foster",
      business: "SaaS Startup Founder",
      image: img6,
    },
    {
      id: 7,
      quote: "DOUBLED OUR LEADS WITHOUT INCREASING BUDGET",
      clientName: "Robert Kim",
      business: "Real Estate Developer",
      image: img7,
    },
    {
      id: 8,
      quote: "FINALLY A SYSTEM THAT ACTUALLY WORKS",
      clientName: "Jennifer Brooks",
      business: "Fitness Coach",
      image: img8,
    },
    {
      id: 9,
      quote: "GAME-CHANGER FOR OUR CUSTOMER ACQUISITION",
      clientName: "Michael Santos",
      business: "Tech Consultant",
      image: img9,
    },
    {
      id: 10,
      quote: "EXCEEDED ALL OUR GROWTH EXPECTATIONS",
      clientName: "Emily Parker",
      business: "Online Course Creator",
      image: img10,
    },
  ];

  return (
    <div
      className="min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8"
      style={{
        fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)'
      }}
    >
      {/* Background Pattern */}
      <div
        className="fixed inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #8B5CF6 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #A855F7 0%, transparent 50%)
          `,
          backgroundSize: '800px 800px'
        }}
      ></div>

      {/* Content - One card per row with responsive spacing */}
      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
        <div className="flex justify-center">
          <GetStartedButton className='' />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsGrid;