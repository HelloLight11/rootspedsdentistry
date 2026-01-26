import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#3d4f5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/footer-logo.png"
                alt="Roots Pediatric Dentistry"
                width={180}
                height={80}
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Planting seeds for lifelong smiles. Dedicated to making dental visits a joyful experience for kids and parents alike.
            </p>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#b8f5a6] mt-0.5 flex-shrink-0"
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
                <a
                  href="mailto:info@RootsPedsDentistry.com"
                  className="text-white/70 hover:text-[#b8f5a6] transition-colors text-sm"
                >
                  info@RootsPedsDentistry.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#b8f5a6] mt-0.5 flex-shrink-0"
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
                <a
                  href="tel:+13106208181"
                  className="text-white/70 hover:text-[#b8f5a6] transition-colors text-sm"
                >
                  (310) 620-8181
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#b8f5a6] mt-0.5 flex-shrink-0"
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
                <address className="text-white/70 not-italic text-sm">
                  11620 Wilshire Blvd. Suite 720
                  <br />
                  Los Angeles, CA 90025
                </address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-[#b8f5a6] transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-[#b8f5a6] transition-colors text-sm"
                >
                  About Dr. Joey
                </Link>
              </li>
              <li>
                <Link
                  href="/services/first-visit"
                  className="text-white/70 hover:text-[#b8f5a6] transition-colors text-sm"
                >
                  First Visit
                </Link>
              </li>
              <li>
                <Link
                  href="/services/preventative-care"
                  className="text-white/70 hover:text-[#b8f5a6] transition-colors text-sm"
                >
                  Preventative Care
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-[#b8f5a6] transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Office Hours & Map */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Office Hours</h3>
            <div className="space-y-1 text-sm text-white/70 mb-6">
              <div className="flex justify-between">
                <span>Mon - Thu</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat</span>
                <span>9:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.4876!2d-118.4733!3d34.0467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb8c5c7a7a7d%3A0x5e5b5b5b5b5b5b5b!2s11620%20Wilshire%20Blvd%20%23720%2C%20Los%20Angeles%2C%20CA%2090025!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="120"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Roots Pediatric Dentistry. All Rights Reserved.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <a
                  href="https://www.instagram.com/roots_pediatric_dentistry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#b8f5a6] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@roots_pediatric_dentistry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#b8f5a6] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
                <span className="text-white/50 mx-1">|</span>
                <span className="text-white/80 text-sm font-medium">@roots_pediatric_dentistry</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
