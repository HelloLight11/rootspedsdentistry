import ServicePageTemplate from '@/components/ServicePageTemplate';
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

export default function RestorativeDentistryPage() {
  return (
    <ServicePageTemplate
      title="Restorative Dentistry"
      subtitle="Restoring your child's smile to its natural beauty"
      description={[
        "At Roots, we're dedicated to making your child's smile shine brighter than ever. From filling cavities to performing specialized procedures like SDF (Silver Diamine Fluoride) and pulpotomies, we restore decayed or damaged teeth with care and precision.",
        "We understand that cavities happen, and we're here to help without judgment. Our gentle approach ensures your child feels comfortable during any restorative procedure. We use the latest techniques and materials to provide durable, natural-looking restorations.",
        "For baby teeth, we offer tooth-colored fillings, stainless steel crowns, and when necessary, pulp therapy to save teeth that might otherwise need extraction. Preserving baby teeth is important for proper spacing and development of permanent teeth.",
      ]}
      highlights={[
        'Tooth-colored composite fillings',
        'Stainless steel and white crowns',
        'Silver Diamine Fluoride (SDF) treatment',
        'Pulpotomy (baby root canal)',
        'Space maintainers',
        'Gentle extractions when necessary',
      ]}
      imageUrl="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068"
    />
  );
}
