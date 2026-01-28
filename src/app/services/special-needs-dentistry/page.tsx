import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Special Needs Dentistry for Children',
  description:
    'Compassionate dental care for special needs children in West Los Angeles. Autism, Down syndrome, sensory-friendly care at Roots Pediatric Dentistry. Call (310) 620-8181.',
  keywords: [
    'special needs dentist Los Angeles',
    'autism dentist children',
    'sensory friendly dentist',
    'Down syndrome dental care',
    'special healthcare needs dentist',
    'disability dentist kids',
  ],
  openGraph: {
    title: 'Special Needs Dentistry | Roots Pediatric Dentistry',
    description: 'Compassionate, individualized dental care for children with special needs.',
  },
};

export default function SpecialNeedsDentistryPage() {
  return (
    <ServicePageTemplate
      title="Special Needs Dentistry"
      subtitle="Compassionate care tailored to your child's unique needs"
      description={[
        "At Roots Pediatric Dentistry, we believe every child deserves exceptional dental care. Dr. Joey has extensive experience working with children who have developmental, physical, sensory, or behavioral challenges, and he approaches each patient with patience, understanding, and compassion.",
        "We take the time to understand your child's specific needs and create a customized treatment plan. Our office environment can be adapted to accommodate sensory sensitivities, and we're happy to schedule longer appointments or visits during quieter times if that helps your child feel more comfortable.",
        "Whether your child has autism spectrum disorder, Down syndrome, cerebral palsy, anxiety disorders, or other special healthcare needs, we're committed to providing gentle, effective dental care in a supportive environment.",
      ]}
      highlights={[
        'Individualized treatment plans',
        'Flexible scheduling options',
        'Sensory-friendly accommodations',
        'Patient, unhurried appointments',
        'Sedation options when needed',
        'Coordination with other healthcare providers',
      ]}
      imageUrl="/images/special_needs.jpg"
    />
  );
}
