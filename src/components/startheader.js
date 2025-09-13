import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, Maximize, MoreHorizontal } from 'lucide-react';
import VideoCards from './getstart/startcardsvideo';
import ImgCards from './getstart/imgcard';

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
import ReviewsComponent from './getstart/reviewscard';
import GetStartedButton from './items/button';

export default function ContentMarketingLanding() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

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
      setIsPlaying(false);
    } else {
      video.muted = false;
      video.play();
      setIsPlaying(true);
    }
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

  return (
    <div className="min-h-screen pt-12 sm:pt-16 bg-black relative overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 opacity-20 sm:opacity-30">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1920 1080"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333EA" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M0,800 C400,600 800,1000 1200,800 C1600,600 1920,800 1920,800 L1920,1080 L0,1080 Z"
            fill="url(#waveGradient)"
            className="animate-pulse"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0;-100,20;0,0"
              dur="15s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M0,900 C600,700 1200,1100 1920,900 L1920,1080 L0,1080 Z"
            fill="url(#waveGradient)"
            opacity="0.5"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0;100,-20;0,0"
              dur="20s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5 sm:opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      ></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          {/* Brand Logo */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-2">
              <span className="text-purple-400">VIRAL</span> COACH
            </h1>
          </div>

          {/* Trust Rating */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
              <span className="text-white font-semibold text-sm sm:text-base">Excellent</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 text-white flex items-center justify-center text-xs">★</div>
                ))}
              </div>
              <span className="text-green-400 font-bold text-sm sm:text-base">4.9</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center text-xs sm:text-sm">
              <span className="text-gray-300">out of 5 based on</span>
              <span className="text-white font-bold">600+ reviews</span>
              <span className="text-green-400 font-semibold">★ Trustpilot</span>
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8 leading-tight px-2">
            Get all of your content DONE<br />
            <span className="text-purple-400 font-semibold text-xl sm:text-3xl lg:text-4xl">In just 2 hours a month👇</span>
          </h2>

          {/* Video Testimonial Card */}
          <div className="relative max-w-5xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4">
            <div className="bg-gradient-to-br from-purple-400 via-violet-400 to-purple-500 rounded-2xl sm:rounded-3xl p-0.5 sm:p-1 shadow-2xl">
              <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden">
                {/* Video Content */}
                <div className="w-full">
                  <div className="relative w-full overflow-hidden bg-black group cursor-pointer shadow-2xl">
                    {/* Actual Video */}
                    <video
                      ref={videoRef}
                      className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                      onClick={togglePlay}
                      src="https://res.cloudinary.com/dsugjsdvu/video/upload/v1756854780/Daniel_VSL_Close_Up_Mar_3_2024_ycslmi.mp4"
                      preload="metadata"
                      autoPlay
                      muted
                      playsInline
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={togglePlay}
                        className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-opacity-100 transition-all duration-300 hover:scale-110 shadow-2xl ${!isPlaying ? 'animate-pulse' : 'opacity-0'}`}
                      >
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-gray-800 ml-1" fill="currentColor" />
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

                          <span className="text-white text-xs font-mono hidden sm:inline">
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

          {/* Trusted By Section */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 px-4">
              Trusted by brands like
            </h3>

            {/* Brands Slider */}
            <div className="relative overflow-hidden py-2 sm:py-4">
              <div className="flex animate-slide-infinite">
                {duplicatedImages.map((image, index) => (
                  <div key={index} className="flex items-center justify-center flex-shrink-0 w-24 sm:w-32 md:w-40 lg:w-50 px-2 sm:px-4">
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-4 py-1 sm:py-2 hover:bg-opacity-20 transition-all duration-300 w-full flex items-center justify-center">
                      <img
                        src={image.image}
                        alt="brand logo"
                        className="h-4 sm:h-6 lg:h-8 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                        loading="lazy"
                        style={{
                          filter: 'brightness(0) invert(1)',
                          maxWidth: '100%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="px-4">
            <GetStartedButton />
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slide-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-slide-infinite {
          animation: slide-infinite 25s linear infinite;
        }
        
        .animate-slide-infinite:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-slide-infinite {
            animation: slide-infinite 15s linear infinite;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      
      <VideoCards />
      <ImgCards />
      <ReviewsComponent />
    </div>
  );
}