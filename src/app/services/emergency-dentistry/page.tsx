import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pediatric Emergency Dentist',
  description:
    'Emergency pediatric dentist in West Los Angeles. Same-day appointments for toothaches, chipped teeth & dental trauma. Call Roots Pediatric Dentistry (310) 620-8181.',
  keywords: [
    'emergency pediatric dentist Los Angeles',
    'kids emergency dentist',
    'toothache child dentist',
    'knocked out tooth child',
    'chipped tooth kid',
    'urgent dental care children',
    'same day pediatric dentist',
  ],
  openGraph: {
    title: 'Pediatric Emergency Dentist | Roots Pediatric Dentistry',
    description: 'Same-day emergency dental care for children. Call (310) 620-8181 now.',
  },
};

export default function EmergencyDentistryPage() {
  return (
    <ServicePageTemplate
      title="Emergency Dentistry"
      subtitle="Prompt care when your child needs it most"
      description={[
        "When your child faces a dental emergency, prompt care is key to relieving their pain. Toothaches, chipped teeth, or other issues can disrupt school, sports, and mealtimes. At Roots Pediatric Dentistry, we prioritize emergency cases and strive to see your child as quickly as possible.",
        "Dental emergencies can be stressful for both children and parents. Dr. Joey and our team are here to help. We'll assess the situation, relieve your child's pain, and provide the necessary treatment to protect their oral health.",
        "If your child experiences a dental emergency, please call our office immediately at (310) 620-8181. We'll guide you on immediate care steps and schedule an emergency appointment. For life-threatening emergencies, please call 911 or go to the nearest emergency room.",
      ]}
      highlights={[
        'Same-day emergency appointments',
        'Treatment for toothaches and infections',
        'Repair of chipped or broken teeth',
        'Management of knocked-out teeth',
        'Care for dental trauma',
        'After-hours emergency guidance',
      ]}
      imageUrl="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?q=80&w=2070"
    />
  );
}
