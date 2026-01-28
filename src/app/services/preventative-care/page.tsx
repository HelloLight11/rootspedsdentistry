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

      {/* 1. Main Content - Paragraphs and What to Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="space-y-6">
                <p className="text-lg text-[#595351] leading-relaxed">
                  Regular dental check-ups and cleanings are vital for kids&apos; healthy smiles. Our warm, welcoming dental team ensures your child&apos;s teeth and gums stay sparkling and strong. We carefully examine their mouth and use x-rays when needed to spot any issues early.
                </p>
                <p className="text-lg text-[#595351] leading-relaxed">
                  Preventative care is the foundation of good oral health. By catching potential problems early, we can often treat them with simpler, less invasive procedures. Our goal is to help your child maintain a healthy smile throughout their life.
                </p>
                <p className="text-lg text-[#595351] leading-relaxed">
                  We recommend visits every six months, though some children may benefit from more frequent check-ups. During each visit, we&apos;ll clean your child&apos;s teeth, check for cavities, assess gum health, and provide fluoride treatments to strengthen tooth enamel.
                </p>

                <div className="mt-8 p-6 bg-[#faf8f5] rounded-2xl">
                  <h3 className="text-lg font-semibold text-[#3d2f24] mb-4">
                    What to Expect:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Professional teeth cleaning and polishing',
                      'Comprehensive oral examination',
                      'Digital x-rays when necessary',
                      'Fluoride treatments for cavity prevention',
                      'Dental sealants to protect molars',
                      'Personalized oral hygiene instruction',
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
                  <Image
                    src="/images/PreventativeCare.jpeg"
                    alt="Child receiving preventative dental care"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#b8f5a6] rounded-2xl -z-10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#ffa797] rounded-full -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 2. Preventative Dentistry Benefits - Arches */}
      <section className="py-16 md:py-20 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7cb342] font-[family-name:var(--font-fraunces)]">
              Preventative Dentistry Benefits
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                title: 'Maintains Oral Health',
                description:
                  'Routine preventative care is vital for safeguarding your child\'s oral health. With dental checkups every six months, we can track your child\'s dental growth, quickly identify any issues, and offer timely interventions to maintain a healthy smile. Treatments such as cleanings, fluoride applications, and sealants protect your child\'s teeth from cavities and infections, laying the foundation for a lifetime of strong, healthy smiles.',
              },
              {
                title: 'Building Healthy Habits',
                description:
                  'Preventive visits are the perfect opportunity to teach your child the importance of good oral hygiene habits at home. Our team will demonstrate proper brushing and flossing techniques in an engaging, easy-to-understand way, helping your child take pride in caring for their smile. We can also provide personalized guidance on diet and nutrition to help your child make smile-friendly choices.',
              },
              {
                title: 'Creates a Positive Dental Relationship',
                description:
                  'We know dental visits can feel overwhelming for children. At Roots Pediatric Dentistry, our team creates a warm, welcoming environment to put kids at ease. Dr. Joey and our staff specialize in working with children, ensuring their visits are positive and comfortable. By fostering a good connection with dental care early, we lay the groundwork for a lifetime of healthy oral habits.',
              },
            ].map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative flex flex-col items-center max-w-sm mx-auto md:max-w-none h-full">
                  <div
                    className="relative w-full border-2 border-[#7cb342] pt-16 md:pt-20 pb-8 md:pb-10 px-4 md:px-6 h-full bg-white"
                    style={{
                      borderRadius: '9999px 9999px 16px 16px',
                    }}
                  >
                    <div className="absolute -top-8 md:-top-10 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-md">
                        <Image
                          src="/images/logo.png"
                          alt="Roots Pediatric Dentistry"
                          width={72}
                          height={72}
                          className="rounded-full w-14 h-14 md:w-[72px] md:h-[72px]"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#3d2f24] mb-3 md:mb-4 mt-4 text-center font-[family-name:var(--font-fraunces)]">
                      {benefit.title}
                    </h3>
                    <p className="text-[#595351] text-sm leading-relaxed text-center">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Preventive Services Accordion Section */}
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
                <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-[#7cb342]">
                  <Image
                    src="/images/preventative2_web.jpeg"
                    alt="Child brushing teeth"
                    width={600}
                    height={400}
                    className="w-full h-auto"
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
