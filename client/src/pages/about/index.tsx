
import React from "react";
import { motion } from "framer-motion";
import { Portfolio } from "@/components/portfolio";
import { Image } from "lucide-react";

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="aspect-video bg-black/50 border border-[#00FF00]/20 rounded-lg overflow-hidden flex items-center justify-center mb-12">
            <Image className="w-32 h-32 text-[#00FF00]/40" />
          </div>
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
            <p className="text-lg text-gray-400 mb-8">
              We're a team of passionate innovators, combining PhD-level expertise
              with cutting-edge technology to transform ideas into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5 Key Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {/* 1. Company Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm border border-[#00FF00]/20 rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Company Overview</h2>
              <p className="text-white/60">
                Founded with a vision to revolutionize 3D printing and design, we bring cutting-edge technology 
                and creative expertise to every project. Our journey began with a passion for innovation and 
                has evolved into a comprehensive solution provider for all your 3D printing needs.
              </p>
            </motion.div>

            {/* 2. Our Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm border border-[#00FF00]/20 rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-white/60">
                To empower creators and businesses with innovative 3D printing solutions, pushing the boundaries 
                of what's possible in manufacturing and design. We strive to make advanced technology accessible 
                while maintaining the highest standards of quality and service.
              </p>
            </motion.div>

            {/* 3. Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm border border-[#00FF00]/20 rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Our Technologies</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-[#00FF00] font-medium mb-2">Advanced Printers</h3>
                  <p className="text-white/60">State-of-the-art 3D printing equipment</p>
                </div>
                <div className="text-center">
                  <h3 className="text-[#00FF00] font-medium mb-2">Materials</h3>
                  <p className="text-white/60">Wide range of printing materials</p>
                </div>
                <div className="text-center">
                  <h3 className="text-[#00FF00] font-medium mb-2">Software</h3>
                  <p className="text-white/60">Cutting-edge design tools</p>
                </div>
              </div>
            </motion.div>

            {/* 4. Our Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm border border-[#00FF00]/20 rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <h3 className="text-[#00FF00] font-medium mb-2">1. Consultation</h3>
                  <p className="text-white/60">Initial project discussion</p>
                </div>
                <div>
                  <h3 className="text-[#00FF00] font-medium mb-2">2. Design</h3>
                  <p className="text-white/60">Concept development</p>
                </div>
                <div>
                  <h3 className="text-[#00FF00] font-medium mb-2">3. Production</h3>
                  <p className="text-white/60">3D printing execution</p>
                </div>
                <div>
                  <h3 className="text-[#00FF00] font-medium mb-2">4. Delivery</h3>
                  <p className="text-white/60">Quality check and shipping</p>
                </div>
              </div>
            </motion.div>

            {/* 5. Future Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm border border-[#00FF00]/20 rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Future Vision</h2>
              <p className="text-white/60">
                We're committed to leading the transformation of manufacturing through innovative 3D printing 
                solutions. Our vision extends beyond current capabilities, focusing on sustainable production 
                methods and pushing the boundaries of what's possible in additive manufacturing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />
    </div>
  );
}
