import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Code2, Shapes, Settings2, Sparkles, ArrowRight } from "lucide-react";

const designWorkshops = [
  {
    title: "CAD Fundamentals",
    description: "Master the essentials of Computer-Aided Design with hands-on training in industry-standard software.",
    details: "Perfect for beginners in CAD",
    features: [
      "Introduction to professional CAD software interfaces",
      "Step-by-step guidance in creating 2D sketches and 3D models",
      "Understanding design constraints and parameters",
      "3D printing preparation techniques"
    ],
    duration: "8 hours",
    price: "$299",
    icon: Code2,
    level: "Beginner"
  },
  {
    title: "Advanced CAD Modeling",
    description: "Elevate your CAD expertise with professional-grade modeling techniques.",
    details: "For intermediate CAD users",
    features: [
      "Advanced surface modeling and complex geometry",
      "Multi-body part design strategies",
      "Assembly modeling and motion studies",
      "Design optimization for manufacturing"
    ],
    duration: "12 hours",
    price: "$499",
    icon: Shapes,
    level: "Intermediate"
  },
  {
    title: "Design for Manufacturing",
    description: "Bridge the gap between design and production with manufacturing-optimized modeling.",
    details: "Professional-level course",
    features: [
      "Manufacturing process considerations",
      "Material selection optimization",
      "Cost estimation techniques",
      "Production workflow automation"
    ],
    duration: "16 hours",
    price: "$699",
    icon: Settings2,
    level: "Advanced"
  }
];

export default function DesignWorkshopsPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">
              PROFESSIONAL CAD & DESIGN WORKSHOPS
            </h1>
            <p className="text-lg text-white/60 mb-12">
              Transform your design skills with our industry-focused workshops. From CAD basics 
              to advanced manufacturing techniques, our hands-on courses are designed to give you 
              practical, professional-grade skills.
            </p>
          </motion.div>

          {/* Workshop Level Guide */}
          <div className="grid grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
            {["Beginner", "Intermediate", "Advanced"].map((level, index) => (
              <div key={level} className="text-center p-4 rounded-lg bg-[#00FF00]/5 border border-[#00FF00]/20">
                <p className="text-[#00FF00] font-semibold">{level}</p>
                <p className="text-white/60 text-sm mt-2">
                  {index === 0 ? "No experience needed" : 
                   index === 1 ? "Basic CAD knowledge required" : 
                   "Advanced skills necessary"}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designWorkshops.map((workshop, index) => (
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
                    <div className="mb-4">
                      <span className="px-3 py-1 text-xs rounded-full bg-[#00FF00]/10 text-[#00FF00]">
                        {workshop.level}
                      </span>
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
                        <Link href="/booking" className="flex items-center justify-center gap-2">
                          Book Now <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}