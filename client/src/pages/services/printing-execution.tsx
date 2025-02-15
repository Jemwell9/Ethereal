
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import QuoteCalculator from "@/components/quote-calculator";
import {
  Printer,
  Settings2,
  Zap,
  Target,
  Wrench,
  ArrowRight,
  Gauge,
  Factory,
  Microscope,
  PackageCheck,
  Search,
  Cog
} from "lucide-react";

const executionCapabilities = [
  {
    icon: Gauge,
    title: "Industrial-Grade Speed",
    description: "24/7 Production Facility",
    features: [
      "Continuous operation capability",
      "Multiple printer arrays for parallel production",
      "High-volume manufacturing capacity",
      "Fast turnaround times guaranteed"
    ]
  },
  {
    icon: Target,
    title: "Professional Precision",
    description: "Unmatched Accuracy Standards",
    features: [
      "±0.1mm dimensional accuracy",
      "Layer resolution down to 0.05mm",
      "Real-time quality monitoring",
      "Strict tolerance compliance"
    ]
  },
  {
    icon: Wrench,
    title: "Premium Finishing",
    description: "Complete Post-Processing",
    features: [
      "Professional surface treatment",
      "Color matching & painting",
      "Assembly & fitting services",
      "Quality assurance testing"
    ]
  }
];

const printerTechnology = [
  {
    icon: Factory,
    name: "Industrial FDM Systems",
    description: "Large Format Production",
    capabilities: [
      "Build volume up to 500x500x600mm",
      "Multi-material compatibility",
      "High-temperature capability (350°C+)",
      "Industrial-grade reliability"
    ]
  },
  {
    icon: Microscope,
    name: "Professional SLA/MSLA",
    description: "Ultra-High Resolution",
    capabilities: [
      "25-micron layer precision",
      "Engineering-grade resins",
      "Medical-grade certification",
      "Optical-quality finish"
    ]
  },
  {
    icon: Printer,
    name: "Production Systems",
    description: "Mass Manufacturing",
    capabilities: [
      "Automated production line",
      "Smart part removal system",
      "24/7 continuous operation",
      "IoT-enabled monitoring"
    ]
  }
];

const productionProcess = [
  {
    icon: Search,
    title: "Design Validation",
    description: "Comprehensive analysis of design specifications and optimization for production",
    duration: "1-2 hours"
  },
  {
    icon: Cog,
    title: "Print Setup",
    description: "Machine calibration, material preparation, and parameter optimization",
    duration: "2-4 hours"
  },
  {
    icon: Printer,
    title: "Production",
    description: "Monitored manufacturing with quality checkpoints and real-time adjustments",
    duration: "Project dependent"
  },
  {
    icon: PackageCheck,
    title: "Quality Control",
    description: "Multi-point inspection, validation, and documentation process",
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
              INDUSTRIAL 3D PRINTING EXECUTION
            </h1>
            <p className="text-lg text-white/60 mb-12 max-w-3xl mx-auto">
              Experience professional-grade 3D printing with our state-of-the-art facility. 
              We combine cutting-edge technology with expert craftsmanship to deliver 
              exceptional results for every project, from prototypes to production runs.
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

      {/* Equipment Section */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">Advanced Technology</h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Our facility features the latest in 3D printing technology,
              enabling us to handle projects of any scale with precision and efficiency.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {printerTechnology.map((printer, index) => (
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">Production Process</h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Our systematic approach ensures every project meets our high quality
              standards and your specific requirements.
            </p>
          </motion.div>
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

      {/* Quote Calculator */}
      <section id="calculator" className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">Start Your Project</h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Get an instant quote for your 3D printing project or contact our team
              for custom requirements and expert consultation.
            </p>
          </motion.div>
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
              Ready to Start Manufacturing?
            </h2>
            <p className="text-white/60 mb-8">
              Our team is ready to bring your ideas to life with professional
              3D printing solutions. Contact us to discuss your project requirements.
            </p>
            <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
              <Link href="/contact">Get Started</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
