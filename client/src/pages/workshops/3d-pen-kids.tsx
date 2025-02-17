
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Pen, Star, Shield, Sparkles, BookOpen, Heart, Users, Award } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const workshopPackages = [
  {
    title: "Single Session Explorer (Ages 6-8)",
    description: "Perfect first introduction to 3D pen art",
    details: "Safe, guided creative fun",
    features: [
      "Basic pen control techniques",
      "Simple shapes and patterns",
      "Take-home creation",
      "All materials included"
    ],
    duration: "2 hours",
    price: "$49",
    icon: Pen,
    image: "/workshop-kids-beginner.svg"
  },
  {
    title: "Creative Adventure (Ages 9-12)",
    description: "Expanded learning with more complex projects",
    details: "Build confidence and skills",
    features: [
      "Advanced techniques",
      "Multiple projects",
      "Creative storytelling",
      "Safety certificate"
    ],
    duration: "3 hours",
    price: "$69",
    icon: Star,
    image: "/workshop-kids-advanced.svg"
  },
  {
    title: "Sibling Bundle (Ages 6-12)",
    description: "Special package for two siblings to learn together",
    details: "Shared creative experience",
    features: [
      "Paired activities",
      "Team projects",
      "Double the fun",
      "Family discount"
    ],
    duration: "2.5 hours",
    price: "$89",
    icon: Heart,
    image: "/workshop-kids-master.svg"
  }
];

const testimonials = [
  {
    text: "My daughter couldn't stop talking about her 3D butterfly creation! The instructors made safety their top priority while keeping it fun.",
    author: "Sarah M., Parent of 7-year-old",
    rating: 5
  },
  {
    text: "The sibling package was perfect for my kids. They worked together and created amazing projects!",
    author: "Michael R., Parent of 8 and 10-year-olds",
    rating: 5
  }
];

export default function KidsWorkshopsPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">
              Spark Your Child's Creativity with 3D Pen Art
            </h1>
            <p className="text-xl text-white/60 mb-8">
              Safe, fun, and educational workshops where imagination comes to life!
              Perfect for young minds ages 6-12.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                <Link href="/booking">Book a Workshop</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#00FF00] text-[#00FF00]">
                <Link href="#learn-more">Learn More</Link>
              </Button>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-[#00FF00]" />
              <span className="text-white">Child-Safe Materials</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-[#00FF00]" />
              <span className="text-white">Small Groups (6:1 Ratio)</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-[#00FF00]" />
              <span className="text-white">Certified Instructors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Packages */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Workshop Packages</h2>
            <p className="text-white/60">Choose the perfect experience for your child</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshopPackages.map((workshop, index) => (
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Common Questions</h2>
            <p className="text-white/60">Everything you need to know about our workshops</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-white">Is it safe for young children?</AccordionTrigger>
                <AccordionContent className="text-white/60">
                  Absolutely! We use child-safe materials and maintain a strict 6:1 student-to-instructor ratio. All activities are closely supervised with proper safety measures in place.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-white">What should my child bring?</AccordionTrigger>
                <AccordionContent className="text-white/60">
                  Just their imagination! We provide all necessary materials, safety equipment, and refreshments. Comfortable clothing is recommended.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-white">Can parents stay and watch?</AccordionTrigger>
                <AccordionContent className="text-white/60">
                  Yes! We welcome parents to observe and even participate in certain activities. It's a great way to share the creative experience with your child.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Parent Testimonials</h2>
            <p className="text-white/60">See what other families are saying</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black/50 border-[#00FF00]/20">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#00FF00] text-[#00FF00]" />
                      ))}
                    </div>
                    <p className="text-white/80 mb-4">{testimonial.text}</p>
                    <p className="text-white/60 text-sm">{testimonial.author}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Begin the Creative Journey?</h2>
            <p className="text-xl text-white/60 mb-8">
              Give your child the gift of creativity and confidence with our hands-on 3D pen workshops.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                <Link href="/booking">Book a Workshop</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#00FF00] text-[#00FF00]">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
