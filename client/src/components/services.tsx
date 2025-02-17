import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, GraduationCap, Pen, Image } from "lucide-react";

const services = [
  {
    title: "3D Printing (All Materials)",
    description: "From prototypes to finished products, we deliver quality results for every project using various materials. We've got you covered whether it's PLA, ABS, PETG, resin, metal, carbon fiber, nylon, or any other material.",
    icon: Code,
    details: "Our technology ensures precision, durability, and customization for all creations, big or small."
  },
  {
    title: "AutoCAD Modeling (Small to Large Scale)",
    description: "Transform your ideas into 3D-print-ready designs with our expert AutoCAD modelling services. We specialize in creating precise and functional models tailored for 3D printing, ensuring every detail is optimized for a flawless print.",
    icon: Code,
    details: "From intricate prototypes to large-scale production designs."
  },
  {
    title: "Consultation Services (Design and Materials)",
    description: "Navigate the world of 3D printing with confidence through our expert consultation services. From selecting the right materials—such as PLA, ABS, resin, metal, and more—to refining your design for optimal results, our team provides tailored guidance at every step.",
    icon: GraduationCap,
    details: "Whether you're prototyping, creating functional parts, or producing artistic pieces."
  },
  {
    title: "3D Pen Art Workshop (For Kids to Adults)",
    description: "Unleash your creativity with our fun and engaging 3D Pen Art Workshops, designed for all ages and skill levels. Whether you're a curious beginner or a seasoned artist, our hands-on sessions guide you in creating stunning 3D masterpieces.",
    icon: Pen,
    details: "Perfect for kids, adults, families, and team-building events, these workshops combine creativity and innovation in an enjoyable and interactive environment. Let your imagination come to life—one stroke at a time!"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black/40 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">FEATURED SERVICES</h2>
          <p className="text-[#00FF00]/80 max-w-2xl mx-auto">
            We provide comprehensive services from consultation to delivery
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-[#00FF00]" />
                  </div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                  <CardDescription className="text-white/60">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[1, 2, 3].map((_, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="aspect-square bg-[#00FF00]/5 rounded-lg overflow-hidden flex items-center justify-center"
                      >
                        <Image className="w-6 h-6 text-[#00FF00]/40" />
                      </div>
                    ))}
                  </div>
                  <p className="text-[#00FF00]/80 text-sm">{service.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}