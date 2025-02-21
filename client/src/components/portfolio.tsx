import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Printer, PenTool, Laptop, Building2, Ruler, Lightbulb } from "lucide-react";

const portfolioItems = [
  {
    title: "Architectural Prototypes",
    description: "Rapid prototyping for architectural firms",
    icon: Building2,
    category: "Architecture"
  },
  {
    title: "Product Design",
    description: "Custom product development and prototyping",
    icon: Printer,
    category: "Manufacturing"
  },
  {
    title: "Educational Models",
    description: "3D printed educational materials",
    icon: PenTool,
    category: "Education"
  },
  {
    title: "Engineering Solutions",
    description: "Precision parts and tooling",
    icon: Ruler,
    category: "Engineering"
  },
  {
    title: "Medical Devices",
    description: "Custom medical device prototypes",
    icon: Laptop,
    category: "Medical"
  },
  {
    title: "Innovation Projects",
    description: "Research and development prototypes",
    icon: Lightbulb,
    category: "R&D"
  }
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-black/40 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-4">Our Portfolio</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
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
                <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-[#00FF00]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 mb-4">{item.description}</p>
                    <span className="inline-block px-3 py-1 rounded-full text-sm bg-[#00FF00]/10 text-[#00FF00]">
                      {item.category}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
              VIEW ALL PROJECTS
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}