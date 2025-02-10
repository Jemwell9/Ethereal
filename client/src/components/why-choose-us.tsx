import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Award, Users, Palette, Layers, Leaf } from "lucide-react";

const features = [
  {
    title: "Cutting-Edge Knowledge",
    description: "Our 3D printing services use the latest materials and techniques to deliver unmatched precision and quality.",
    icon: Zap,
    image: "/feature-tech.jpg"
  },
  {
    title: "Expert Guidance",
    description: "Collaborate with PhD-level professionals to refine your concepts into perfect designs.",
    icon: Award,
    image: "/feature-expert.jpg"
  },
  {
    title: "Trusted by Industry Leaders",
    description: "We've partnered with top brands and innovators across industries to deliver exceptional results.",
    icon: Users,
    image: "/feature-partners.jpg"
  },
  {
    title: "Creative Empowerment",
    description: "Learn, create, and collaborate in workshops designed for all skill levels.",
    icon: Palette,
    image: "/feature-creative.jpg"
  },
  {
    title: "Material Diversity",
    description: "Access a wide range of materials, including plastics, metals, and composites, for any project.",
    icon: Layers,
    image: "/feature-materials.jpg"
  },
  {
    title: "Sustainable Design Options",
    description: "Precision manufacturing minimizes material waste, reducing your carbon footprint.",
    icon: Leaf,
    image: "/feature-sustainable.jpg"
  },
];

// Animated 3D printer head background
const PrinterHeadBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 w-full h-[20px] bg-gradient-to-r from-[#00FF00]/0 via-[#00FF00] to-[#00FF00]/0"
            style={{ top: `${i * 10}%` }}
            animate={{
              x: [-100, window.innerWidth + 100],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <PrinterHeadBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">WHY CHOOSE US?</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors">
                <CardContent className="pt-6">
                  <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-[#00FF00]/5">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error('Feature image failed to load:', e);
                        const target = e.target as HTMLImageElement;
                        target.style.border = '2px solid red';
                      }}
                    />
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-[#00FF00]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                      <p className="text-white/60 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}