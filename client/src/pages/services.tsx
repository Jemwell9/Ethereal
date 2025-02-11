import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Shapes, Printer, ArrowRight, Image } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: Code2,
    title: "3D Design Services",
    description: "Professional CAD modeling and design optimization for 3D printing",
    features: [
      "Custom 3D model creation",
      "Design optimization for printability",
      "File preparation and slicing",
      "Technical documentation",
      "Iterative design refinement"
    ],
    image: "design-service.png"
  },
  {
    icon: Shapes,
    title: "Materials Selection",
    description: "Expert guidance on material selection for optimal results",
    features: [
      "Material property analysis",
      "Performance requirements matching",
      "Cost optimization",
      "Environmental considerations",
      "Material testing and validation"
    ],
    image: "materials-service.png"
  },
  {
    icon: Printer,
    title: "3D Printing Execution",
    description: "High-quality production using state-of-the-art equipment",
    features: [
      "High-precision printing",
      "Multi-material capabilities",
      "Quality control and inspection",
      "Post-processing services",
      "Production scaling options"
    ],
    image: "printing-service.png"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">
              3D PRINTING
              <span className="text-[#00FF00]"> SERVICES</span>
            </h1>
            <p className="text-lg text-white/60 mb-8">
              From concept to creation, we provide end-to-end 3D printing solutions
              with professional expertise at every step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-[#00FF00]" />
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-white/60">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="aspect-video bg-black/50 border border-[#00FF00]/20 rounded-lg overflow-hidden flex items-center justify-center">
                      <Image className="w-16 h-16 text-[#00FF00]/40" />
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
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
              Contact us to discuss your requirements and get a customized quote for your 3D printing needs.
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