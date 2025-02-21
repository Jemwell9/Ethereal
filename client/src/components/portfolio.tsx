import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Image, Printer, Shapes, Wrench, Microscope, Lightbulb } from "lucide-react";

const portfolioItems = [
  {
    title: "Industrial Prototyping",
    description: "High-precision prototypes for manufacturing sector",
    image: "/portfolio/industrial.jpg",
    icon: Printer,
    category: "Manufacturing",
    technologies: ["SLA Printing", "Metal Casting", "Rapid Prototyping"]
  },
  {
    title: "Medical Devices",
    description: "Custom medical equipment and anatomical models",
    image: "/portfolio/medical.jpg",
    icon: Microscope,
    category: "Healthcare",
    technologies: ["Bio-compatible Materials", "Precision Engineering"]
  },
  {
    title: "Architectural Models",
    description: "Detailed architectural prototypes and scale models",
    image: "/portfolio/architecture.jpg",
    icon: Shapes,
    category: "Architecture",
    technologies: ["Large Format Printing", "Complex Geometries"]
  },
  {
    title: "Custom Tools & Fixtures",
    description: "Specialized manufacturing tools and fixtures",
    image: "/portfolio/tools.jpg",
    icon: Wrench,
    category: "Engineering",
    technologies: ["Functional Parts", "Custom Solutions"]
  },
  {
    title: "Research & Development",
    description: "Advanced prototypes for research institutions",
    image: "/portfolio/research.jpg",
    icon: Lightbulb,
    category: "R&D",
    technologies: ["Material Testing", "Innovative Solutions"]
  },
  {
    title: "Consumer Products",
    description: "Product design and consumer goods prototyping",
    image: "/portfolio/consumer.jpg",
    icon: Image,
    category: "Product Design",
    technologies: ["Iterative Design", "Consumer Testing"]
  }
];

export default function Portfolio() {
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
          <h2 className="text-4xl font-bold text-white text-center mb-4">Our Portfolio</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Explore our diverse range of successful projects across various industries,
            showcasing our expertise in 3D printing and design
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-all group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00FF00]/20 transition-colors">
                      <item.icon className="w-6 h-6 text-[#00FF00]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-[#00FF00]/5 text-[#00FF00]/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full text-sm bg-[#00FF00]/10 text-[#00FF00]">
                      {item.category}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button 
              className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black font-semibold px-8"
              size="lg"
            >
              VIEW ALL PROJECTS
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}