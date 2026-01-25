'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const services = [
  {
    title: 'First Visit',
    description:
      'Make your child\'s first dental experience positive and fun. We take our time to introduce your child to our office and ensure they feel safe.',
    href: '/services/first-visit',
    icon: 'star',
  },
  {
    title: 'Infant Dentistry',
    description:
      'Early dental care starting from the first tooth. We help establish healthy habits from the very beginning of your child\'s dental journey.',
    href: '/services/infant-dentistry',
    icon: 'baby',
  },
  {
    title: 'Preventative Care',
    description:
      'Regular check-ups and cleanings keep your child\'s teeth and gums sparkling and strong. Prevention is the foundation of lifelong oral health.',
    href: '/services/preventative-care',
    icon: 'shield',
  },
  {
    title: 'Restorative Dentistry',
    description:
      'From filling cavities to specialized procedures like SDF and pulpotomies, we restore your child\'s smile to full health.',
    href: '/services/restorative-dentistry',
    icon: 'tooth',
  },
  {
    title: 'Sedation Dentistry',
    description:
      'Multiple sedation options including oral and IV sedation ensure your child\'s comfort during any dental procedure.',
    href: '/services/sedation-dentistry',
    icon: 'calm',
  },
  {
    title: 'Special Needs Dentistry',
    description:
      'Compassionate, patient care tailored for children with special needs. Every child deserves a positive dental experience.',
    href: '/services/special-needs-dentistry',
    icon: 'heart',
  },
];

const testimonials = [
  {
    name: 'Stephanie',
    text: 'We absolutely love Dr. Joey! I myself have a fear of going to the dentist from when I was young, but with Dr. Joey I feel so calm bringing my girls here. We\'ve always had a great experience at every visit!',
  },
  {
    name: 'Tanya',
    text: 'I took my 1 year old here for his first visit and we had the best experience! Dr. Joey was so kind, friendly, and welcoming. We left with great tips and look forward to all of our future visits here.',
  },
  {
    name: 'David',
    text: 'Love Roots Dentistry for Children! Dr. Joey and his staff are wonderful! My son needed to have a tooth extracted and Dr. Joey was just a superstar. My son didn\'t flinch, and even said that he had fun at his appointment!',
  },
];

const photoScrollImages = [
  '/images/photoscroll1.jpg',
  '/images/photoscroll2.jpg',
  '/images/photoscroll3.jpeg',
  '/images/photoscroll4.jpg',
];

