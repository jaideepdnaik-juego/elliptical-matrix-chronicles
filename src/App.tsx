import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import Characters from "./pages/Characters";
import MindKeys from "./pages/MindKeys";
import Lore from "./pages/Lore";
import NotFound from "./pages/NotFound";
import ParticleField from "./components/ParticleField";
import LoadingScreen from "./components/LoadingScreen";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/mindkeys" element={<MindKeys />} />
        <Route path="/lore" element={<Lore />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Prevent scroll during loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        <AnimatePresence mode="wait">
          {isLoading && (
            <LoadingScreen key="loading" onLoadingComplete={handleLoadingComplete} />
          )}
        </AnimatePresence>

        {showContent && (
          <BrowserRouter>
            {/* Subtle vignette overlay */}
            <div className="fixed inset-0 pointer-events-none z-[100]">
              {/* Gentle fade from edges */}
              <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/15 via-transparent to-background/15" />
              
              {/* Subtle corner accents */}
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/5 to-transparent blur-3xl" />
            </div>
            
            <ParticleField />
            <AnimatedRoutes />
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
