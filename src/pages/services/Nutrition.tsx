import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Apple, CheckCircle2, Clock, Users } from "lucide-react";
import serviceNutrition from "@/assets/service-nutrition.jpg";

const Nutrition = () => {
  const benefits = [
    "Personalized Meal Plans",
    "Weight Management Support",
    "Disease-Specific Diets",
    "Sports Nutrition Guidance",
    "Metabolic Health Optimization",
    "Sustainable Lifestyle Changes",
  ];

  const programs = [
    {
      title: "Weight Loss Program",
      description: "Science-based approach to sustainable weight management",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
    },
    {
      title: "Diabetes Management",
      description: "Blood sugar control through balanced nutrition",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&q=80",
    },
    {
      title: "Heart Health",
      description: "Cholesterol and blood pressure management diets",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80",
    },
    {
      title: "Sports Nutrition",
      description: "Performance optimization for athletes and fitness enthusiasts",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={serviceNutrition} alt="Nutrition Counseling" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary-dark/80" />
        </div>
        <div className="relative z-10 text-center text-white container mx-auto px-4">
          <Apple className="h-16 w-16 mx-auto mb-4" />
          <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-4">Nutrition Counseling</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Personalized diet plans for optimal health and wellness</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins text-4xl font-bold mb-6">Transform Your Health Through Nutrition</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our certified nutritionists create customized meal plans based on your health goals, lifestyle, 
                and preferences. We focus on sustainable changes that fit into your daily routine, ensuring 
                long-term success and improved well-being.
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
                  <h3 className="font-bold text-2xl mb-2">1000+</h3>
                  <p className="text-sm text-muted-foreground">Diet Plans Created</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-2xl mb-2">10+</h3>
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
            <h2 className="font-poppins text-4xl font-bold mb-4">Our Nutrition Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized programs designed for your specific health needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="group hover-lift overflow-hidden border-none shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 font-poppins text-xl font-semibold text-white">
                    {program.title}
                  </h3>
                </div>
                <CardContent className="p-6">
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

export default Nutrition;
