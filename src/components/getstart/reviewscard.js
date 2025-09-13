import React from 'react';
import { Star } from 'lucide-react';

const ReviewsComponent = () => {
  const reviews = [
    {
      id: 1,
      name: "Jesse Bruno",
      timeAgo: "19 hours ago",
      rating: 5,
      title: "Relort Media knows exactly what they are...",
      content: "Relort Media knows exactly what they are doing! I'm in a mortgage broker in australia trying to go viral! And their strategy and plan are brilliant!",
      hasReply: false
    },
    {
      id: 2,
      name: "Jordan Kull",
      timeAgo: "2 days ago",
      rating: 1,
      title: "Unprofessional and seems like a scam",
      content: "This is based off my initial interview with this company. Showed up late to the meeting and didn't give an apology or reason for being late. I asked for a pitch and an overview of what these guys can do. We are just getting started on social media so explained we were checking out companies as we build our tech stack. Having no deck, no collateral or even the willingness to explain what they did beyond a single sentence, the salesperson; cut the call short and immediately bailed on the call. Complete waste of my and my colleagues time.",
      hasReply: true,
      replyText: "Hey Jordan, we're sorry to hear your experience with our team wasn't everything you were hoping for, however I do want to provide some additional context here..."
    },
    {
      id: 3,
      name: "jdiddy",
      timeAgo: "4 days ago",
      rating: 5,
      title: "I've been diving into ViralCoach's free...",
      content: "I've been diving into ViralCoach's free content and I have to say—I'm really impressed. The class videos on beyond surface-level topics and give you a clear framework for building social media strategies. They break things down into top-, middle-, and bottom-of-funnel content and explain how to approach each stage effectively. What I love is that the material is not just strategic but also practical. Something I can use for my service based business. You get actionable tips on everything from messaging to gear—like which camera or mic to use—and it's easy to apply right away. On top of that, the community is active, supportive, and full of helpful insights, which makes the learning process even more valuable. Overall, it's been a refreshing mix of strategy, tactics, and community. I'm excited to keep learning and to see where this journey takes me!"
    },
    {
      id: 4,
      name: "Katy W.",
      timeAgo: "4 days ago",
      rating: 5,
      title: "I've learned more in and hour...",
      content: "I've learned more in and hour with this course than I have in mo this of trying to track down the various concepts. These concepts are laid out clearly and concisely, making it easy to follow and implement. Highly recommend."
    },
    {
      id: 5,
      name: "Kate",
      timeAgo: "September 6",
      rating: 5,
      title: "Easy, fun, interactive!",
      content: "Loving learning about social media in an easy interactive way! I'm a dermatologist just learning about social media and feeling way behind. Love how simple this makes it!"
    },
    {
      id: 6,
      name: "Hudt Gugenheimer",
      timeAgo: "September 6",
      rating: 5,
      title: "Blown Away!",
      content: "I am just get started but I am honestly blown away by the level of value being given. Really amazed and grateful! So many people say they need help making money so that they get to a level where they can invest in themselves again but finding someone who will stand by what they teach enough to give you the chance to do that is one in a million!"
    },
    {
      id: 7,
      name: "Richard Low",
      timeAgo: "September 3",
      rating: 5,
      title: "Years of learning in 1 course",
      content: "I learned more core social media concepts and principles in one course in their Skool community than I did in a year of working with other coaches and consultants. I've quit so many Skool groups and coaching programs because they didn't teach me enough to be truly successful."
    },
    {
      id: 8,
      name: "Dan Sova",
      timeAgo: "September 3",
      rating: 5,
      title: "Free course is exceptionally good",
      content: "Just finished their free course on Skool and it's easily the best course on social media and content creation I've ever done, including against paid courses. We're in a variety of industries including Accounting, Consulting and Trades, and will be applying the training to all of our businesses. Highly recommended."
    },
    {
      id: 9,
      name: "Kobo Pickleball",
      timeAgo: "5 days ago",
      rating: 5,
      title: "Relort Media proven system",
      content: "I think viralCoach and their online SKOOL community is the way to go to market your brand without the fear of spending money on paid ads with agencies and not knowing the results. Taking more control of your marketing using their proven systems."
    },
    {
      id: 10,
      name: "Melissa Trotman",
      timeAgo: "September 2",
      rating: 5,
      title: "Amazing resource that helps you hit the ground running.",
      content: "I am a nurse practitioner with very little time to spare to dedicate to Marketing and creating content. The Relort Media Skool community is an amazing free resource. I have already learned more in less than a week and less than two hours invested in consuming the content then I have on many services that I have paid for. I am excited and feel fortunate to be part of this community!"
    },
    {
      id: 11,
      name: "Patricia Trickett",
      timeAgo: "September 2",
      rating: 5,
      title: "The Free Resource That Feels Priceless",
      content: "The positive reinforcement and encouragement to build good habits are excellent, along with the quality information and tools provided. I originally joined for the video classroom, but it's the engaging community that keeps me coming back. I couldn't believe this was free—I really pushed us to create a path forward. I absolutely love the community."
    },
    {
      id: 12,
      name: "Cameron Jackson",
      timeAgo: "September 4",
      rating: 5,
      title: "Lesss Gooo",
      content: "I am enjoying the content of the Viral Coach. Plenty of value and I look forward to diving deeper into how to grow my business."
    },
    {
      id: 13,
      name: "Consumer",
      timeAgo: "September 3",
      rating: 5,
      title: "These guys are the real deal and know...",
      content: "These guys are the real deal and know what they're talking about. Helped my content alot."
    },
    {
      id: 14,
      name: "Aline Kemp",
      timeAgo: "August 30",
      rating: 5,
      title: "Fun, clear, and motivating training",
      content: "I've completed two well-known (and expensive) courses in the market, and I can honestly say the quality of Viral Coach's free content is excellent so far. The lessons are clear, practical, and easy to apply—even as I'm still unlocking the free classes. I also really enjoy the gamified community style of Skool—and the fact that Elijah (one of the community managers) reached out to me personally. What could have been a cold, distant experience instead feels friendly and approachable. Skool makes learning engaging and adds a layer of fun accountability. Another excellent choice by the Relort Media team. I'm excited to keep going and see how much more I can learn here!"
    },
    {
      id: 15,
      name: "Kyler Lake",
      timeAgo: "August 30",
      rating: 5,
      title: "Think the groups great",
      content: "Think the groups great. Love how interactive it is. Elijah was so quick to respond and help out."
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating 
                ? 'fill-green-500 text-green-500' 
                : 'fill-gray-300 text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
  <div className="inline-flex items-center gap-3 mb-3">
    <span className="text-white text-2xl font-semibold">Excellent</span>
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className="w-7 h-7 fill-green-500 text-green-500" />
      ))}
    </div>
  </div>
  <p className="text-gray-300 text-lg">
    Rated <span className="font-bold">4.8 / 5</span> based on{' '}
    <span className="font-bold">636 reviews</span> on{' '}
    <span className="text-green-400">★ Trustpilot</span>
  </p>
  <p className="text-gray-400 text-sm mt-3">Showing our latest reviews</p>
</div>


      {/* Reviews Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 break-inside-avoid mb-4">
            <StarRating rating={review.rating} />
            
            <div className="mb-2">
              <span className="font-medium text-gray-900 text-sm">{review.name}</span>
              <span className="text-gray-500 text-sm">, {review.timeAgo}</span>
            </div>
            
            <h3 className="font-bold text-gray-900 text-sm mb-2 leading-tight">
              {review.title}
            </h3>
            
            <p className="text-gray-700 text-sm leading-relaxed text-justify">
              {review.content}
            </p>

            {review.hasReply && (
              <div className="border-t border-gray-200 pt-3 mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-600 text-xs font-medium">↳ Reply from Viral Coach</span>
                  <span className="text-gray-500 text-xs">1 day ago</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  {review.replyText}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsComponent;