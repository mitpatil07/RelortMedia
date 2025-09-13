import React from "react";
import { Shield, FileText, Users, Scale, Eye, AlertTriangle, CheckCircle, Gavel } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 min-h-screen py-12 px-6 md:px-20 lg:px-40 mt-20">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-800 to-purple-900 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-purple-700 text-lg mt-2">
                Last Updated: <span className="font-semibold">August 4th, 2025</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - Single Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 sm:p-8 lg:p-10">
          
          {/* Introduction */}
          <div className="mb-12">
            <div className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed space-y-4">
              <p className="text-justify">
                Welcome to Relort Media, LLC ("<strong>Relort Media</strong>", "<strong>Company</strong>", "<strong>we</strong>", "<strong>us</strong>", "<strong>our</strong>"). These Terms of Service (the "<strong>Terms</strong>") govern all products and services provided by Relort Media, LLC, a Delaware limited liability company with a principal mailing address at P.O. Box 3626, Palmer, Alaska 99645 ("<strong>Relort Media</strong>", "<strong>Company</strong>", "<strong>we</strong>", or "<strong>us</strong>"). By enrolling in, purchasing, accessing, or using any Relort Media™ offering—including but not limited to programs, memberships, the Skool™ community, workshops, or addenda such as the Testimonial Partnership Addendum—you ("<strong>Client</strong>", "<strong>Member</strong>", "<strong>User</strong>", or "<strong>you</strong>") accept and agree to be legally bound by these Terms and any addenda incorporated herein.
              </p>
              <p className="text-justify">
                These Terms form a single unified agreement together with the <strong>Program Agreement</strong>, the <strong>Skool Membership Agreement</strong>, the <strong>Skool Membership Terms</strong>, the <strong>Staffing Terms</strong>, the <strong>Testimonial Partnership Addendum</strong>, the <strong>Acceptable Use Policy</strong>, and the <strong>Privacy Policy</strong> (collectively, the "<strong>Agreement</strong>"). In the event of a conflict between these Terms and any specific addendum, the addendum will control only for that product or service.
              </p>
            </div>
          </div>

          {/* Section 2 - Definitions */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-200 to-purple-300 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-purple-800" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-purple-800">2. Definitions</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6 text-justify">
              To promote clarity and avoid repeating definitions across documents, the following definitions apply throughout the Agreement. Capitalized terms not defined here shall have the meanings given in the relevant addendum.
            </p>

            <div className="space-y-4 pl-4 border-l-4 border-purple-300">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-purple-800 mb-2 text-sm sm:text-base">
                    "Client" / "User" / "Member"
                  </h3>
                  <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                    An individual or entity that purchases, subscribes to or uses Relort Media services.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-purple-800 mb-2 text-sm sm:text-base">
                    "Program Agreement"
                  </h3>
                  <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                    A product-specific agreement for Relort Media's intensive coaching program that sets forth deliverables, pricing, term, guarantees and other program-specific terms.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-purple-800 mb-2 text-sm sm:text-base">
                    "Skool Membership Agreement"
                  </h3>
                  <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                    The agreement governing annual membership in the Relort Media Skool™ community.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-purple-800 mb-2 text-sm sm:text-base">
                    "Skool Membership Terms"
                  </h3>
                  <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                    Additional terms detailing features, payment conditions and guarantees relating to the Skool community.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-purple-800 mb-2 text-sm sm:text-base">
                    "Staffing Terms"
                  </h3>
                  <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                    Terms covering Relort Media's recommendations of candidates for roles such as editors and virtual assistants.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-purple-800 mb-2 text-sm sm:text-base">
                    "Testimonial Partnership Addendum"
                  </h3>
                  <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                    A promotional addendum offering bonus access in exchange for an authentic testimonial.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-purple-800 mb-2 text-sm sm:text-base">
                    "Services"
                  </h3>
                  <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                    All programs, memberships, products, consulting, content, technology, staffing recommendations and related services provided by Relort Media.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-purple-800 mb-2 text-sm sm:text-base">
                    "Deliverables"
                  </h3>
                  <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                    Any materials or services provided to you under a Program Agreement or Membership (e.g., coaching calls, custom program plans, video editing, or Skool community resources).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 - Acceptance */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-200 to-purple-300 rounded-full flex items-center justify-center flex-shrink-0">
                <Gavel className="w-5 h-5 text-purple-800" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-purple-800">3. Acceptance of Terms</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-purple-800 mb-3 text-sm sm:text-base">Binding Agreement</h3>
                <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                  By accessing, using, or purchasing any Relort Media services, you acknowledge that you have read, understood, and agree to be bound by these Terms and all incorporated agreements.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-purple-800 mb-3 text-sm sm:text-base">Modifications</h3>
                <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                  We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website. Continued use of our services after changes constitutes acceptance of the modified Terms.
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-purple-800 mb-3 text-sm sm:text-base">Age Requirements</h3>
                    <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                      You must be at least 18 years old to use our services. By using our services, you represent and warrant that you meet this age requirement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 - Services Overview */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-200 to-purple-300 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-purple-800" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-purple-800">4. Services Overview</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-purple-800 mb-3 text-sm sm:text-base">Coaching Programs</h3>
                <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                  Intensive coaching programs designed to help individuals build and scale their online presence and business.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-purple-800 mb-3 text-sm sm:text-base">Community Access</h3>
                <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                  Exclusive access to the Relort Media Skool™ community with resources, networking, and ongoing support.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-purple-800 mb-3 text-sm sm:text-base">Consulting Services</h3>
                <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                  One-on-one consulting sessions and strategic guidance for business growth and content creation.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-purple-800 mb-3 text-sm sm:text-base">Staffing Solutions</h3>
                <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                  Recommendations and connections for virtual assistants, editors, and other support staff.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 - User Obligations */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-200 to-purple-300 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-purple-800" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-purple-800">5. User Obligations</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-purple-800 mb-3 text-sm sm:text-base">Prohibited Activities</h3>
                    <div className="text-gray-700 text-sm sm:text-base space-y-2">
                      <p>• Sharing login credentials or account access with third parties</p>
                      <p>• Recording, copying, or distributing proprietary content without permission</p>
                      <p>• Using services for illegal activities or to harm others</p>
                      <p>• Attempting to reverse engineer or hack our systems</p>
                      <p>• Posting spam, offensive, or inappropriate content in community spaces</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-purple-800 mb-3 text-sm sm:text-base">Your Responsibilities</h3>
                <div className="text-gray-700 text-sm sm:text-base space-y-2">
                  <p>• Maintain the confidentiality of your account information</p>
                  <p>• Provide accurate and complete information during registration</p>
                  <p>• Comply with all applicable laws and regulations</p>
                  <p>• Respect intellectual property rights</p>
                  <p>• Use services in good faith and for their intended purpose</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 - Payment Terms */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-200 to-purple-300 rounded-full flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-purple-800" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-purple-800">6. Payment Terms</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-purple-800 mb-3 text-sm sm:text-base">Payment Processing</h3>
                <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                  All payments are processed securely through third-party payment processors. You authorize us to charge your selected payment method for all fees.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-purple-800 mb-3 text-sm sm:text-base">Refund Policy</h3>
                <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                  Refund terms are specified in individual program agreements. General refund requests must be submitted within the timeframe specified in your specific agreement.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-purple-800 mb-3 text-sm sm:text-base">Late Payments</h3>
                <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                  Late payments may result in suspension of services and additional fees. We reserve the right to terminate services for non-payment.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-purple-800 mb-3 text-sm sm:text-base">Price Changes</h3>
                <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                  We may change pricing for future purchases. Current agreements remain at their original pricing terms unless otherwise specified.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}