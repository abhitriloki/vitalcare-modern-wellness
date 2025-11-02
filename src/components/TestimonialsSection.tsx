import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rahul Verma",
      age: "34",
      quote: "Lost 25 kg in 6 months with VitalCare's personalized nutrition and fitness plan. The team supported me every step of the way.",
      treatment: "Weight Management Program",
      rating: 5,
    },
    {
      name: "Meera Iyer",
      age: "42",
      quote: "Chronic back pain for 10 years resolved with expert physiotherapy. Now I can play with my kids pain-free!",
      treatment: "Physiotherapy",
      rating: 5,
    },
    {
      name: "Amit Singh",
      age: "29",
      quote: "Stress and anxiety were affecting my work. The counseling sessions and yoga helped me regain balance and peace.",
      treatment: "Mental Wellness Program",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4">
            Success Stories That Inspire
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real transformations from real people
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover-lift"
            >
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-24 w-24 text-primary" />
              </div>
              <CardContent className="p-8 relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic text-foreground">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-lg">
                    {testimonial.name}, {testimonial.age}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.treatment}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
