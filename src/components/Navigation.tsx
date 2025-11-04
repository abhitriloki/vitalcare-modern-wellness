import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Physiotherapy", path: "/services/physiotherapy" },
    { name: "Nutrition Counseling", path: "/services/nutrition" },
    { name: "Mental Wellness", path: "/services/mental-wellness" },
    { name: "Yoga & Fitness", path: "/services/yoga-fitness" },
    { name: "Ayurvedic Treatment", path: "/services/ayurveda" },
    { name: "Weight Management", path: "/services/weight-management" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg transition-transform group-hover:scale-110">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className={`font-poppins text-xl font-bold ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              VitalCare Wellness
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-inter font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-inter font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              About Us
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className={`font-inter font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}>
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border shadow-lg z-50">
                {services.map((service) => (
                  <DropdownMenuItem key={service.path} asChild>
                    <Link to={service.path} className="cursor-pointer">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              to="/contact"
              className={`font-inter font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Contact
            </Link>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-white"
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const appointmentSection = document.getElementById('appointment');
                  if (appointmentSection) {
                    appointmentSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-background rounded-lg shadow-lg animate-slide-in-right">
            <Link
              to="/"
              className="block py-2 px-4 text-foreground hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 px-4 text-foreground hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <div className="py-2 px-4">
              <p className="font-semibold mb-2">Services</p>
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="block py-1 px-4 text-sm text-foreground hover:bg-muted transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              className="block py-2 px-4 text-foreground hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-4 mt-4">
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary-dark text-white"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate('/');
                  setTimeout(() => {
                    const appointmentSection = document.getElementById('appointment');
                    if (appointmentSection) {
                      appointmentSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
              >
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
