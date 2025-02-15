import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Code2, Shapes, FileCode, Settings2, Image, Sparkles } from "lucide-react";

const designWorkshops = [
  {
    title: "CAD Fundamentals",
    description: "Master the basics of Computer-Aided Design for 3D printing.",
    details: "Perfect for beginners in CAD",
    features: [
      "Basic CAD interface navigation",
      "2D and 3D sketching",
      "Basic modeling techniques",
      "File preparation for 3D printing"
    ],
    duration: "8 hours",
    price: "$299",
    icon: Code2,
    image: "/workshops/cad-fundamentals.jpg"
  },
  {
    title: "Advanced CAD Modeling",
    description: "Take your CAD skills to the next level with advanced techniques.",
    details: "For intermediate CAD users",
    features: [
      "Complex geometry modeling",
      "Assembly design",
      "Parameter-driven modeling",
      "Advanced features usage"
    ],
    duration: "12 hours",
    price: "$499",
    icon: Shapes,
    image: "/workshops/advanced-cad.jpg"
  },
  {
    title: "Design for Manufacturing",
    description: "Learn how to optimize designs for 3D printing production.",
    details: "Professional-level course",
    features: [
      "Design optimization",
      "Material considerations",
      "Cost optimization",
      "Production preparation"
    ],
    duration: "16 hours",
    price: "$699",
    icon: Settings2,
    image: "/workshops/design-manufacturing.jpg"
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
              DESIGN WORKSHOPS
            </h1>
            <p className="text-lg text-white/60 mb-12">
              Master the art of 3D design with our comprehensive workshop series.
              From CAD basics to advanced manufacturing techniques, develop the skills
              needed for professional 3D printing design.
            </p>
          </motion.div>

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
                    <div className="aspect-video bg-[#00FF00]/5 rounded-lg overflow-hidden mb-4">
                      <Image className="w-full h-full object-cover" />
                    </div>
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
        </div>
      </section>
    </div>
  );
}
