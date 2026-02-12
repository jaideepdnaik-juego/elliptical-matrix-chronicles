import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import CharactersPreview from "@/components/CharactersPreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <StorySection />
        <CharactersPreview />
        <CTASection />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
