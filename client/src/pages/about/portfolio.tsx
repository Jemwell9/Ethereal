
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Custom 3D Printing",
    category: "Manufacturing",
    description: "High-quality prototypes and production parts using advanced 3D printing technology",
    image: "/portfolio/3d-printing.jpg"
  },
  {
    title: "CAD Design Services",
    category: "Design",
    description: "Professional 3D modeling and design optimization for various industries",
    image: "/portfolio/design.jpg"
  },
  {
    title: "Technical Training",
    category: "Education",
    description: "Comprehensive workshops and training programs for 3D printing technologies",
    image: "/portfolio/workshop.jpg"
  },
  {
    title: "Engineering Solutions",
    category: "Engineering",
    description: "Custom engineering solutions and manufacturing optimization",
    image: "/portfolio/engineering.jpg"
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">Our Portfolio</h1>
            <p className="text-xl text-gray-400">
              Explore our innovative projects and solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#00FF00] text-sm">{project.category}</span>
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{project.title}</CardTitle>
                    <p className="text-gray-400">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-[#00FF00]/5 rounded-lg overflow-hidden mb-4">
                      <div className="w-full h-full bg-[#00FF00]/10" />
                    </div>
                    <Button asChild className="w-full bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                      <Link href="/contact">
                        View Details <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
