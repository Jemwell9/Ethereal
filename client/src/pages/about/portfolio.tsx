import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Image as ImageIcon, Printer3d, Lightbulb, Code, Wrench } from "lucide-react";
import { Link } from "wouter";

const portfolioCategories = [
  {
    icon: <Printer3d className="w-8 h-8 text-[#00FF00]" />,
    title: "3D Printing",
    items: ["Custom Parts", "Prototypes", "Art Pieces"],
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-[#00FF00]" />,
    title: "Design",
    items: ["Product Design", "Industrial Design", "Creative Concepts"],
  },
  {
    icon: <Code className="w-8 h-8 text-[#00FF00]" />,
    title: "Technology",
    items: ["Smart Solutions", "IoT Integration", "Digital Manufacturing"],
  },
  {
    icon: <Wrench className="w-8 h-8 text-[#00FF00]" />,
    title: "Engineering",
    items: ["Mechanical Parts", "Custom Tools", "Technical Solutions"],
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
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
              Explore our innovative creations and solutions across various industries
            </p>
          </motion.div>

          {/* Portfolio Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00] transition-colors">
                  <CardContent className="p-6">
                    <div className="mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-400">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-16"
          >
            <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}