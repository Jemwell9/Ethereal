
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Code2, Shapes, Settings2, Sparkles } from "lucide-react";

const designWorkshops = [
  {
    title: "CAD Fundamentals",
    description: "Master the essentials of Computer-Aided Design with hands-on training in industry-standard software.",
    details: "Perfect for beginners in CAD",
    features: [
      "Introduction to professional CAD software interfaces (Fusion 360, SolidWorks)",
      "Step-by-step guidance in creating 2D sketches and basic 3D models",
      "Understanding design constraints and parameters",
      "Practical exercises with immediate feedback",
      "3D printing preparation techniques",
      "Take-home project files and reference materials"
    ],
    prerequisites: "Basic computer skills",
    software: "All software licenses provided during workshop",
    class_size: "Maximum 8 participants for personalized attention",
    included: [
      "Professional CAD workstation usage",
      "Course materials and digital resources",
      "Certificate of completion",
      "30-day post-workshop support"
    ],
    duration: "8 hours (2 sessions of 4 hours)",
    schedule: "Available weekdays and weekends",
    price: "$299",
    icon: Code2,
    image: "/workshops/cad-fundamentals.jpg"
  },
  {
    title: "Advanced CAD Modeling",
    description: "Elevate your CAD expertise with professional-grade modeling techniques and industry best practices.",
    details: "For intermediate CAD users",
    features: [
      "Advanced surface modeling and complex geometry creation",
      "Multi-body part design strategies",
      "Assembly modeling and motion studies",
      "Design optimization for manufacturing",
      "Advanced feature patterns and relationships",
      "Real-world project simulation"
    ],
    prerequisites: "Basic CAD knowledge or completion of CAD Fundamentals",
    software: "Fusion 360 and SolidWorks advanced features",
    class_size: "Maximum 6 participants for intensive training",
    included: [
      "Advanced modeling templates and libraries",
      "Industry-specific case studies",
      "Professional certification preparation",
      "60-day access to advanced tutorials"
    ],
    duration: "12 hours (3 sessions of 4 hours)",
    schedule: "Flexible scheduling including evening sessions",
    price: "$499",
    icon: Shapes,
    image: "/workshops/advanced-cad.jpg"
  },
  {
    title: "Design for Manufacturing",
    description: "Bridge the gap between design and production with manufacturing-optimized 3D modeling techniques.",
    details: "Professional-level course",
    features: [
      "Manufacturing process considerations in design",
      "Material selection and optimization strategies",
      "Cost estimation and reduction techniques",
      "Quality control integration in design",
      "Advanced slicing and print optimization",
      "Production workflow automation"
    ],
    prerequisites: "Advanced CAD skills required",
    software: "Full professional software suite access",
    class_size: "Maximum 4 participants for expert mentoring",
    included: [
      "Real manufacturing case studies",
      "Industry expert guest sessions",
      "Manufacturing facility tour",
      "Lifetime access to course materials"
    ],
    duration: "16 hours (4 sessions of 4 hours)",
    schedule: "Custom scheduling for professionals",
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
              PROFESSIONAL CAD & DESIGN WORKSHOPS
            </h1>
            <p className="text-lg text-white/60 mb-12">
              Transform your design skills with our industry-focused workshops. From CAD basics 
              to advanced manufacturing techniques, our hands-on courses are designed to give you 
              practical, professional-grade skills in 3D design and manufacturing preparation.
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
                      <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover" />
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
                      
                      <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-white">Course Features:</h3>
                        <ul className="space-y-2">
                          {workshop.features.map((feature, i) => (
                            <li key={i} className="text-sm text-white/60 flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-[#00FF00]" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-white">What's Included:</h3>
                        <ul className="space-y-2">
                          {workshop.included.map((item, i) => (
                            <li key={i} className="text-sm text-white/60 flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-[#00FF00]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm text-white/60">Prerequisites</p>
                        <p className="text-sm text-white">{workshop.prerequisites}</p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm text-white/60">Class Size</p>
                        <p className="text-sm text-white">{workshop.class_size}</p>
                      </div>

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
