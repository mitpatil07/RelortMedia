import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, User, MessageCircle, Shield, Zap, Target, Heart, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [formErrors, setFormErrors] = useState({});
  const [focusedField, setFocusedField] = useState('');
  const cardRefs = useRef([]);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardIndex = parseInt(entry.target.dataset.cardIndex);
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => new Set([...prev, cardIndex]));
            }, cardIndex * 150);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.subject) {
      errors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(formErrors)[0];
      const element = document.getElementById(firstErrorField);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call with realistic delay
    setTimeout(() => {
      setIsSubmitted(true);
      
      // Add celebration animation
      if (formRef.current) {
        formRef.current.style.transform = 'scale(1.02)';
        setTimeout(() => {
          if (formRef.current) formRef.current.style.transform = 'scale(1)';
        }, 200);
      }

      setTimeout(() => {
        setIsSubmitted(false);
        setIsSubmitting(false);
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get responses within 2 hours during business hours',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Target,
      title: 'Expert Team',
      description: 'Seasoned professionals with 10+ years experience',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'End-to-end encryption protects your data',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: Heart,
      title: 'Human Connection',
      description: 'Real conversations, authentic relationships',
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  const InputField = ({ label, name, type = 'text', placeholder, children, icon: Icon, ...props }) => {
    const hasError = formErrors[name];
    const isFocused = focusedField === name;
    
    return (
      <div className="relative">
        <label htmlFor={name} className={`block text-sm font-semibold mb-2 transition-colors duration-200 flex items-center gap-2
          ${isFocused ? 'text-purple-600' : hasError ? 'text-red-500' : 'text-gray-700'}`}>
          {Icon && <Icon size={16} />}
          {label}
        </label>
        <div className="relative">
          {children || (
            <input
              type={type}
              id={name}
              name={name}
              value={formData[name]}
              onChange={handleInputChange}
              onFocus={() => setFocusedField(name)}
              onBlur={() => setFocusedField('')}
              placeholder={placeholder}
              className={`w-full px-5 py-4 border-2 rounded-xl text-base transition-all duration-300 outline-none
                ${hasError 
                  ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' 
                  : isFocused
                    ? 'border-purple-500 bg-white ring-4 ring-purple-500/10 shadow-lg shadow-purple-500/10'
                    : 'border-gray-200 bg-gray-50 focus:border-purple-500 focus:bg-white hover:border-gray-300'
                }
                placeholder-gray-400`}
              {...props}
            />
          )}
          
          {/* Floating success checkmark */}
          {formData[name] && !hasError && isFocused && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 animate-pulse">
              <CheckCircle size={20} />
            </div>
          )}
        </div>
        
        {/* Error message with slide-in animation */}
        {hasError && (
          <div className="mt-2 text-sm text-red-500 flex items-center animate-slide-down">
            <AlertCircle size={16} className="mr-1" />
            {hasError}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-10 px-5 mt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div ref={formRef} className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl shadow-purple-500/20 overflow-hidden border border-white/50 transition-transform duration-300 relative z-10">
        {/* Header with enhanced gradient and animations */}
        <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 px-10 py-20 text-center text-white overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-white rounded-full animate-twinkle`}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
          
          <div className="relative z-10 space-y-4">
            <div className="inline-block animate-bounce-slow">
              <MessageCircle size={64} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100">
              Let's Connect
            </h1>
            <p className="text-xl opacity-90 font-medium max-w-md mx-auto leading-relaxed">
              Your success story starts with a simple message. We're excited to hear from you!
            </p>
          </div>
        </div>

        {/* Form Container with enhanced styling */}
        <div className="px-10 py-12">
          <div className="space-y-8">
            <InputField
              label="Full Name"
              name="fullName"
              placeholder="Enter your full name"
              icon={User}
              required
            />

            <InputField
              label="Email Address"
              name="email"
              type="email"
              placeholder="your@email.com"
              icon={Mail}
              required
            />

            <InputField
              label="What can we help you with?"
              name="subject"
              icon={Target}
              required
            >
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('subject')}
                onBlur={() => setFocusedField('')}
                className={`w-full px-5 py-4 border-2 rounded-xl text-base transition-all duration-300 outline-none
                  ${formErrors.subject 
                    ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' 
                    : focusedField === 'subject'
                      ? 'border-purple-500 bg-white ring-4 ring-purple-500/10 shadow-lg shadow-purple-500/10'
                      : 'border-gray-200 bg-gray-50 focus:border-purple-500 focus:bg-white hover:border-gray-300'
                  }`}
                required
              >
                <option value="">Choose a topic...</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="careers">Career Opportunities</option>
                <option value="feedback">Feedback & Suggestions</option>
              </select>
            </InputField>

            <InputField
              label="Your Message"
              name="message"
              icon={MessageCircle}
              required
            >
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField('')}
                placeholder="Tell us what's on your mind..."
                required
                rows={5}
                className={`w-full px-5 py-4 border-2 rounded-xl text-base transition-all duration-300 outline-none resize-y min-h-[140px]
                  ${formErrors.message 
                    ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' 
                    : focusedField === 'message'
                      ? 'border-purple-500 bg-white ring-4 ring-purple-500/10 shadow-lg shadow-purple-500/10'
                      : 'border-gray-200 bg-gray-50 focus:border-purple-500 focus:bg-white hover:border-gray-300'
                  }
                  placeholder-gray-400`}
              />
            </InputField>

            {/* Enhanced Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`relative w-full px-8 py-6 rounded-xl text-lg font-bold text-white 
                       transition-all duration-500 overflow-hidden group transform
                       ${isSubmitted 
                         ? 'bg-gradient-to-r from-green-500 to-emerald-600 scale-105' 
                         : 'bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:from-purple-700 hover:via-purple-800 hover:to-indigo-800'
                       }
                       ${!isSubmitting && !isSubmitted ? 'hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/30 active:scale-98' : ''}
                       ${isSubmitting ? 'cursor-not-allowed animate-pulse' : 'cursor-pointer'}
                       disabled:opacity-80 shadow-lg`}
            >
              {/* Enhanced shimmer effect */}
              {!isSubmitting && !isSubmitted && (
                <>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
                                bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                transition-transform duration-700 skew-x-12"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </>
              )}
              
              {/* Loading spinner */}
              {isSubmitting && (
                <div className="absolute left-6 top-1/2 -translate-y-1/2">
                  <Loader className="w-5 h-5 animate-spin" />
                </div>
              )}
              
              <span className={`relative z-10 flex items-center justify-center gap-2 transition-all duration-300
                ${isSubmitting ? 'pl-8' : ''}`}>
                {isSubmitting ? (
                  'Sending Your Message...'
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={20} className="animate-bounce" />
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </span>
            </button>
          </div>

          {/* Enhanced Support Info */}
          <div className="text-center mt-10 pt-8 border-t border-gray-200/60">
            <p className="text-gray-600 mb-3 font-medium">Need immediate assistance?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:support@viralcoach.com" 
                className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 hover:underline transition-all duration-200 px-4 py-2 rounded-lg hover:bg-purple-50"
              >
                <Mail size={18} />
                support@viralcoach.com
              </a>
              <span className="hidden sm:block text-gray-400">|</span>
              <a 
                href="tel:+1234567890" 
                className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 hover:underline transition-all duration-200 px-4 py-2 rounded-lg hover:bg-purple-50"
              >
                <Phone size={18} />
                (123) 456-7890
              </a>
            </div>
          </div>

          {/* Enhanced Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  ref={el => cardRefs.current[index] = el}
                  data-card-index={index}
                  className={`relative group bg-white p-8 rounded-2xl text-center border border-gray-200/60 shadow-lg hover:shadow-xl
                            transition-all duration-700 ease-out hover:-translate-y-1 overflow-hidden
                            ${visibleCards.has(index) 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-0 translate-y-8'
                            }`}
                >
                  {/* Subtle background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} 
                                  rounded-2xl mx-auto mb-6 flex items-center justify-center text-white
                                  shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300
                                  group-hover:rotate-3`}>
                      <IconComponent size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 6s ease-in-out infinite 2s; }
        .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-slide-down { animation: slide-down 0.3s ease-out; }
        .active\\:scale-98:active { transform: scale(0.98); }
      `}</style>
    </div>
  );
};

export default ContactForm;