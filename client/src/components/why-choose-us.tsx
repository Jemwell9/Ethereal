import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Award, Users, Palette, Layers, Leaf, Image } from "lucide-react";
//import { Animated3DGrid } from "@/components/ui/animated-3d-grid"; // Removed as per edited code

const features = [
  {
    title: "Cutting-Edge Knowledge",
    description: "Our 3D printing services use the latest materials and techniques to deliver unmatched precision and quality.",
    icon: Zap
  },
  {
    title: "Expert Guidance",
    description: "Collaborate with PhD-level professionals to refine your concepts into perfect designs.",
    icon: Award
  },
  {
    title: "Trusted by Industry Leaders",
    description: "We've partnered with top brands and innovators across industries to deliver exceptional results.",
    icon: Users
  },
  {
    title: "Creative Empowerment",
    description: "Learn, create, and collaborate in workshops designed for all skill levels.",
    icon: Palette
  },
  {
    title: "Material Diversity",
    description: "Access a wide range of materials, including plastics, metals, and composites, for any project.",
    icon: Layers
  },
  {
    title: "Sustainable Design Options",
    description: "Precision manufacturing minimizes material waste, reducing your carbon footprint.",
    icon: Leaf
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-black/40 relative"> {/* Updated background color */}
      {/*<div className="absolute inset-0 bg-black/80" /> */} {/* Removed overlay */}
      {/*<Animated3DGrid variant="default" />*/} {/* Removed 3D Grid */}
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
              <Card className="h-full bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-[#00FF00]/5 flex items-center justify-center">
                    <Image className="w-12 h-12 text-[#00FF00]/40" />
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