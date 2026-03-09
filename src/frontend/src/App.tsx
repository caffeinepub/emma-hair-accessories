import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExportsSection from "@/components/ExportsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProductsSection />
          <WhyChooseUs />
          <ExportsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}