function PhotoScroll() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photoScrollImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-[#f1f5f9]">
        {photoScrollImages.map((src, index) => (
          <motion.div
            key={src}
            initial={false}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 1.1,
            }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={src}
              alt={`Happy patients at Roots Pediatric Dentistry ${index + 1}`}
              fill
              className="object-contain"
              priority={index === 0}
            />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {photoScrollImages.map((src, index) => (
          <button
            key={src}
            onClick={() => setCurrentIndex(index)}
            className={`relative w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentIndex
                ? 'ring-4 ring-[#2d5a27] scale-105'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover object-top"
            />
          </button>
        ))}
      </div>

      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + photoScrollImages.length) % photoScrollImages.length)}
        className="absolute left-4 top-[calc(50%-40px)] -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6 text-[#2d5a27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % photoScrollImages.length)}
        className="absolute right-4 top-[calc(50%-40px)] -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6 text-[#2d5a27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section - Modern Centered Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/heroimage.jpeg"
            alt="Happy children smiling"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        </div>

        {/* Hero Content - Centered */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block bg-white/90 backdrop-blur-sm text-[#2d5a27] px-5 py-2 rounded-full text-sm font-semibold mb-6"
          >
            Welcome to Roots Pediatric Dentistry
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Planting seeds for lifelong <span className="text-[#a8e6cf]">smiles</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Pediatric dentist Dr. Joey Pedram and our caring team are dedicated to providing
            exceptional dental care for infants, children, and teens in a fun, comfortable environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#2d5a27] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#a8e6cf] transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Book Appointment
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+13106208181"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#2d5a27] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b8f5a6] transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (310) 620-8181
            </a>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#2d5a27] transition-all duration-300"
            >
              Meet Dr. Joey
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Welcome Section with Photo Scroll */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block bg-[#b8f5a6]/30 text-[#2d5a27] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Our Practice
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              Comprehensive Pediatric Dental Care
            </h2>
            <p className="text-lg text-[#4b5563] max-w-2xl mx-auto">
              From first tooth to teen years, we provide complete dental care tailored to your child&apos;s unique needs.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <PhotoScroll />
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block bg-[#b8f5a6]/30 text-[#2d5a27] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Why Families Love Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              A Dental Home Your Child Will Love
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Fun Environment',
                description: 'Kid-friendly office designed to make dental visits exciting',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: 'Gentle Care',
                description: 'Patient, compassionate approach for anxious little ones',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: '15+ Years Experience',
                description: 'Trusted expertise in pediatric dental care',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Convenient Hours',
                description: 'Flexible scheduling that works for busy families',
              },
            ].map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-16 h-16 bg-[#b8f5a6]/30 rounded-full flex items-center justify-center mx-auto mb-4 text-[#2d5a27] group-hover:bg-[#2d5a27] group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#1e293b] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#4b5563]">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Doctor Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/drjoey-photo.jpg"
                    alt="Dr. Joey Pedram"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#b8f5a6] rounded-2xl -z-10" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <span className="inline-block bg-[#b8f5a6]/30 text-[#2d5a27] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Meet Your Dentist
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-6">
                Dr. Joey Pedram
              </h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                Dr. Joey is a pediatric dentist with over 15 years of experience caring
                for children&apos;s smiles. He received his dental degree from USC School of Dentistry
                and completed his pediatric residency at Tufts University.
              </p>
              <p className="text-[#4b5563] leading-relaxed mb-6">
                His gentle approach and genuine love for working with children make every visit
                a positive experience. You might even catch him singing a song while counting teeth!
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-[#334155]">
                  <svg className="w-4 h-4 text-[#2d5a27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pediatric Specialist
                </span>
                <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-[#334155]">
                  <svg className="w-4 h-4 text-[#2d5a27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  15+ Years Experience
                </span>
                <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-[#334155]">
                  <svg className="w-4 h-4 text-[#2d5a27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  USC Graduate
                </span>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#2d5a27] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#478449] transition-all duration-300"
              >
                Learn More About Dr. Joey
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block bg-[#b8f5a6]/30 text-[#2d5a27] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              Comprehensive Care for Growing Smiles
            </h2>
            <p className="text-lg text-[#4b5563] max-w-2xl mx-auto">
              From baby&apos;s first tooth to teenage braces, we provide complete dental care for every stage.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.08}>
                <Link href={service.href} className="block h-full group">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#2d5a27] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#2d5a27] to-[#478449] rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M16 2c-3.3 0-6.1 1.2-8 3.2C6.1 3.2 4.5 2.5 2.8 2.5c-1 0-1.8.8-1.8 1.8 0 2.5 1.5 4.7 3.7 5.7-.4 1.2-.7 2.5-.7 3.9 0 1.8.4 3.5 1 5l2 8.6c.2.8.9 1.5 1.8 1.5h2.4c.9 0 1.6-.6 1.8-1.5l1-4h6l1 4c.2.8.9 1.5 1.8 1.5h2.4c.9 0 1.6-.6 1.8-1.5l2-8.6c.6-1.5 1-3.2 1-5 0-1.4-.2-2.7-.7-3.9 2.2-1 3.7-3.2 3.7-5.7 0-1-.8-1.8-1.8-1.8-1.7 0-3.3.7-5.2 2.7-1.9-2-4.7-3.2-8-3.2zm0 3c2.5 0 4.8 1 6.3 2.7.3.3.7.5 1.1.5.4 0 .8-.1 1.1-.4 1.2-1.2 2.3-1.8 3.2-1.8-.3 1.2-1.2 2.2-2.4 2.7-.6.3-1 .9-1 1.6 0 .3.1.7.2 1 .4 1 .5 2.1.5 3.2 0 1.4-.3 2.7-.8 3.9l-1.8 7.6h-1.2l-1.2-5c-.2-.7-.8-1.2-1.5-1.2h-7.2c-.7 0-1.3.5-1.5 1.2l-1.2 5H7.4l-1.8-7.6c-.5-1.2-.8-2.5-.8-3.9 0-1.1.2-2.2.5-3.2.1-.3.2-.6.2-1 0-.7-.4-1.3-1-1.6-1.2-.5-2.1-1.5-2.4-2.7.9 0 2 .6 3.2 1.8.3.3.7.4 1.1.4.4 0 .8-.2 1.1-.5C9.2 6 11.5 5 14 5h2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#1e293b] mb-2 group-hover:text-[#2d5a27] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#4b5563] leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center text-[#2d5a27] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5} className="text-center mt-10">
            <Link
              href="/services/emergency-dentistry"
              className="inline-flex items-center gap-2 bg-[#ffa797] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#ff8a76] transition-all duration-300 hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Emergency? We&apos;re Here to Help
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block bg-[#b8f5a6]/30 text-[#2d5a27] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Patient Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              What Parents Are Saying
            </h2>
            <p className="text-lg text-[#4b5563]">
              Don&apos;t just take our word for it - hear from families who trust us with their children&apos;s smiles.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.15}>
                <div className="bg-[#f8f9fc] p-8 rounded-2xl h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[#b8f5a6] group">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[#f3c852]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <svg className="w-8 h-8 text-[#b8f5a6] mb-3 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-[#4b5563] leading-relaxed mb-6 flex-grow">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <div className="w-10 h-10 bg-[#2d5a27] rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[#1e293b]">{testimonial.name}</p>
                      <p className="text-sm text-[#4b5563]">Parent</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Payment Section */}
      <section className="py-16 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <AnimatedSection>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-4">
                  Insurance & Payment Options
                </h2>
                <p className="text-[#4b5563] mb-6">
                  We accept most major dental insurance plans and offer flexible payment options to make quality dental care accessible for your family.
                </p>
                <ul className="space-y-3">
                  {[
                    'Most PPO insurance plans accepted',
                    'Flexible payment plans available',
                    'Credit cards accepted',
                    'HSA/FSA eligible',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#2d5a27] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#4b5563]">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-[#f8f9fc] rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#1e293b] mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#2d5a27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-[#4b5563]">
                    <div className="flex justify-between">
                      <span>Monday - Thursday</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday</span>
                      <span className="font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="text-sm text-[#4b5563]">
                      <span className="font-semibold text-[#2d5a27]">Questions about insurance?</span>
                      <br />
                      Call us and we&apos;ll verify your coverage!
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2d5a27] to-[#478449]">
        <AnimatedSection className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Schedule Your Child&apos;s Visit?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            New patients are always welcome. Contact us today to book your child&apos;s first appointment!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13106208181"
              className="inline-flex items-center justify-center gap-2 bg-[#b8f5a6] text-[#2d5a27] px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 hover:shadow-xl"
            >
              Call (310) 620-8181
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#2d5a27] transition-all duration-300"
            >
              Book Online
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
