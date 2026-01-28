'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ fullName: '', phone: '', email: '', message: '' });
  };

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
              Any questions?
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Have a Question?
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection className="order-2 lg:order-1">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-[#b8f5a6] rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-10 h-10 text-[#2d5a27]"
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
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-[#3d2f24] mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-[#595351] mb-6">
                      Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-[#2d5a27] font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-[#3d2f24] mb-2"
                      >
                        Full name*
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2d5a27] focus:ring-2 focus:ring-[#b8f5a6] outline-none transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#3d2f24] mb-2"
                      >
                        Phone*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2d5a27] focus:ring-2 focus:ring-[#b8f5a6] outline-none transition-all duration-300"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#3d2f24] mb-2"
                      >
                        E-mail address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2d5a27] focus:ring-2 focus:ring-[#b8f5a6] outline-none transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#3d2f24] mb-2"
                      >
                        Your message...
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2d5a27] focus:ring-2 focus:ring-[#b8f5a6] outline-none transition-all duration-300 resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#e8856c] hover:bg-[#d9745c] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send a message
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
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection direction="right" delay={0.2} className="order-1 lg:order-2">
              <div className="space-y-8">
                {/* Phone */}
                <a
                  href="tel:+13106208181"
                  className="block group"
                >
                  <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 bg-[#b8f5a6] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-7 h-7 text-[#2d5a27]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-[#595351] mb-1">Phone</p>
                      <p className="text-xl font-semibold text-[#2d5a27]">(310) 620-8181</p>
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@RootsPedsDentistry.com"
                  className="block group"
                >
                  <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 bg-[#b8f5a6] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-7 h-7 text-[#2d5a27]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-[#595351] mb-1">Email</p>
                      <p className="text-xl font-semibold text-[#2d5a27]">
                        Info@RootsPedsDentistry.com
                      </p>
                    </div>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md">
                  <div className="w-14 h-14 bg-[#b8f5a6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-7 h-7 text-[#2d5a27]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#595351] mb-1">Address</p>
                    <p className="text-lg font-semibold text-[#3d2f24]">
                      11620 Wilshire Blvd. Suite 720
                    </p>
                    <p className="text-lg font-semibold text-[#3d2f24]">
                      Los Angeles, CA 90025
                    </p>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.0!2d-118.46!3d34.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzAwLjAiTiAxMTjCsDI3JzM2LjAiVw!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
