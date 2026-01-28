'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const preventiveServices = [
  {
    title: 'Professional Cleanings',
    description:
      'Regular professional cleanings remove plaque and tartar buildup that brushing alone cannot eliminate. Our gentle hygienists make the experience comfortable and even fun for kids, helping establish positive dental habits early.',
    benefits: [
      'Removes stubborn plaque and tartar',
      'Polishes teeth for a bright smile',
      'Gentle approach for young patients',
      'Education on proper brushing techniques',
    ],
  },
  {
    title: 'Fluoride Treatments',
    description:
      'Fluoride strengthens tooth enamel and helps prevent cavities. Our quick and painless fluoride treatments provide an extra layer of protection for your child\'s developing teeth.',
    benefits: [
      'Strengthens tooth enamel',
      'Prevents tooth decay',
      'Quick and painless application',
      'Safe for children of all ages',
    ],
  },
  {
    title: 'Dental Sealants',
    description:
      'Sealants are a protective coating applied to the chewing surfaces of back teeth, where most cavities in children occur. This simple procedure can prevent up to 80% of cavities in molars.',
    benefits: [
      'Prevents cavities in molars',
      'Quick and painless application',
      'Lasts for several years',
      'Cost-effective cavity prevention',
    ],
  },
];

function PreventiveServicesSection() {
  return (
    <section className="py-12 md:py-20 bg-[#f8f9fc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7cb342] font-[family-name:var(--font-fraunces)]">
            Our Preventive Services
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {preventiveServices.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="relative flex flex-col items-center max-w-sm mx-auto md:max-w-none h-full">
                {/* Arch card with border */}
                <div
                  className="relative w-full border-2 border-[#7cb342] pt-16 md:pt-20 pb-8 md:pb-10 px-4 md:px-6 h-full bg-white"
                  style={{
                    borderRadius: '9999px 9999px 16px 16px',
                  }}
                >
                  {/* Logo positioned at the top center */}
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

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-[#3d2f24] mb-3 md:mb-4 mt-4 text-center font-[family-name:var(--font-fraunces)]">
                    {service.title}
                  </h3>
                  <p className="text-[#595351] text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-[#3d2f24] font-semibold text-sm mb-2">Benefits:</p>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#595351] text-sm">
                        <span className="w-2 h-2 bg-[#7cb342] rounded-sm mt-1.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
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

      {/* Main Content */}
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

      {/* Preventive Services with Arches */}
      <PreventiveServicesSection />

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
