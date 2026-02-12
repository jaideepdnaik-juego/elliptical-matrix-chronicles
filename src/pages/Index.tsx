import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import CharactersPreview from "@/components/CharactersPreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StorySection />
      <CharactersPreview />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
