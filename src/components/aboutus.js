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
        <div className="min-h-screen pt-20 sm:pt-12 md:pt-16 bg-black text-white overflow-hidden relative" 
             style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif" }}>
            
            {/* Import Inter font with all weights */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            
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
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
                        
                        {/* Left content */}
                        <div className="w-full lg:w-1/2">
                            <div className="mb-6 sm:mb-8 lg:mb-10">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black leading-[1.1] tracking-tight">
                                    <span className="block text-purple-400 mb-2 sm:mb-3 font-black">ABOUT RELORT MEDIA</span>
                                </h1>
                            </div>
                            
                            <div className="space-y-4 sm:space-y-5 lg:space-y-6 mb-8 sm:mb-10 lg:mb-12">
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-medium text-justify">
                                    At Relort Media, we exist to help businesses scale with social media using content systems that drive business results. We give our clients the systems, strategy, and support they need to succeed on social media.
                                </p>
                            </div>
                            
                            {/* Stats */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-gray-900/40 rounded-xl p-4 sm:p-5 lg:p-6 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/25 hover:bg-gray-900/50 transition-all duration-300 group">
                                        <div className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-black text-purple-400 mb-1 sm:mb-2 group-hover:text-purple-300 transition-colors duration-300">
                                            {stat.year || stat.number}
                                        </div>
                                        <div className="text-white text-xs sm:text-sm lg:text-base font-semibold leading-tight opacity-90">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right content - Image gallery */}
                        <div className="w-full lg:w-1/2 relative mt-4 lg:mt-0">
                            <div className="relative max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto lg:mx-0">
                                <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 lg:gap-5">
                                    
                                    {/* Column 1 */}
                                    <div className="space-y-2 xs:space-y-3 sm:space-y-4 lg:space-y-5">
                                        <div className="relative group cursor-pointer">
                                            <div className="relative overflow-hidden rounded-lg xs:rounded-xl border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
                                                <img
                                                    src={mockImages[0]}
                                                    alt="viral content 1"
                                                    className="w-full h-20 xs:h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </div>
                                        <div className="relative group cursor-pointer">
                                            <div className="relative overflow-hidden rounded-lg xs:rounded-xl border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
                                                <img
                                                    src={mockImages[3]}
                                                    alt="viral content 4"
                                                    className="w-full h-16 xs:h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Column 2 */}
                                    <div className="space-y-2 xs:space-y-3 sm:space-y-4 lg:space-y-5 mt-3 xs:mt-4 sm:mt-6 lg:mt-8">
                                        <div className="relative group cursor-pointer">
                                            <div className="relative overflow-hidden rounded-lg xs:rounded-xl border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
                                                <img
                                                    src={mockImages[1]}
                                                    alt="viral content 2"
                                                    className="w-full h-16 xs:h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </div>
                                        <div className="relative group cursor-pointer">
                                            <div className="relative overflow-hidden rounded-lg xs:rounded-xl border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
                                                <img
                                                    src={mockImages[4]}
                                                    alt="viral content 5"
                                                    className="w-full h-20 xs:h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </div>
                                        <div className="relative group cursor-pointer">
                                            <div className="relative overflow-hidden rounded-lg xs:rounded-xl border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
                                                <img
                                                    src={mockImages[6]}
                                                    alt="viral content 7"
                                                    className="w-full h-14 xs:h-16 sm:h-20 md:h-24 lg:h-32 xl:h-36 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Column 3 */}
                                    <div className="space-y-2 xs:space-y-3 sm:space-y-4 lg:space-y-5 mt-1 xs:mt-2 sm:mt-3 lg:mt-4">
                                        <div className="relative group cursor-pointer">
                                            <div className="relative overflow-hidden rounded-lg xs:rounded-xl border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
                                                <img
                                                    src={mockImages[2]}
                                                    alt="viral content 3"
                                                    className="w-full h-24 xs:h-28 sm:h-36 md:h-48 lg:h-56 xl:h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </div>
                                        <div className="relative group cursor-pointer">
                                            <div className="relative overflow-hidden rounded-lg xs:rounded-xl border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
                                                <img
                                                    src={mockImages[5]}
                                                    alt="viral content 6"
                                                    className="w-full h-16 xs:h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Enhanced background decorative elements */}
                            <div className="absolute -top-2 -right-2 xs:-top-3 xs:-right-3 sm:-top-4 sm:-right-4 w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute -bottom-2 -left-2 xs:-bottom-3 xs:-left-3 sm:-bottom-4 sm:-left-4 w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 bg-violet-500/15 rounded-full blur-lg animate-pulse delay-1000"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Description Section */}
            <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 z-10">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl xl:max-w-7xl">
                    <div className="text-center">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium leading-relaxed text-white font-normal text-justify sm:text-center max-w-5xl mx-auto">
                            We've scaled businesses across <span className="text-purple-400 font-bold">250+ industries</span>, <span className="text-purple-400 font-bold">3,000+ clients</span>, and added millions in enterprise value. Our approach goes beyond traditional agency work, <span className="text-purple-400 font-bold">we're strategic growth partners</span> who drive results with social media.
                        </h2>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 z-10">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-5xl xl:max-w-6xl">
                    <div className="text-center">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-8 sm:mb-10 lg:mb-12 xl:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">
                            Your entire content system under one roof
                        </h2>

                        {/* Enhanced Service Layout */}
                        <div className="max-w-4xl xl:max-w-5xl mx-auto">
                            <div className="flex flex-col items-center space-y-4 sm:space-y-5 lg:space-y-6">
                                
                                {/* Row 1 */}
                                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5">
                                    <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg text-white bg-gradient-to-r from-purple-500 to-violet-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer">
                                        Conversion-Driven Content Strategy
                                    </div>
                                    <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg text-white bg-gradient-to-r from-purple-500 to-violet-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer">
                                        Cross-Platform Posting
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5">
                                    <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg text-white bg-gradient-to-r from-purple-500 to-violet-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer">
                                        Organic Traffic Systems
                                    </div>
                                    <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg text-white bg-gradient-to-r from-purple-500 to-violet-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer">
                                        Content Repurposing
                                    </div>
                                    <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg text-white bg-gradient-to-r from-purple-500 to-violet-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer">
                                        Brand Visibility
                                    </div>
                                </div>

                                {/* Row 3 */}
                                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5">
                                    <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg text-white bg-gradient-to-r from-purple-500 to-violet-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer">
                                        Ideation & Scripting
                                    </div>
                                    <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg text-white bg-gradient-to-r from-purple-500 to-violet-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer">
                                        Video Editing
                                    </div>
                                    <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg text-white bg-gradient-to-r from-purple-500 to-violet-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer">
                                        Content Scheduling
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 z-10">
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

                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl xl:max-w-7xl relative z-10">
                    
                    {/* Section Title */}
                    <div className="text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-purple-400 mb-4 drop-shadow-lg">
                            Meet Our Leadership Team
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-violet-500 mx-auto rounded-full shadow-lg"></div>
                    </div>

                    {/* Team grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-10 sm:mb-12 lg:mb-16 xl:mb-20">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center group">
                                
                                {/* Enhanced Image */}
                                <div className="relative mb-4 sm:mb-5 lg:mb-6">
                                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 2xl:w-48 2xl:h-48 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500 to-violet-500 p-1 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl hover:shadow-purple-500/20">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                    </div>
                                    {/* Enhanced glow effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                
                                {/* Enhanced Name + Position */}
                                <div className="space-y-1 sm:space-y-2">
                                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-white group-hover:text-purple-300 transition-colors duration-300">
                                        {member.name}
                                    </h3>
                                    <div className="text-purple-300 font-semibold text-xs sm:text-sm lg:text-base leading-tight opacity-90">
                                        <div>{member.position}</div>
                                        {member.position2 && <div>{member.position2}</div>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Enhanced Join Team Section */}
                    <div className="text-center">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black mb-8 sm:mb-10 lg:mb-12 text-purple-400">
                            Join Our Team
                        </h2>
                        <button className="group px-8 sm:px-10 lg:px-12 xl:px-14 py-3 sm:py-4 lg:py-5 rounded-full text-base sm:text-lg lg:text-xl font-black text-black bg-purple-400 hover:bg-purple-500 hover:scale-110 transition-all duration-300 relative overflow-hidden shadow-xl hover:shadow-purple-500/30">
                            <span className="relative z-10">SEE CAREERS</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ViralCoachAbout;