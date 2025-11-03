import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, CheckCircle2, Clock, Users } from "lucide-react";
import serviceAyurveda from "@/assets/service-ayurveda.jpg";

const Ayurveda = () => {
  const benefits = [
    "Natural Healing Methods",
    "Dosha Balance Restoration",
    "Detoxification & Cleansing",
    "Chronic Disease Management",
    "Holistic Wellness Approach",
    "Herbal Medicine Therapy",
  ];

  const treatments = [
    {
      title: "Panchakarma",
      description: "Comprehensive detoxification and rejuvenation therapy",
    },
    {
      title: "Abhyanga",
      description: "Therapeutic full-body massage with herbal oils",
    },
    {
      title: "Shirodhara",
      description: "Calming treatment for stress and mental clarity",
    },
    {
      title: "Herbal Remedies",
      description: "Customized plant-based medicines for various conditions",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={serviceAyurveda} alt="Ayurvedic Treatment" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary-dark/80" />
        </div>
        <div className="relative z-10 text-center text-white container mx-auto px-4">
          <Leaf className="h-16 w-16 mx-auto mb-4" />
          <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-4">Ayurvedic Treatment</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Ancient healing methods for modern ailments</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins text-4xl font-bold mb-6">Traditional Wisdom, Modern Application</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our experienced Ayurvedic practitioners bring thousands of years of healing wisdom to address modern 
                health challenges. We use time-tested natural therapies, herbal remedies, and lifestyle modifications 
                to restore balance and promote lasting wellness.
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
                  <h3 className="font-bold text-2xl mb-2">400+</h3>
                  <p className="text-sm text-muted-foreground">Treatments Given</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-2xl mb-2">5000+</h3>
                  <p className="text-sm text-muted-foreground">Years of Tradition</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl font-bold mb-4">Our Ayurvedic Treatments</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Authentic therapies for holistic healing
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

export default Ayurveda;
