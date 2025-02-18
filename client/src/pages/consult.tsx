import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Microscope,
  LineChart,
  Wrench,
  Calculator,
  BadgeCheck,
  FlaskConical,
  BrainCircuit,
  Rocket,
  Shapes,
  Settings,
  Check,
  ArrowUpRight,
  Search,
  Workflow,
  Zap,
  Target,
  FileSearch,
  Building,
  Laptop,
  Settings2,
  FileCode,
  GraduationCap,
  Video,
  Users,
  Clock,
  MessageSquare,
  Calendar,
  Printer,
  Lightbulb,
  Code,
  Cpu,
  Database,
  Image,
  Blocks,
  Clock3,
  HeartHandshake,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useState, useEffect } from "react";
import React from 'react';
import { useCountUp } from '@/hooks/use-count-up';

const consultingServices = [
  {
    icon: Microscope,
    title: "Technology Assessment",
    description: "Expert evaluation and optimization of your 3D printing technology stack",
    features: [
      "Printer technology evaluation",
      "Equipment recommendations",
      "Software stack optimization",
      "Automation potential analysis"
    ]
  },
  {
    icon: LineChart,
    title: "Material Engineering",
    description: "Comprehensive material selection and development services",
    features: [
      "Material selection consulting",
      "Custom material development",
      "Properties testing & validation",
      "Environmental impact assessment"
    ]
  },
  {
    icon: Wrench,
    title: "Design Optimization",
    description: "Advanced design optimization for additive manufacturing",
    features: [
      "Design for AM (DfAM)",
      "Topology optimization",
      "Part consolidation",
      "Structural analysis"
    ]
  },
  {
    icon: Calculator,
    title: "Cost Optimization",
    description: "Strategic cost reduction and efficiency improvement",
    features: [
      "ROI analysis",
      "Production cost reduction",
      "Material usage optimization",
      "Energy efficiency consulting"
    ]
  },
  {
    icon: BadgeCheck,
    title: "Quality & Compliance",
    description: "Comprehensive quality management and compliance solutions",
    features: [
      "Quality management systems",
      "ISO certification preparation",
      "Industry standards compliance",
      "Documentation systems"
    ]
  },
  {
    icon: FlaskConical,
    title: "Research & Development",
    description: "Cutting-edge research and development services",
    features: [
      "New material testing",
      "Process development",
      "Prototype optimization",
      "Innovation consulting"
    ]
  }
];
const approachSteps = [
  {
    icon: Search,
    title: "Discovery & Assessment",
    description: "In-depth analysis of your current processes, challenges, and objectives",
    features: [
      "Process audit",
      "Requirements gathering",
      "Technology assessment",
      "Cost analysis"
    ]
  },
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Developing a customized implementation roadmap",
    features: [
      "ROI projections",
      "Resource planning",
      "Timeline development",
      "Risk assessment"
    ]
  },
  {
    icon: Zap,
    title: "Implementation",
    description: "Hands-on execution of the planned strategy",
    features: [
      "Setup assistance",
      "System integration",
      "Team training",
      "Quality control"
    ]
  },
  {
    icon: FileSearch,
    title: "Testing & Validation",
    description: "Rigorous testing of implemented solutions",
    features: [
      "Performance testing",
      "Quality assurance",
      "Process validation",
      "Compliance check"
    ]
  },
  {
    icon: Workflow,
    title: "Optimization",
    description: "Fine-tuning processes for maximum efficiency",
    features: [
      "Performance analysis",
      "Workflow refinement",
      "Cost optimization",
      "Process automation"
    ]
  },
  {
    icon: Users,
    title: "Ongoing Support",
    description: "Continuous assistance and improvement",
    features: [
      "Technical support",
      "Regular reviews",
      "Update guidance",
      "Performance monitoring"
    ]
  }
];

const coreServices = [
  {
    icon: Settings2,
    title: "Technology & Material Selection",
    description: "Expert guidance on choosing the right 3D printing technology and materials",
    features: [
      "Printer technology assessment",
      "Material property analysis",
      "Cost-benefit evaluation",
      "Performance optimization"
    ]
  },
  {
    icon: Wrench,
    title: "Design & CAD Optimization",
    description: "Professional design review and optimization for 3D printing",
    features: [
      "Design for manufacturability",
      "Topology optimization",
      "File preparation",
      "Quality assurance"
    ]
  },
  {
    icon: Laptop,
    title: "Workflow Integration",
    description: "Seamless integration of 3D printing into your existing processes",
    features: [
      "Process automation",
      "Quality control systems",
      "Team training",
      "Documentation"
    ]
  }
];

const benefits = [
  {
    title: "Expert Guidance",
    description: "Get personalized advice from experienced 3D printing professionals"
  },
  {
    title: "Custom Solutions",
    description: "Tailored recommendations for your specific project needs"
  },
  {
    title: "Technical Support",
    description: "Comprehensive assistance with material selection and design optimization"
  }
];

const stats = [
  { value: 500, label: "Projects Completed", suffix: "+" },
  { value: 98, label: "Success Rate", suffix: "%" },
  { value: 50, label: "Industry Partners", suffix: "+" },
  { value: 15, label: "Years Experience", suffix: "+" }
];

