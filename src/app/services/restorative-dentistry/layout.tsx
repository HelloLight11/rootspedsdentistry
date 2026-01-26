import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pediatric Restorative Dentistry',
  description:
    'Kids dental fillings, crowns & cavity treatment in West Los Angeles. Gentle restorative care at Roots Pediatric Dentistry. Dr. Joey makes it easy. Call (310) 620-8181.',
  keywords: [
    'kids cavity filling Los Angeles',
    'pediatric dental crowns',
    'children tooth decay treatment',
    'SDF silver diamine fluoride',
    'baby tooth filling',
    'pulpotomy pediatric',
  ],
  openGraph: {
    title: 'Pediatric Restorative Dentistry | Roots Pediatric Dentistry',
    description: 'Gentle fillings, crowns & cavity treatment for children in West LA.',
  },
};

export default function RestorativeDentistryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
