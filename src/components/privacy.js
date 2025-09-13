import React, { useState } from "react";
import { Scale, FileText, Users, Shield, AlertTriangle, Gavel, Mail, Phone, CheckCircle } from "lucide-react";

export default function TermsOfService() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 min-h-screen py-6 sm:py-12 px-4 sm:px-6 md:px-20 lg:px-40 mt-16 sm:mt-20">


      <div className="relative z-10">
        {/* Main Container */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-200 overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4 sm:p-8 text-center">
            <div className="flex flex-col sm:inline-flex sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center">
                Terms of Service
              </h1>
            </div>
            <p className="text-purple-100 text-base sm:text-lg">
              Last Updated: <span className="font-semibold">August 4th, 2025</span>
            </p>
          
          </div>

          {/* Content */}
          <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
            
            {/* Introduction */}
            <div className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
              <p>
                Welcome to Relort Media, LLC ("<strong>Relort Media</strong>," "<strong>Company</strong>," "<strong>we</strong>," "<strong>us</strong>," "<strong>our</strong>"). These Terms of Service (the "<strong>Terms</strong>") govern all products and services provided by Relort Media, LLC, a Delaware limited liability company with a principal mailing address at P.O. Box 3626, Palmer, Alaska 99645 ("<strong>Relort Media</strong>," "<strong>Company</strong>," "<strong>we</strong>," or "<strong>us</strong>"). By enrolling in, purchasing, accessing, or using any Relort Media™ offering—including but not limited to programs, memberships, the Skool™ community, workshops, or addenda such as the Testimonial Partnership Addendum—you ("<strong>Client</strong>," "<strong>Member</strong>," "<strong>User</strong>," or "<strong>you</strong>") accept and agree to be legally bound by these Terms and any addenda incorporated herein.
              </p>
            </div>

            {/* Section 1 */}
            <div className="border-l-4 border-purple-500 pl-4 sm:pl-6">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-3 sm:w-4 h-3 sm:h-4 text-purple-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-purple-800">Acceptance and Agreement</h2>
              </div>
              <div className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
                <p>
                  By using our services, you confirm that you are at least 18 years old and have the legal capacity to enter into this agreement. If you do not agree to these Terms, you must not use our services. These Terms constitute a legally binding agreement between you and Relort Media.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="border-l-4 border-purple-500 pl-4 sm:pl-6">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-3 sm:w-4 h-3 sm:h-4 text-purple-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-purple-800">Services Provided</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify mb-4 sm:mb-6 text-sm sm:text-base">
                Relort Media provides educational content, coaching programs, and business development services including:
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-purple-800 mb-1 sm:mb-2 text-sm sm:text-base">Educational Programs</h3>
                    <p className="text-gray-700 text-justify leading-relaxed text-xs sm:text-sm">
                      Online courses, workshops, and training materials focused on content creation and business development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-purple-800 mb-1 sm:mb-2 text-sm sm:text-base">Community Access</h3>
                    <p className="text-gray-700 text-justify leading-relaxed text-xs sm:text-sm">
                      Access to exclusive online communities, including Skool groups and private forums.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-purple-800 mb-1 sm:mb-2 text-sm sm:text-base">Coaching & Consultation</h3>
                    <p className="text-gray-700 text-justify leading-relaxed text-xs sm:text-sm">
                      One-on-one coaching sessions, group coaching, and business consultation services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-purple-800 mb-1 sm:mb-2 text-sm sm:text-base">Digital Resources</h3>
                    <p className="text-gray-700 text-justify leading-relaxed text-xs sm:text-sm">
                      Templates, tools, software access, and other digital resources to support your business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="border-l-4 border-purple-500 pl-4 sm:pl-6">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-3 sm:w-4 h-3 sm:h-4 text-purple-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-purple-800">User Responsibilities</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify mb-4 sm:mb-6 text-sm sm:text-base">
                As a user of our services, you agree to:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-2 sm:mb-3 text-sm sm:text-base">Account Security</h3>
                  <p className="text-gray-700 text-justify leading-relaxed text-xs sm:text-sm">
                    Maintain the confidentiality of your login credentials and notify us immediately of any unauthorized access.
                  </p>
                </div>
                <div className="p-3 sm:p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-2 sm:mb-3 text-sm sm:text-base">Appropriate Use</h3>
                  <p className="text-gray-700 text-justify leading-relaxed text-xs sm:text-sm">
                    Use our services only for lawful purposes and in accordance with these Terms and applicable laws.
                  </p>
                </div>
                <div className="p-3 sm:p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-2 sm:mb-3 text-sm sm:text-base">Intellectual Property</h3>
                  <p className="text-gray-700 text-justify leading-relaxed text-xs sm:text-sm">
                    Respect all intellectual property rights and not share, distribute, or reproduce our materials without permission.
                  </p>
                </div>
                <div className="p-3 sm:p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-2 sm:mb-3 text-sm sm:text-base">Community Guidelines</h3>
                  <p className="text-gray-700 text-justify leading-relaxed text-xs sm:text-sm">
                    Maintain respectful communication and follow community guidelines in all interactions.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="border-l-4 border-purple-500 pl-4 sm:pl-6">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-3 sm:w-4 h-3 sm:h-4 text-purple-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-purple-800">Payment Terms & Refunds</h2>
              </div>
              <div className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
                <p className="mb-4 sm:mb-6">
                  All payments are processed securely through third-party payment processors. By making a purchase, you agree to the following terms:
                </p>

                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div className="p-3 sm:p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h3 className="font-bold text-purple-800 mb-2 sm:mb-3 text-sm sm:text-base">Payment Processing</h3>
                    <p className="text-gray-700 text-justify leading-relaxed text-xs sm:text-sm">
                      All fees are due immediately upon enrollment unless otherwise specified. Recurring payments will be charged automatically.
                    </p>
                  </div>

                  <div className="p-3 sm:p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h3 className="font-bold text-purple-800 mb-2 sm:mb-3 text-sm sm:text-base">Refund Policy</h3>
                    <p className="text-gray-700 text-justify leading-relaxed text-xs sm:text-sm">
                      Refunds may be available within specified time frames as outlined in individual program terms. All refund requests must be submitted in writing.
                    </p>
                  </div>

                  <div className="p-3 sm:p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h3 className="font-bold text-purple-800 mb-2 sm:mb-3 text-sm sm:text-base">Subscription Management</h3>
                    <p className="text-gray-700 text-justify leading-relaxed text-xs sm:text-sm">
                      You may cancel recurring subscriptions at any time through your account settings or by contacting support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="border-l-4 border-purple-500 pl-4 sm:pl-6">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Gavel className="w-3 sm:w-4 h-3 sm:h-4 text-purple-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-purple-800">Disclaimers & Limitations</h2>
              </div>
              
              <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-6">
                <div className="p-4 sm:p-6 bg-red-50 rounded-lg border border-red-200">
                  <h3 className="font-bold text-red-800 mb-2 sm:mb-4 text-sm sm:text-base">Important Disclaimers:</h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                      <p className="text-red-700 text-xs sm:text-sm">No guarantee of financial results or business success</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                      <p className="text-red-700 text-xs sm:text-sm">Results depend on individual effort, market conditions, and other factors</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                      <p className="text-red-700 text-xs sm:text-sm">Educational content is for informational purposes only</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                      <p className="text-red-700 text-xs sm:text-sm">Not professional financial, legal, or business advice</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 sm:p-4 bg-purple-100 rounded-lg border border-purple-300">
                <p className="text-gray-700 text-justify leading-relaxed text-xs sm:text-sm">
                  Relort Media's liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="border-l-4 border-purple-500 pl-4 sm:pl-6">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3 sm:w-4 h-3 sm:h-4 text-purple-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-purple-800">Contact Information</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify mb-4 sm:mb-6 text-sm sm:text-base">
                For questions about these Terms or our services, please contact us:
              </p>
              
              <div className="p-4 sm:p-6 bg-purple-50 rounded-lg border border-purple-200 space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <p className="text-gray-700 text-sm sm:text-base">
                  <span className="font-semibold">Email:</span> <a href="mailto:support@viralcoach.com" className="text-purple-600 hover:underline">support@viralcoach.com</a>
                </p>
              </div>
              
              <div className="p-3 sm:p-4 bg-purple-100 rounded-lg border border-purple-300 mb-4 sm:mb-6">
                <p className="text-gray-700 text-justify leading-relaxed text-xs sm:text-sm">
                  These Terms may be updated periodically. Continued use of our services after changes constitutes acceptance of the new Terms.
                </p>
              </div>
              
              <div className="p-4 sm:p-6 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-bold text-purple-800 mb-2 sm:mb-3 text-sm sm:text-base">Governing Law</h3>
                <p className="text-gray-700 text-justify leading-relaxed text-xs sm:text-sm">
                  These Terms are governed by the laws of Delaware, USA. Any disputes will be resolved through binding arbitration 
                  in accordance with the rules of the American Arbitration Association.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}