const problems = [
  {
    icon: FileSearch,
    title: "Material Selection",
    description: "Difficulty choosing the right materials for specific applications and requirements."
  },
  {
    icon: Building,
    title: "Scale-up Challenges",
    description: "Issues transitioning from prototyping to production-scale 3D printing."
  },
  {
    icon: Settings2,
    title: "Quality Control",
    description: "Maintaining consistent quality and meeting industry standards."
  },
  {
    icon: Clock3,
    title: "Production Time",
    description: "Optimizing print times while maintaining quality in high-volume production."
  },
  {
    icon: Code,
    title: "G-code Optimization",
    description: "Fine-tuning printer instructions for better performance and quality."
  },
  {
    icon: Cpu,
    title: "Machine Compatibility",
    description: "Ensuring compatibility between different printers and materials."
  },
  {
    icon: Database,
    title: "Cost Management",
    description: "Balancing material costs with quality requirements for profitability."
  },
  {
    icon: Blocks,
    title: "Design Optimization",
    description: "Optimizing designs for successful 3D printing and minimal support structures."
  },
  {
    icon: Image,
    title: "Surface Finish",
    description: "Achieving desired surface quality while maintaining structural integrity."
  }
];

const successStories = [
  {
    icon: Rocket,
    title: "VinFast Manufacturing",
    description: "Optimized rapid prototyping for Vietnam's leading EV manufacturer, reducing development time by 60% and supporting their electric vehicle initiatives."
  },
  {
    icon: BrainCircuit,
    title: "Razer Singapore",
    description: "Implemented rapid prototyping solutions for gaming peripherals, accelerating product development cycles by 40% and reducing iteration costs."
  },
  {
    icon: Shapes,
    title: "Surbana Jurong",
    description: "Enhanced architectural visualization capabilities, leading to successful implementation of smart city projects across Southeast Asia."
  },
  {
    icon: Settings,
    title: "Petronas Malaysia",
    description: "Developed custom 3D printing solutions for oil & gas components, resulting in 45% cost reduction in specialized parts manufacturing."
  },
  {
    icon: LineChart,
    title: "Bangkok Dusit Medical",
    description: "Revolutionized medical device prototyping, enabling custom surgical planning models that improved patient outcomes by 35%."
  },
  {
    icon: Building,
    title: "SM Prime Holdings",
    description: "Supported Philippines' largest property developer with architectural prototyping, reducing design iteration time by 50%."
  }
];

export default function ConsultPage() {
  const countUpValue = useCountUp({ end: 100, duration: 2 });

  return (
    <main className="min-h-screen bg-black">
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00FF00]/10 rounded-full filter blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00FF00]/10 rounded-full filter blur-[128px]" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                    Expert 3D Printing <br />
                    <span className="text-[#00FF00]">Consultation</span>
                  </h1>
                  <p className="text-lg text-white/60 mb-8 max-w-xl">
                    Transform your manufacturing processes with PhD-level expertise.
                    Our consultants help you leverage 3D printing technology for
                    rapid prototyping, cost reduction, and innovation.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg" className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                      <a href="#contact">Schedule Consultation</a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00]/10">
                      <a href="#services">View Services</a>
                    </Button>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex-1 relative"
              >
                <div className="aspect-square relative rounded-lg overflow-hidden border border-[#00FF00]/20 bg-black/50 p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FF00]/10 to-transparent" />
                  <div className="relative h-full flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                      {[Printer, LineChart, Settings2, Microscope].map((Icon, index) => (
                        <div
                          key={index}
                          className="aspect-square bg-black/40 rounded-lg p-6 flex items-center justify-center border border-[#00FF00]/20"
                        >
                          <Icon className="w-12 h-12 text-[#00FF00]" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Quick Stats Section */}
      <section className="py-16 bg-black/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="text-4xl font-bold text-[#00FF00] mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  >
                    {stat.value}{stat.suffix}
                  </motion.span>
                </motion.div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Problems Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Common Challenges We Solve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/50 p-6 rounded-lg border border-[#00FF00]/20"
              >
                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-[#00FF00]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
                <p className="text-white/60">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/50 p-6 rounded-lg border border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors"
              >
                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                  <story.icon className="w-6 h-6 text-[#00FF00]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{story.title}</h3>
                <p className="text-white/60">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Consulting Services */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Consulting Services</h2>
            <p className="text-white/60 max-w-3xl mx-auto">
              Comprehensive consulting solutions to transform your 3D printing operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00FF00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                <div className="bg-black/50 border border-[#00FF00]/20 rounded-lg p-8 relative">
                  <div className="w-14 h-14 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-[#00FF00]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/60 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/60">
                        <Check className="w-5 h-5 text-[#00FF00] mt-1 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Consultancy Approach */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Consultancy Approach</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A systematic and comprehensive approach to transform your 3D printing operations
              from concept to execution
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approachSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/50 p-8 rounded-lg border border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-all hover:bg-black/60"
              >
                <div className="w-14 h-14 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-[#00FF00]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/60 mb-6">{step.description}</p>
                <ul className="space-y-2">
                  {step.features.map((feature, i) => (
                    <li key={i} className="text-white/60 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      


      {/* CTA Section */}
      <section id="booking" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#00FF00]/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-black/60 p-12 rounded-2xl border border-[#00FF00]/20 backdrop-blur-sm"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h2 className="text-4xl font-bold mb-4 text-white">
                  Transform Your <span className="text-[#00FF00]">3D Printing Vision</span> Into Reality
                </h2>
                <p className="text-white/60 mb-6">
                  Get expert guidance on materials, design optimization, and manufacturing processes. Our PhD-level consultants are ready to help you innovate.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Personalized Strategy Sessions',
                    'Technical Expertise',
                    'Cost Optimization',
                    'Rapid Implementation'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/80">
                      <Check className="w-5 h-5 text-[#00FF00]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 bg-[#00FF00]/10 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="w-10 h-10 text-[#00FF00]" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-white mb-2">Book Your Free Consultation</p>
                  <p className="text-white/60 mb-6">30-minute strategic planning session</p>
                  <Button asChild size="lg" className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black w-full">
                    <Link href="/booking">Schedule Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}