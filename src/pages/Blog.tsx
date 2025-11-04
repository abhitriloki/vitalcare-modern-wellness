import Navigation from "@/components/Navigation";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <BlogSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
