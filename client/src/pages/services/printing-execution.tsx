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
  Settings2
} from "lucide-react";

const specializations = [
  {
    icon: Gauge,
    title: "Rapid Prototyping",
    description: "Fast turnaround for product development",
    features: [
      "24-48 hour delivery",
      "Design iterations",
      "Functional testing",
      "Multiple material options"
    ]
  },
  {
    icon: Factory,
    title: "Production Series",
    description: "Scale from prototype to production",
    features: [
      "Large batch capacity",
      "Consistent quality",
      "Industrial materials",
      "Assembly options"
    ]
  },
  {
    icon: Settings2,
    title: "Custom Solutions",
    description: "Specialized printing requirements",
    features: [
      "Complex geometries",
      "Multi-material prints",
      "Custom finishes",
      "Technical consultation"
    ]
  }
];

const technologies = [
  {
    icon: Printer,
    name: "FDM Technology",
    description: "Professional FDM printing for durable functional parts",
    capabilities: [
      "Layer resolution: 0.1-0.3mm",
      "Build volume up to 300x300x400mm",
      "Engineering-grade materials",
      "Excellent mechanical properties"
    ]
  },
  {
    icon: Microscope,
    name: "SLA/Resin",
    description: "High-precision resin printing for detailed parts",
    capabilities: [
      "Ultra-fine detail resolution",
      "Smooth surface finish",
      "Ideal for visual prototypes",
      "Dental and jewelry applications"
    ]
  },
  {
    icon: PackageCheck,
    name: "Industrial Solutions",
    description: "Advanced industrial printing capabilities",
    capabilities: [
      "Metal-infused materials",
      "Carbon fiber composites",
      "High-temperature resistance",
      "Production-grade quality"
    ]
  }
];

const qualitySteps = [
  {
    icon: FileCheck,
    title: "File Preparation",
    description: "Expert optimization of your 3D files for optimal printing results",
    duration: "1-2 days"
  },
  {
    icon: Shell,
    title: "Material Selection",
    description: "Guided selection of optimal materials for your specific requirements",
    duration: "1 day"
  },
  {
    icon: Printer,
    title: "Production",
    description: "High-precision printing with continuous monitoring",
    duration: "2-5 days"
  },
  {
    icon: BadgeCheck,
    title: "Quality Control",
    description: "Comprehensive inspection and testing of finished parts",
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
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">
              PROFESSIONAL 3D PRINTING SOLUTIONS
            </h1>
            <p className="text-lg text-white/60 mb-12">
              From rapid prototypes to production parts, we deliver precision-engineered 
              solutions using state-of-the-art technology and premium materials.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {specializations.map((spec, index) => (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-all hover:-translate-y-2">
                    <CardContent className="p-6">
                      <spec.icon className="w-12 h-12 text-[#00FF00] mb-4" />
                      <h3 className="text-xl font-bold text-white mb-4">{spec.title}</h3>
                      <p className="text-white/60 mb-4">{spec.description}</p>
                      <ul className="space-y-2">
                        {spec.features.map((feature, i) => (
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

      {/* Technologies Section */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-all hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                      <tech.icon className="w-6 h-6 text-[#00FF00]" />
                    </div>
                    <CardTitle className="text-white text-xl mb-4">{tech.name}</CardTitle>
                    <p className="text-white/60 mb-6">{tech.description}</p>
                    <ul className="space-y-3">
                      {tech.capabilities.map((capability, i) => (
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

      {/* Quality Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Quality Process</h2>
          <div className="max-w-4xl mx-auto">
            {qualitySteps.map((step, index) => (
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
                {index < qualitySteps.length - 1 && (
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
          <h2 className="text-3xl font-bold text-white text-center mb-6">Get an Instant Quote</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Calculate the cost of your project instantly. Upload your files or enter dimensions
            to receive a detailed quote for your 3D printing needs.
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
              Ready to Start Your Project?
            </h2>
            <p className="text-white/60 mb-8">
              Contact our experts for a personalized consultation and discover how we can bring
              your ideas to life with professional 3D printing solutions.
            </p>
            <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}