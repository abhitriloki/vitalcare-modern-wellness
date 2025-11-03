import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, CheckCircle2, Clock, Users } from "lucide-react";
import serviceYoga from "@/assets/service-yoga.jpg";

const YogaFitness = () => {
  const benefits = [
    "Improved Flexibility & Strength",
    "Stress Reduction",
    "Better Posture & Balance",
    "Enhanced Mental Clarity",
    "Increased Energy Levels",
    "Mind-Body Connection",
  ];

  const classes = [
    {
      title: "Hatha Yoga",
      description: "Traditional practice focusing on physical postures and breathing",
    },
    {
      title: "Vinyasa Flow",
      description: "Dynamic sequences linking breath with movement",
    },
    {
      title: "Therapeutic Yoga",
      description: "Customized practice for injury recovery and pain management",
    },
    {
      title: "Meditation & Pranayama",
      description: "Breathwork and mindfulness for mental wellness",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={serviceYoga} alt="Yoga & Fitness" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-dark/80" />
        </div>
        <div className="relative z-10 text-center text-white container mx-auto px-4">
          <Dumbbell className="h-16 w-16 mx-auto mb-4" />
          <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-4">Yoga & Fitness</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Guided sessions for physical and mental balance</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins text-4xl font-bold mb-6">Transform Through Movement</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our certified yoga instructors guide you through practices that unite body, mind, and spirit. 
                Whether you're a beginner or advanced practitioner, our classes are designed to meet you where 
                you are and support your journey toward holistic wellness.
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
                  <h3 className="font-bold text-2xl mb-2">600+</h3>
                  <p className="text-sm text-muted-foreground">Active Members</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-2xl mb-2">20+</h3>
                  <p className="text-sm text-muted-foreground">Weekly Classes</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl font-bold mb-4">Our Yoga Classes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from a variety of styles and levels
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((classItem, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-poppins text-xl font-semibold mb-3">{classItem.title}</h3>
                  <p className="text-muted-foreground">{classItem.description}</p>
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

export default YogaFitness;
