import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PreregistrationCounter from "@/components/PreregistrationCounter";
import GameWorldsSection from "@/components/GameWorldsSection";
import CharactersPreview from "@/components/CharactersPreview";
import GameplayFeatures from "@/components/GameplayFeatures";
import SkillsShowcase from "@/components/SkillsShowcase";
import MindKeysShowcase from "@/components/MindKeysShowcase";
import LoreTrailerSection from "@/components/LoreTrailerSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <PreregistrationCounter />
        <GameWorldsSection />
        <CharactersPreview />
        <GameplayFeatures />
        <SkillsShowcase />
        <MindKeysShowcase />
        <LoreTrailerSection />
        <CTASection />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
