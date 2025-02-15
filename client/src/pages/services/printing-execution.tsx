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
    ],
    image: "/printing/standard-printing.jpg",
    samples: [
      "/printing/fdm-sample.jpg",
      "/printing/sla-sample.jpg",
      "/printing/prototype-sample.jpg"
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
    ],
    image: "/printing/industrial-printing.jpg",
    samples: [
      "/printing/industrial-sample-1.jpg",
      "/printing/industrial-sample-2.jpg",
      "/printing/industrial-sample-3.jpg"
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
    ],
    image: "/printing/quality-control.jpg",
    samples: [
      "/printing/quality-check-1.jpg",
      "/printing/quality-check-2.jpg",
      "/printing/quality-check-3.jpg"
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
    ],
    image: "/printing/post-processing.jpg",
    samples: [
      "/printing/finishing-sample-1.jpg",
      "/printing/finishing-sample-2.jpg",
      "/printing/finishing-sample-3.jpg"
    ]
  }
];

const processSteps = [
  {
    title: "File Preparation",
    description: "We optimize your 3D files for printing, ensuring the best results.",
    icon: FileCheck,
    duration: "1-2 days",
    image: "/process/file-preparation.jpg"
  },
  {
    title: "Material Selection",
    description: "Choose from our wide range of materials or get expert recommendations.",
    icon: Shell,
    duration: "1 day",
    image: "/process/material-selection.jpg"
  },
  {
    title: "Production",
    description: "Your parts are printed using state-of-the-art equipment.",
    icon: Printer,
    duration: "2-5 days",
    image: "/process/production.jpg"
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality checks and post-processing as needed.",
    icon: Search,
    duration: "1-2 days",
    image: "/process/quality-assurance.jpg"
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
              PROFESSIONAL 3D PRINTING
            </h1>
            <p className="text-lg text-white/60 mb-12">
              Experience industrial-grade 3D printing with our state-of-the-art facility. 
              From rapid prototypes to production-ready parts, we ensure precision and quality at every layer.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-all hover:scale-105">
                <CardContent className="p-6">
                  <Timer className="w-12 h-12 text-[#00FF00] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Fast Turnaround</h3>
                  <p className="text-white/60">48-hour standard delivery for most prints. Express service available.</p>
                </CardContent>
              </Card>
              <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-all hover:scale-105">
                <CardContent className="p-6">
                  <Search className="w-12 h-12 text-[#00FF00] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Quality Assured</h3>
                  <p className="text-white/60">Every print undergoes rigorous quality checks and dimensional verification.</p>
                </CardContent>
              </Card>
              <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-all hover:scale-105">
                <CardContent className="p-6">
                  <Shell className="w-12 h-12 text-[#00FF00] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Any Material</h3>
                  <p className="text-white/60">Support for PLA, ABS, PETG, TPU, Nylon, Carbon Fiber, and more.</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                <Link href="#calculator">Calculate Price</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00]/10">
                <Link href="/contact">Request Custom Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Printing Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-all hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                    <Box className="w-6 h-6 text-[#00FF00]" />
                  </div>
                  <CardTitle className="text-white text-xl mb-4">Prototyping</CardTitle>
                  <p className="text-white/60 mb-6">Rapid prototyping for product development and testing</p>
                  <ul className="space-y-3">
                    <li className="text-white/60 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                      24-48 hour turnaround
                    </li>
                    <li className="text-white/60 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                      Multiple iterations support
                    </li>
                    <li className="text-white/60 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                      Design feedback included
                    </li>
                    <li className="text-white/60 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                      Functional testing ready
                    </li>
                  </ul>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-all hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                    <Cog className="w-6 h-6 text-[#00FF00]" />
                  </div>
                  <CardTitle className="text-white text-xl mb-4">Production Parts</CardTitle>
                  <p className="text-white/60 mb-6">End-use parts with industrial-grade materials</p>
                  <ul className="space-y-3">
                    <li className="text-white/60 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                      High-strength materials
                    </li>
                    <li className="text-white/60 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                      Bulk order capacity
                    </li>
                    <li className="text-white/60 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                      Quality certification
                    </li>
                    <li className="text-white/60 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                      Production monitoring
                    </li>
                  </ul>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-all hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                    <Search className="w-6 h-6 text-[#00FF00]" />
                  </div>
                  <CardTitle className="text-white text-xl mb-4">Specialty Printing</CardTitle>
                  <p className="text-white/60 mb-6">Custom solutions for unique requirements</p>
                  <ul className="space-y-3">
                    <li className="text-white/60 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                      Custom materials
                    </li>
                    <li className="text-white/60 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                      Complex geometries
                    </li>
                    <li className="text-white/60 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                      Multi-material prints
                    </li>
                    <li className="text-white/60 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                      Specialized finishes
                    </li>
                  </ul>
                </CardHeader>
              </Card>
            </motion.div>
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
                <img src={step.image} alt={step.title} className="w-24 h-24 object-cover mr-4"/>
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