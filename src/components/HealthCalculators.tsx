import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Activity, Droplet, Heart, TrendingUp, Scale } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const HealthCalculators = () => {
  // BMI Calculator State
  const [bmiHeight, setBmiHeight] = useState("");
  const [bmiWeight, setBmiWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState("");

  // BMR Calculator State
  const [bmrAge, setBmrAge] = useState("");
  const [bmrHeight, setBmrHeight] = useState("");
  const [bmrWeight, setBmrWeight] = useState("");
  const [bmrGender, setBmrGender] = useState("male");
  const [bmr, setBmr] = useState<number | null>(null);

  // Calorie Calculator State
  const [calorieAge, setCalorieAge] = useState("");
  const [calorieHeight, setCalorieHeight] = useState("");
  const [calorieWeight, setCalorieWeight] = useState("");
  const [calorieGender, setCalorieGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("moderate");
  const [dailyCalories, setDailyCalories] = useState<number | null>(null);

  // Body Fat Calculator State
  const [bfGender, setBfGender] = useState("male");
  const [bfAge, setBfAge] = useState("");
  const [bfWeight, setBfWeight] = useState("");
  const [bfHeight, setBfHeight] = useState("");
  const [bfNeck, setBfNeck] = useState("");
  const [bfWaist, setBfWaist] = useState("");
  const [bfHip, setBfHip] = useState("");
  const [bodyFat, setBodyFat] = useState<number | null>(null);

  // Ideal Weight Calculator State
  const [iwHeight, setIwHeight] = useState("");
  const [iwGender, setIwGender] = useState("male");
  const [idealWeight, setIdealWeight] = useState<{ min: number; max: number } | null>(null);

  // Water Intake Calculator State
  const [waterWeight, setWaterWeight] = useState("");
  const [waterActivity, setWaterActivity] = useState("30");
  const [waterIntake, setWaterIntake] = useState<number | null>(null);

  const calculateBMI = () => {
    const heightInMeters = parseFloat(bmiHeight) / 100;
    const weightInKg = parseFloat(bmiWeight);

    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      if (bmiValue < 18.5) {
        setBmiCategory("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setBmiCategory("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setBmiCategory("Overweight");
      } else {
        setBmiCategory("Obese");
      }
    }
  };

  const calculateBMR = () => {
    const weight = parseFloat(bmrWeight);
    const height = parseFloat(bmrHeight);
    const age = parseFloat(bmrAge);

    if (weight > 0 && height > 0 && age > 0) {
      let bmrValue;
      if (bmrGender === "male") {
        bmrValue = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      } else {
        bmrValue = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      }
      setBmr(Math.round(bmrValue));
    }
  };

  const calculateCalories = () => {
    const weight = parseFloat(calorieWeight);
    const height = parseFloat(calorieHeight);
    const age = parseFloat(calorieAge);

    if (weight > 0 && height > 0 && age > 0) {
      let bmrValue;
      if (calorieGender === "male") {
        bmrValue = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      } else {
        bmrValue = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      }

      const activityMultipliers: { [key: string]: number } = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        veryActive: 1.9
      };

      const dailyCaloriesValue = Math.round(bmrValue * activityMultipliers[activityLevel]);
      setDailyCalories(dailyCaloriesValue);
    }
  };

  const calculateBodyFat = () => {
    const weight = parseFloat(bfWeight);
    const height = parseFloat(bfHeight);
    const neck = parseFloat(bfNeck);
    const waist = parseFloat(bfWaist);
    const hip = parseFloat(bfHip);

    if (weight > 0 && height > 0 && neck > 0 && waist > 0) {
      let bodyFatValue;
      if (bfGender === "male") {
        bodyFatValue = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
      } else {
        if (hip > 0) {
          bodyFatValue = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
        } else {
          return;
        }
      }
      setBodyFat(parseFloat(bodyFatValue.toFixed(1)));
    }
  };

  const calculateIdealWeight = () => {
    const height = parseFloat(iwHeight);

    if (height > 0) {
      const heightInMeters = height / 100;
      const minWeight = 18.5 * heightInMeters * heightInMeters;
      const maxWeight = 24.9 * heightInMeters * heightInMeters;
      setIdealWeight({ min: Math.round(minWeight), max: Math.round(maxWeight) });
    }
  };

  const calculateWaterIntake = () => {
    const weight = parseFloat(waterWeight);
    const activity = parseFloat(waterActivity);

    if (weight > 0) {
      const baseWater = weight * 0.033;
      const activityWater = (activity / 30) * 0.35;
      const totalWater = baseWater + activityWater;
      setWaterIntake(parseFloat(totalWater.toFixed(1)));
    }
  };

  const getCategoryColor = (category: string) => {
    if (category === "Underweight") return "text-warning";
    if (category === "Normal Weight") return "text-success";
    if (category === "Overweight") return "text-warning";
    if (category === "Obese") return "text-destructive";
    return "";
  };

  const getBodyFatCategory = (bf: number, gender: string) => {
    if (gender === "male") {
      if (bf < 6) return { category: "Essential Fat", color: "text-warning" };
      if (bf < 14) return { category: "Athletes", color: "text-success" };
      if (bf < 18) return { category: "Fitness", color: "text-success" };
      if (bf < 25) return { category: "Average", color: "text-primary" };
      return { category: "Obese", color: "text-destructive" };
    } else {
      if (bf < 14) return { category: "Essential Fat", color: "text-warning" };
      if (bf < 21) return { category: "Athletes", color: "text-success" };
      if (bf < 25) return { category: "Fitness", color: "text-success" };
      if (bf < 32) return { category: "Average", color: "text-primary" };
      return { category: "Obese", color: "text-destructive" };
    }
  };

  return (
    <section id="calculators" className="py-20 gradient-primary relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80')`,
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-4">
              Health Calculators
            </h2>
            <p className="text-xl text-white/90">
              Get instant insights about your health and fitness goals
            </p>
          </div>

          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <Tabs defaultValue="bmi" className="w-full">
                <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 gap-2 h-auto mb-8">
                  <TabsTrigger value="bmi" className="flex items-center gap-2">
                    <Scale className="h-4 w-4" />
                    <span className="hidden sm:inline">BMI</span>
                  </TabsTrigger>
                  <TabsTrigger value="bmr" className="flex items-center gap-2">
                    <Activity className="h-4 w-4" />
                    <span className="hidden sm:inline">BMR</span>
                  </TabsTrigger>
                  <TabsTrigger value="calories" className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    <span className="hidden sm:inline">Calories</span>
                  </TabsTrigger>
                  <TabsTrigger value="bodyfat" className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    <span className="hidden sm:inline">Body Fat</span>
                  </TabsTrigger>
                  <TabsTrigger value="idealweight" className="flex items-center gap-2">
                    <Calculator className="h-4 w-4" />
                    <span className="hidden sm:inline">Ideal Weight</span>
                  </TabsTrigger>
                  <TabsTrigger value="water" className="flex items-center gap-2">
                    <Droplet className="h-4 w-4" />
                    <span className="hidden sm:inline">Water</span>
                  </TabsTrigger>
                </TabsList>

                {/* BMI Calculator */}
                <TabsContent value="bmi">
                  <div className="space-y-6">
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold mb-2">Body Mass Index Calculator</h3>
                      <p className="text-muted-foreground">Calculate your BMI to assess your weight category</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Height (cm)</label>
                        <Input
                          type="number"
                          placeholder="170"
                          value={bmiHeight}
                          onChange={(e) => setBmiHeight(e.target.value)}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Weight (kg)</label>
                        <Input
                          type="number"
                          placeholder="70"
                          value={bmiWeight}
                          onChange={(e) => setBmiWeight(e.target.value)}
                          className="h-12"
                        />
                      </div>
                    </div>
                    <Button onClick={calculateBMI} className="w-full h-12">
                      <Calculator className="h-5 w-5 mr-2" />
                      Calculate BMI
                    </Button>
                    {bmi !== null && (
                      <div className="text-center p-6 bg-gradient-secondary rounded-xl animate-fade-in-up">
                        <p className="text-sm text-muted-foreground mb-2">Your BMI</p>
                        <p className="text-5xl font-bold text-primary mb-2">{bmi}</p>
                        <p className={`text-2xl font-semibold ${getCategoryColor(bmiCategory)}`}>
                          {bmiCategory}
                        </p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* BMR Calculator */}
                <TabsContent value="bmr">
                  <div className="space-y-6">
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold mb-2">Basal Metabolic Rate Calculator</h3>
                      <p className="text-muted-foreground">Calculate calories burned at rest</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Gender</label>
                        <Select value={bmrGender} onValueChange={setBmrGender}>
                          <SelectTrigger className="h-12">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Age (years)</label>
                        <Input
                          type="number"
                          placeholder="30"
                          value={bmrAge}
                          onChange={(e) => setBmrAge(e.target.value)}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Height (cm)</label>
                        <Input
                          type="number"
                          placeholder="170"
                          value={bmrHeight}
                          onChange={(e) => setBmrHeight(e.target.value)}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Weight (kg)</label>
                        <Input
                          type="number"
                          placeholder="70"
                          value={bmrWeight}
                          onChange={(e) => setBmrWeight(e.target.value)}
                          className="h-12"
                        />
                      </div>
                    </div>
                    <Button onClick={calculateBMR} className="w-full h-12">
                      <Activity className="h-5 w-5 mr-2" />
                      Calculate BMR
                    </Button>
                    {bmr !== null && (
                      <div className="text-center p-6 bg-gradient-secondary rounded-xl animate-fade-in-up">
                        <p className="text-sm text-muted-foreground mb-2">Your BMR</p>
                        <p className="text-5xl font-bold text-primary mb-2">{bmr}</p>
                        <p className="text-lg text-muted-foreground">calories/day at rest</p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* Calorie Calculator */}
                <TabsContent value="calories">
                  <div className="space-y-6">
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold mb-2">Daily Calorie Needs Calculator</h3>
                      <p className="text-muted-foreground">Calculate your total daily energy expenditure</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Gender</label>
                        <Select value={calorieGender} onValueChange={setCalorieGender}>
                          <SelectTrigger className="h-12">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Age (years)</label>
                        <Input
                          type="number"
                          placeholder="30"
                          value={calorieAge}
                          onChange={(e) => setCalorieAge(e.target.value)}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Height (cm)</label>
                        <Input
                          type="number"
                          placeholder="170"
                          value={calorieHeight}
                          onChange={(e) => setCalorieHeight(e.target.value)}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Weight (kg)</label>
                        <Input
                          type="number"
                          placeholder="70"
                          value={calorieWeight}
                          onChange={(e) => setCalorieWeight(e.target.value)}
                          className="h-12"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold mb-2">Activity Level</label>
                        <Select value={activityLevel} onValueChange={setActivityLevel}>
                          <SelectTrigger className="h-12">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                            <SelectItem value="light">Light (exercise 1-3 days/week)</SelectItem>
                            <SelectItem value="moderate">Moderate (exercise 3-5 days/week)</SelectItem>
                            <SelectItem value="active">Active (exercise 6-7 days/week)</SelectItem>
                            <SelectItem value="veryActive">Very Active (intense exercise daily)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button onClick={calculateCalories} className="w-full h-12">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Calculate Calories
                    </Button>
                    {dailyCalories !== null && (
                      <div className="text-center p-6 bg-gradient-secondary rounded-xl animate-fade-in-up">
                        <p className="text-sm text-muted-foreground mb-2">Your Daily Calorie Needs</p>
                        <p className="text-5xl font-bold text-primary mb-2">{dailyCalories}</p>
                        <p className="text-lg text-muted-foreground">calories/day</p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* Body Fat Calculator */}
                <TabsContent value="bodyfat">
                  <div className="space-y-6">
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold mb-2">Body Fat Percentage Calculator</h3>
                      <p className="text-muted-foreground">Calculate using US Navy method</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Gender</label>
                        <Select value={bfGender} onValueChange={setBfGender}>
                          <SelectTrigger className="h-12">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Age (years)</label>
                        <Input
                          type="number"
                          placeholder="30"
                          value={bfAge}
                          onChange={(e) => setBfAge(e.target.value)}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Height (cm)</label>
                        <Input
                          type="number"
                          placeholder="170"
                          value={bfHeight}
                          onChange={(e) => setBfHeight(e.target.value)}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Weight (kg)</label>
                        <Input
                          type="number"
                          placeholder="70"
                          value={bfWeight}
                          onChange={(e) => setBfWeight(e.target.value)}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Neck (cm)</label>
                        <Input
                          type="number"
                          placeholder="37"
                          value={bfNeck}
                          onChange={(e) => setBfNeck(e.target.value)}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Waist (cm)</label>
                        <Input
                          type="number"
                          placeholder="85"
                          value={bfWaist}
                          onChange={(e) => setBfWaist(e.target.value)}
                          className="h-12"
                        />
                      </div>
                      {bfGender === "female" && (
                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold mb-2">Hip (cm)</label>
                          <Input
                            type="number"
                            placeholder="95"
                            value={bfHip}
                            onChange={(e) => setBfHip(e.target.value)}
                            className="h-12"
                          />
                        </div>
                      )}
                    </div>
                    <Button onClick={calculateBodyFat} className="w-full h-12">
                      <Heart className="h-5 w-5 mr-2" />
                      Calculate Body Fat
                    </Button>
                    {bodyFat !== null && (
                      <div className="text-center p-6 bg-gradient-secondary rounded-xl animate-fade-in-up">
                        <p className="text-sm text-muted-foreground mb-2">Your Body Fat Percentage</p>
                        <p className="text-5xl font-bold text-primary mb-2">{bodyFat}%</p>
                        <p className={`text-2xl font-semibold ${getBodyFatCategory(bodyFat, bfGender).color}`}>
                          {getBodyFatCategory(bodyFat, bfGender).category}
                        </p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* Ideal Weight Calculator */}
                <TabsContent value="idealweight">
                  <div className="space-y-6">
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold mb-2">Ideal Weight Calculator</h3>
                      <p className="text-muted-foreground">Calculate your healthy weight range</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Gender</label>
                        <Select value={iwGender} onValueChange={setIwGender}>
                          <SelectTrigger className="h-12">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Height (cm)</label>
                        <Input
                          type="number"
                          placeholder="170"
                          value={iwHeight}
                          onChange={(e) => setIwHeight(e.target.value)}
                          className="h-12"
                        />
                      </div>
                    </div>
                    <Button onClick={calculateIdealWeight} className="w-full h-12">
                      <Calculator className="h-5 w-5 mr-2" />
                      Calculate Ideal Weight
                    </Button>
                    {idealWeight !== null && (
                      <div className="text-center p-6 bg-gradient-secondary rounded-xl animate-fade-in-up">
                        <p className="text-sm text-muted-foreground mb-2">Your Ideal Weight Range</p>
                        <p className="text-3xl font-bold text-primary mb-2">
                          {idealWeight.min} - {idealWeight.max} kg
                        </p>
                        <p className="text-lg text-muted-foreground">Healthy weight range for your height</p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* Water Intake Calculator */}
                <TabsContent value="water">
                  <div className="space-y-6">
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold mb-2">Daily Water Intake Calculator</h3>
                      <p className="text-muted-foreground">Calculate your daily water needs</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Weight (kg)</label>
                        <Input
                          type="number"
                          placeholder="70"
                          value={waterWeight}
                          onChange={(e) => setWaterWeight(e.target.value)}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Exercise Duration (min/day)</label>
                        <Input
                          type="number"
                          placeholder="30"
                          value={waterActivity}
                          onChange={(e) => setWaterActivity(e.target.value)}
                          className="h-12"
                        />
                      </div>
                    </div>
                    <Button onClick={calculateWaterIntake} className="w-full h-12">
                      <Droplet className="h-5 w-5 mr-2" />
                      Calculate Water Intake
                    </Button>
                    {waterIntake !== null && (
                      <div className="text-center p-6 bg-gradient-secondary rounded-xl animate-fade-in-up">
                        <p className="text-sm text-muted-foreground mb-2">Your Daily Water Intake</p>
                        <p className="text-5xl font-bold text-primary mb-2">{waterIntake}</p>
                        <p className="text-lg text-muted-foreground">liters/day</p>
                        <p className="text-sm text-muted-foreground mt-4">
                          That's approximately {Math.round(waterIntake * 4)} glasses (250ml each)
                        </p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HealthCalculators;