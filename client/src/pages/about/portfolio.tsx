
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "wouter";

const portfolioItems = [
  {
    title: "3D Printing Projects",
    description: "Custom 3D printing solutions and prototypes",
    category: "Manufacturing",
    rating: 5,
  },
  {
    title: "Design Services",
    description: "Professional CAD modeling and design",
    category: "Design",
    rating: 5,
  },
  {
    title: "Technical Workshops",
    description: "Training and skill development programs",
    category: "Education",
    rating: 4,
  },
  {
    title: "Engineering Solutions",
    description: "Custom engineering and manufacturing",
    category: "Engineering",
    rating: 5,
  }
];

export default function PortfolioPage() {
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
            <h1 className="text-5xl font-bold mb-6 text-white">Our Portfolio</h1>
            <p className="text-xl text-gray-400">
              Explore our diverse range of projects and achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00] transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#00FF00] text-sm">{item.category}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < item.rating ? "text-[#00FF00] fill-[#00FF00]" : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      asChild 
                      className="w-full bg-[#00FF00] hover:bg-[#00FF00]/90 text-black mt-4"
                    >
                      <Link href="/contact">
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-16"
          >
            <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
