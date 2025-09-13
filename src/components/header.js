
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Star, Volume2, Maximize, MoreHorizontal } from 'lucide-react';

import img1 from '../sliderlogos/1.avif';
import img2 from '../sliderlogos/2.avif';
import img3 from '../sliderlogos/amazon.avif';
import img4 from '../sliderlogos/bigger.avif';
import img5 from '../sliderlogos/built.avif';
import img6 from '../sliderlogos/cnbn.avif';
import img7 from '../sliderlogos/dave.avif';
import img8 from '../sliderlogos/dell.avif';
import img9 from '../sliderlogos/drew.avif';
import img10 from '../sliderlogos/fitbody.avif';
import img11 from '../sliderlogos/grant.avif';
import img12 from '../sliderlogos/hostinger.avif';
import img13 from '../sliderlogos/insider.avif';
import img14 from '../sliderlogos/opus.avif';
import img15 from '../sliderlogos/pluto.avif';
import img16 from '../sliderlogos/redbull.avif';
import img17 from '../sliderlogos/riverside.avif';
import img18 from '../sliderlogos/rk.avif';
import img19 from '../sliderlogos/skool.avif';
import img20 from '../sliderlogos/snap.avif';
import img21 from '../sliderlogos/sofi.avif';
import img22 from '../sliderlogos/turbo.avif';
import img23 from '../sliderlogos/venmo.avif';
import img24 from '../sliderlogos/verizon.avif';
import img25 from '../sliderlogos/wonderay.avif';



