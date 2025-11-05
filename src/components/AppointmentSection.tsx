import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const AppointmentSection = () => {
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
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Full Name *" className="h-12" />
                    <Input type="tel" placeholder="Phone Number *" className="h-12" />
                  </div>
                  <Input type="email" placeholder="Email Address *" className="h-12" />
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input type="date" className="h-12" />
                    <select className="w-full h-12 px-3 border border-input rounded-md bg-background">
                      <option>Preferred Time</option>
                      <option>Morning (9 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 4 PM)</option>
                      <option>Evening (4 PM - 8 PM)</option>
                    </select>
                  </div>
                  <select className="w-full h-12 px-3 border border-input rounded-md bg-background">
                    <option>Service Interest</option>
                    <option>Physiotherapy</option>
                    <option>Nutrition Counseling</option>
                    <option>Mental Wellness</option>
                    <option>Yoga & Fitness</option>
                    <option>Ayurvedic Treatment</option>
                    <option>Weight Management</option>
                  </select>
                  <Textarea
                    placeholder="Additional Notes (optional)"
                    className="min-h-[100px]"
                  />
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-input" />
                      <span className="text-sm">I want a virtual consultation</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-input" />
                      <span className="text-sm">I agree to terms and privacy policy</span>
                    </label>
                  </div>
                  <Button className="w-full h-12 bg-primary hover:bg-primary-dark text-white text-lg">
                    Book Free Consultation
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
