import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Target, Users } from "lucide-react";
import clinicInterior from "@/assets/clinic-interior.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and personalized attention",
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      description: "Evidence-based treatments delivered by experienced healthcare professionals",
    },
    {
      icon: Target,
      title: "Holistic Approach",
      description: "Addressing mind, body, and spirit for complete wellness transformation",
    },
    {
      icon: Users,
      title: "Patient Partnership",
      description: "Collaborative care that empowers you to take control of your health",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark">
        <div className="relative z-10 text-center text-white container mx-auto px-4">
          <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-4">About VitalCare Wellness</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Your partner in holistic health and wellness</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-poppins text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2010, VitalCare Wellness began with a simple mission: to provide comprehensive, 
                compassionate healthcare that addresses the whole person, not just symptoms.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Over the past 15 years, we've grown into a leading wellness center, helping over 2,000 patients 
                transform their health through our integrated approach to physiotherapy, nutrition, mental wellness, 
                yoga, Ayurvedic treatments, and weight management.
              </p>
              <p className="text-lg text-muted-foreground">
                Our team of certified experts works collaboratively to create personalized treatment plans that 
                deliver lasting results and empower our patients to live their healthiest, happiest lives.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={clinicInterior} alt="Clinic Interior" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-poppins text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="hover-lift text-center">
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-poppins text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardContent className="p-8">
                <h3 className="font-bold text-4xl text-primary mb-2">2000+</h3>
                <p className="text-muted-foreground">Happy Patients</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="font-bold text-4xl text-primary mb-2">15+</h3>
                <p className="text-muted-foreground">Years of Excellence</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="font-bold text-4xl text-primary mb-2">95%</h3>
                <p className="text-muted-foreground">Success Rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
