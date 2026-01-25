import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata = {
  title: 'Preventative Care | Roots Pediatric Dentistry',
  description: 'Regular dental check-ups and cleanings for kids at Roots Pediatric Dentistry. Keep your child\'s smile healthy and bright!',
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
