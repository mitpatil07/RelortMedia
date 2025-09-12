import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Users, Award, TrendingUp } from 'lucide-react';

const ReviewsComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Brad S",
      avatar: "BS",
      rating: 5,
      title: "Everything that is being shared and...",
      content: "Everything that is being shared and offered has provided me with immense value to help me move forward with marketing on social media to grow my business, definitely worth the inv...",
      verified: true
    },
    {
      id: 2,
      name: "Graham",
      avatar: "G",
      rating: 5,
      title: "I own an agency helping college kids...",
      content: "I own an agency helping college kids get better job placements out of college to set them up for life (thats the dream), and I was having trouble making scripts that would captivate, relate, and...",
      verified: true
    },
    {
      id: 3,
      name: "Jacob Voetberg",
      avatar: "JV",
      rating: 5,
      title: "Finally improving",
      content: "The biggest thing that this community has done for me is give me hope. I feel like I am learning new things every day that will improve my content, and it feels so good to be making progr...",
      verified: true
    },
    {
      id: 4,
      name: "Benjamin",
      avatar: "B",
      rating: 5,
      title: "Great content",
      content: "Great content! This is training can use right away and implement for my health, lifestyle, fitness brand. So glad i found this page, thanks!",
      verified: true
    },
    {
      id: 5,
      name: "Jeremy Joerger",
      avatar: "JJ",
      rating: 5,
      title: "Fantastic",
      content: "I can not say enough about the Viral Content SKOOL Community page. So much knowledge and value in every post and resource. Highly reccomended.",
      verified: true
    },
    {
      id: 6,
      name: "David Gentry",
      avatar: "DG",
      rating: 5,
      title: "Fantastic program",
      content: "Fantastic program. The only coaching program that seems worth it!",
      verified: true
    },
    {
      id: 7,
      name: "Premal Sanghvi",
      avatar: "PS",
      rating: 5,
      title: "We own and operate a dental practice",
      content: "We own and operate a dental practice in Melbourne CBD. Having no previous training in digital marketing we were overwhelmed with the task ahead of implementing an effective social...",
      verified: true
    },
    {
      id: 8,
      name: "Chris from Florida",
      avatar: "CF",
      rating: 5,
      title: "The Only Content Framework That Didn't Feel Like a Hack",
      content: "I'm a coach in the real estate niche, and I was looking for a solid framework to create content that actually gets views — without relying on gimmicks or short-term hacks. What stood out to m...",
      verified: true
    }
  ];

  const reviewsPerPage = 6;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const currentReviews = reviews.slice(currentPage * reviewsPerPage, (currentPage + 1) * reviewsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const StarRating = ({ rating }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getAvatarColor = (name) => {
    const colors = [
      'bg-gradient-to-br from-purple-500 to-pink-500',
      'bg-gradient-to-br from-blue-500 to-cyan-500',
      'bg-gradient-to-br from-green-500 to-emerald-500',
      'bg-gradient-to-br from-orange-500 to-red-500',
      'bg-gradient-to-br from-indigo-500 to-purple-500',
      'bg-gradient-to-br from-pink-500 to-rose-500'
    ];
    return colors[name.length % colors.length];
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <Award className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-white font-medium">Excellent</span>
            <div className="flex gap-1">
              <img src='/stars.avif' className='h-4 ml-2' />
            </div>
          </div>

          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            What Our Community Says
          </h1>

          <div className="flex justify-center items-center space-x-8 text-white/80 text-lg">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-yellow-400 mr-2">4.9</span>
              <span>out of 5</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>600+ reviews</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span>Trustpilot</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full ${getAvatarColor(review.name)} flex items-center justify-center text-white font-semibold text-sm mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {getInitials(review.name)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white">{review.name}</h3>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-green-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h4 className="font-semibold text-purple-200 mb-3 text-lg leading-snug">
                  {review.title}
                </h4>
                <p className="text-white/80 leading-relaxed">
                  {review.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={prevPage}
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex space-x-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${i === currentPage
                    ? 'bg-purple-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 max-w-2xl mx-auto border border-purple-500/30 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Viral Content Community
            </h2>
            <p className="text-purple-100 mb-6 text-lg">
              Start creating content that actually gets views and grows your business
            </p>
            <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-xl hover:bg-purple-50 transition-all duration-200 hover:scale-105 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsComponent;