import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import LocationsSection from "@/components/LocationsSection";
import StatsSection from "@/components/StatsSection";
import MissionSection from "@/components/MissionSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <LocationsSection />
        <StatsSection />
        <MissionSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
