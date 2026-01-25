'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const services = [
  {
    title: 'Preventative Care',
    description:
      'Regular dental check-ups and cleanings are vital for kids\' healthy smiles. Our warm, welcoming dental team ensures your child\'s teeth and gums stay sparkling and strong.',
    href: '/services/preventative-care',
  },
  {
    title: 'Restorative Dentistry',
    description:
      'At Roots, we\'re dedicated to making your child\'s smile shine brighter than ever. From filling cavities to performing specialized procedures like SDF and pulpotomies.',
    href: '/services/restorative-dentistry',
  },
  {
    title: 'Sedation Dentistry',
    description:
      'We offer multiple sedation methods including oral sedation and IV sedation to ensure your child\'s comfort during dental procedures.',
    href: '/services/sedation-dentistry',
  },
  {
    title: 'Emergency Dentistry',
    description:
      'When your child faces a dental emergency, prompt care is key to relieving their pain. Toothaches, chipped teeth, or other issues need immediate attention.',
    href: '/services/emergency-dentistry',
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
      {/* Main Image Display */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
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
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        ))}
      </div>

      {/* Thumbnail Navigation */}
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
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + photoScrollImages.length) % photoScrollImages.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6 text-[#2d5a27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % photoScrollImages.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/heroimage.jpeg"
            alt="Happy children smiling"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2d5a27]/70 to-[#2d5a27]/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white leading-tight">
              Roots Pediatric
              <br />
              Dentistry
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-10 text-white/90 font-light italic"
          >
            Planting seeds for lifelong smiles
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="bg-white text-[#2d5a27] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b8f5a6] transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Book Now Online
            </Link>
            <a
              href="tel:+13106208181"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#2d5a27] transition-all duration-300"
            >
              Call Us
            </a>
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

      {/* Welcome Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#478449] font-medium uppercase tracking-widest mb-4">
              Where Smiles Take Root
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3d2f24] mb-6">
              Welcome to Roots Pediatric Dentistry
            </h2>
            <div className="w-24 h-1 bg-[#2d5a27] mx-auto mb-8" />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg text-[#595351] leading-relaxed max-w-3xl mx-auto text-center mb-16">
              At Roots Pediatric Dentistry, we&apos;re dedicated to making dental visits a joyful
              experience for kids and parents alike! Under the expertise of Pediatric Dentist
              Dr. Joey Pedram, our practice focuses on delivering innovative, gentle care for
              children of all ages. Embracing advanced technology, and tailored treatments, we
              strive to help every young smile sparkle brightly. We&apos;re excited to welcome you
              and your child to our caring community soon!
            </p>
          </AnimatedSection>

          {/* Photo Scroll */}
          <AnimatedSection delay={0.3}>
            <PhotoScroll />
          </AnimatedSection>
        </div>
      </section>

      {/* Meet the Doctor Section */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
                <p className="inline-block bg-[#b8f5a6] text-[#2d5a27] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                  Meet Your Doctor
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3d2f24] mb-6">
                  Dr. Joey Pedram
                </h2>
                <p className="text-[#595351] leading-relaxed mb-6">
                  Dr. Joey grew up in Calabasas, CA. He completed his undergraduate studies
                  at UCLA, receiving his Bachelor of Science in Psychobiology. He went on to
                  earn his Doctor of Dental Surgery (DDS) degree from the University of
                  Southern California School of Dentistry.
                </p>
                <p className="text-[#595351] leading-relaxed mb-8">
                  After receiving his DDS degree, Dr. Joey completed a residency in Pediatric
                  Dentistry at Tufts University in Boston, MA. He has been a pediatric
                  dentist since 2011.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#2d5a27] text-white px-6 py-3 rounded-full font-medium hover:bg-[#478449] transition-all duration-300 hover:gap-4"
                >
                  Read More
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
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/drjoey-photo.jpg"
                    alt="Dr. Joey Pedram"
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

      {/* Services Banner */}
      <section className="bg-[#2d5a27] py-8">
        <AnimatedSection>
          <p className="text-center text-white text-2xl md:text-3xl font-serif italic">
            Rooted in care, blooming in smiles
          </p>
        </AnimatedSection>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#2d5a27]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-14 h-14 bg-[#b8f5a6] rounded-xl flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-[#2d5a27]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.5.7 2.8 1.8 3.7-.3.5-.5 1.1-.5 1.8 0 1.5 1 2.8 2.4 3.2-.2.4-.2.8-.2 1.3 0 1.7 1.3 3 3 3s3-1.3 3-3c0-.5-.1-.9-.2-1.3 1.4-.4 2.4-1.7 2.4-3.2 0-.7-.2-1.3-.5-1.8 1.1-.9 1.8-2.2 1.8-3.7C16.5 4 14.5 2 12 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#3d2f24] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#595351] leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-[#2d5a27] font-medium hover:gap-4 transition-all duration-300"
                  >
                    Read more
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
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="w-20 h-20 bg-[#b8f5a6] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-[#2d5a27]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.5.7 2.8 1.8 3.7-.3.5-.5 1.1-.5 1.8 0 1.5 1 2.8 2.4 3.2-.2.4-.2.8-.2 1.3 0 1.7 1.3 3 3 3s3-1.3 3-3c0-.5-.1-.9-.2-1.3 1.4-.4 2.4-1.7 2.4-3.2 0-.7-.2-1.3-.5-1.8 1.1-.9 1.8-2.2 1.8-3.7C16.5 4 14.5 2 12 2z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3d2f24]">
              What other people are saying about us
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.15}>
                <div className="bg-[#faf8f5] p-8 rounded-2xl h-full flex flex-col">
                  <div className="flex-grow">
                    <svg
                      className="w-10 h-10 text-[#b8f5a6] mb-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-[#595351] leading-relaxed mb-6 italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#3d2f24] text-lg">
                      {testimonial.name}
                    </p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-[#2d5a27]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-32 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(45, 90, 39, 0.85), rgba(45, 90, 39, 0.9)), url("/images/heroimage.jpeg")',
        }}
      >
        <AnimatedSection className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Schedule Your Child&apos;s Visit?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            We can&apos;t wait to meet your little one and help them achieve a healthy, beautiful smile!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-[#2d5a27] px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#b8f5a6] transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Book an Appointment
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
