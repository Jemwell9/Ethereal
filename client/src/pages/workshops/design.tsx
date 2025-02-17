
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Code2, Shapes, Settings2, Sparkles, ArrowRight } from "lucide-react";

const designWorkshops = [
  {
    title: "CAD Fundamentals",
    description: "Master the essentials of Computer-Aided Design with hands-on training in industry-standard software.",
    details: "Create your first 3D models based on your hobbies and interests",
    features: [
      "Design and print your favorite collectibles or miniatures",
      "Create custom phone cases and accessories",
      "Design simple household items like organizers or holders",
      "Learn to make personalized decorative items"
    ],
    duration: "8 hours",
    price: "$299",
    icon: Code2,
    level: "Beginner"
  },
  {
    title: "Advanced CAD Modeling",
    description: "Elevate your CAD expertise with professional-grade modeling techniques.",
    details: "Design functional parts and complex assemblies",
    features: [
      "Create replacement parts for home appliances",
      "Design custom mechanical components",
      "Build articulated models with moving parts",
      "Develop prototypes for your inventions"
    ],
    duration: "12 hours",
    price: "$499",
    icon: Shapes,
    level: "Intermediate",
    gallery: [
      "/services/advanced-cad-1.png",
      "/services/advanced-cad-2.png",
      "/services/advanced-cad-3.png",
      "/services/advanced-cad-4.png"
    ]
  },
  {
    title: "Design for Manufacturing",
    description: "Bridge the gap between design and production with manufacturing-optimized modeling.",
    details: "Master production-ready design techniques",
    features: [
      "Design industrial-grade components and assemblies",
      "Create molds and tooling for manufacturing",
      "Develop complex mechanical systems",
      "Optimize designs for mass production"
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
                  <div className={`space-y-6 ${workshop.title === "Advanced CAD Modeling" ? 'order-last' : ''}`}>
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
                  <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="aspect-video bg-[#00FF00]/5 rounded-lg overflow-hidden">
                        <img 
                          src={`/services/modeling-${index + 1}-1.png`} 
                          alt={`${workshop.title} example 1`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-video bg-[#00FF00]/5 rounded-lg overflow-hidden">
                        <img 
                          src={`/services/modeling-${index + 1}-2.png`} 
                          alt={`${workshop.title} example 2`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-video bg-[#00FF00]/5 rounded-lg overflow-hidden">
                        <img 
                          src={`/services/modeling-${index + 1}-3.png`} 
                          alt={`${workshop.title} example 3`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-video bg-[#00FF00]/5 rounded-lg overflow-hidden">
                        <img 
                          src={`/services/modeling-${index + 1}-4.png`} 
                          alt={`${workshop.title} example 4`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
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
