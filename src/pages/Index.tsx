import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DoctorsSection from "@/components/DoctorsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import BMICalculator from "@/components/BMICalculator";
import BlogSection from "@/components/BlogSection";
import AppointmentSection from "@/components/AppointmentSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <DoctorsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <BMICalculator />
      <BlogSection />
      <AppointmentSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
