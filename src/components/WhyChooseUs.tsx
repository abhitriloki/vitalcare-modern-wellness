import { CheckCircle2, Award, Building2, Heart, TrendingUp, Shield } from "lucide-react";
import clinicInterior from "@/assets/clinic-interior.jpg";

const WhyChooseUs = () => {
  const benefits = [
    { icon: Heart, text: "Holistic Approach" },
    { icon: Award, text: "Expert Team" },
    { icon: Building2, text: "Modern Facilities" },
    { icon: Heart, text: "Personalized Care" },
    { icon: TrendingUp, text: "Proven Results" },
    { icon: Shield, text: "Insurance Accepted" },
  ];

  const stats = [
    { value: "2000+", label: "Happy Patients" },
    { value: "15+", label: "Years Experience" },
    { value: "95%", label: "Success Rate" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Images */}
          <div className="relative animate-fade-in-up">
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={clinicInterior}
                alt="Modern Clinic Interior"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="animate-slide-in-right">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
              Why VitalCare Wellness?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We combine ancient healing wisdom with modern medical science to provide comprehensive wellness solutions that transform lives.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-semibold">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md hover-lift">
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
