'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'First Visit',
    description: 'Making your child\'s first dental experience positive and fun. We help establish healthy habits from the start.',
    href: '/services/first-visit',
    icon: '🌟',
  },
  {
    title: 'Infant Dentistry / Peekaboo Exam',
    description: 'Gentle examinations for infants and toddlers. Our Peekaboo Exam makes early dental visits easy and stress-free.',
    href: '/services/infant-dentistry',
    icon: '👶',
  },
  {
    title: 'Preventative Care',
    description: 'Regular check-ups, cleanings, and fluoride treatments to keep your child\'s smile healthy and cavity-free.',
    href: '/services/preventative-care',
    icon: '🛡️',
  },
  {
    title: 'Restorative Dentistry',
    description: 'Expert care for cavities, damaged teeth, and other issues. We restore smiles with gentle, effective treatments.',
    href: '/services/restorative-dentistry',
    icon: '✨',
  },
  {
    title: 'Sedation Dentistry',
    description: 'Comfortable sedation options for anxious children or extensive procedures. Your child\'s comfort is our priority.',
    href: '/services/sedation-dentistry',
    icon: '😴',
  },
  {
    title: 'Special Needs Dentistry',
    description: 'Compassionate, customized care for children with developmental, physical, or behavioral challenges.',
    href: '/services/special-needs-dentistry',
    icon: '💚',
  },
  {
    title: 'Emergency Dentistry',
    description: 'Prompt care for dental emergencies. Toothaches, chipped teeth, and trauma treated quickly and effectively.',
    href: '/services/emergency-dentistry',
    icon: '🚨',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#2d5a27]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="inline-block bg-[#b8f5a6] text-[#2d5a27] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              What We Offer
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Comprehensive pediatric dental care for children of all ages, from infants to teens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.href} delay={index * 0.1}>
                <Link href={service.href} className="block h-full">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col group">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-serif font-bold text-[#1e293b] mb-3 group-hover:text-[#2d5a27] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#4b5563] leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#2d5a27] font-medium group-hover:gap-4 transition-all duration-300">
                      Learn more
                      <svg
                        className="w-4 h-4"
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
                  </div>
                </Link>
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
            'linear-gradient(to bottom, rgba(45, 90, 39, 0.9), rgba(45, 90, 39, 0.95)), url("https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2074")',
        }}
      >
        <AnimatedSection className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Questions About Our Services?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            We&apos;re here to help! Contact us to learn more about how we can care for your child&apos;s smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#2d5a27] px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#b8f5a6] transition-all duration-300 hover:shadow-2xl"
            >
              Contact Us
            </Link>
            <a
              href="tel:+13106208181"
              className="border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-[#2d5a27] transition-all duration-300"
            >
              Call (310) 620-8181
            </a>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
