import { Leaf, Facebook, Instagram, Twitter, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="font-poppins text-xl font-bold">VitalCare Wellness</span>
            </div>
            <p className="text-white/70 mb-4">
              Your partner in holistic wellness. Transforming lives through expert care and personalized treatments.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-poppins text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Our Doctors", "Testimonials", "Blog", "Career Opportunities", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-poppins text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {["Physiotherapy", "Nutrition Counseling", "Mental Wellness", "Yoga & Fitness", "Ayurvedic Treatment", "Weight Management"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-white/70 hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-poppins text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-white/70">123 Wellness Street, New Delhi, 110001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-white/70 hover:text-primary">
                  +91 9876543210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:care@vitalcarewellness.com" className="text-white/70 hover:text-primary">
                  care@vitalcarewellness.com
                </a>
              </li>
              <li className="text-white/70">
                <strong>Operating Hours:</strong><br />
                Mon-Sat: 9 AM - 8 PM<br />
                Sun: 10 AM - 6 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2025 VitalCare Wellness. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-primary">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-primary">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-primary">Sitemap</a>
            </div>
            <p className="text-white/70 text-sm">
              Made with ❤️ in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
