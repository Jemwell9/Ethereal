import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import QuoteCalculator from "@/components/quote-calculator";
import {
  Code2,
  Boxes,
  Settings,
  ArrowRight,
  Calculator,
  Clock,
  CheckCircle2,
  FileText
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Custom 3D Modeling",
    description:
      "Expert CAD modeling services using industry-standard software. We transform your sketches, ideas, or 2D drawings into precise 3D models optimized for printing. Specializing in mechanical parts, architectural models, prototypes, and artistic designs.",
    image: "/services/3d-modeling.png",
    samples: [
      "/services/modeling-1.png",
      "/services/modeling-2.png",
      "/services/modeling-3.png"
    ]
  },
  {
    icon: Settings,
    title: "Design Optimization",
    description:
      "Advanced optimization techniques to enhance your designs for 3D printing. We analyze structural integrity, optimize material usage, improve printability, and reduce costs while maintaining functionality. Includes topology optimization and part consolidation.",
    image: "/design/optimization.jpg",
    samples: [
      "/design/optimization-sample-1.jpg",
      "/design/optimization-sample-2.jpg",
      "/design/optimization-sample-3.jpg"
    ]
  },
  {
    icon: FileText,
    title: "Technical Documentation",
    description: "Complete technical documentation package including dimensioned drawings, assembly instructions, material specifications, and manufacturing guidelines. Perfect for production runs and regulatory compliance.",
    image: "/design/documentation.jpg",
    samples: [
      "/design/documentation-sample-1.jpg",
      "/design/documentation-sample-2.jpg",
      "/design/documentation-sample-3.jpg"
    ]
  },
  {
    icon: Boxes,
    title: "Prototype Iterations",
    description: "Rapid prototyping service with quick iteration cycles. We print, test, and refine your designs based on real-world feedback. Includes functional testing, fit checks, and design improvements with each iteration.",
    image: "/design/prototyping.jpg",
    samples: [
      "/design/prototype-sample-1.jpg",
      "/design/prototype-sample-2.jpg",
      "/design/prototype-sample-3.jpg"
    ]
  },
];

const processSteps = [
  {
    title: "Initial Consultation",
    description: "We discuss your requirements, objectives, and technical specifications.",
    icon: Clock,
    duration: "1-2 days",
    image: "/design/consultation.jpg"
  },
  {
    title: "Design Phase",
    description: "Our team creates initial 3D models and design concepts.",
    icon: Code2,
    duration: "3-5 days",
    image: "/design/design-phase.jpg"
  },
  {
    title: "Optimization",
    description: "Designs are optimized for 3D printing and structural integrity.",
    icon: Settings,
    duration: "2-3 days",
    image: "/design/optimization-process.jpg"
  },
  {
    title: "Review & Refinement",
    description: "Collaborative review process with iterative improvements.",
    icon: CheckCircle2,
    duration: "1-3 days",
    image: "/design/review-process.jpg"
  },
];

export default function DesignServicesPage() {
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
              3D DESIGN SERVICES
            </h1>
            <p className="text-lg text-white/60 mb-8">
              Professional CAD modeling and design optimization services to transform your ideas into
              reality. Our expert team specializes in creating print-ready 3D models for any
              application.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00]/10">
                <Link href="#calculator">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-[#00FF00]" />
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{feature.title}</CardTitle>
                    <p className="text-white/60">{feature.description}</p>
                    <img src={feature.image} alt={feature.title} className="w-full mt-4"/>
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Design Process</h2>
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
                  <img src={step.image} alt={step.title} className="w-full mt-4"/>
                </div>
                {index < processSteps.length - 1 && (
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
          <h2 className="text-3xl font-bold text-white text-center mb-6">Design Quote Calculator</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Get instant pricing for your 3D design projects. Simply enter your project specifications
            below to receive an accurate quote.
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
              Ready to Start Your Design Project?
            </h2>
            <p className="text-white/60 mb-8">
              Contact us today to discuss your design requirements and get a customized solution for
              your needs.
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