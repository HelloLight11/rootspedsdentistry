'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Roots Pediatric Dentistry"
              width={isScrolled ? 60 : 75}
              height={isScrolled ? 60 : 75}
              className="transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`font-medium transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#2d5a27] after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled ? 'text-[#3d2f24]' : 'text-white'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#2d5a27] after:transition-all after:duration-300 hover:after:w-full ${
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
                className={`font-medium transition-all duration-300 flex items-center gap-1 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#2d5a27] after:transition-all after:duration-300 hover:after:w-full ${
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
                          className="block px-4 py-3 text-[#3d2f24] hover:bg-[#b8f5a6]/30 hover:text-[#2d5a27] transition-colors duration-200"
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
              className={`font-medium transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#2d5a27] after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled ? 'text-[#3d2f24]' : 'text-white'
              }`}
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? 'bg-[#2d5a27] text-white hover:bg-[#478449]'
                  : 'bg-[#b8f5a6] text-[#2d5a27] hover:bg-white'
              }`}
            >
              Book Appointment
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
                className="block py-3 px-4 text-[#3d2f24] hover:bg-[#b8f5a6]/30 rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block py-3 px-4 text-[#3d2f24] hover:bg-[#b8f5a6]/30 rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="py-2">
                <p className="px-4 py-2 text-sm font-semibold text-[#2d5a27] uppercase tracking-wider">
                  Services
                </p>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block py-2 px-6 text-[#3d2f24] hover:bg-[#b8f5a6]/30 rounded-lg transition-colors text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/contact"
                className="block py-3 px-4 text-[#3d2f24] hover:bg-[#b8f5a6]/30 rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="block py-3 px-4 bg-[#2d5a27] text-white text-center rounded-full font-semibold hover:bg-[#478449] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
