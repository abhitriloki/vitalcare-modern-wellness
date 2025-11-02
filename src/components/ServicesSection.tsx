import { Card, CardContent } from "@/components/ui/card";
import { Activity, Apple, Brain, Dumbbell, Leaf, TrendingDown } from "lucide-react";
import servicePhysio from "@/assets/service-physio.jpg";
import serviceNutrition from "@/assets/service-nutrition.jpg";
import serviceMental from "@/assets/service-mental.jpg";
import serviceYoga from "@/assets/service-yoga.jpg";
import serviceAyurveda from "@/assets/service-ayurveda.jpg";
import serviceWeight from "@/assets/service-weight.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Physiotherapy",
      icon: Activity,
      image: servicePhysio,
      description: "Expert rehabilitation and pain management",
    },
    {
      title: "Nutrition Counseling",
      icon: Apple,
      image: serviceNutrition,
      description: "Personalized diet plans for optimal health",
    },
    {
      title: "Mental Wellness",
      icon: Brain,
      image: serviceMental,
      description: "Counseling and stress management therapy",
    },
    {
      title: "Yoga & Fitness",
      icon: Dumbbell,
      image: serviceYoga,
      description: "Guided sessions for physical and mental balance",
    },
    {
      title: "Ayurvedic Treatment",
      icon: Leaf,
      image: serviceAyurveda,
      description: "Ancient healing methods for modern ailments",
    },
    {
      title: "Weight Management",
      icon: TrendingDown,
      image: serviceWeight,
      description: "Sustainable weight loss with expert guidance",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4">
            Our Wellness Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive care tailored to your health goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift cursor-pointer group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary p-3 rounded-full shadow-lg">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-poppins text-2xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <a
                  href="#contact"
                  className="text-primary font-semibold hover:underline inline-flex items-center"
                >
                  Learn More →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
