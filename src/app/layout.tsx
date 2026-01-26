import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccessibilityWidget from '@/components/AccessibilityWidget';
import Script from 'next/script';

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rootspedsdentistry.com'),
  title: {
    default: 'Roots Pediatric Dentistry | Pediatric Dentist in West Los Angeles',
    template: '%s | Roots Pediatric Dentistry',
  },
  description:
    'Roots Pediatric Dentistry in West Los Angeles offers gentle, fun dental care for infants, children & teens. Dr. Joey Pedram has 15+ years experience. Call (310) 620-8181.',
  keywords: [
    'pediatric dentist Los Angeles',
    'pediatric dentist West LA',
    'kids dentist Los Angeles',
    'children dentist near me',
    'baby dentist Los Angeles',
    'infant dentistry',
    'pediatric dental care',
    'Dr. Joey Pedram',
    'Roots Pediatric Dentistry',
    'West Los Angeles pediatric dentist',
    'Wilshire Blvd dentist',
    'sedation dentistry kids',
    'special needs dentistry',
    'emergency pediatric dentist',
    'first dental visit',
    'child-friendly dentist',
  ],
  authors: [{ name: 'Dr. Joey Pedram' }],
  creator: 'Roots Pediatric Dentistry',
  publisher: 'Roots Pediatric Dentistry',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Roots Pediatric Dentistry | Pediatric Dentist in West Los Angeles',
    description:
      'Gentle, fun dental care for kids in West LA. Dr. Joey Pedram has 15+ years experience creating positive dental experiences. Book today!',
    url: 'https://rootspedsdentistry.com',
    siteName: 'Roots Pediatric Dentistry',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Roots Pediatric Dentistry - Where Little Smiles Take Root',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roots Pediatric Dentistry | Kids Dentist West LA',
    description:
      'Gentle, fun dental care for infants, children & teens. 15+ years experience. Call (310) 620-8181.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://rootspedsdentistry.com',
  },
  category: 'healthcare',
};

// Structured data for Local Business
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': 'https://rootspedsdentistry.com',
  name: 'Roots Pediatric Dentistry',
  image: 'https://rootspedsdentistry.com/images/logo.png',
  description:
    'Roots Pediatric Dentistry provides gentle, fun dental care for infants, children, and teens in West Los Angeles. Dr. Joey Pedram has over 15 years of pediatric dentistry experience.',
  url: 'https://rootspedsdentistry.com',
  telephone: '+1-310-620-8181',
  email: 'info@RootsPedsDentistry.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '11620 Wilshire Blvd, Suite 720',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    postalCode: '90025',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 34.0467,
    longitude: -118.4733,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday'],
      opens: '09:00',
      closes: '14:00',
    },
  ],
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Insurance',
  areaServed: [
    'West Los Angeles',
    'Santa Monica',
    'Brentwood',
    'Beverly Hills',
    'Westwood',
    'Century City',
    'Culver City',
    'Mar Vista',
    'Pacific Palisades',
  ],
  sameAs: ['https://www.instagram.com/rootspedsdentistry'],
  founder: {
    '@type': 'Person',
    name: 'Dr. Joey Pedram',
    jobTitle: 'Pediatric Dentist',
    description:
      'Dr. Joey Pedram is a pediatric dentist with over 15 years of experience. He received his DDS from USC and completed his pediatric residency at Tufts University.',
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'University of Southern California School of Dentistry',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Tufts University',
      },
    ],
  },
  medicalSpecialty: 'Pediatric Dentistry',
  availableService: [
    {
      '@type': 'MedicalProcedure',
      name: 'Pediatric Dental Exam',
      description: 'Comprehensive dental examination for children',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Dental Cleaning',
      description: 'Professional teeth cleaning for kids',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Fluoride Treatment',
      description: 'Preventative fluoride application',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Dental Sealants',
      description: 'Protective sealants for cavity prevention',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Sedation Dentistry',
      description: 'Safe sedation options for anxious children',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '100',
    bestRating: '5',
    worstRating: '1',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${jost.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <AccessibilityWidget />
      </body>
    </html>
  );
}
