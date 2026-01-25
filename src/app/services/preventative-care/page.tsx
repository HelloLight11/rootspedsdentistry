import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preventative Dental Care for Kids',
  description:
    'Kids dental cleanings, fluoride treatments & sealants in West Los Angeles. Preventative care at Roots Pediatric Dentistry keeps your child\'s smile healthy. Call (310) 620-8181.',
  keywords: [
    'kids dental cleaning Los Angeles',
    'pediatric dental checkup',
    'fluoride treatment children',
    'dental sealants kids',
    'preventative dentistry children',
    'child teeth cleaning',
  ],
  openGraph: {
    title: 'Preventative Dental Care for Kids | Roots Pediatric Dentistry',
    description: 'Regular cleanings, fluoride & sealants to keep your child\'s smile healthy.',
  },
};

export default function PreventativeCarePage() {
  return (
    <ServicePageTemplate
      title="Preventative Care"
      subtitle="Keeping your child's smile healthy and bright"
      description={[
        "Regular dental check-ups and cleanings are vital for kids' healthy smiles. Our warm, welcoming dental team ensures your child's teeth and gums stay sparkling and strong. We carefully examine their mouth and use x-rays when needed to spot any issues early.",
        "Preventative care is the foundation of good oral health. By catching potential problems early, we can often treat them with simpler, less invasive procedures. Our goal is to help your child maintain a healthy smile throughout their life.",
        "We recommend visits every six months, though some children may benefit from more frequent check-ups. During each visit, we'll clean your child's teeth, check for cavities, assess gum health, and provide fluoride treatments to strengthen tooth enamel.",
      ]}
      highlights={[
        'Professional teeth cleaning and polishing',
        'Comprehensive oral examination',
        'Digital x-rays when necessary',
        'Fluoride treatments for cavity prevention',
        'Dental sealants to protect molars',
        'Personalized oral hygiene instruction',
      ]}
      imageUrl="/images/PreventativeCare.jpeg"
    />
  );
}
