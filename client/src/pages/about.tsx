import { motion } from "framer-motion";
import { GraduationCap, Award, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: GraduationCap,
    title: "PhD-Level Expertise",
    description: "Our team combines advanced academic knowledge with practical industry experience to deliver cutting-edge solutions."
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards in 3D printing, using state-of-the-art technology and premium materials."
  },
  {
    icon: Target,
    title: "Innovation Focus",
    description: "Constantly pushing boundaries in 3D printing technology and creative applications."
  },
  {
    icon: Heart,
    title: "Customer-Centric",
    description: "Your vision is our priority. We work closely with you to bring your ideas to life with precision and care."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">
              Pioneering the Future of
              <span className="text-[#00FF00]"> 3D Printing</span>
            </h1>
            <p className="text-lg text-white/60 mb-8">
              We're a team of passionate innovators, combining PhD-level expertise
              with cutting-edge technology to transform ideas into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
              <p className="text-white/60 mb-6">
                To revolutionize manufacturing and creative expression through
                accessible, sustainable, and innovative 3D printing solutions.
              </p>
              <p className="text-white/60">
                We believe in empowering creators, from hobbyists to industry
                professionals, with the tools and expertise they need to bring
                their visions to life.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-square bg-[#00FF00]/5 rounded-lg border border-[#00FF00]/20 p-8"
            >
              <div className="w-full h-full bg-[#00FF00]/5 rounded-lg relative overflow-hidden">
                {/* Animated grid background */}
                <div className="absolute inset-0 grid grid-cols-8 gap-4">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-[#00FF00]/10 rounded-sm"
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.05,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-white"
          >
            Our Core Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-[#00FF00]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {value.title}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {value.description}
                    </p>
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
