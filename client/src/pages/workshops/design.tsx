import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  ArrowRight, 
  BookOpen, 
  Shapes, 
  Star,
  Image,
  Shield,
  Settings2
} from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const designWorkshops = [
  {
    title: "Design Fundamentals",
    description: "Master the essentials of 3D design with hands-on training in industry-standard tools.",
    details: "Perfect for beginners starting their 3D design journey",
    features: [
      "Basic modeling techniques",
      "Design principles",
      "Software fundamentals",
      "Simple project completion"
    ],
    duration: "8 hours",
    price: "$299",
    icon: BookOpen,
    gallery: ["/services/modeling-1.png", "/services/modeling-2.png"]
  },
  {
    title: "Professional Design",
    description: "Advance your 3D design skills with complex modeling and industry applications.",
    details: "For intermediate designers",
    features: [
      "Advanced modeling techniques",
      "Complex surface creation",
      "Optimization workflows",
      "Real-world projects"
    ],
    duration: "16 hours",
    price: "$599",
    icon: Shapes,
    gallery: ["/services/modeling-2.png", "/services/modeling-3.png"]
  },
  {
    title: "Design Mastery",
    description: "Become a 3D design expert with advanced techniques and certification preparation.",
    details: "Expert-level training",
    features: [
      "Expert modeling techniques",
      "Industry certification prep",
      "Portfolio development",
      "Advanced project management"
    ],
    duration: "24 hours",
    price: "$999",
    icon: Star,
    gallery: ["/services/modeling-1.png", "/services/modeling-3.png"]
  }
];

export default function DesignWorkshopsPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 text-left"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Master 3D Design
              </h1>
              <p className="text-xl text-white/60 mb-8">
                From basic modeling to advanced design techniques, our comprehensive workshops
                will transform you into a confident 3D designer.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                  <Link href="/booking">Start Your Journey</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-[#00FF00] text-[#00FF00]">
                  <Link href="#workshops">View Workshops</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-1"
            >
              <div className="aspect-square bg-black/50 border border-[#00FF00]/20 rounded-lg overflow-hidden">
                <Image className="w-full h-full text-[#00FF00]/40" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00FF00] mb-2">500+</div>
              <div className="text-white/60">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00FF00] mb-2">98%</div>
              <div className="text-white/60">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00FF00] mb-2">50+</div>
              <div className="text-white/60">Industry Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00FF00] mb-2">15+</div>
              <div className="text-white/60">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="workshops" className="py-20">
        <div className="container mx-auto px-4 lg:px-20">
          {designWorkshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-32 last:mb-0"
            >
              <div className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-16 h-16 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                    <workshop.icon className="w-8 h-8 text-[#00FF00]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{workshop.title}</h3>
                  <p className="text-white/60">{workshop.description}</p>
                  <div className="space-y-4">
                    <p className="text-white font-medium">{workshop.details}</p>
                    <ul className="space-y-2">
                      {workshop.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-white/60">
                          <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <p className="text-white/60">Duration</p>
                        <p className="text-white font-medium">{workshop.duration}</p>
                      </div>
                      <div>
                        <p className="text-white/60">Price</p>
                        <p className="text-white font-medium">{workshop.price}</p>
                      </div>
                    </div>
                    <Button asChild className="w-full bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                      <Link href="/booking">Book Now</Link>
                    </Button>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                    {workshop.gallery?.map((image, i) => (
                      <div key={i} className="aspect-square bg-black/30 rounded-lg overflow-hidden">
                        <img src={image} alt={`${workshop.title} example ${i + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Master 3D Design?</h2>
            <p className="text-xl text-white/60 mb-8">
              Join our workshops and transform your design capabilities. Start your journey today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                <Link href="/booking">Book Your Workshop</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#00FF00] text-[#00FF00]">
                <Link href="#workshops">Browse Workshops</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4 lg:px-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Workshop Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="aspect-square bg-black/50 rounded-lg overflow-hidden"
              >
                <img 
                  src={`/services/modeling-${(i % 3) + 1}.png`} 
                  alt={`Gallery image ${i}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Design Student",
                text: "The Design Fundamentals workshop gave me the perfect foundation to start my 3D design journey.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Professional Designer",
                text: "Professional Design workshop helped me transition from basic to advanced techniques seamlessly.",
                rating: 5
              },
              {
                name: "Emma Williams",
                role: "Creative Director",
                text: "Design Mastery was exactly what I needed to take my skills to the expert level.",
                rating: 4
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-black/50 p-6 rounded-lg border border-[#00FF00]/20"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`w-5 h-5 ${
                        index < testimonial.rating ? 'text-[#00FF00]' : 'text-[#00FF00]/20'
                      }`}
                      fill={index < testimonial.rating ? '#00FF00' : 'none'}
                    />
                  ))}
                </div>
                <p className="text-white/60 mb-4">{testimonial.text}</p>
                <div>
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Workshop Rating</h2>
            <div className="flex justify-center gap-2 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-8 h-8 text-[#00FF00]" fill="#00FF00" />
              ))}
            </div>
            <p className="text-2xl font-bold text-white mb-2">4.8 out of 5</p>
            <p className="text-white/60">Based on 120+ student reviews</p>
          </div>
        </div>
      </section>
    </div>
  );
}