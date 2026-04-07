import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Intelligence from "./pages/Intelligence.tsx";
import CaseStudies from "./pages/CaseStudies.tsx";
import Insights from "./pages/Insights.tsx";
import Contact from "./pages/Contact.tsx";
import ClarityCall from "./pages/ClarityCall.tsx";
import Capabilities from "./pages/Capabilities.tsx";
import { SmoothScroll } from "./components/SmoothScroll.tsx";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
          
          <div className={isLoading ? "h-screen overflow-hidden fixed inset-0 pointer-events-none opacity-0" : "animate-in fade-in duration-1000"}>
            <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/intelligence" element={<Intelligence />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/clarity-call" element={<ClarityCall />} />
            <Route path="/capabilities" element={<Capabilities />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </div>
      </TooltipProvider>
    </SmoothScroll>
  </QueryClientProvider>
  );
};

export default App;
