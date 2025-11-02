import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import blogMorning from "@/assets/blog-morning-habits.jpg";
import blogBackPain from "@/assets/blog-back-pain.jpg";
import blogNutrition from "@/assets/blog-nutrition.jpg";

const BlogSection = () => {
  const posts = [
    {
      title: "10 Morning Habits for Better Health",
      image: blogMorning,
      date: "October 25, 2025",
      category: "Lifestyle",
      excerpt: "Start your day right with these science-backed wellness practices...",
      readTime: "5 min read",
    },
    {
      title: "Understanding Lower Back Pain",
      image: blogBackPain,
      date: "October 20, 2025",
      category: "Physiotherapy",
      excerpt: "Common causes of back pain and effective treatment options...",
      readTime: "7 min read",
    },
    {
      title: "Nutrition Guide for Weight Loss",
      image: blogNutrition,
      date: "October 15, 2025",
      category: "Nutrition",
      excerpt: "Evidence-based dietary strategies for sustainable weight management...",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4">
            Latest Health Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert tips and wellness advice
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="font-poppins text-xl font-semibold mb-3">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-primary font-semibold hover:underline inline-flex items-center"
                >
                  Read More →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
