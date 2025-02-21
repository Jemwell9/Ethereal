import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Image } from "lucide-react";

const portfolioItems = [
  {
    title: "3D Printing Services",
    category: "Manufacturing",
    description: "High-precision 3D printing solutions for prototypes and production",
    image: "/portfolio/3d-printing.jpg"
  },
  {
    title: "Design Consultancy",
    category: "Design",
    description: "Professional CAD design and optimization services",
    image: "/portfolio/design.jpg"
  },
  {
    title: "Technical Workshops",
    category: "Education",
    description: "Hands-on training programs for 3D printing technologies",
    image: "/portfolio/workshop.jpg"
  },
  {
    title: "Custom Engineering",
    category: "Engineering",
    description: "Specialized engineering solutions for unique challenges",
    image: "/portfolio/engineering.jpg"
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
              Explore our range of services and successful projects
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
                    </div>
                    <CardTitle className="text-white text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square bg-[#00FF00]/5 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-[#00FF00]/10 flex items-center justify-center">
                        <Image className="w-8 h-8 text-[#00FF00]/30" />
                      </div>
                    </div>
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