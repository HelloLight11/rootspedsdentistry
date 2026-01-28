'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

const preventiveServices = [
  {
    title: 'Pediatric Exams and Cleanings',
    content:
      'Regular dental exams and cleanings are the cornerstone of your child\'s oral health. During each visit, Dr. Joey will thoroughly examine your child\'s teeth, gums, and mouth to catch any issues early. Our gentle hygienists will remove plaque and tartar buildup, polish those little teeth to a shine, and make the whole experience fun and comfortable. We recommend visits every six months to keep smiles healthy and bright!',
  },
  {
    title: 'Pediatric Fluoride Treatments',
    content:
      'Fluoride treatments are one of the best ways to keep dental decay at bay. A simple, non-invasive procedure, fluoride treatments help to keep your child\'s enamel strong. After your little one\'s cleaning, we\'ll apply a fluoride-rich varnish or gel; we may ask you refrain from allowing your child to eat or drink anything for 30 minutes or so following their visit. Fluoride helps kickstart a process called "remineralization," which restores essential minerals like calcium and phosphate to the teeth, keeping your child\'s enamel hard and resistant to acids, like those that cause tooth decay.',
  },
  {
    title: 'Dental Sealants',
    content:
      'Dental sealants are like an invisible force field for your child\'s teeth: we brush on a clear liquid resin that hardens under a quick UV light zap, forming a tough barrier over those tricky grooves. It locks out bacteria, acids, and sneaky food bits that love to spark cavities—especially on the back molars that are prime trouble spots. A fast, painless win for cavity-proof smiles!',
  },
  {
    title: 'Space Maintainers',
    content:
      'When a baby tooth is lost too early—whether from decay, injury, or extraction—the surrounding teeth can shift into the empty space. Space maintainers are custom-fitted appliances that hold the spot open until the permanent tooth is ready to come in. They\'re comfortable, easy to care for, and help ensure your child\'s adult teeth have room to emerge straight and healthy. Think of them as little placeholders for a perfect smile!',
  },
];

function PreventiveAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-0">
      {preventiveServices.map((service, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className={`w-full text-left py-5 transition-all duration-300 ${
              openIndex === index
                ? 'border-2 border-[#3d4f5f] rounded-lg px-4 -mx-4'
                : 'border-b border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {openIndex === index && (
                  <div className="w-1 h-8 bg-[#7cb342] rounded-full" />
                )}
                <h3 className="text-lg md:text-xl font-bold text-[#3d2f24] font-[family-name:var(--font-fraunces)]">
                  {service.title}
                </h3>
              </div>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                  openIndex === index ? 'bg-[#7cb342]' : 'bg-[#b8f5a6]'
                }`}
              >
                {openIndex === index ? (
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M20 12H4"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-[#2d5a27]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                )}
              </div>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-[#595351] leading-relaxed mt-4 pl-4">
                    {service.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      ))}
    </div>
  );
}

export default function PreventativeCarePage() {
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
              Preventative Care
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Keeping your child&apos;s smile healthy and bright
            </p>
          </motion.div>
        </div>
      </section>

      {/* Preventive Services Accordion Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7cb342] font-[family-name:var(--font-fraunces)]">
              Preventative Dentistry Services
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/PreventativeCare.jpeg"
                    alt="Child brushing teeth"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Accordion */}
            <AnimatedSection direction="right" delay={0.2}>
              <PreventiveAccordion />
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
