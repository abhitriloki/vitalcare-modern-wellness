import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark">
        <div className="relative z-10 text-center text-white container mx-auto px-4">
          <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Please read these terms carefully</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">Last updated: November 3, 2025</p>

            <h2 className="font-poppins text-3xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground mb-8">
              By accessing or using VitalCare Wellness services, you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you may not access our services.
            </p>

            <h2 className="font-poppins text-3xl font-bold mb-4">Medical Disclaimer</h2>
            <p className="text-muted-foreground mb-8">
              The information provided through our services is for informational purposes only and should not be 
              considered as medical advice. Always seek the advice of your physician or qualified healthcare provider 
              with any questions regarding a medical condition.
            </p>

            <h2 className="font-poppins text-3xl font-bold mb-4">Appointments and Cancellations</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Appointments must be cancelled at least 24 hours in advance</li>
              <li>Late cancellations or no-shows may incur a fee</li>
              <li>We reserve the right to reschedule appointments if necessary</li>
              <li>You are responsible for arriving on time for scheduled appointments</li>
            </ul>

            <h2 className="font-poppins text-3xl font-bold mb-4">Payment Terms</h2>
            <p className="text-muted-foreground mb-4">Payment terms include:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Payment is due at the time of service unless otherwise arranged</li>
              <li>We accept cash, card, and insurance payments</li>
              <li>Insurance coverage is subject to your policy terms</li>
              <li>Outstanding balances may be subject to collection procedures</li>
            </ul>

            <h2 className="font-poppins text-3xl font-bold mb-4">Patient Responsibilities</h2>
            <p className="text-muted-foreground mb-4">As a patient, you agree to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Provide accurate health information</li>
              <li>Follow treatment plans as prescribed</li>
              <li>Communicate openly with your healthcare providers</li>
              <li>Respect our staff and facilities</li>
              <li>Maintain confidentiality of other patients</li>
            </ul>

            <h2 className="font-poppins text-3xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground mb-8">
              VitalCare Wellness shall not be liable for any indirect, incidental, special, consequential, or punitive 
              damages resulting from your use of our services.
            </p>

            <h2 className="font-poppins text-3xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground mb-8">
              We reserve the right to modify these terms at any time. We will notify you of any changes by posting 
              the new Terms of Service on this page.
            </p>

            <h2 className="font-poppins text-3xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Service, please contact us at:<br />
              Email: legal@vitalcarewellness.com<br />
              Phone: +91 9876543210
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Terms;
