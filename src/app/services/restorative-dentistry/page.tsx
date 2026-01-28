'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

const benefits = [
  {
    title: 'Alleviates Discomfort',
    description:
      'Cavities and damaged teeth can lead to considerable pain and sensitivity for your child. Restorative treatments relieve discomfort, enabling your child to smile, eat, and play comfortably once more.',
  },
  {
    title: 'Prevents Additional Damage',
    description:
      'Left untreated, cavities and tooth damage can spread and worsen over time. Restorative treatments stop decay in its tracks and protect surrounding teeth from further damage.',
  },
  {
    title: 'Restores Aesthetics & Function',
    description:
      "Restorative treatments repair your child's damaged teeth, restoring their ability to chew and speak effectively. Our tooth-colored restorations blend naturally with your child's smile, enhancing their confidence and self-esteem.",
  },
];

const faqs = [
  {
    question: 'What are tooth-colored fillings?',
    answer:
      'Tooth-colored composite fillings are made from a mixture of plastic and fine glass particles. They blend seamlessly with your child\'s natural teeth, providing a discreet and durable solution for cavities. Unlike silver amalgam fillings, composites bond directly to the tooth structure, often requiring less removal of healthy tooth material.',
  },
  {
    question: 'When does my child need a crown?',
    answer:
      'Crowns are recommended when a tooth has extensive decay, a large filling that needs replacement, or has been weakened by trauma. For baby teeth, we offer both stainless steel crowns (durable and cost-effective) and white zirconia crowns (for a natural appearance). Crowns protect the tooth and restore its function until it naturally falls out.',
  },
  {
    question: 'What is Silver Diamine Fluoride (SDF)?',
    answer:
      'SDF is a non-invasive treatment that can stop cavities from progressing. It\'s especially useful for very young children, those with special needs, or patients with dental anxiety. While SDF does leave a dark stain on the treated area, it\'s an excellent option when traditional treatment isn\'t immediately possible.',
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
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-[#7cb342]">
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
                  <p className="text-[#595351] leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function BenefitsSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#7cb342] font-[family-name:var(--font-fraunces)]">
            Restorative Dentistry Benefits
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="relative flex flex-col items-center max-w-sm mx-auto md:max-w-none">
                {/* Arch card with border */}
                <div
                  className="relative w-full border-2 border-[#7cb342] pt-16 md:pt-20 pb-8 md:pb-10 px-4 md:px-6 text-center"
                  style={{
                    borderRadius: '9999px 9999px 16px 16px',
                    minHeight: '320px',
                  }}
                >
                  {/* Logo positioned at the top center */}
                  <div className="absolute -top-8 md:-top-10 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center">
                      <Image
                        src="/images/logo.png"
                        alt="Roots Pediatric Dentistry"
                        width={72}
                        height={72}
                        className="rounded-full w-14 h-14 md:w-[72px] md:h-[72px]"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-[#3d2f24] mb-3 md:mb-4 mt-4 font-[family-name:var(--font-fraunces)]">
                    {benefit.title}
                  </h3>
                  <p className="text-[#595351] text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function RestorativeDentistryPage() {
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
              Restorative Dentistry
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Restoring your child&apos;s smile to its natural beauty
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section with Arches */}
      <BenefitsSection />

      {/* Main Content */}
      <section className="py-20 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="space-y-6">
                <p className="text-lg text-[#595351] leading-relaxed">
                  At Roots, we&apos;re dedicated to making your child&apos;s smile shine brighter than ever. From filling cavities to performing specialized procedures like SDF (Silver Diamine Fluoride) and pulpotomies, we restore decayed or damaged teeth with care and precision.
                </p>
                <p className="text-lg text-[#595351] leading-relaxed">
                  We understand that cavities happen, and we&apos;re here to help without judgment. Our gentle approach ensures your child feels comfortable during any restorative procedure. We use the latest techniques and materials to provide durable, natural-looking restorations.
                </p>
                <p className="text-lg text-[#595351] leading-relaxed">
                  For baby teeth, we offer tooth-colored fillings, stainless steel crowns, and when necessary, pulp therapy to save teeth that might otherwise need extraction. Preserving baby teeth is important for proper spacing and development of permanent teeth.
                </p>

                <div className="mt-8 p-6 bg-white rounded-2xl shadow-sm">
                  <h3 className="text-lg font-semibold text-[#3d2f24] mb-4">
                    Our Restorative Services:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Tooth-colored composite fillings',
                      'Stainless steel and white crowns',
                      'Silver Diamine Fluoride (SDF) treatment',
                      'Pulpotomy (baby root canal)',
                      'Space maintainers',
                      'Gentle extractions when necessary',
                    ].map((highlight, index) => (
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
                        <span className="text-[#595351]">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative sticky top-32">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <div
                    className="w-full h-full bg-cover bg-top"
                    style={{ backgroundImage: 'url("/images/restorative_service_web.jpg")' }}
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#b8f5a6] rounded-2xl -z-10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#ffa797] rounded-full -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#7cb342] font-[family-name:var(--font-fraunces)]">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection delay={0.2}>
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
              { name: 'First Visit', href: '/services/first-visit' },
              { name: 'Infant Dentistry', href: '/services/infant-dentistry' },
              { name: 'Preventative Care', href: '/services/preventative-care' },
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
