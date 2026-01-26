'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  description: string[];
  highlights?: string[];
  imageUrl?: string;
  children?: React.ReactNode;
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  highlights,
  imageUrl = 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2074',
  children,
}: ServicePageTemplateProps) {
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
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">{subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Custom Content */}
      {children}

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="space-y-6">
                {description.map((paragraph, index) => (
                  <p key={index} className="text-lg text-[#595351] leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {highlights && highlights.length > 0 && (
                  <div className="mt-8 p-6 bg-[#faf8f5] rounded-2xl">
                    <h3 className="text-lg font-semibold text-[#3d2f24] mb-4">
                      What to Expect:
                    </h3>
                    <ul className="space-y-3">
                      {highlights.map((highlight, index) => (
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
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative sticky top-32">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <div
                    className="w-full h-full bg-cover bg-top"
                    style={{ backgroundImage: `url("${imageUrl}")` }}
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3d2f24] mb-6">
            Ready to Schedule an Appointment?
          </h2>
          <p className="text-lg text-[#595351] mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your child&apos;s appointment. We look forward to
            helping your little one achieve a healthy, beautiful smile!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#2d5a27] hover:bg-[#478449] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg"
            >
              Book an Appointment
            </Link>
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
            <h2 className="text-3xl font-serif font-bold text-[#3d2f24]">
              Explore Our Other Services
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'First Visit', href: '/services/first-visit' },
              { name: 'Infant Dentistry', href: '/services/infant-dentistry' },
              { name: 'Preventative Care', href: '/services/preventative-care' },
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