export default function ContentMarketingLanding() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);

  const brands = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
    { id: 7, image: img7 },
    { id: 8, image: img8 },
    { id: 9, image: img9 },
    { id: 10, image: img10 },
    { id: 11, image: img11 },
    { id: 12, image: img12 },
    { id: 13, image: img13 },
    { id: 14, image: img14 },
    { id: 15, image: img15 },
    { id: 16, image: img16 },
    { id: 17, image: img17 },
    { id: 18, image: img18 },
    { id: 19, image: img19 },
    { id: 20, image: img20 },
    { id: 21, image: img21 },
    { id: 22, image: img22 },
    { id: 23, image: img23 },
    { id: 24, image: img24 },
    { id: 25, image: img25 }

  ];

  const duplicatedImages = [...brands, ...brands, ...brands];

  const videoRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e) => {
    const video = videoRef.current;
    const progressBar = progressRef.current;
    if (!video || !progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    video.currentTime = newTime;
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  };

  return (
    <div className="min-h-screen mt-5 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 relative overflow-hidden" 
         style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif" }}>
      
      {/* Global Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full opacity-25 animate-pulse" style={{ animationDuration: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-pink-300 to-orange-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/3 w-20 sm:w-28 h-20 sm:h-28 bg-gradient-to-r from-indigo-300 to-blue-300 rounded-full opacity-15 animate-bounce" style={{ animationDelay: '3s', animationDuration: '5s' }}></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 right-1/3 w-8 sm:w-12 h-8 sm:h-12 bg-purple-300 opacity-20 rotate-45 animate-spin" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-6 sm:w-8 h-6 sm:h-8 bg-pink-300 opacity-25 animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-5 sm:left-10 w-4 sm:w-6 h-4 sm:h-6 bg-indigo-400 opacity-30 animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 relative">
          {/* Header Background Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 rounded-full opacity-10 animate-pulse" style={{ animationDuration: '4s' }}></div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-purple-900 mb-4 sm:mb-6 tracking-tight relative z-10 animate-fade-in-up leading-tight px-2 text-center">
            Grow Your Business With Content
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-purple-700 mb-6 sm:mb-8 font-medium relative z-10 animate-fade-in-up leading-relaxed px-4 text-center" style={{ animationDelay: '0.2s' }}>
            Content systems with powerful business outcomes
          </p>

          {/* Trust Rating */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 relative z-10 animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
            <span className="text-purple-900 font-semibold text-base sm:text-lg">Excellent</span>
            <div className="flex gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <span className="text-purple-700 font-semibold text-sm sm:text-base">600+ Reviews</span>
          </div>

          {/* Video Testimonial Card */}
          <div className="relative max-w-4xl mx-auto mb-8 sm:mb-12 px-2 sm:px-0">
            <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 rounded-2xl sm:rounded-3xl p-1 shadow-2xl">
              <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden">
                {/* Video Content */}
                <div className="flex items-start">
                  {/* Video Player */}
                  <div className="w-full">
                    <div className="relative w-full aspect-video overflow-hidden bg-black group cursor-pointer shadow-2xl border-2 sm:border-4 border-gray-200">
                      {/* Video Placeholder */}
                      <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        onClick={togglePlay}
                        src="https://res.cloudinary.com/dsugjsdvu/video/upload/v1756854780/Daniel_VSL_Close_Up_Mar_3_2024_ycslmi.mp4"
                        preload="metadata"
                      />

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={togglePlay}
                          className={`w-16 sm:w-20 h-16 sm:h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-opacity-100 transition-all duration-300 hover:scale-110 shadow-2xl ${!isPlaying ? 'animate-pulse' : 'opacity-0'}`}
                        >
                          <Play className="w-8 sm:w-10 h-8 sm:h-10 text-gray-800 ml-1" fill="currentColor" />
                        </button>
                      </div>

                      {/* Video Controls */}
                      {isPlaying && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 sm:p-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={togglePlay}
                              className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
                            >
                              <Pause className="w-3 h-3 text-white" fill="currentColor" />
                            </button>
                            
                            <div
                              ref={progressRef}
                              className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden cursor-pointer"
                              onClick={handleProgressClick}
                            >
                              <div
                                className="h-full bg-white rounded-full transition-all duration-100"
                                style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                              ></div>
                            </div>

                            <span className="text-white text-xs font-mono">
                              {formatTime(currentTime)} / {formatTime(duration)}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-xl text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce-subtle relative z-10 mx-4">
            GET STARTED
          </button>
        </div>

        {/* Brands Section */}
        <div className="text-center mb-16 sm:mb-20 relative">
          <h3 className="text-xl sm:text-2xl font-semibold text-purple-800 mb-8 sm:mb-12 relative z-10 px-4 text-center leading-relaxed">
            We've worked with brands like
          </h3>

          {/* Enhanced Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute top-10 right-10 sm:right-20 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-pink-200 to-orange-200 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 left-1/4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-10 right-1/3 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-5 sm:left-10 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-25 animate-ping" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/3 right-5 sm:right-10 w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-r from-pink-300 to-red-300 rounded-full opacity-15 animate-bounce" style={{ animationDelay: '2.5s' }}></div>
          </div>

          {/* Continuous Sliding Logo Container */}
          <div className="w-full py-4 sm:py-8">
            <div className="relative overflow-hidden">
              <div className="flex animate-slide-infinite whitespace-nowrap">
                {duplicatedImages.map((image, index) => (
                  <div key={index} className="flex items-center justify-center flex-shrink-0 w-32 sm:w-40 md:w-48 px-2 sm:px-4">
                    <img src={image.image} alt="brand logo" className="h-8 sm:h-10 md:h-12 object-contain" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Custom CSS for Animations */}
          <style jsx>{`
            @keyframes slide-infinite {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            
            @keyframes fade-in-up {
              0% {
                opacity: 0;
                transform: translateY(30px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes bounce-subtle {
              0%, 100% {
                transform: translateY(-5px);
              }
              50% {
                transform: translateY(5px);
              }
            }
            
            .animate-slide-infinite {
              animation: slide-infinite 30s linear infinite;
            }
            
            .animate-slide-infinite:hover {
              animation-play-state: paused;
            }
            
            .animate-fade-in-up {
              animation: fade-in-up 0.8s ease-out forwards;
            }
            
            .animate-bounce-subtle {
              animation: bounce-subtle 2s ease-in-out infinite;
            }
          `}</style>
        </div>

        {/* Stats Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-purple-900 mb-8 sm:mb-16 px-4 leading-tight text-center">
            Better, Smarter, Faster Growth
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
            {/* Reach */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl">
              <div className="border-b-4 border-purple-500 pb-2 mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-purple-800 text-center">Reach</h3>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-purple-900 mb-3 sm:mb-4 text-center">15.5M</div>
              <p className="text-purple-600 font-medium text-sm sm:text-base leading-relaxed text-center">
                Average monthly views per client by Month 3
              </p>
            </div>

            {/* Engagement */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl">
              <div className="border-b-4 border-purple-500 pb-2 mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-purple-800 text-center">Engagement</h3>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-purple-900 mb-3 sm:mb-4 text-center">1M+</div>
              <p className="text-purple-600 font-medium text-sm sm:text-base leading-relaxed text-center">
                Over 1 Million Leads Generated for Clients
              </p>
            </div>

            {/* Clients */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl">
              <div className="border-b-4 border-purple-500 pb-2 mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-purple-800 text-center">Clients</h3>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-purple-900 mb-3 sm:mb-4 text-center">3,000+</div>
              <p className="text-purple-600 font-medium text-sm sm:text-base leading-relaxed text-center">
                Trusted by over 3,000 Business Owners
              </p>
            </div>

            {/* Industry */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl">
              <div className="border-b-4 border-purple-500 pb-2 mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-purple-800 text-center">Industry</h3>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-purple-900 mb-3 sm:mb-4 text-center">250+</div>
              <p className="text-purple-600 font-medium text-sm sm:text-base leading-relaxed text-center">
                Proven Strategies in over 250+ unique niches
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}