
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import QuoteCalculator from "@/components/quote-calculator";
import {
  Printer,
  Settings2,
  Zap,
  Target,
  ArrowRight,
  Gauge,
  Factory,
  Microscope,
  PackageCheck,
  Search,
  Cog,
  Wrench
} from "lucide-react";

const PrintingExecutionPage = () => {
  const capabilities = [
    {
      icon: Factory,
      title: "Industrial Manufacturing",
      description: "24/7 Production Facility",
      features: [
        "Multi-printer setup",
        "High-volume capacity",
        "Rapid turnaround",
        "Continuous operation"
      ]
    },
    {
      icon: Target,
      title: "Precision Quality",
      description: "Professional Standards",
      features: [
        "±0.1mm accuracy",
        "50μm resolution",
        "Quality monitoring",
        "Full inspection"
      ]
    },
    {
      icon: Settings2,
      title: "Technical Excellence",
      description: "Expert Engineering",
      features: [
        "Advanced materials",
        "Complex geometries",
        "Technical optimization",
        "Design validation"
      ]
    }
  ];

  const technologies = [
    {
      icon: Printer,
      title: "FDM Technology",
      description: "Large Format Production",
      specs: [
        "Build volume: 500x500x600mm",
        "Temperature: up to 350°C",
        "Layer height: 0.1-0.4mm",
        "Multi-material capable"
      ]
    },
    {
      icon: Zap,
      title: "SLA/MSLA Systems",
      description: "High Detail Printing",
      specs: [
        "XY resolution: 25 microns",
        "Engineering resins",
        "Optical-grade finish",
        "Medical certification"
      ]
    },
    {
      icon: Gauge,
      title: "Production Systems",
      description: "Mass Manufacturing",
      specs: [
        "Automated workflows",
        "24/7 monitoring",
        "Quality control",
        "Scale production"
      ]
    }
  ];

  const process = [
    {
      icon: Search,
      title: "Design Analysis",
      duration: "1-2 hours",
      steps: [
        "File verification",
        "Print optimization",
        "Support planning",
        "Material selection"
      ]
    },
    {
      icon: Cog,
      title: "Print Setup",
      duration: "2-4 hours",
      steps: [
        "Slicing configuration",
        "Parameter tuning",
        "Material preparation",
        "System calibration"
      ]
    },
    {
      icon: Printer,
      title: "Production",
      duration: "Varies by project",
      steps: [
        "Real-time monitoring",
        "Quality checkpoints",
        "Environment control",
        "Progress tracking"
      ]
    },
    {
      icon: PackageCheck,
      title: "Quality Control",
      duration: "1-2 hours",
      steps: [
        "Dimensional check",
        "Surface inspection",
        "Functional testing",
        "Documentation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">
              PROFESSIONAL 3D PRINTING
            </h1>
            <p className="text-lg text-white/60 mb-12">
              Experience industrial-grade manufacturing with our state-of-the-art facility.
              We combine cutting-edge technology with expert craftsmanship to deliver
              exceptional results for every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((item, index) => (
              <Card key={index} className="bg-black/50 border-[#00FF00]/20">
                <CardContent className="pt-6">
                  <item.icon className="w-12 h-12 text-[#00FF00] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/60 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="text-white/60 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Technology</h2>
            <p className="text-white/60">
              Advanced manufacturing systems for professional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-black/50 border-[#00FF00]/20">
                <CardContent className="pt-6">
                  <tech.icon className="w-12 h-12 text-[#00FF00] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{tech.title}</h3>
                  <p className="text-white/60 mb-4">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.specs.map((spec, i) => (
                      <li key={i} className="text-white/60 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-white/60">
              Systematic approach for consistent quality
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 relative">
                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-[#00FF00]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-[#00FF00] text-sm mb-4">{step.duration}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {step.steps.map((item, i) => (
                      <li key={i} className="text-white/60 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < process.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-px bg-[#00FF00]/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Calculator */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Get Started</h2>
            <p className="text-white/60">
              Calculate an instant quote for your project
            </p>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <QuoteCalculator />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Manufacturing?
            </h2>
            <p className="text-white/60 mb-8">
              Contact us to discuss your project requirements
            </p>
            <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
              <Link href="/contact">Get Started</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrintingExecutionPage;
