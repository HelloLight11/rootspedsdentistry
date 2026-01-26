'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const services = [
  {
    title: 'First Visit',
    description: 'A warm welcome and gentle introduction to dental care for your little one.',
    href: '/services/first-visit',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: 'Infant Dentistry',
    description: 'Specialized care for babies and toddlers, starting from the first tooth.',
    href: '/services/infant-dentistry',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Preventative Care',
    description: 'Cleanings, exams, and fluoride treatments to keep smiles healthy.',
    href: '/services/preventative-care',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Restorative Dentistry',
    description: 'Gentle fillings and treatments to repair and protect little teeth.',
    href: '/services/restorative-dentistry',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Sedation Dentistry',
    description: 'Safe, comfortable options for anxious patients or complex procedures.',
    href: '/services/sedation-dentistry',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    title: 'Special Needs',
    description: 'Compassionate, individualized care for children with special needs.',
    href: '/services/special-needs-dentistry',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: 'Stephanie M.',
    text: 'Dr. Joey made my daughter feel so comfortable. She actually looks forward to her dental visits now!',
  },
  {
    name: 'Tanya R.',
    text: 'Best first visit experience ever! Dr. Joey was so patient and kind with my 1-year-old.',
  },
  {
    name: 'David L.',
    text: 'My son said he had FUN at his appointment. That says it all!',
  },
  {
    name: 'Michelle K.',
    text: 'The entire staff is wonderful. They make every visit stress-free for both kids and parents.',
  },
  {
    name: 'Robert P.',
    text: 'Finally found a dentist my anxious daughter loves. Dr. Joey has a gift with children.',
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
      <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl bg-[#f1f5f9]">
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

      <div className="flex justify-center gap-2 mt-6">
        {photoScrollImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#2d5a27] w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + photoScrollImages.length) % photoScrollImages.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300"
        aria-label="Previous image"
      >
        <svg className="w-5 h-5 text-[#2d5a27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % photoScrollImages.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300"
        aria-label="Next image"
      >
        <svg className="w-5 h-5 text-[#2d5a27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

// Testimonial Carousel
function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="flex"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-[#1e293b] mb-6 font-medium leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="text-[#2d5a27] font-semibold">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-[#2d5a27] w-8' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hidden md:flex"
        aria-label="Previous testimonial"
      >
        <svg className="w-5 h-5 text-[#2d5a27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hidden md:flex"
        aria-label="Next testimonial"
      >
        <svg className="w-5 h-5 text-[#2d5a27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/heroimage.jpeg"
            alt="Happy children smiling"
            fill
            className="object-cover object-[center_30%] sm:object-[center_20%] md:object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#a8e6cf] text-lg md:text-xl font-medium mb-4 tracking-wide"
          >
            Welcome to Roots Pediatric Dentistry
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
          >
            Planting Seeds for
            <br />
            Lifelong <span className="text-[#7dffb3]">Smiles</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#2d5a27] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#478449] transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Book Appointment
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+13106208181"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#2d5a27] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Welcome/Philosophy Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#b8f5a6]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#a8e6cf]/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-[#2d5a27]/10 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#2d5a27] rounded-full"></span>
              <span className="text-[#2d5a27] font-medium text-sm">Our Philosophy</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-6 leading-tight">
              Building Positive Relationships<br />
              <span className="text-[#2d5a27]">With Dental Care</span>
            </h2>
            <p className="text-lg md:text-xl text-[#4b5563] leading-relaxed max-w-3xl mx-auto">
              At Roots Pediatric Dentistry, we believe that a child&apos;s first dental experiences
              shape their attitude toward oral health for life. That&apos;s why we&apos;ve created a
              warm, welcoming environment where children feel safe, parents feel informed, and
              everyone leaves with a smile.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="py-12 bg-[#2d5a27]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center italic">
              &ldquo;Rooted in care, blooming in smiles&rdquo;
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-[#f8f9fc] relative overflow-hidden">
        {/* Decorative Shape */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#2d5a27]/5 rounded-full" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              Happy Smiles, Happy Kids
            </h2>
            <p className="text-lg text-[#4b5563] max-w-2xl mx-auto">
              Dr. Joey loves making every dental visit a positive experience.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <PhotoScroll />
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2d5a27] via-[#a8e6cf] to-[#2d5a27]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              Why Families Choose Us
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Fun & Friendly',
                description: 'Office designed to make kids smile',
                color: 'bg-[#a8e6cf]',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: 'Gentle Touch',
                description: 'Patient care for anxious children',
                color: 'bg-[#ffa797]',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: '15+ Years',
                description: 'Trusted pediatric expertise',
                color: 'bg-[#b8f5a6]',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Flexible Hours',
                description: 'Scheduling that fits your life',
                color: 'bg-[#ffd6cc]',
              },
            ].map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <div className="text-center group">
                  <div className={`w-20 h-20 ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-4 text-[#2d5a27] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#1e293b] mb-1">{feature.title}</h3>
                  <p className="text-sm text-[#4b5563]">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Doctor */}
      <section className="py-20 bg-[#f8f9fc] relative overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#2d5a27]/5 rounded-full" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/drjoey-photo.jpg"
                    alt="Dr. Joey Pedram"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#2d5a27] text-white px-6 py-3 rounded-2xl shadow-lg">
                  <p className="text-sm font-medium">Pediatric Dentist</p>
                  <p className="text-xs opacity-80">USC &bull; Tufts</p>
                </div>
                {/* Decorative element */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#a8e6cf] rounded-2xl -z-10" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-6">
                Meet Dr. Joey
              </h2>
              <p className="text-lg text-[#4b5563] leading-relaxed mb-4">
                With over 15 years of experience, Dr. Joey has dedicated his career to
                creating positive dental experiences for children.
              </p>
              <p className="text-[#4b5563] leading-relaxed mb-6">
                His gentle approach, genuine warmth, and playful personality help even
                the most anxious kids feel at ease. Don&apos;t be surprised if you hear
                him singing while counting teeth!
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {['USC School of Dentistry', 'Tufts Pediatric Residency', '15+ Years Experience'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm text-[#334155] shadow-sm">
                    <svg className="w-4 h-4 text-[#2d5a27]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#2d5a27] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#478449] transition-all duration-300 hover:shadow-lg"
              >
                Learn more about Dr. Joey
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              Our Services
            </h2>
            <p className="text-lg text-[#4b5563] max-w-2xl mx-auto">
              Complete dental care for every stage of childhood.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.08}>
                <Link href={service.href} className="block h-full group">
                  <div className="bg-[#f8f9fc] p-6 rounded-2xl h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white border border-transparent hover:border-[#2d5a27]/20">
                    <div className="w-12 h-12 bg-[#2d5a27] rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#1e293b] mb-2 group-hover:text-[#2d5a27] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#4b5563]">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5} className="text-center mt-8">
            <Link
              href="/services/emergency-dentistry"
              className="inline-flex items-center gap-2 text-[#e8856c] font-semibold hover:text-[#d46a4f] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Dental Emergency? We&apos;re here to help
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#f8f9fc] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#2d5a27]/10 rounded-full" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#a8e6cf]/20 rounded-full" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              What Parents Say
            </h2>
            <p className="text-lg text-[#4b5563]">
              Real reviews from real families
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <TestimonialCarousel />
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="text-center mt-10">
            <a
              href="https://www.google.com/search?q=roots+pediatric+dentistry+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#2d5a27] font-semibold hover:gap-3 transition-all duration-300"
            >
              Read all reviews on Google
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Visit Us / Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-6">
                Visit Our Office
              </h2>
              <p className="text-lg text-[#4b5563] mb-8">
                Conveniently located in West Los Angeles with easy parking.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2d5a27]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#2d5a27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1e293b]">Address</p>
                    <p className="text-[#4b5563]">11620 Wilshire Blvd, Suite 720<br />Los Angeles, CA 90025</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2d5a27]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#2d5a27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1e293b]">Hours</p>
                    <p className="text-[#4b5563]">Mon-Thu: 9am-5pm<br />Fri-Sat: 9am-2pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2d5a27]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#2d5a27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1e293b]">Phone</p>
                    <a href="tel:+13106208181" className="text-[#2d5a27] hover:underline">(310) 620-8181</a>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=11620+Wilshire+Blvd+Suite+720+Los+Angeles+CA+90025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2d5a27] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#478449] transition-all duration-300"
              >
                Get Directions
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.4876!2d-118.4733!3d34.0467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb8c5c7a7a7d%3A0x5e5b5b5b5b5b5b5b!2s11620%20Wilshire%20Blvd%20%23720%2C%20Los%20Angeles%2C%20CA%2090025!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 bg-[#f8f9fc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Insurance & Payment</h3>
            <p className="text-[#4b5563] mb-6">
              We accept most PPO dental insurance plans and offer flexible payment options including HSA/FSA.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Most PPO Plans', 'Flexible Payments', 'HSA/FSA Accepted', 'Care Credit'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm text-[#334155] shadow-sm">
                  <svg className="w-4 h-4 text-[#2d5a27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#2d5a27]" />
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="white" />
              </pattern>
              <rect x="0" y="0" width="100" height="100" fill="url(#pattern)" />
            </svg>
          </div>
        </div>

        <AnimatedSection className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Schedule your child&apos;s visit today and discover why families love Roots Pediatric Dentistry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#2d5a27] px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#a8e6cf] transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Book Appointment
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+13106208181"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-[#2d5a27] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
