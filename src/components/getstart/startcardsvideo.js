import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div 
      className="relative bg-gray-900/95 rounded-xl p-6 border border-purple-500/40 hover:border-purple-400 transition-all duration-300 w-full max-w-md mx-auto overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)
        `,
        backgroundSize: '200px 200px, 300px 300px',
        boxShadow: '0 0 30px rgba(147, 51, 234, 0.3), 0 10px 20px rgba(0, 0, 0, 0.2)'
      }}
    >
      {/* Purple glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-purple-600/5 rounded-xl"></div>
      
      {/* Purple accent line at top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-purple-400 to-purple-500 rounded-b-full"></div>

      {/* Quote */}
      <div className="mb-6 relative z-10">
        <h3 className="text-white text-xl font-bold text-center leading-tight">
          "{testimonial.quote}"
        </h3>
      </div>

      {/* Video Interface */}
      <div className="bg-gray-800/95 rounded-xl overflow-hidden relative z-10 shadow-xl border border-purple-500/30">
        <div className="aspect-video">
          <iframe
            src={`${testimonial.vimeoUrl}?autoplay=0&title=0&byline=0&portrait=0&color=9333ea`}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={`${testimonial.clientName} Testimonial`}
          ></iframe>
        </div>
      </div>

      {/* Client info */}
      <div className="mt-6 text-center relative z-10">
        <div className="text-white font-bold text-lg">{testimonial.clientName}</div>
        <div className="text-purple-300 text-base font-medium">{testimonial.business}</div>
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
    }
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      {/* Content - One card per row with normal spacing */}
      <div className="relative z-10 w-full max-w-4xl mx-auto space-y-12">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsGrid;