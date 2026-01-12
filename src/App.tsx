import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Support from "./pages/Support";
import WarrantyRegistration from "./pages/WarrantyRegistration";
import WarrantyPolicy from "./pages/WarrantyPolicy";
import Privacy from "./pages/Privacy";
import TermsOfService from "./pages/TermsOfService";
import ReturnPolicy from "./pages/ReturnPolicy";
import Downloads from "./pages/Downloads";
import ShippingPolicy from "./pages/ShippingPolicy";
import AppDevelopers from "./pages/AppDevelopers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/warranty" element={<WarrantyRegistration />} />
          <Route path="/warranty-policy" element={<WarrantyPolicy />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/returns" element={<ReturnPolicy />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/app-developers" element={<AppDevelopers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
