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
      <div className="w-full pb-20 flex justify-center">
        <iframe width="1242" height="699" src="https://www.youtube.com/embed/8kqmQIk-x6A" title="A New Way to Control your Music while Skiing | 2026 Airturn Mav" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
