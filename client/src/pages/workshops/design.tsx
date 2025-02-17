
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

          {designWorkshops.map((workshop, index) => (
            <motion.section
              key={workshop.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`py-20 ${index % 2 === 0 ? 'bg-black/50' : 'bg-black'}`}
            >
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                      <workshop.icon className="w-8 h-8 text-[#00FF00]" />
                    </div>
                    <span className="px-4 py-2 text-sm rounded-full bg-[#00FF00]/10 text-[#00FF00]">
                      {workshop.level}
                    </span>
                    <h2 className="text-4xl font-bold text-white">{workshop.title}</h2>
                    <p className="text-xl text-white/60">{workshop.description}</p>
                    <p className="text-lg font-medium text-white">{workshop.details}</p>
                    <ul className="space-y-4">
                      {workshop.features.map((feature, i) => (
                        <li key={i} className="text-lg text-white/60 flex items-center gap-3">
                          <Sparkles className="w-5 h-5 text-[#00FF00]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-6 items-center pt-6">
                      <div>
                        <p className="text-white/60">Duration</p>
                        <p className="text-2xl font-medium text-white">{workshop.duration}</p>
                      </div>
                      <div>
                        <p className="text-white/60">Price</p>
                        <p className="text-2xl font-medium text-white">{workshop.price}</p>
                      </div>
                      <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black px-8">
                        <Link href="/booking" className="flex items-center gap-2">
                          Book Now <ArrowRight className="w-5 h-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="aspect-video bg-[#00FF00]/5 rounded-lg overflow-hidden">
                    <img 
                      src={`/public/services/modeling-${index + 1}.png`} 
                      alt={workshop.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </section>
    </div>
  );
}
