import { Images } from 'lucide-react';
import React, { useState, useEffect } from 'react';

// Mock images for demonstration
const mockImages = [
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=700&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=600&fit=crop"
];

const ViralCoachAbout = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const stats = [
        { year: "2022", label: "Founded In" },
        { number: "1M+", label: "Leads Generated" },
        { number: "3,000+", label: "Clients Served" },
        { number: "500+", label: "5-Star Reviews" }
    ];

    const services = [
        "Conversion-Driven Content Strategy",
        "Cross-Platform Posting",
        "Organic Traffic Systems",
        "Content Repurposing",
        "Brand Visibility",
        "Ideation & Scripting",
        "Video Editing",
        "Content Scheduling"
    ];

    const teamMembers = [
        {
            name: "Daniel Iles",
            position: "Founder,",
            position2: "Chief Executive Officer",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
        },
        {
            name: "Noelle Iles",
            position: "Co-Founder,",
            position2: "Chief Marketing Officer",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b05b?w=400&h=400&fit=crop&crop=face"
        },
        {
            name: "Samantha Bartlett",
            position: "Chief Operations Officer",
            position2: "",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
        },
        {
            name: "Nico Torres Santana",
            position: "Chief Experience Officer",
            position2: "",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
        }
    ];

    return (
        <div className="min-h-screen pt-16 bg-black text-white overflow-hidden relative">
            {/* Global Background Texture */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95"></div>
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        radial-gradient(circle at 25% 25%, rgba(147, 51, 234, 0.1) 0%, transparent 25%),
                        radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.08) 0%, transparent 25%),
                        radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.12) 1px, transparent 0)
                    `,
                    backgroundSize: '300px 300px, 400px 400px, 20px 20px'
                }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50"></div>
            </div>

            {/* Hero Section */}
            <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
                        {/* Left content */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <div className="mb-4 sm:mb-6 lg:mb-8">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                                    <span className="block text-purple-400 mb-2">ABOUT VIRAL COACH</span>
                                </h1>
                            </div>
                            <div className="space-y-3 sm:space-y-4 lg:space-y-5 mb-6 sm:mb-8 lg:mb-10">
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed max-w-none lg:max-w-lg">
                                    At Viral Coach, we exist to help businesses scale with social media using content systems that drive business results. We give our clients the systems, strategy, and support they need to succeed on social media.
                                </p>
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed max-w-none lg:max-w-lg">
                                    Founded by Daniel Iles in 2022, our team has helped generate more than 10 billion organic views and millions in client revenue proving that social media isn't just for influence... it's for growth.
                                </p>
                            </div>
                            
                            {/* Stats */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center lg:text-left bg-gray-900/30 rounded-lg p-3 sm:p-4 backdrop-blur-sm border border-purple-500/10">
                                        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-400 mb-1">
                                            {stat.year || stat.number}
                                        </div>
                                        <div className="text-white text-xs sm:text-sm lg:text-base font-medium leading-tight">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right content - Image gallery */}
                        <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
                            <div className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto lg:mx-0">
                                <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                                    {/* Column 1 */}
                                    <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                                        <div className="relative group cursor-pointer">
                                            <div className="relative overflow-hidden rounded-lg border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300 shadow-lg">
                                                <img
                                                    src={mockImages[0]}
                                                    alt="viral content 1"
                                                    className="w-full h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </div>
                                        <div className="relative group cursor-pointer">
                                            <div className="relative overflow-hidden rounded-lg border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300 shadow-lg">
                                                <img
                                                    src={mockImages[3]}
                                                    alt="viral content 4"
                                                    className="w-full h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Column 2 */}
                                    <div className="space-y-2 sm:space-y-3 lg:space-y-4 mt-3 sm:mt-4 md:mt-6 lg:mt-8">
                                        <div className="relative group cursor-pointer">
                                            <div className="relative overflow-hidden rounded-lg border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300 shadow-lg">
                                                <img
                                                    src={mockImages[1]}
                                                    alt="viral content 2"
                                                    className="w-full h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </div>
                                        <div className="relative group cursor-pointer">
                                            <div className="relative overflow-hidden rounded-lg border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300 shadow-lg">
                                                <img
                                                    src={mockImages[4]}
                                                    alt="viral content 5"
                                                    className="w-full h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </div>
                                        <div className="relative group cursor-pointer">
                                            <div className="relative overflow-hidden rounded-lg border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300 shadow-lg">
                                                <img
                                                    src={mockImages[6]}
                                                    alt="viral content 7"
                                                    className="w-full h-16 sm:h-20 md:h-28 lg:h-36 xl:h-40 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Column 3 */}
                                    <div className="space-y-2 sm:space-y-3 lg:space-y-4 mt-1 sm:mt-2 md:mt-3 lg:mt-4">
                                        <div className="relative group cursor-pointer">
                                            <div className="relative overflow-hidden rounded-lg border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300 shadow-lg">
                                                <img
                                                    src={mockImages[2]}
                                                    alt="viral content 3"
                                                    className="w-full h-28 sm:h-36 md:h-48 lg:h-56 xl:h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </div>
                                        <div className="relative group cursor-pointer">
                                            <div className="relative overflow-hidden rounded-lg border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300 shadow-lg">
                                                <img
                                                    src={mockImages[5]}
                                                    alt="viral content 6"
                                                    className="w-full h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Enhanced background decorative elements */}
                            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-8 sm:w-12 h-8 sm:h-12 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-6 sm:w-8 h-6 sm:h-8 bg-violet-500/15 rounded-full blur-lg animate-pulse delay-1000"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Description Section */}
            <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold leading-relaxed text-white px-4">
                        We've scaled businesses across <span className="text-purple-400 font-bold">250+ industries</span>, <span className="text-purple-400 font-bold">3,000+ clients</span>, and added millions in enterprise value. Our approach goes beyond traditional agency work, <span className="text-purple-400 font-bold">we're strategic growth partners</span> who drive results with social media.
                    </h2>
                </div>
            </section>

            {/* Services Section */}
            <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 lg:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">
                        Your entire content system under one roof
                    </h2>

                    {/* Service Layout */}
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                            {/* Row 1 */}
                            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                                <div className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-purple-500 to-violet-500 hover:scale-105 transition-transform duration-200 cursor-pointer">
                                    Conversion-Driven Content Strategy
                                </div>
                                <div className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-purple-500 to-violet-500 hover:scale-105 transition-transform duration-200 cursor-pointer">
                                    Cross-Platform Posting
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                                <div className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-purple-500 to-violet-500 hover:scale-105 transition-transform duration-200 cursor-pointer">
                                    Organic Traffic Systems
                                </div>
                                <div className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-purple-500 to-violet-500 hover:scale-105 transition-transform duration-200 cursor-pointer">
                                    Content Repurposing
                                </div>
                                <div className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-purple-500 to-violet-500 hover:scale-105 transition-transform duration-200 cursor-pointer">
                                    Brand Visibility
                                </div>
                            </div>

                            {/* Row 3 */}
                            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                                <div className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-purple-500 to-violet-500 hover:scale-105 transition-transform duration-200 cursor-pointer">
                                    Ideation & Scripting
                                </div>
                                <div className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-purple-500 to-violet-500 hover:scale-105 transition-transform duration-200 cursor-pointer">
                                    Video Editing
                                </div>
                                <div className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-purple-500 to-violet-500 hover:scale-105 transition-transform duration-200 cursor-pointer">
                                    Content Scheduling
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            {/* Team Section with enhanced texture */}
            <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 z-10">
                {/* Enhanced texture layer */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
                            radial-gradient(circle at 20% 40%, rgba(147, 51, 234, 0.08) 0%, transparent 30%),
                            radial-gradient(circle at 80% 60%, rgba(168, 85, 247, 0.06) 0%, transparent 30%),
                            linear-gradient(135deg, rgba(147, 51, 234, 0.02) 0%, transparent 50%, rgba(168, 85, 247, 0.02) 100%)
                        `,
                        backgroundSize: '400px 400px, 300px 300px, 100% 100%'
                    }}></div>
                    <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 35px,
                            rgba(147, 51, 234, 0.03) 35px,
                            rgba(147, 51, 234, 0.03) 36px
                        )`
                    }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                    {/* Section Title with enhanced styling */}
                    <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-purple-400 mb-3 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                            Meet Our Leadership Team
                        </h2>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-violet-500 mx-auto shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                    </div>

                    {/* Team grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center group">
                                {/* Image */}
                                <div className="relative mb-3 sm:mb-4 lg:mb-5">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto rounded-xl overflow-hidden bg-gradient-to-br from-purple-500 to-violet-500 p-0.5 group-hover:scale-105 transition-transform duration-300">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                    </div>
                                </div>
                                {/* Name + Position */}
                                <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 text-white">
                                    {member.name}
                                </h3>
                                <div className="text-purple-300 font-medium text-xs sm:text-sm leading-tight">
                                    <div>{member.position}</div>
                                    {member.position2 && <div>{member.position2}</div>}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Join Team Section */}
                    <div className="text-center">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 lg:mb-10 text-purple-400">
                            Join Our Team
                        </h2>
                        <button className="group px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg font-semibold text-black bg-purple-400 hover:bg-purple-500 transition-all duration-300 hover:scale-105 relative overflow-hidden">
                            <span className="relative z-10">SEE CAREERS</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ViralCoachAbout;