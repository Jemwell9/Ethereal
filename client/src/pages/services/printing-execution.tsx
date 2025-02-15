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
  Calculator,
  FileCheck,
  Shell,
  Timer
} from "lucide-react";

const printingServices = [
  {
    icon: Printer,
    title: "Standard Printing",
    description: "High-quality FDM and SLA printing for general applications",
    features: [
      "Layer resolution: 0.1mm - 0.3mm",
      "Wide material selection",
      "Fast turnaround times",
      "Ideal for prototypes and small series"
    ]
  },
  {
    icon: Cog,
    title: "Industrial Printing",
    description: "Advanced printing solutions for demanding applications",
    features: [
      "High-performance materials",
      "Large build volumes",
      "Industrial-grade quality",
      "Production-ready parts"
    ]
  },
  {
    icon: Search,
    title: "Quality Control",
    description: "Comprehensive quality assurance and testing",
    features: [
      "Dimensional accuracy checks",
      "Material certification",
      "Surface finish inspection",
      "Performance testing"
    ]
  },
  {
    icon: Box,
    title: "Post-Processing",
    description: "Professional finishing services",
    features: [
      "Surface smoothing",
      "Color matching",
      "Assembly services",
      "Custom packaging"
    ]
  }
];

const processSteps = [
  {
    title: "File Preparation",
    description: "We optimize your 3D files for printing, ensuring the best results.",
    icon: FileCheck,
    duration: "1-2 days"
  },
  {
    title: "Material Selection",
    description: "Choose from our wide range of materials or get expert recommendations.",
    icon: Shell,
    duration: "1 day"
  },
  {
    title: "Production",
    description: "Your parts are printed using state-of-the-art equipment.",
    icon: Printer,
    duration: "2-5 days"
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality checks and post-processing as needed.",
    icon: Search,
    duration: "1-2 days"
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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">
              3D PRINTING EXECUTION
            </h1>
            <p className="text-lg text-white/60 mb-8">
              State-of-the-art 3D printing services with precision quality control and fast turnaround times.
              From prototypes to production runs, we deliver excellence in every print.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                <Link href="#calculator">Calculate Price</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00]/10">
                <Link href="/contact">Request Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {printingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-[#00FF00]" />
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
                    <p className="text-white/60 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-white/60 flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                          {feature}
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

      {/* Process Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Production Process</h2>
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
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
                {index < processSteps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-px bg-[#00FF00]/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <section id="calculator" className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-6">Price Calculator</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Get instant pricing for your 3D printing projects. Simply enter your project specifications
            below to receive an accurate quote.
          </p>
          <div className="max-w-2xl mx-auto">
            <QuoteCalculator />
          </div>
        </div>
      </section>

      {/* Bulk Pricing */}
      <section id="bulk-pricing" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Bulk Production & Special Projects
            </h2>
            <p className="text-white/60 mb-8">
              Need large quantities or have a special project? We offer competitive bulk pricing
              and customized solutions for industrial clients.
            </p>
            <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}