import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, CheckCircle2, Clock, Users } from "lucide-react";
import serviceWeight from "@/assets/service-weight.jpg";

const WeightManagement = () => {
  const benefits = [
    "Personalized Weight Loss Plans",
    "Sustainable Lifestyle Changes",
    "Nutritional Guidance",
    "Fitness Program Integration",
    "Behavioral Coaching",
    "Medical Supervision",
  ];

  const programs = [
    {
      title: "Comprehensive Assessment",
      description: "Detailed analysis of metabolism, body composition, and health markers",
    },
    {
      title: "Customized Nutrition",
      description: "Meal plans designed for your preferences and goals",
    },
    {
      title: "Exercise Prescription",
      description: "Tailored fitness routines for optimal fat loss and muscle preservation",
    },
    {
      title: "Ongoing Support",
      description: "Regular check-ins and adjustments to ensure continued progress",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={serviceWeight} alt="Weight Management" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-dark/80" />
        </div>
        <div className="relative z-10 text-center text-white container mx-auto px-4">
          <TrendingDown className="h-16 w-16 mx-auto mb-4" />
          <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-4">Weight Management</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Sustainable weight loss with expert guidance</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins text-4xl font-bold mb-6">Achieve Your Ideal Weight</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our comprehensive weight management program combines nutrition, fitness, and behavioral coaching 
                to help you achieve lasting results. We focus on sustainable lifestyle changes rather than quick 
                fixes, ensuring you reach and maintain your health goals.
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
                  <h3 className="font-bold text-2xl mb-2">700+</h3>
                  <p className="text-sm text-muted-foreground">Success Stories</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-2xl mb-2">15kg</h3>
                  <p className="text-sm text-muted-foreground">Average Weight Loss</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl font-bold mb-4">Our Weight Loss Program</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive approach to sustainable weight management
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-poppins text-xl font-semibold mb-3">{program.title}</h3>
                  <p className="text-muted-foreground">{program.description}</p>
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

export default WeightManagement;
