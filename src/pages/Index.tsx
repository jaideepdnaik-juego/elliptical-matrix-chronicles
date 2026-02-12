import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import CharactersPreview from "@/components/CharactersPreview";
import SkillsShowcase from "@/components/SkillsShowcase";
import MindKeysShowcase from "@/components/MindKeysShowcase";
import GatherablesShowcase from "@/components/GatherablesShowcase";
import LoreTrailerSection from "@/components/LoreTrailerSection";
import PreregistrationCounter from "@/components/PreregistrationCounter";
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
        <SkillsShowcase />
        <MindKeysShowcase />
        <GatherablesShowcase />
        <LoreTrailerSection />
        <PreregistrationCounter />
        <CTASection />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
