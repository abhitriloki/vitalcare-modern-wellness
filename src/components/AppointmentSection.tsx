import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const AppointmentSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    service: "",
    notes: "",
    virtualConsultation: false,
    agreedToTerms: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!formData.agreedToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to terms and privacy policy",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-appointment', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your appointment request has been sent. We'll contact you shortly.",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        service: "",
        notes: "",
        virtualConsultation: false,
        agreedToTerms: false,
      });
    } catch (error: any) {
      console.error("Error submitting appointment:", error);
      toast({
        title: "Error",
        description: "Failed to send appointment request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="appointment" className="py-20 gradient-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-white/90">
            Book your free consultation today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h3 className="font-poppins text-2xl font-bold mb-6">
                  Book Your Appointment
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Full Name *" 
                      className="h-12"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <Input 
                      type="tel" 
                      placeholder="Phone Number *" 
                      className="h-12"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <Input 
                    type="email" 
                    placeholder="Email Address *" 
                    className="h-12"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      type="date" 
                      className="h-12"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                    <select 
                      className="w-full h-12 px-3 border border-input rounded-md bg-background"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    >
                      <option value="">Preferred Time</option>
                      <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                      <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                    </select>
                  </div>
                  <select 
                    className="w-full h-12 px-3 border border-input rounded-md bg-background"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="">Service Interest</option>
                    <option value="Physiotherapy">Physiotherapy</option>
                    <option value="Nutrition Counseling">Nutrition Counseling</option>
                    <option value="Mental Wellness">Mental Wellness</option>
                    <option value="Yoga & Fitness">Yoga & Fitness</option>
                    <option value="Ayurvedic Treatment">Ayurvedic Treatment</option>
                    <option value="Weight Management">Weight Management</option>
                  </select>
                  <Textarea
                    placeholder="Additional Notes (optional)"
                    className="min-h-[100px]"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="rounded border-input"
                        checked={formData.virtualConsultation}
                        onChange={(e) => setFormData({ ...formData, virtualConsultation: e.target.checked })}
                      />
                      <span className="text-sm">I want a virtual consultation</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="rounded border-input"
                        checked={formData.agreedToTerms}
                        onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                        required
                      />
                      <span className="text-sm">I agree to terms and privacy policy *</span>
                    </label>
                  </div>
                  <Button 
                    type="submit"
                    className="w-full h-12 bg-primary hover:bg-primary-dark text-white text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Book Free Consultation"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <h3 className="font-poppins text-xl font-bold mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary">
                        +91 9876543210
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:care@vitalcarewellness.com" className="text-muted-foreground hover:text-primary">
                        care@vitalcarewellness.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-muted-foreground">
                        123 Wellness Street, New Delhi, 110001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Operating Hours</p>
                      <p className="text-muted-foreground">
                        Mon-Sat: 9 AM - 8 PM<br />
                        Sun: 10 AM - 6 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant bg-primary text-white">
              <CardContent className="p-6 text-center">
                <p className="text-lg font-semibold mb-2">Or call us directly</p>
                <a href="tel:+919876543210" className="text-2xl font-bold hover:underline">
                  +91 9876543210
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
