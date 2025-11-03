import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark">
        <div className="relative z-10 text-center text-white container mx-auto px-4">
          <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Your privacy is important to us</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">Last updated: November 3, 2025</p>

            <h2 className="font-poppins text-3xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-8">
              VitalCare Wellness ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you visit our website and 
              use our services.
            </p>

            <h2 className="font-poppins text-3xl font-bold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Health information relevant to your treatment</li>
              <li>Appointment and consultation details</li>
              <li>Payment and billing information</li>
              <li>Communication preferences</li>
            </ul>

            <h2 className="font-poppins text-3xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process appointments and consultations</li>
              <li>Send you treatment updates and health reminders</li>
              <li>Respond to your comments and questions</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-poppins text-3xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground mb-8">
              We implement appropriate technical and organizational security measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, no method 
              of transmission over the internet is 100% secure.
            </p>

            <h2 className="font-poppins text-3xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="font-poppins text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-muted-foreground">
              Email: privacy@vitalcarewellness.com<br />
              Phone: +91 9876543210<br />
              Address: 123 Wellness Street, New Delhi, 110001
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Privacy;
