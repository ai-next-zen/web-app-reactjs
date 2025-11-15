import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import ReviewsSection from '@/components/ReviewsSection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Header />
      <main className="flex-1">
        <Hero />
        <ContactSection />
        <ReviewsSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
