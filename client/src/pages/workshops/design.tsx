
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Code2, Shapes, Settings2, Sparkles, ArrowRight, Star, Shield, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const autocadWorkshops = [
  {
    title: "AutoCAD Fundamentals",
    description: "Master the essentials of AutoCAD with hands-on training in industry-standard tools and practices.",
    details: "Perfect for beginners starting their CAD journey",
    features: [
      "Basic drawing and editing tools",
      "2D drafting fundamentals",
      "Layout and annotation basics",
      "Simple project completion"
    ],
    testimonials: [
      {
        text: "This course gave me the foundation I needed to start my CAD journey.",
        author: "Sarah M., Architecture Student"
      }
    ],
    duration: "8 hours",
    price: "$299",
    icon: BookOpen,
    level: "Beginner",
    gallery: ["/services/autocad-basic-1.png", "/services/autocad-basic-2.png"]
  },
  {
    title: "Professional AutoCAD",
    description: "Advance your CAD skills with complex modeling and industry-specific applications.",
    details: "For those ready to take their skills further",
    features: [
      "Advanced 2D and 3D techniques",
      "Custom toolsets and automation",
      "Industry-specific workflows",
      "Complex project management"
    ],
    testimonials: [
      {
        text: "The professional course helped me land my dream job in mechanical design.",
        author: "Michael R., CAD Designer"
      }
    ],
    duration: "16 hours",
    price: "$599",
    icon: Shapes,
    level: "Intermediate",
    gallery: ["/services/autocad-pro-1.png", "/services/autocad-pro-2.png"]
  },
  {
    title: "AutoCAD Mastery",
    description: "Become an AutoCAD expert with advanced techniques and certification preparation.",
    details: "Expert-level training for professionals",
    features: [
      "Advanced 3D modeling",
      "BIM integration",
      "Certification preparation",
      "Enterprise workflow optimization"
    ],
    testimonials: [
      {
        text: "This mastery program transformed how I approach complex CAD projects.",
        author: "David K., Senior Designer"
      }
    ],
    duration: "24 hours",
    price: "$999",
    icon: Star,
    level: "Advanced",
    gallery: ["/services/autocad-master-1.png", "/services/autocad-master-2.png"]
  }
];

export default function AutoCADWorkshopsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Master AutoCAD Design
            </h1>
            <p className="text-xl text-white/60 mb-8">
              From foundational skills to expert-level techniques, our comprehensive AutoCAD workshops 
              will transform you into a confident CAD professional.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                <Link href="/booking">Start Your Journey</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#00FF00] text-[#00FF00]">
                <Link href="#workshops">View Workshops</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[#00FF00]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Industry-Standard Training</h3>
              <p className="text-white/60">Learn the tools and techniques used by professionals worldwide.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#00FF00]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Certification Ready</h3>
              <p className="text-white/60">Prepare for AutoCAD certification with our comprehensive curriculum.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings2 className="w-8 h-8 text-[#00FF00]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Hands-On Projects</h3>
              <p className="text-white/60">Apply your skills to real-world projects and build your portfolio.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
