import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Book an Appointment',
  description:
    'Contact Roots Pediatric Dentistry in West Los Angeles. Call (310) 620-8181 or book online. Located at 11620 Wilshire Blvd, Suite 720, Los Angeles, CA 90025.',
  keywords: [
    'book pediatric dentist appointment',
    'contact kids dentist Los Angeles',
    'Wilshire Blvd dentist',
    'West LA pediatric dentist contact',
  ],
  openGraph: {
    title: 'Contact Roots Pediatric Dentistry',
    description:
      'Book your child\'s dental appointment today. Call (310) 620-8181 or schedule online.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
