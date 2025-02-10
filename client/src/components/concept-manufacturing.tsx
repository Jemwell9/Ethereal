import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Construction, Stethoscope, Factory, Gamepad2, Puzzle } from "lucide-react";

const industries = [
  { name: "ARCHITECTURE", icon: Building2 },
  { name: "CONSTRUCTION", icon: Construction },
  { name: "MEDICAL", icon: Stethoscope },
  { name: "MANUFACTURING", icon: Factory },
  { name: "GAMES", icon: Gamepad2 },
  { name: "TOYS", icon: Puzzle },
];

export default function ConceptManufacturing() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-white">
            CONCEPT
            <br />
            MANUFACTURING
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto text-lg">
            We provide comprehensive services that include consultation to refine your ideas, 
            design to create precise and functional models, printing and production with 
            high-quality materials, and delivery right to your doorstep.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <industry.icon className="w-8 h-8 text-[#00FF00] mb-2" />
                  <span className="text-white text-sm">{industry.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button variant="outline" className="border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00] hover:text-black">
            FIND OUT MORE
          </Button>
          <Button variant="outline" className="border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00] hover:text-black">
            SEE OUR PAST WORKS
          </Button>
        </div>
      </div>
    </section>
  );
}
