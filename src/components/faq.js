import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, Shield, Rocket, Users, Star, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

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
    <div className="min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800 bg-clip-text text-transparent mb-4 leading-tight">
            FAQ's
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed px-4 sm:px-0">
            You've got questions. We've got answers.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          {faqData.map((item, index) => {
            const isOpen = openItems.has(index);
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm border border-purple-100 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors duration-200 min-h-[80px] sm:min-h-[88px]"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isOpen
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg'
                        : 'bg-purple-100 text-purple-600 group-hover:bg-purple-200'
                      }`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-purple-700 transition-colors duration-200 leading-tight text-left">
                      {item.question}
                    </span>
                  </div>
                  <div className={`transform transition-transform duration-300 flex-shrink-0 ml-3 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                </button>

                <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                  <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6">
                    <div className="pl-11 sm:pl-14 pr-4 sm:pr-8">
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg text-justify hyphens-auto">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center relative">
          {/* CTA Button */}
          <Link
            to="/get-started"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-xl text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 active:scale-95"
          >
            GET STARTED
          </Link>
        </div>

        {/* Decorative Elements - Enhanced for mobile */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-purple-200/20 rounded-full blur-xl pointer-events-none"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-purple-300/20 rounded-full blur-xl pointer-events-none"></div>
      </div>
    </div>
  );
};

export default FAQComponent;