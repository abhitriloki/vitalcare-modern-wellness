import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ChevronDown, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-wellness.jpg";

const HeroSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      toast({ title: "Error", description: "Please enter your name", variant: "destructive" });
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      toast({ title: "Error", description: "Please enter a valid phone number", variant: "destructive" });
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast({ title: "Error", description: "Please enter a valid email", variant: "destructive" });
      return;
    }
    if (!formData.date) {
      toast({ title: "Error", description: "Please select a date", variant: "destructive" });
      return;
    }
    if (!formData.service) {
      toast({ title: "Error", description: "Please select a service", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Your appointment request has been submitted. We'll contact you shortly.",
      });
      setFormData({ name: "", phone: "", email: "", date: "", service: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white animate-fade-in-up">
            <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Health Journey
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Holistic wellness solutions for mind, body, and soul. Expert care, personalized treatment, lasting results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-6"
                onClick={() => {
                  const appointmentSection = document.getElementById('appointment');
                  if (appointmentSection) {
                    appointmentSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Book Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Services
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-8 text-white/90">
              <Users className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">2000+ Happy Patients</span>
            </div>
          </div>

          {/* Right: Appointment Form */}
          <Card className="p-6 md:p-8 bg-white/95 backdrop-blur-sm shadow-elegant animate-slide-in-right">
            <h3 className="font-poppins text-2xl font-bold mb-6 text-center">
              Quick Appointment
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input 
                placeholder="Your Name" 
                className="h-12"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input 
                type="tel" 
                placeholder="Phone Number" 
                className="h-12"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="h-12"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Input 
                type="date" 
                className="h-12"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
              <select 
                className="w-full h-12 px-3 border border-input rounded-md bg-background"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                required
              >
                <option value="">Select Service</option>
                <option value="physiotherapy">Physiotherapy</option>
                <option value="nutrition">Nutrition Counseling</option>
                <option value="mental">Mental Wellness</option>
                <option value="yoga">Yoga & Fitness</option>
                <option value="ayurveda">Ayurvedic Treatment</option>
                <option value="weight">Weight Management</option>
              </select>
              <Button 
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary-dark text-white text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Book Now"}
              </Button>
            </form>
          </Card>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  );
};

export default HeroSection;
