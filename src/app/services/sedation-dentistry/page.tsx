import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pediatric Sedation Dentistry',
  description:
    'Safe sedation dentistry for kids in West Los Angeles. Nitrous oxide, oral & IV sedation options at Roots Pediatric Dentistry. Anxiety-free dental care. Call (310) 620-8181.',
  keywords: [
    'pediatric sedation dentistry Los Angeles',
    'kids dental sedation',
    'laughing gas dentist children',
    'IV sedation pediatric dentist',
    'anxious child dentist',
    'oral sedation kids dentist',
  ],
  openGraph: {
    title: 'Pediatric Sedation Dentistry | Roots Pediatric Dentistry',
    description: 'Safe, comfortable sedation options for anxious children. Gentle care in West LA.',
  },
};

export default function SedationDentistryPage() {
  return (
    <ServicePageTemplate
      title="Sedation Dentistry"
      subtitle="Comfortable care for anxious or young patients"
      description={[
        "At Roots, we understand that some children may feel anxious about dental visits or require extensive treatment. That's why we offer multiple sedation methods to ensure your child's comfort during dental procedures.",
        "We offer nitrous oxide (laughing gas) for mild anxiety, oral sedation for moderate cases, and IV sedation for more extensive procedures or highly anxious patients. Dr. Joey will discuss all options with you to determine the best approach for your child's needs.",
        "Safety is our top priority. Our team is specially trained in pediatric sedation, and we carefully monitor your child throughout the entire procedure. We'll provide detailed pre- and post-sedation instructions to ensure a smooth experience.",
      ]}
      highlights={[
        'Nitrous oxide (laughing gas)',
        'Oral conscious sedation',
        'IV sedation for extensive procedures',
        'Continuous monitoring throughout treatment',
        'Board-certified pediatric dentist',
        'Detailed pre and post-op instructions',
      ]}
      imageUrl="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070"
    />
  );
}
