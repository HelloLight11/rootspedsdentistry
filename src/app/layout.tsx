import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Roots Pediatric Dentistry | Planting Seeds for Lifelong Smiles',
  description:
    'At Roots Pediatric Dentistry in Los Angeles, Dr. Joey Pedram provides gentle, innovative dental care for children of all ages. Book your appointment today!',
  keywords: [
    'pediatric dentist',
    'kids dentist',
    'Los Angeles dentist',
    'children dental care',
    'Dr. Joey Pedram',
    'Roots Pediatric Dentistry',
  ],
  openGraph: {
    title: 'Roots Pediatric Dentistry | Planting Seeds for Lifelong Smiles',
    description:
      'Gentle, innovative dental care for children of all ages in Los Angeles.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
