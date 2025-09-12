import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, Shield, Rocket, Users, Star, ArrowRight } from 'lucide-react';

const FAQComponent = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      question: "What do you do?",
      answer: "We provide comprehensive digital solutions including web development, mobile apps, and digital marketing strategies. Our team specializes in creating custom solutions tailored to your business needs.",
      icon: Rocket
    },
    {
      question: "Why social media?",
      answer: "Social media is where your customers spend their time. We help you build authentic connections, increase brand awareness, and drive meaningful engagement that converts to real business results.",
      icon: Users
    },
    {
      question: "How do I know this will work for me?",
      answer: "We start with a comprehensive analysis of your current situation and goals. Our proven methodologies have helped hundreds of businesses achieve measurable results. We also provide regular reporting and analytics.",
      icon: Star
    },
    {
      question: "How does the guarantee work?",
      answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with our service within the first month, we'll refund your investment. We stand behind our work with confidence.",
      icon: Shield
    },
    {
      question: "What makes this different from other options?",
      answer: "Our personalized approach, cutting-edge technology, and proven track record set us apart. We don't use one-size-fits-all solutions – everything is customized for your specific industry and goals.",
      icon: Sparkles
    },
    {
      question: "What do I need to do next?",
      answer: "Simply click the 'Get Started' button below to schedule your free consultation. We'll discuss your goals, answer any questions, and create a customized strategy proposal for your business.",
      icon: ArrowRight
    }
  ];

  return (
    <div className="min-h-screen    py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800 bg-clip-text text-transparent mb-4">
            FAQ's
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            You've got questions. We've got answers.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqData.map((item, index) => {
            const isOpen = openItems.has(index);
            const Icon = item.icon;
            
            return (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm border border-purple-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg' 
                        : 'bg-purple-100 text-purple-600 group-hover:bg-purple-200'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-purple-700 transition-colors duration-200">
                      {item.question}
                    </span>
                  </div>
                  <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6 text-purple-600" />
                  </div>
                </button>
                
                <div className={`px-8 pb-6 transition-all duration-300 ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pb-0'
                } overflow-hidden`}>
                  <div className="pl-14 pr-4">
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          {/* CTA Button */}
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-12 rounded-xl text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            GET STARTED
          </button>
          
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300/20 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default FAQComponent;