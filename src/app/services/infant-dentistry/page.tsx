import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Infant Dentistry & Peekaboo Exam',
  description:
    'Gentle infant dentistry and Peekaboo Exams for babies in West Los Angeles. Start your child\'s dental care early with Dr. Joey at Roots Pediatric Dentistry. Call (310) 620-8181.',
  keywords: [
    'infant dentist Los Angeles',
    'baby dentist',
    'peekaboo dental exam',
    'toddler dental care',
    'first tooth dentist',
    'baby dental checkup',
  ],
  openGraph: {
    title: 'Infant Dentistry & Peekaboo Exam | Roots Pediatric Dentistry',
    description: 'Gentle dental care for infants and toddlers. Start healthy habits early!',
  },
};

export default function InfantDentistryPage() {
  return (
    <ServicePageTemplate
      title="Infant Dentistry"
      subtitle="Peekaboo Exam - Starting healthy smiles from the very beginning"
      description={[
        "Our Peekaboo Exam is specially designed for infants and toddlers to make their first dental experience as gentle and fun as possible. This quick, easy examination allows Dr. Joey to assess your baby's oral health while keeping them comfortable in your arms.",
        "Early dental visits are crucial for preventing tooth decay and establishing healthy oral habits. Baby teeth are important for proper nutrition, speech development, and guiding permanent teeth into place. Starting early helps ensure your child develops a positive attitude toward dental care.",
        "During the Peekaboo Exam, we'll gently check your baby's teeth and gums, discuss teething, thumb sucking habits, and provide guidance on cleaning your infant's mouth. We'll also talk about nutrition and how to prevent early childhood cavities.",
      ]}
      highlights={[
        'Comfortable lap-to-lap examination',
        'Assessment of teeth and gum development',
        'Guidance on teething and oral hygiene',
        'Tips for bottle feeding and nutrition',
        'Early cavity prevention strategies',
        'A fun, stress-free experience for baby and parents',
      ]}
      imageUrl="https://images.unsplash.com/photo-1491013516836-7db643ee125a?q=80&w=2025"
    />
  );
}
