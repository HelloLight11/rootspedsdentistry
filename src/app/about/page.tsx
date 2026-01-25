'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const memberships = [
  'American Academy of Pediatric Dentistry',
  'California Society of Pediatric Dentistry',
  'American Dental Association',
  'California Dental Association',
  'San Fernando Valley Dental Society',
];

export default function AboutPage() {
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
              Get to know me
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              About Dr. Joey
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Bio Content */}
            <div>
              <AnimatedSection>
                <div className="prose prose-lg max-w-none">
                  <p className="text-[#4b5563] leading-relaxed mb-6">
                    Dr. Joey grew up in Calabasas, CA. He completed his undergraduate studies
                    at UCLA, receiving his Bachelor of Science in Psychobiology. He went on to
                    earn his Doctor of Dental Surgery (DDS) degree from the University of
                    Southern California School of Dentistry.
                  </p>

                  <p className="text-[#4b5563] leading-relaxed mb-6">
                    After receiving his DDS degree, Dr. Joey completed a residency in Pediatric
                    Dentistry at Tufts University in Boston, MA. He has been a pediatric
                    dentist since 2011. Dr. Joey is currently a member of the American Academy
                    of Pediatric Dentistry, California Society of Pediatric Dentistry, American
                    Dental Association, California Dental Association, and San Fernando Valley
                    Dental Society.
                  </p>

                  <p className="text-[#4b5563] leading-relaxed mb-6">
                    He is a proud world traveler whose most recent trips include Argentina,
                    Brazil, Italy and Turks and Caicos. Recently, while abroad in Vietnam,
                    Dr. Joey volunteered at a pediatric dentistry clinic for indigent Vietnamese
                    children.
                  </p>

                  <p className="text-[#4b5563] leading-relaxed mb-6">
                    Aside from dentistry, Dr. Joey and his wife Tyna, who is an optometrist,
                    have three rambunctious fun-loving boys, Remy, Myles, and Perry. On weekends,
                    they like to take the boys to the beach and are always up for an adventure.
                    Dr. Joey also is involved in coaching his boys&apos; basketball and soccer teams.
                  </p>

                  <p className="text-[#4b5563] leading-relaxed">
                    Dr. Joey prides himself on always being positive and patient with all the
                    little ones he works with and is known for putting a smile on his patients&apos;
                    faces with his playful sense of humor. You might catch him singing a song or
                    two while counting his patients&apos; teeth!
                  </p>
                </div>
              </AnimatedSection>

              {/* Memberships */}
              <AnimatedSection delay={0.2} className="mt-12">
                <h3 className="text-xl font-serif font-bold text-[#1e293b] mb-6">
                  Professional Memberships
                </h3>
                <ul className="space-y-3">
                  {memberships.map((membership, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#2d5a27] rounded-full" />
                      <span className="text-[#4b5563]">{membership}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>

            {/* Image */}
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/drjoey-photo.jpg"
                    alt="Dr. Joey Pedram"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#b8f5a6] rounded-xl -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1e293b]">
              Education & Training
            </h2>
          </AnimatedSection>

          <div className="space-y-8">
            {[
              {
                year: '2011 - Present',
                title: 'Pediatric Dentist',
                description: 'Practicing pediatric dentistry with dedication and care',
              },
              {
                year: '2009 - 2011',
                title: 'Pediatric Dentistry Residency',
                description: 'Tufts University, Boston, MA',
              },
              {
                year: '2005 - 2009',
                title: 'Doctor of Dental Surgery (DDS)',
                description: 'University of Southern California School of Dentistry',
              },
              {
                year: '2001 - 2005',
                title: 'Bachelor of Science in Psychobiology',
                description: 'University of California, Los Angeles (UCLA)',
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="flex gap-8 items-start">
                  <div className="w-32 flex-shrink-0 text-right">
                    <span className="text-sm font-semibold text-[#2d5a27]">{item.year}</span>
                  </div>
                  <div className="relative pb-8 border-l-2 border-[#b8f5a6] pl-8">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-[#2d5a27] rounded-full -translate-x-[9px]" />
                    <h3 className="text-lg font-semibold text-[#1e293b] mb-1">{item.title}</h3>
                    <p className="text-[#4b5563]">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(45, 90, 39, 0.9), rgba(45, 90, 39, 0.95)), url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068")',
        }}
      >
        <AnimatedSection className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Book an Appointment
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Ready to meet Dr. Joey? Schedule your child&apos;s visit today!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-[#2d5a27] px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#b8f5a6] transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Schedule Now
            <svg
              className="w-5 h-5"
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
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
