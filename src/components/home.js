
import React from 'react';
import FAQ from './faq';
import ReviewsComponent from './reviews';
import Header from './header'

export default function ContentMarketingLanding() {

  return (
    <div className="min-h-screen mt-5 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 relative overflow-hidden">
      <Header />
      <ReviewsComponent />
      <FAQ />
    </div>
  );
}