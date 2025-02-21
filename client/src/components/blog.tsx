import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const blogPosts = [
  {
    title: "The Future of 3D Printing in Manufacturing",
    excerpt: "Exploring how additive manufacturing is revolutionizing production processes...",
    date: "Feb 15, 2025",
    readTime: "5 min read",
    category: "Industry Insights"
  },
  {
    title: "Sustainable Materials in 3D Printing",
    excerpt: "Discover eco-friendly materials that are changing the landscape of 3D printing...",
    date: "Feb 10, 2025",
    readTime: "4 min read",
    category: "Materials"
  },
  {
    title: "Innovations in 3D Pen Art",
    excerpt: "New techniques and applications in the world of 3D pen artistry...",
    date: "Feb 5, 2025",
    readTime: "3 min read",
    category: "Workshops"
  }
];

export default function Blog() {
  return (
    <section className="py-20 bg-black/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-4">Latest Insights</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Stay updated with the latest trends, innovations, and insights in the world of 3D printing
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-all">
                  <CardContent className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full text-sm bg-[#00FF00]/10 text-[#00FF00] mb-4">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                    <p className="text-white/60 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-white/40 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button
                      variant="link"
                      className="text-[#00FF00] hover:text-[#00FF00]/90 p-0 h-auto font-semibold"
                      asChild
                    >
                      <Link href={`/blog/${index}`} className="flex items-center gap-2">
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
              VIEW ALL POSTS
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
