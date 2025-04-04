import React from "react"; // Import React
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Correct import path
import { Link } from "wouter"; // Link component from wouter for routing

const blogPosts = [
  {
    title: "The Future of 3D Printing",
    date: "February 21, 2024",
    excerpt: "Exploring the latest innovations in 3D printing technology and its impact on various industries.",
    image: "/images/blog/3d-printing-future.jpg",
    slug: "future-of-3d-printing"
  },
  {
    title: "Getting Started with 3D Pen Art",
    date: "February 18, 2024",
    excerpt: "A comprehensive guide for beginners looking to explore the creative possibilities of 3D pens.",
    image: "/images/blog/3d-pen-art.jpg",
    slug: "getting-started-3d-pen"
  },
  {
    title: "Industrial Applications of 3D Printing",
    date: "February 15, 2024",
    excerpt: "How manufacturing companies are leveraging 3D printing for production and prototyping.",
    image: "/images/blog/industrial-3d-printing.jpg",
    slug: "industrial-applications"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">Our Blog</h1>
            <p className="text-xl text-gray-400">
              Stay updated with the latest in 3D printing technology and creativity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-black/50 backdrop-blur-sm border border-[#00FF00]/20 rounded-lg overflow-hidden"
              >
                <div className="aspect-video relative">
                  {/* Actual image for the blog post */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[#00FF00] text-sm mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <Button
                    asChild={true} // This ensures we render a Link component
                    variant="outline"
                    className="w-full border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00]/10"
                  >
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
