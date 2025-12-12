"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MediaSplitTabsAbout from '@/components/sections/about/MediaSplitTabsAbout';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Linkedin, Facebook, Instagram } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="mediumSizeExtraLargeTitles"
      background="noiseDiagonalGradient"
      cardStyle="solid-accent"
      primaryButtonStyle="outline"
      secondaryButtonStyle="outline"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Vitality Chiropractic"
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Team", id: "team" },
            { name: "Testimonials", id: "testimonials" }
          ]}
          button={{
            text: "Book Appointment",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="vitality"
          description="Premium chiropractic care designed to restore your wellness and vitality. Experience personalized treatment from our team of expert chiropractors dedicated to your healing journey."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552640918-7slzyrml.jpg"
          imageAlt="Professional chiropractor performing therapeutic adjustment"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <MediaSplitTabsAbout
          title="About Our Clinic"
          description="Restoring mobility and wellness for over 1,000 patients annually through comprehensive chiropractic care and evidence-based treatment protocols."
          tabs={[
            {
              id: "expertise",
              label: "Our Expertise",
              description: "With over 40 years of combined experience, our certified chiropractors specialize in spinal alignment, sports injuries, and preventative wellness. We utilize evidence-based techniques and cutting-edge diagnostic tools to ensure optimal patient outcomes."
            },
            {
              id: "philosophy",
              label: "Our Philosophy",
              description: "We believe that true wellness comes from addressing the root cause of pain, not just masking symptoms. Our holistic approach integrates chiropractic adjustment, therapeutic exercise, nutritional guidance, and lifestyle counseling."
            },
            {
              id: "commitment",
              label: "Patient Care",
              description: "Every patient receives individualized treatment plans tailored to their unique needs and goals. We prioritize your comfort, safety, and long-term health outcomes above all else."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552644026-nio8libc.jpg"
          imageAlt="Modern chiropractic clinic with state-of-the-art wellness equipment"
          imagePosition="right"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardNine
          title="Our Premium Services"
          description="Comprehensive chiropractic treatments designed for optimal wellness"
          features={[
            {
              id: 1,
              title: "Spinal Realignment",
              description: "Advanced chiropractic adjustments utilizing precise techniques to restore proper vertebral alignment and improve nervous system function.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552640918-7slzyrml.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552644026-nio8libc.jpg"
              }
            },
            {
              id: 2,
              title: "Therapeutic Massage",
              description: "Specialized massage therapy to release tension, improve circulation, and accelerate healing from injuries and chronic pain conditions.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552644026-nio8libc.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552640918-7slzyrml.jpg"
              }
            }
          ]}
          showStepNumbers={true}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Experienced healthcare professionals committed to your wellness"
          members={[
            {
              id: "1",
              name: "Dr. Sarah Mitchell",
              role: "Lead Chiropractor",
              description: "20+ years of clinical experience specializing in spinal health and sports medicine. Licensed and certified in advanced adjustive techniques.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552641602-ttrbtwr8.jpg",
              imageAlt: "Dr. Sarah Mitchell portrait",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "2",
              name: "Dr. James Chen",
              role: "Senior Chiropractor",
              description: "Specializes in ergonomic assessment and workplace injury prevention. Certified in pediatric and geriatric chiropractic care.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552642178-9j7a37ay.jpg",
              imageAlt: "Dr. James Chen portrait",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Therapeutic Massage Specialist",
              description: "Licensed massage therapist with 8 years of experience in sports medicine and rehabilitation therapy.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552642822-4gekaoyv.jpg",
              imageAlt: "Emily Rodriguez portrait",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "4",
              name: "Dr. Amanda Foster",
              role: "Wellness Consultant",
              description: "Nutritionist and wellness expert guiding patients toward comprehensive health transformation and prevention.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552643451-y5cwnbgo.jpg",
              imageAlt: "Dr. Amanda Foster portrait",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="Patient Testimonials"
          description="Hear from our satisfied clients about their wellness journey"
          testimonials={[
            {
              id: "1",
              name: "Marcus Johnson",
              handle: "@marcusj",
              testimonial: "After years of chronic back pain, Dr. Sarah's treatment completely transformed my life. I'm now pain-free and more active than ever.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552644597-owc4vb0b.jpg"
            },
            {
              id: "2",
              name: "Jennifer Walsh",
              handle: "@jwalsh",
              testimonial: "The entire team is professional and caring. My posture has improved dramatically and I feel better than I have in years.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552645465-w7wynpto.jpg"
            },
            {
              id: "3",
              name: "Robert Chen",
              handle: "@rchen",
              testimonial: "Premium service with exceptional results. Dr. Chen understood my sports injury perfectly and guided my recovery.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552646088-0rg0l1t4.jpg"
            },
            {
              id: "4",
              name: "Lisa Anderson",
              handle: "@lisaa",
              testimonial: "The massage therapy combined with adjustments has been incredible. Best healthcare decision I've made.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552646913-7omm7v5t.jpg"
            },
            {
              id: "5",
              name: "David Thompson",
              handle: "@dthompson",
              testimonial: "Professional, knowledgeable, and genuinely invested in patient health. I recommend Vitality to everyone.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552647487-22zxyvsr.jpg"
            },
            {
              id: "6",
              name: "Michelle Garcia",
              handle: "@mgarcia",
              testimonial: "Five stars doesn't seem enough. This clinic provides true premium healthcare with real results.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552648070-31macmlr.jpg"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about our services and treatment options."
          faqs={[
            {
              id: "1",
              title: "How many sessions will I need?",
              content: "Treatment duration varies based on your condition. Most patients see significant improvement within 4-6 weeks. Dr. Sarah will create a personalized plan during your initial consultation."
            },
            {
              id: "2",
              title: "Is chiropractic care safe?",
              content: "Yes, chiropractic care is very safe when performed by licensed professionals. Our team uses evidence-based techniques and thoroughly assesses each patient before treatment."
            },
            {
              id: "3",
              title: "Do you accept insurance?",
              content: "We accept most major insurance plans. Our staff will verify your coverage and explain any out-of-pocket costs before your appointment."
            },
            {
              id: "4",
              title: "What should I bring to my first visit?",
              content: "Please bring your insurance card, photo ID, and any relevant medical history. Arrive 15 minutes early to complete intake paperwork."
            },
            {
              id: "5",
              title: "Can children receive chiropractic care?",
              content: "Absolutely. Dr. James specializes in pediatric chiropractic care using gentle techniques safe for children of all ages."
            }
          ]}
          textPosition="left"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Book Your Appointment"
          description="Schedule your wellness journey with us. Our team will contact you shortly to confirm your appointment time."
          inputs={[
            { name: "fullname", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "service", type: "text", placeholder: "Preferred Service", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Briefly describe your health concern or goals",
            rows: 4,
            required: false
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552648567-x9kjfpn7.jpg"
          imageAlt="Modern medical clinic reception area"
          mediaPosition="right"
          buttonText="Book Now"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Vitality Chiropractic"
          columns={[
            {
              title: "Services",
              items: [
                { label: "Spinal Alignment", href: "#services" },
                { label: "Therapeutic Massage", href: "#services" },
                { label: "Wellness Consulting", href: "#services" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Team", href: "#team" },
                { label: "Our Philosophy", href: "#about" },
                { label: "Testimonials", href: "#testimonials" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" }
          ]}
          copyrightText="© Vitality Chiropractic, Inc. 2025. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}