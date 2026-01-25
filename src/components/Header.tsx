'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { name: 'First Visit', href: '/services/first-visit' },
  { name: 'Infant Dentistry / Peekaboo Exam', href: '/services/infant-dentistry' },
  { name: 'Preventative Care', href: '/services/preventative-care' },
  { name: 'Restorative Dentistry', href: '/services/restorative-dentistry' },
  { name: 'Sedation Dentistry', href: '/services/sedation-dentistry' },
  { name: 'Special Needs Dentistry', href: '/services/special-needs-dentistry' },
  { name: 'Emergency Dentistry', href: '/services/emergency-dentistry' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                isScrolled
                  ? 'bg-[#2d5a27]'
                  : 'bg-white/20 backdrop-blur-sm border border-white/30'
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                className={`w-7 h-7 transition-colors duration-300 ${
                  isScrolled ? 'text-white' : 'text-white'
                }`}
                fill="currentColor"
              >
                <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.5.7 2.8 1.8 3.7-.3.5-.5 1.1-.5 1.8 0 1.5 1 2.8 2.4 3.2-.2.4-.2.8-.2 1.3 0 1.7 1.3 3 3 3s3-1.3 3-3c0-.5-.1-.9-.2-1.3 1.4-.4 2.4-1.7 2.4-3.2 0-.7-.2-1.3-.5-1.8 1.1-.9 1.8-2.2 1.8-3.7C16.5 4 14.5 2 12 2zm0 2c1.4 0 2.5 1.1 2.5 2.5S13.4 9 12 9 9.5 7.9 9.5 6.5 10.6 4 12 4z" />
              </svg>
            </div>
            <span
              className={`text-xl font-serif font-semibold transition-colors duration-300 hidden sm:block ${
                isScrolled ? 'text-[#2d5a27]' : 'text-white'
              }`}
            >
              Roots Pediatric Dentistry
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`font-medium transition-colors duration-300 hover:text-[#478449] ${
                isScrolled ? 'text-[#3d2f24]' : 'text-white'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors duration-300 hover:text-[#478449] ${
                isScrolled ? 'text-[#3d2f24]' : 'text-white'
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`font-medium transition-colors duration-300 hover:text-[#478449] flex items-center gap-1 ${
                  isScrolled ? 'text-[#3d2f24]' : 'text-white'
                }`}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    <div className="py-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-3 text-[#3d2f24] hover:bg-[#f5f0e8] hover:text-[#2d5a27] transition-colors duration-200"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className={`font-medium transition-colors duration-300 hover:text-[#478449] ${
                isScrolled ? 'text-[#3d2f24]' : 'text-white'
              }`}
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="bg-[#2d5a27] hover:bg-[#478449] text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Book an Appointment
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-[#3d2f24]' : 'text-white'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/"
                className="block py-3 px-4 text-[#3d2f24] hover:bg-[#f5f0e8] rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block py-3 px-4 text-[#3d2f24] hover:bg-[#f5f0e8] rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="py-2">
                <p className="px-4 py-2 text-sm font-semibold text-[#595351] uppercase tracking-wider">
                  Services
                </p>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block py-2 px-6 text-[#3d2f24] hover:bg-[#f5f0e8] rounded-lg transition-colors text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/contact"
                className="block py-3 px-4 text-[#3d2f24] hover:bg-[#f5f0e8] rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="block py-3 px-4 bg-[#2d5a27] text-white text-center rounded-lg font-medium hover:bg-[#478449] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book an Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
