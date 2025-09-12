import React from "react";

export default function TermsOfService() {
  return (
    <div className="bg-purple-50 min-h-screen py-12 px-6 md:px-20 lg:px-40">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-purple-600">
          Last Updated: <span className="font-medium">August 4th, 2025</span>
        </p>
      </div>

      {/* Content */}
      <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 text-gray-700 space-y-8 leading-relaxed">
        {/* Intro */}
        <section>
          <p>
            Welcome to <strong>Viral Coach, LLC</strong> (“Viral Coach”,
            “Company”, “we”, “us”, “our”). These Terms of Service (the “Terms”)
            govern all products and services provided by Viral Coach, LLC, a
            Delaware limited liability company with a principal mailing address
            at P.O. Box 3626, Palmer, Alaska 99645. By enrolling in,
            purchasing, accessing, or using any Viral Coach™ offering—including
            but not limited to programs, memberships, the Skool™ community,
            workshops, or addenda such as the Testimonial Partnership Addendum—
            you (“Client,” “Member,” “User,” or “you”) accept and agree to be
            legally bound by these Terms and any addenda incorporated herein.
          </p>
        </section>

        {/* Example Section */}
        <section>
          <h2 className="text-2xl font-bold text-purple-700 mb-3">
            1. Agreement Structure
          </h2>
          <p>
            These Terms form a single unified agreement together with the
            Program Agreement, the Skool Membership Agreement, the Skool
            Membership Terms, the Staffing Terms, the Testimonial Partnership
            Addendum, the Acceptable Use Policy, and the Privacy Policy
            (collectively, the “Agreement”). In the event of a conflict between
            these Terms and any specific addendum, the addendum will control
            only for that product or service.
          </p>
        </section>

        {/* Definitions */}
        <section>
          <h2 className="text-2xl font-bold text-purple-700 mb-3">
            2. Definitions
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Client / User / Member</strong> – An individual or entity
              that purchases, subscribes to or uses Viral Coach services.
            </li>
            <li>
              <strong>Program Agreement</strong> – Agreement detailing program
              deliverables, pricing, guarantees, etc.
            </li>
            <li>
              <strong>Skool Membership Agreement</strong> – Governs membership
              in Viral Coach Skool™ community.
            </li>
            <li>
              <strong>Staffing Terms</strong> – Cover candidate recommendations
              for editors/assistants.
            </li>
            <li>
              <strong>Testimonial Partnership Addendum</strong> – Bonus access
              in exchange for testimonials.
            </li>
            <li>
              <strong>Services</strong> – All programs, memberships, consulting,
              content, and recommendations.
            </li>
            <li>
              <strong>Deliverables</strong> – Materials/services under a Program
              or Membership.
            </li>
          </ul>
        </section>

        {/* Continue with ALL sections */}
        <section>
          <h2 className="text-2xl font-bold text-purple-700 mb-3">
            3. Services & Deliverables
          </h2>
          <p>
            We provide specialized social-media coaching and consulting services
            designed to improve your online presence and engagement. The
            specific deliverables for a Program or Membership are described in
            your Program Agreement or Membership Agreement. Typical deliverables
            may include group coaching sessions, 1-on-1 guidance, custom
            timelines, scriptwriting, video editing, strategy calls, and access
            to the Viral Coach™ Skool community. Your entitlement to deliverables
            is contingent upon timely payment and compliance with this Agreement.
          </p>
        </section>

        {/* ⬇ Repeat this pattern for all remaining sections (4 → 16) */}
        <section>
          <h2 className="text-2xl font-bold text-purple-700 mb-3">
            16. Contact
          </h2>
          <p>
            For questions or concerns about these Terms, please contact Viral
            Coach:
          </p>
          <p className="mt-2">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:support@viralcoach.com"
              className="text-purple-600 hover:underline"
            >
              support@viralcoach.com
            </a>
          </p>
          <p>
            <span className="font-semibold">Mail:</span> Viral Coach, LLC, PO
            BOX 3626, Palmer, Alaska 99645, USA
          </p>
        </section>
      </div>
    </div>
  );
}
