import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Medellin from "./pages/Medellin";
import Contact from "./pages/Contact";
import PlasticSurgery from "./pages/services/PlasticSurgery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/plastic-surgery" element={<PlasticSurgery />} />
                <Route path="/services/dental" element={<PlasticSurgery />} />
                <Route path="/services/weight-management" element={<PlasticSurgery />} />
                <Route path="/services/neurosurgery" element={<PlasticSurgery />} />
                <Route path="/services/mainli" element={<PlasticSurgery />} />
                <Route path="/services/neurowaves" element={<PlasticSurgery />} />
                <Route path="/services/rehabilitation" element={<PlasticSurgery />} />
                <Route path="/services/legal-medical" element={<PlasticSurgery />} />
                <Route path="/services/medical-tourism" element={<PlasticSurgery />} />
                <Route path="/medellin" element={<Medellin />} />
                <Route path="/contact" element={<Contact />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
