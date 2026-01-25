import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata = {
  title: 'Special Needs Dentistry | Roots Pediatric Dentistry',
  description: 'Compassionate dental care for children with special needs at Roots Pediatric Dentistry in Los Angeles.',
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
      imageUrl="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070"
    />
  );
}
