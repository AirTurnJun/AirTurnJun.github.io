import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AppIntegrationSection } from "@/components/AppIntegrationSection";
import TestimonialsSection from "@/components/shadcn-studio/blocks/testimonials-component-06/testimonials-section";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AppIntegrationSection />
      {/* <TestimonialsSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
