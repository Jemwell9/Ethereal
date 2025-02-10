import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";

export default function Portfolio() {
  return (
    <section className="py-20 bg-black/40 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square bg-black/50 backdrop-blur-sm border border-[#00FF00]/20 hover:border-[#00FF00]/40 rounded-lg flex items-center justify-center"
              >
                <Image className="w-12 h-12 text-[#00FF00]/40" />
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
              SEE OUR PAST WORKS
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}