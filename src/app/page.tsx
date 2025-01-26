import CategoriesSection from "@/components/CategoriesSection";
import FeaturedArticles from "@/components/FeaturedArticles";
import HeroSection from "@/components/HeroSection";
import LatestNewsSection from "@/components/LatestNews";
import NewsletterSection from "@/components/NewsletterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light">
        <HeroSection />
        <FeaturedArticles />
        <CategoriesSection />
        <LatestNewsSection />
        <NewsletterSection />
        <TestimonialsSection />
        <Footer />
    </div>  
  );
}
