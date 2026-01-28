'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'When should I first take my child to the dentist?',
    answer:
      "The American Academy of Pediatric Dentistry (AAPD) advises that children have their first dental visit by their first birthday or when their first tooth appears, whichever occurs first. Early visits enable us to monitor your child's dental development and offer parents tailored guidance and support. Most crucially, they help your child grow comfortable with dental visits from a young age, laying the foundation for a lifetime of healthy oral care.",
  },
  {
    question: "What should I bring to my child's first dental exam?",
    answer:
      "To ensure a smooth and stress-free check-in for your child's first dental visit, please bring the following items:",
    bullets: [
      'Completed new patient forms (automatically emailed to you after scheduling)',
      'Dental insurance card',
      'Valid form of identification',
      "Your child's favorite comfort toy or blanket",
      'A list of any questions you may have',
    ],
  },
  {
    question: 'Can I be with my child during their visit?',
    answer:
      'Absolutely! We warmly encourage parents and caregivers to join their child during dental visits. Your presence helps foster trust between your child and our team, creating positive and lasting memories of their time at Roots.',
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 pb-4">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between text-left py-2 group"
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#3d2f24] pr-4 font-[family-name:var(--font-fraunces)]">
              {faq.question}
            </h3>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                openIndex === index
                  ? 'bg-[#7cb342]'
                  : 'bg-[#7cb342]'
              }`}
            >
              <svg
                className={`w-6 h-6 text-white transition-transform duration-300 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v12M6 12h12"
                />
              </svg>
            </div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-2 pb-4 flex gap-4">
                  <div className="w-1 bg-[#7cb342] rounded-full flex-shrink-0" />
                  <div>
                    <p className="text-[#595351] leading-relaxed">{faq.answer}</p>
                    {faq.bullets && (
                      <ul className="mt-3 space-y-2">
                        {faq.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2 text-[#595351]">
                            <span className="w-2 h-2 bg-[#3d2f24] rounded-sm mt-2 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function FirstVisitPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#2d5a27]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-block bg-[#b8f5a6] text-[#2d5a27] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Our Services
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-fraunces)]">
              First Visit
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Making your child&apos;s first dental experience positive and fun
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 mb-16">
            <AnimatedSection>
              <p className="text-lg text-[#595351] leading-relaxed">
                We understand that the first dental visit can be a new and sometimes uncertain experience for both children and parents. At Roots Pediatric Dentistry, we go above and beyond to ensure that your child&apos;s first visit is comfortable, educational, and even enjoyable!
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg text-[#595351] leading-relaxed">
                Dr. Joey and our friendly team are experts at helping children feel at ease. We take our time to introduce your child to our office, explain what we do in kid-friendly terms, and make sure they feel safe throughout the entire visit.
              </p>
            </AnimatedSection>
          </div>

          {/* What to Expect */}
          <AnimatedSection delay={0.2}>
            <div className="mb-16 p-8 bg-[#faf8f5] rounded-2xl">
              <h3 className="text-2xl font-bold text-[#3d2f24] mb-6 font-[family-name:var(--font-fraunces)]">
                What to Expect:
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'A warm welcome from our friendly staff',
                  'A tour of our kid-friendly office',
                  'Gentle examination of teeth, gums, and bite',
                  'Age-appropriate cleaning if needed',
                  'Discussion of oral hygiene habits and nutrition',
                  "Answers to all your questions about your child's dental health",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-[#2d5a27] flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#595351]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#7cb342] font-[family-name:var(--font-fraunces)]">
              First Visit FAQ
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/FirstVisit.jpeg"
                  alt="Child at first dental visit"
                  width={600}
                  height={500}
                  className="object-cover w-full h-auto"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <FAQAccordion />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#faf8f5]">
        <AnimatedSection className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3d2f24] mb-6 font-[family-name:var(--font-fraunces)]">
            Ready to Schedule an Appointment?
          </h2>
          <p className="text-lg text-[#595351] mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your child&apos;s appointment. We look forward to
            helping your little one achieve a healthy, beautiful smile!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.dental4.me/rootspediatricdentistry/1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2d5a27] hover:bg-[#478449] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg"
            >
              Book an Appointment
            </a>
            <a
              href="tel:+13106208181"
              className="border-2 border-[#2d5a27] text-[#2d5a27] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#2d5a27] hover:text-white transition-all duration-300"
            >
              Call (310) 620-8181
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3d2f24] font-[family-name:var(--font-fraunces)]">
              Explore Our Other Services
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Infant Dentistry', href: '/services/infant-dentistry' },
              { name: 'Preventative Care', href: '/services/preventative-care' },
              { name: 'Restorative Dentistry', href: '/services/restorative-dentistry' },
              { name: 'Sedation Dentistry', href: '/services/sedation-dentistry' },
              { name: 'Special Needs Dentistry', href: '/services/special-needs-dentistry' },
              { name: 'Emergency Dentistry', href: '/services/emergency-dentistry' },
            ].map((service, index) => (
              <AnimatedSection key={service.href} delay={index * 0.05}>
                <Link
                  href={service.href}
                  className="block p-6 bg-[#faf8f5] rounded-xl hover:bg-[#b8f5a6] transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[#3d2f24] group-hover:text-[#2d5a27]">
                      {service.name}
                    </span>
                    <svg
                      className="w-5 h-5 text-[#2d5a27] opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
