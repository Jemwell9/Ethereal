import { motion } from "framer-motion";
import { Portfolio } from "@/components/portfolio";
import { Image } from "lucide-react";
import React from "react";
import { Card } from "@/components/ui/card";

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

      {/* Who We Are Content */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          {/* Company Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Story</h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-white/60 mb-6">
                Founded in Singapore, Ethereal emerged from a vision to revolutionize manufacturing in Southeast Asia through advanced 3D printing technologies. As the 3D materials arm of EXSTATIC PTE LTD, we've grown to become a leading force in additive manufacturing, serving clients across the region with innovative solutions and unparalleled expertise.
              </p>
              <p className="text-white/60">
                Our mission is to democratize advanced manufacturing technologies while maintaining the highest standards of quality and innovation. We believe in making cutting-edge 3D printing accessible to businesses of all sizes, from startups to established enterprises.
              </p>
            </div>
          </motion.div>

          {/* Expertise Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-black/50 border-[#00FF00]/20 p-6">
                <h3 className="text-xl font-semibold text-[#00FF00] mb-4">Expert Team</h3>
                <p className="text-white/60">
                  Led by PhD-level engineers and designers with decades of combined experience in additive manufacturing and materials science.
                </p>
              </Card>
              <Card className="bg-black/50 border-[#00FF00]/20 p-6">
                <h3 className="text-xl font-semibold text-[#00FF00] mb-4">Advanced Technology</h3>
                <p className="text-white/60">
                  State-of-the-art 3D printing facilities equipped with industrial-grade machinery and cutting-edge software solutions.
                </p>
              </Card>
              <Card className="bg-black/50 border-[#00FF00]/20 p-6">
                <h3 className="text-xl font-semibold text-[#00FF00] mb-4">Industry Experience</h3>
                <p className="text-white/60">
                  Specialized expertise across multiple industries including automotive, aerospace, medical devices, and consumer products.
                </p>
              </Card>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-black/50 border-[#00FF00]/20 p-6">
                <h3 className="text-xl font-semibold text-[#00FF00] mb-4">Innovation</h3>
                <p className="text-white/60">
                  Continuously pushing the boundaries of what's possible in 3D printing and manufacturing technologies.
                </p>
              </Card>
              <Card className="bg-black/50 border-[#00FF00]/20 p-6">
                <h3 className="text-xl font-semibold text-[#00FF00] mb-4">Sustainability</h3>
                <p className="text-white/60">
                  Committed to eco-friendly manufacturing practices and reducing waste through optimized production processes.
                </p>
              </Card>
              <Card className="bg-black/50 border-[#00FF00]/20 p-6">
                <h3 className="text-xl font-semibold text-[#00FF00] mb-4">Quality</h3>
                <p className="text-white/60">
                  Unwavering dedication to precision and excellence in every project we undertake.
                </p>
              </Card>
              <Card className="bg-black/50 border-[#00FF00]/20 p-6">
                <h3 className="text-xl font-semibold text-[#00FF00] mb-4">Customer Focus</h3>
                <p className="text-white/60">
                  Building lasting partnerships through exceptional service and tailored solutions.
                </p>
              </Card>
            </div>
          </motion.div>

          {/* Impact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Impact</h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-white/60 mb-6">
                As a leader in Southeast Asian additive manufacturing, we've helped numerous businesses transform their production processes and achieve breakthrough innovations. Our partnerships with leading industries and research institutions have contributed to advancing 3D printing technology and its applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-[#00FF00] mb-2">500+</h3>
                  <p className="text-white/60">Projects Completed</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-[#00FF00] mb-2">50+</h3>
                  <p className="text-white/60">Industry Partners</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-[#00FF00] mb-2">30%</h3>
                  <p className="text-white/60">Average Cost Reduction</p>
                </div>
              </div>
            </div>
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

            {/* 3. Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm border border-[#00FF00]/20 rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-[#00FF00] font-medium mb-2">Innovation</h3>
                  <p className="text-white/60">Pushing boundaries in technology</p>
                </div>
                <div className="text-center">
                  <h3 className="text-[#00FF00] font-medium mb-2">Quality</h3>
                  <p className="text-white/60">Unwavering commitment to excellence</p>
                </div>
                <div className="text-center">
                  <h3 className="text-[#00FF00] font-medium mb-2">Customer Focus</h3>
                  <p className="text-white/60">Your success is our priority</p>
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