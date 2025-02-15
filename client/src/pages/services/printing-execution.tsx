
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import QuoteCalculator from "@/components/quote-calculator";
import {
  Printer,
  Cog,
  Search,
  Box,
  ArrowRight,
  FileCheck,
  Shell,
  Timer,
  PackageCheck,
  Gauge,
  BadgeCheck,
  Factory,
  Microscope,
  Settings2,
  Zap,
  Target,
  Wrench
} from "lucide-react";

const executionCapabilities = [
  {
    icon: Gauge,
    title: "High-Speed Production",
    description: "Fast turnaround for urgent projects",
    features: [
      "24/7 production capability",
      "Multiple printer arrays",
      "Rapid prototyping",
      "Bulk order processing"
    ]
  },
  {
    icon: Target,
    title: "Precision Control",
    description: "Industry-leading accuracy",
    features: [
      "±0.1mm tolerance",
      "Layer height from 0.05mm",
      "Real-time monitoring",
      "Quality verification"
    ]
  },
  {
    icon: Wrench,
    title: "Post-Processing",
    description: "Professional finishing services",
    features: [
      "Surface smoothing",
      "Color treatment",
      "Assembly services",
      "Functional testing"
    ]
  }
];

const printerFleet = [
  {
    icon: Printer,
    name: "Industrial FDM",
    description: "Large-format professional printing",
    capabilities: [
      "Build volume: 400x400x500mm",
      "Dual extrusion system",
      "High-temp materials (up to 300°C)",
      "Industrial-grade reliability"
    ]
  },
  {
    icon: Microscope,
    name: "Professional SLA",
    description: "Ultra-high resolution printing",
    capabilities: [
      "25-100 micron precision",
      "Engineering resins",
      "Dental and medical grade",
      "Optical-grade surface finish"
    ]
  },
  {
    icon: Factory,
    name: "Production Systems",
    description: "Mass production capability",
    capabilities: [
      "Multi-unit printing",
      "Automated part removal",
      "24/7 operation ready",
      "Industrial IoT monitoring"
    ]
  }
];

const productionProcess = [
  {
    icon: Search,
    title: "Initial Analysis",
    description: "Thorough review of design specifications and requirements",
    duration: "1-2 hours"
  },
  {
    icon: Cog,
    title: "Setup & Optimization",
    description: "Machine calibration and print parameter optimization",
    duration: "2-4 hours"
  },
  {
    icon: Printer,
    title: "Production",
    description: "Monitored printing with quality checks",
    duration: "Varies by project"
  },
  {
    icon: PackageCheck,
    title: "Quality Control",
    description: "Multi-point inspection and validation",
    duration: "1-2 hours"
  }
];

export default function PrintingExecutionPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">
              PROFESSIONAL 3D PRINTING EXECUTION
            </h1>
            <p className="text-lg text-white/60 mb-12">
              State-of-the-art production facilities delivering precision parts with 
              industry-leading quality control and rapid turnaround times.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {executionCapabilities.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-all hover:-translate-y-2">
                    <CardContent className="p-6">
                      <cap.icon className="w-12 h-12 text-[#00FF00] mb-4" />
                      <h3 className="text-xl font-bold text-white mb-4">{cap.title}</h3>
                      <p className="text-white/60 mb-4">{cap.description}</p>
                      <ul className="space-y-2">
                        {cap.features.map((feature, i) => (
                          <li key={i} className="text-white/60 flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Printer Fleet */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Printer Fleet</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {printerFleet.map((printer, index) => (
              <motion.div
                key={printer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-all hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                      <printer.icon className="w-6 h-6 text-[#00FF00]" />
                    </div>
                    <CardTitle className="text-white text-xl mb-4">{printer.name}</CardTitle>
                    <p className="text-white/60 mb-6">{printer.description}</p>
                    <ul className="space-y-3">
                      {printer.capabilities.map((capability, i) => (
                        <li key={i} className="text-white/60 flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Production Process</h2>
          <div className="max-w-4xl mx-auto">
            {productionProcess.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8 relative"
              >
                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-[#00FF00]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 mb-2">{step.description}</p>
                  <span className="text-sm text-[#00FF00]">Typical duration: {step.duration}</span>
                </div>
                {index < productionProcess.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-px bg-[#00FF00]/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-6">Get Started</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Ready to bring your project to life? Get an instant quote for your 3D printing needs
            or contact our team for custom requirements.
          </p>
          <div className="max-w-2xl mx-auto">
            <QuoteCalculator />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Need Expert Guidance?
            </h2>
            <p className="text-white/60 mb-8">
              Our team is ready to help you choose the right printing solution for your project.
              Contact us for a consultation.
            </p>
            <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
