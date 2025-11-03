import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Heart, TrendingUp, Users } from "lucide-react";

const Career = () => {
  const positions = [
    {
      title: "Physiotherapist",
      department: "Clinical Services",
      type: "Full-time",
      experience: "3+ years",
      location: "New Delhi",
    },
    {
      title: "Clinical Nutritionist",
      department: "Nutrition Department",
      type: "Full-time",
      experience: "2+ years",
      location: "New Delhi",
    },
    {
      title: "Yoga Instructor",
      department: "Wellness Programs",
      type: "Part-time",
      experience: "500-hour RYT",
      location: "New Delhi",
    },
    {
      title: "Mental Health Counselor",
      department: "Mental Wellness",
      type: "Full-time",
      experience: "5+ years",
      location: "New Delhi",
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Continuous learning opportunities and professional development",
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work with passionate professionals dedicated to wellness",
    },
    {
      icon: Briefcase,
      title: "Work-Life Balance",
      description: "Flexible schedules and supportive work culture",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark">
        <div className="relative z-10 text-center text-white container mx-auto px-4">
          <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Make a difference in people's lives every day</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join a team that's passionate about transforming lives through holistic wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-6">
                  <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-poppins text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <h2 className="font-poppins text-4xl font-bold text-center mb-12">Current Openings</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {positions.map((position, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="font-poppins text-2xl font-semibold mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span>📋 {position.department}</span>
                          <span>⏰ {position.type}</span>
                          <span>💼 {position.experience}</span>
                          <span>📍 {position.location}</span>
                        </div>
                      </div>
                      <Button className="bg-primary hover:bg-primary-dark whitespace-nowrap">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-4">
                Don't see a position that matches your skills?
              </p>
              <Button variant="outline" size="lg">
                Send us your resume at careers@vitalcarewellness.com
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Career;
