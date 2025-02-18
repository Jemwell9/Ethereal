import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Printer, Settings, Target, Sparkles } from "lucide-react";

const printingWorkshops = [
  {
    title: "3D Printing Fundamentals",
    description: "Master the basics of 3D printing technology and operations.",
    details: "Entry-level course",
    features: [
      "Printer setup and calibration",
      "Material selection basics",
      "Print parameter settings",
      "Basic troubleshooting"
    ],
    duration: "6 hours",
    price: "$249",
    icon: Printer,
    image: "/workshops/printing-basic.jpg"
  },
  {
    title: "Advanced Print Optimization",
    description: "Learn advanced techniques for perfect prints every time.",
    details: "Intermediate level",
    features: [
      "Advanced slicer settings",
      "Custom print profiles",
      "Material-specific optimization",
      "Quality control techniques"
    ],
    duration: "8 hours",
    price: "$399",
    icon: Settings,
    image: "/workshops/printing-advanced.jpg"
  },
  {
    title: "Industrial Applications",
    description: "Professional-grade training for industrial 3D printing.",
    details: "Professional level",
    features: [
      "Industrial printer operation",
      "Production workflow setup",
      "Quality assurance systems",
      "Industry certifications"
    ],
    duration: "12 hours",
    price: "$599",
    icon: Target,
    image: "/workshops/printing-industrial.jpg"
  }
];

export default function PrintingMasteryPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <section className="py-20">
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
                    3D Printing <br />
                    <span className="text-[#00FF00]">Mastery</span>
                  </h1>
                  <p className="text-lg text-white/60 mb-8 max-w-xl">
                    Elevate your skills to professional levels. Master the art and science of additive manufacturing.
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {printingWorkshops.map((workshop, index) => (
                <motion.div
                  key={workshop.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                        <workshop.icon className="w-6 h-6 text-[#00FF00]" />
                      </div>
                      <CardTitle className="text-white">{workshop.title}</CardTitle>
                      <CardDescription className="text-white/60">{workshop.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <p className="text-sm font-medium text-white">{workshop.details}</p>
                        <ul className="space-y-2">
                          {workshop.features.map((feature, i) => (
                            <li key={i} className="text-sm text-white/60 flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-[#00FF00]" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="flex justify-between items-center pt-4">
                          <div>
                            <p className="text-sm text-white/60">Duration</p>
                            <p className="font-medium text-white">{workshop.duration}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-white/60">Price</p>
                            <p className="font-medium text-white">{workshop.price}</p>
                          </div>
                        </div>
                        <Button asChild className="w-full bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                          <Link href="/booking">Book Now</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}