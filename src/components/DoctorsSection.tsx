import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Mail, Globe } from "lucide-react";

const DoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. Priya Sharma",
      specialty: "Chief Wellness Officer",
      credentials: "MBBS, MD (Wellness), 15+ years experience",
      specialization: "Holistic Health & Lifestyle Medicine",
      languages: "English, Hindi",
      bgColor: "from-primary/10 to-primary/5",
    },
    {
      name: "Dr. Rajesh Kumar",
      specialty: "Senior Physiotherapist",
      credentials: "BPT, MPT (Sports), Certified Manual Therapist",
      specialization: "Sports Injuries & Rehabilitation",
      languages: "English, Hindi",
      bgColor: "from-secondary/10 to-secondary/5",
    },
    {
      name: "Nutritionist Ananya Desai",
      specialty: "Clinical Nutritionist",
      credentials: "MSc Nutrition, Certified Diabetes Educator",
      specialization: "Weight Management & Metabolic Health",
      languages: "English, Hindi, Gujarati",
      bgColor: "from-accent/10 to-accent/5",
    },
    {
      name: "Yoga Instructor Vikram Patel",
      specialty: "Certified Yoga Therapist",
      credentials: "500-hour RYT, Ayurveda Practitioner",
      specialization: "Therapeutic Yoga & Meditation",
      languages: "English, Hindi, Marathi",
      bgColor: "from-primary/10 to-primary/5",
    },
  ];

  return (
    <section id="doctors" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4">
            Meet Our Wellness Experts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals dedicated to your health
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift group"
            >
              <div className={`h-48 bg-gradient-to-br ${doctor.bgColor} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center mb-4 mx-auto border-4 border-primary/20">
                    <Award className="h-16 w-16 text-primary" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-3">
                  {doctor.specialty}
                </div>
                <h3 className="font-poppins text-xl font-bold mb-2">
                  {doctor.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {doctor.credentials}
                </p>
                <p className="text-sm font-semibold mb-2">
                  {doctor.specialization}
                </p>
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-4">
                  <Globe className="h-3 w-3" />
                  <span>{doctor.languages}</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary-dark">
                  <Mail className="h-4 w-4 mr-2" />
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
