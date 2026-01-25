import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'First Dental Visit for Kids',
  description:
    'Make your child\'s first dental visit positive and fun at Roots Pediatric Dentistry in West Los Angeles. Dr. Joey specializes in gentle first-time dental experiences. Call (310) 620-8181.',
  keywords: [
    'first dental visit child',
    'baby first dentist appointment',
    'toddler dentist Los Angeles',
    'when to take child to dentist',
    'pediatric dental exam',
  ],
  openGraph: {
    title: 'First Dental Visit for Kids | Roots Pediatric Dentistry',
    description: 'Make your child\'s first dental visit positive and fun. Expert pediatric care in West LA.',
  },
};

export default function FirstVisitPage() {
  return (
    <ServicePageTemplate
      title="First Visit"
      subtitle="Making your child's first dental experience positive and fun"
      description={[
        "We understand that the first dental visit can be a new and sometimes uncertain experience for both children and parents. At Roots Pediatric Dentistry, we go above and beyond to ensure that your child's first visit is comfortable, educational, and even enjoyable!",
        "Dr. Joey and our friendly team are experts at helping children feel at ease. We take our time to introduce your child to our office, explain what we do in kid-friendly terms, and make sure they feel safe throughout the entire visit.",
        "The American Academy of Pediatric Dentistry recommends that children visit the dentist by their first birthday or within six months of their first tooth erupting. Early visits help establish a dental home and allow us to monitor your child's oral development from the start.",
      ]}
      highlights={[
        'A warm welcome from our friendly staff',
        'A tour of our kid-friendly office',
        'Gentle examination of teeth, gums, and bite',
        'Age-appropriate cleaning if needed',
        'Discussion of oral hygiene habits and nutrition',
        'Answers to all your questions about your child\'s dental health',
      ]}
      imageUrl="/images/FirstVisit.jpeg"
    />
  );
}
