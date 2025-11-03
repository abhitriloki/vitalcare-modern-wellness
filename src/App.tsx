import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Physiotherapy from "./pages/services/Physiotherapy";
import Nutrition from "./pages/services/Nutrition";
import MentalWellness from "./pages/services/MentalWellness";
import YogaFitness from "./pages/services/YogaFitness";
import Ayurveda from "./pages/services/Ayurveda";
import WeightManagement from "./pages/services/WeightManagement";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/physiotherapy" element={<Physiotherapy />} />
          <Route path="/services/nutrition" element={<Nutrition />} />
          <Route path="/services/mental-wellness" element={<MentalWellness />} />
          <Route path="/services/yoga-fitness" element={<YogaFitness />} />
          <Route path="/services/ayurveda" element={<Ayurveda />} />
          <Route path="/services/weight-management" element={<WeightManagement />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
