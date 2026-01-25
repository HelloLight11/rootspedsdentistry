import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Dr. Joey Pedram - Pediatric Dentist',
  description:
    'Meet Dr. Joey Pedram, pediatric dentist with 15+ years experience. USC dental school graduate, Tufts pediatric residency. Gentle, fun care for kids in West Los Angeles.',
  keywords: [
    'Dr. Joey Pedram',
    'pediatric dentist Los Angeles',
    'kids dentist West LA',
    'USC dentist',
    'Tufts pediatric dentistry',
    'child-friendly dentist',
  ],
  openGraph: {
    title: 'About Dr. Joey Pedram | Roots Pediatric Dentistry',
    description:
      'Meet Dr. Joey Pedram, pediatric dentist with 15+ years experience creating positive dental experiences for children.',
    images: ['/images/drjoey-photo.jpg'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
