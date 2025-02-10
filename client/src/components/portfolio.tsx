import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  "CONCEPT", "MANUFACTURING", "ARCHITECTURE", "CONSTRUCTION",
  "MEDICAL", "MANUFACTURING", "GAMES", "TOYS"
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">FIND OUT MORE</h2>
            <p className="text-white/80 mb-8">
              We provide comprehensive services that include consultation to refine your ideas, 
              design to create precise and functional models, printing and production with 
              high-quality materials, and delivery right to your doorstep.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black/50 border-[#00FF00]/20">
                    <CardContent className="p-4">
                      <p className="text-white text-center">{category}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="aspect-square bg-[#00FF00]/10 rounded-lg"></div>
              ))}
            </div>
            <Button className="mt-8 bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
              SEE OUR PAST WORKS
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
