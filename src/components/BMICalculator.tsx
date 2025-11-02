import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator } from "lucide-react";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      if (bmiValue < 18.5) {
        setCategory("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory("Overweight");
      } else {
        setCategory("Obese");
      }
    }
  };

  const getCategoryColor = () => {
    if (category === "Underweight") return "text-warning";
    if (category === "Normal Weight") return "text-success";
    if (category === "Overweight") return "text-warning";
    if (category === "Obese") return "text-destructive";
    return "";
  };

  return (
    <section className="py-20 gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-4">
              Check Your Body Mass Index
            </h2>
            <p className="text-xl text-white/90">
              Get instant insights about your health status
            </p>
          </div>

          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Height (cm)
                  </label>
                  <Input
                    type="number"
                    placeholder="170"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Weight (kg)
                  </label>
                  <Input
                    type="number"
                    placeholder="70"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="h-12"
                  />
                </div>
              </div>

              <Button
                onClick={calculateBMI}
                className="w-full h-12 bg-primary hover:bg-primary-dark text-white text-lg mb-6"
              >
                <Calculator className="h-5 w-5 mr-2" />
                Calculate BMI
              </Button>

              {bmi !== null && (
                <div className="text-center p-6 bg-gradient-secondary rounded-xl animate-fade-in-up">
                  <p className="text-sm text-muted-foreground mb-2">Your BMI</p>
                  <p className="text-5xl font-bold text-primary mb-2">{bmi}</p>
                  <p className={`text-2xl font-semibold mb-4 ${getCategoryColor()}`}>
                    {category}
                  </p>
                  <div className="w-full h-2 bg-muted rounded-full mb-4">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${Math.min((bmi / 40) * 100, 100)}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category === "Normal Weight"
                      ? "Great! You're in the healthy weight range. Maintain your lifestyle."
                      : "Consider booking a consultation for personalized health guidance."}
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Book Consultation
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
