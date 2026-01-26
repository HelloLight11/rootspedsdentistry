'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

const benefits = [
  {
    title: 'Alleviates Discomfort',
    description:
      'Cavities and damaged teeth can lead to considerable pain and sensitivity for your child. Restorative treatments relieve discomfort, enabling your child to smile, eat, and play comfortably once more.',
  },
  {
    title: 'Prevents Additional Damage',
    description:
      'Cavities and damaged teeth can lead to considerable pain and sensitivity for your child. Restorative treatments relieve discomfort, enabling your child to smile, eat, and play comfortably once more.',
  },
  {
    title: 'Restores Aesthetics & Function',
    description:
      "Restorative treatments repair your child's damaged teeth, restoring their ability to chew and speak effectively. Our tooth-colored restorations blend naturally with your child's smile, enhancing their confidence and self-esteem.",
  },
];

function BenefitsSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-[#7cb342]">
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
                  <h3 className="text-lg md:text-xl font-bold text-[#3d2f24] mb-3 md:mb-4 mt-4">
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
    <ServicePageTemplate
      title="Restorative Dentistry"
      subtitle="Restoring your child's smile to its natural beauty"
      description={[
        "At Roots, we're dedicated to making your child's smile shine brighter than ever. From filling cavities to performing specialized procedures like SDF (Silver Diamine Fluoride) and pulpotomies, we restore decayed or damaged teeth with care and precision.",
        "We understand that cavities happen, and we're here to help without judgment. Our gentle approach ensures your child feels comfortable during any restorative procedure. We use the latest techniques and materials to provide durable, natural-looking restorations.",
        "For baby teeth, we offer tooth-colored fillings, stainless steel crowns, and when necessary, pulp therapy to save teeth that might otherwise need extraction. Preserving baby teeth is important for proper spacing and development of permanent teeth.",
      ]}
      highlights={[
        'Tooth-colored composite fillings',
        'Stainless steel and white crowns',
        'Silver Diamine Fluoride (SDF) treatment',
        'Pulpotomy (baby root canal)',
        'Space maintainers',
        'Gentle extractions when necessary',
      ]}
      imageUrl="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068"
    >
      <BenefitsSection />
    </ServicePageTemplate>
  );
}
