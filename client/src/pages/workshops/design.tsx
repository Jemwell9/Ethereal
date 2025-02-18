import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  ArrowRight, 
  BookOpen, 
  Shapes, 
  Shield, 
  Settings2, 
  Star,
  Sparkles 
} from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
                    Master <br />
                    <span className="text-[#00FF00]">AutoCAD</span>
                  </h1>
                  <p className="text-lg text-white/60 mb-8 max-w-xl">
                    From foundational skills to expert-level techniques, transform into a confident CAD professional.
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

      {/* Workshop Sections */}
      <section id="workshops" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our AutoCAD Workshops</h2>
            <p className="text-white/60">Choose the perfect learning path for your skill level</p>
          </motion.div>

          {autocadWorkshops.map((workshop, index) => (
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
                    {workshop.testimonials && (
                      <div className="bg-white/5 p-6 rounded-lg">
                        <p className="text-white/80 italic">&ldquo;{workshop.testimonials[0].text}&rdquo;</p>
                        <p className="text-[#00FF00] mt-2">- {workshop.testimonials[0].author}</p>
                      </div>
                    )}
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

      {/* FAQ Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-white/60">Everything you need to know about our AutoCAD workshops</p>
          </motion.div>
          

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-white">What prerequisites are needed for the workshops?</AccordionTrigger>
                <AccordionContent className="text-white/60">
                  For beginners, no prior experience is required. For intermediate and advanced levels, basic AutoCAD knowledge and experience with 2D drafting is recommended.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-white">Are certificates provided upon completion?</AccordionTrigger>
                <AccordionContent className="text-white/60">
                  Yes, you'll receive a certificate of completion for each workshop level. Our advanced course also helps prepare you for AutoCAD certification exams.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-white">What software version will be used?</AccordionTrigger>
                <AccordionContent className="text-white/60">
                  We use the latest version of AutoCAD, but the skills learned are applicable to recent previous versions as well.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-white">Do I need to bring my own computer?</AccordionTrigger>
                <AccordionContent className="text-white/60">
                  We provide fully equipped workstations, but you're welcome to bring your own laptop with AutoCAD installed if you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Master AutoCAD?</h2>
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
    </div>
  );
}