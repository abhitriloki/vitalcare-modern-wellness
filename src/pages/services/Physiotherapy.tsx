import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, CheckCircle2, Clock, Users } from "lucide-react";
import servicePhysio from "@/assets/service-physio.jpg";

const Physiotherapy = () => {
  const benefits = [
    "Pain Relief & Management",
    "Improved Mobility & Flexibility",
    "Sports Injury Rehabilitation",
    "Post-Surgery Recovery",
    "Chronic Condition Management",
    "Posture Correction",
  ];

  const treatments = [
    {
      title: "Manual Therapy",
      description: "Hands-on techniques to improve joint mobility and reduce pain",
    },
    {
      title: "Exercise Therapy",
      description: "Customized exercise programs for strength and flexibility",
    },
    {
      title: "Electrotherapy",
      description: "Advanced equipment for pain relief and tissue healing",
    },
    {
      title: "Sports Rehabilitation",
      description: "Specialized programs for athletes and active individuals",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={servicePhysio} alt="Physiotherapy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-dark/80" />
        </div>
        <div className="relative z-10 text-center text-white container mx-auto px-4">
          <Activity className="h-16 w-16 mx-auto mb-4" />
          <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-4">Physiotherapy Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Expert rehabilitation and pain management for optimal recovery</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins text-4xl font-bold mb-6">Comprehensive Physiotherapy Care</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our experienced physiotherapists use evidence-based techniques to help you recover from injuries, 
                manage chronic pain, and improve your overall physical function. We create personalized treatment 
                plans tailored to your specific needs and goals.
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
                  <h3 className="font-bold text-2xl mb-2">500+</h3>
                  <p className="text-sm text-muted-foreground">Patients Treated</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-2xl mb-2">15+</h3>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl font-bold mb-4">Our Treatment Approaches</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine traditional and modern techniques for best results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((treatment, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-poppins text-xl font-semibold mb-3">{treatment.title}</h3>
                  <p className="text-muted-foreground">{treatment.description}</p>
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

export default Physiotherapy;
