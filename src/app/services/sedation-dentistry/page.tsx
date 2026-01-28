'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const sedationOptions = [
  {
    title: 'Nitrous Oxide (Laughing Gas)',
    description:
      'Nitrous oxide is a gentle, safe sedation option that helps children feel calm and comfortable during dental procedures. This pleasant-smelling gas, mixed with oxygen, is delivered through a small nasal mask. Its effects fade quickly post-treatment, allowing your child to resume normal activities right away.',
    benefits: [
      'Rapid onset and recovery',
      'Child remains conscious and responsive during treatment',
      'No lasting after-effects',
      'Suitable for mild to moderate anxiety',
    ],
  },
  {
    title: 'Oral Conscious Sedation',
    description:
      'Oral Conscious Sedation is a conservative method Dr. Joey uses to help children feel comfortable during their treatment. Dr. Joey will give your child an oral sedative (either in liquid or pill form) just before their procedure. Your child will be awake and aware, yet comfortable, through the treatment.',
    benefits: [
      'Rapid onset and comfort during treatment',
      'Child remains conscious during treatment',
      'Suitable for moderate anxiety',
    ],
  },
  {
    title: 'General Anesthesia',
    description:
      'For children requiring extensive dental work, those with special healthcare needs, or those with severe anxiety, general anesthesia may be advised. Under general anesthesia, your child will be fully asleep and comfortable throughout the dental procedure. Dr. Joey collaborates with highly skilled anesthesiologists to ensure your child\'s safety at every step.',
    benefits: [
      'Complete comfort during the procedure',
      'No recollection of the treatment',
      'Suitable for complex dental procedures',
      'Ideal for children with special needs or significant anxiety',
    ],
  },
];

function SedationOptionsSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {sedationOptions.map((option, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="relative flex flex-col items-center max-w-sm mx-auto md:max-w-none h-full">
                {/* Arch card with border */}
                <div
                  className="relative w-full border-2 border-[#7cb342] pt-16 md:pt-20 pb-8 md:pb-10 px-4 md:px-6 h-full"
                  style={{
                    borderRadius: '9999px 9999px 16px 16px',
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
                  <h3 className="text-lg md:text-xl font-bold text-[#3d2f24] mb-3 md:mb-4 mt-4 text-center font-[family-name:var(--font-fraunces)]">
                    {option.title}
                  </h3>
                  <p className="text-[#595351] text-sm leading-relaxed mb-4">
                    {option.description}
                  </p>
                  <p className="text-[#3d2f24] font-semibold text-sm mb-2">
                    Benefits of {option.title.split(' ')[0]} {option.title.includes('Oxide') ? 'Nitrous Oxide' : option.title.includes('Oral') ? 'Oral Sedation' : 'General Anesthesia'}:
                  </p>
                  <ul className="space-y-1">
                    {option.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#595351] text-sm">
                        <span className="w-2 h-2 bg-[#3d2f24] rounded-sm mt-1.5 flex-shrink-0" />
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

export default function SedationDentistryPage() {
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
              Sedation Dentistry
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Comfortable care for anxious or young patients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sedation Options with Arches */}
      <SedationOptionsSection />

      {/* Main Content */}
      <section className="py-20 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="space-y-6">
                <p className="text-lg text-[#595351] leading-relaxed">
                  At Roots, we understand that some children may feel anxious about dental visits or require extensive treatment. That&apos;s why we offer multiple sedation methods to ensure your child&apos;s comfort during dental procedures.
                </p>
                <p className="text-lg text-[#595351] leading-relaxed">
                  We offer nitrous oxide (laughing gas) for mild anxiety, oral sedation for moderate cases, and general anesthesia for more extensive procedures or highly anxious patients. Dr. Joey will discuss all options with you to determine the best approach for your child&apos;s needs.
                </p>
                <p className="text-lg text-[#595351] leading-relaxed">
                  Safety is our top priority. Our team is specially trained in pediatric sedation, and we carefully monitor your child throughout the entire procedure. We&apos;ll provide detailed pre- and post-sedation instructions to ensure a smooth experience.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative sticky top-32">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <div
                    className="w-full h-full bg-cover bg-top"
                    style={{ backgroundImage: 'url("/images/sedation_section.jpeg")' }}
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#b8f5a6] rounded-2xl -z-10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#ffa797] rounded-full -z-10" />
              </div>
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
              { name: 'Restorative Dentistry', href: '/services/restorative-dentistry' },
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
