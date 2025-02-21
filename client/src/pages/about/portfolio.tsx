
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

const portfolioItems = [
  {
    title: "3D Printed Architecture Model",
    category: "Architecture",
    image: "/portfolio/architecture-1.jpg",
    description: "Custom architectural model with intricate details",
  },
  {
    title: "Medical Device Prototype",
    category: "Medical",
    image: "/portfolio/medical-1.jpg",
    description: "Precision medical device prototype",
  },
  {
    title: "Custom Gaming Figurine",
    category: "Gaming",
    image: "/portfolio/gaming-1.jpg",
    description: "Detailed gaming character figurine",
  },
  {
    title: "Industrial Part Design",
    category: "Manufacturing",
    image: "/portfolio/manufacturing-1.jpg",
    description: "Custom manufactured industrial component",
  },
  {
    title: "Educational Model Set",
    category: "Education",
    image: "/portfolio/education-1.jpg",
    description: "Interactive educational 3D models",
  },
  {
    title: "Art Installation Piece",
    category: "Art",
    image: "/portfolio/art-1.jpg",
    description: "Contemporary art piece using 3D printing",
  },
];

const categories = ["All", "Architecture", "Medical", "Gaming", "Manufacturing", "Education", "Art"];

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
            <p className="text-xl text-white/60">
              Discover our diverse range of 3D printing projects and creative solutions
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="outline"
                className="border-[#00FF00]/20 hover:border-[#00FF00] hover:bg-[#00FF00]/10"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black/50 border-[#00FF00]/20 overflow-hidden group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-[#00FF00]/5 relative">
                      {/* Replace with actual images */}
                      <div className="w-full h-full flex items-center justify-center">
                        <ImageIcon className="w-12 h-12 text-[#00FF00]/30" />
                      </div>
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center p-6">
                          <p className="text-[#00FF00] text-sm mb-2">{item.category}</p>
                          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-white/60 mb-4">{item.description}</p>
                          <Button className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                            View Details <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
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
