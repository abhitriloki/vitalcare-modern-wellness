import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, CheckCircle2, Clock, Users } from "lucide-react";
import serviceMental from "@/assets/service-mental.jpg";

const MentalWellness = () => {
  const benefits = [
    "Stress & Anxiety Management",
    "Depression Treatment",
    "Relationship Counseling",
    "Trauma Recovery",
    "Work-Life Balance Support",
    "Mindfulness Training",
  ];

  const services = [
    {
      title: "Individual Therapy",
      description: "One-on-one sessions tailored to your specific needs",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    },
    {
      title: "Couples Counseling",
      description: "Strengthen relationships and improve communication",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&q=80",
    },
    {
      title: "Group Therapy",
      description: "Shared experiences and mutual support in a safe environment",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80",
    },
    {
      title: "Mindfulness Training",
      description: "Techniques for present-moment awareness and stress reduction",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={serviceMental} alt="Mental Wellness" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-dark/80" />
        </div>
        <div className="relative z-10 text-center text-white container mx-auto px-4">
          <Brain className="h-16 w-16 mx-auto mb-4" />
          <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-4">Mental Wellness</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Professional counseling and stress management therapy</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins text-4xl font-bold mb-6">Your Mental Health Matters</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our compassionate therapists provide a safe, confidential space to address mental health concerns. 
                We use evidence-based approaches to help you develop coping strategies, improve emotional well-being, 
                and achieve lasting positive change.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                <a href="/#appointment">Book Consultation</a>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-2xl mb-2">800+</h3>
                  <p className="text-sm text-muted-foreground">Clients Helped</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-2xl mb-2">12+</h3>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl font-bold mb-4">Our Therapy Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive mental health support tailored to you
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover-lift overflow-hidden border-none shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 font-poppins text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MentalWellness;
