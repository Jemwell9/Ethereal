import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";
import { ArrowRight, Image, Shapes, Star, Target } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BookingCalendar from "@/components/booking-calendar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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
    icon: Target,
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
              <div className="aspect-video bg-[#00FF00]/5 rounded-lg flex items-center justify-center">
                <Image className="w-12 h-12 text-[#00FF00]/40" />
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
                </div>
                <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                  {workshop.gallery.map((image, i) => (
                    <div key={i} className="aspect-video bg-[#00FF00]/5 rounded-lg flex items-center justify-center">
                      <Image className="w-8 h-8 text-[#00FF00]/40" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-white">Do I need prior experience?</AccordionTrigger>
                <AccordionContent className="text-white/60">
                  No prior experience is needed for our Fundamentals course. For Professional and Mastery levels, basic knowledge is recommended.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-white">What software will we use?</AccordionTrigger>
                <AccordionContent className="text-white/60">
                  We use industry-standard 3D design software. All necessary software will be provided during the workshop.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-white">What should I bring?</AccordionTrigger>
                <AccordionContent className="text-white/60">
                  Just bring your laptop. All other materials and equipment will be provided.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Meet Your Instructor</h2>
          <div className="max-w-3xl mx-auto bg-black/50 rounded-lg p-8 border border-[#00FF00]/20">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 rounded-full bg-[#00FF00]/10 flex items-center justify-center">
                <Image className="w-16 h-16 text-[#00FF00]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Alex Thompson</h3>
                <p className="text-white/60 mb-4">Senior 3D Design Specialist</p>
                <p className="text-white/60">
                  With over 10 years of experience in 3D design and modeling, Alex has worked with major studios and led numerous successful projects. Their passion for teaching has helped hundreds of students master 3D design.
                </p>
              </div>
            </div>
          </div>
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

      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4 lg:px-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                week: "Week 1",
                topics: ["Software Introduction", "Basic Tools", "Simple Shapes", "Navigation"]
              },
              {
                week: "Week 2",
                topics: ["Advanced Tools", "Complex Modeling", "Materials", "Texturing"]
              },
              {
                week: "Week 3",
                topics: ["Project Planning", "Advanced Techniques", "Final Project", "Export & Share"]
              }
            ].map((week, i) => (
              <Card key={i} className="bg-black/50 border-[#00FF00]/20">
                <CardHeader>
                  <CardTitle className="text-white">{week.week}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {week.topics.map((topic, j) => (
                      <li key={j} className="text-white/60 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Calendar */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4 lg:px-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Available Sessions</h2>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="march" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-black/50">
                <TabsTrigger value="march" className="text-white">March</TabsTrigger>
                <TabsTrigger value="april" className="text-white">April</TabsTrigger>
                <TabsTrigger value="may" className="text-white">May</TabsTrigger>
              </TabsList>
              <TabsContent value="march">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { date: "March 15", time: "9:00 AM - 1:00 PM", spots: 3, price: "$249" },
                    { date: "March 22", time: "2:00 PM - 6:00 PM", spots: 5, price: "$249" },
                    { date: "March 29", time: "9:00 AM - 1:00 PM", spots: 8, price: "$249" }
                  ].map((session, i) => (
                    <Card key={i} className="bg-black/50 border-[#00FF00]/20">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-white font-medium">{session.date}</div>
                              <div className="text-white/60 text-sm">{session.time}</div>
                            </div>
                            <Badge variant="outline" className="text-[#00FF00] border-[#00FF00]">
                              {session.spots} spots left
                            </Badge>
                          </div>
                          <div className="text-[#00FF00] font-medium">{session.price}</div>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="w-full bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                                Book Session
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="bg-black/95 border-[#00FF00]/20">
                              <DialogHeader>
                                <DialogTitle className="text-white">Book Workshop Session</DialogTitle>
                                <DialogDescription className="text-white/60">
                                  {session.date} at {session.time}
                                </DialogDescription>
                              </DialogHeader>
                              <form className="space-y-4">
                                <div className="space-y-2">
                                  <Label htmlFor="name" className="text-white">Name</Label>
                                  <Input id="name" placeholder="Your full name" className="bg-black/50 border-[#00FF00]/20 text-white" />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="email" className="text-white">Email</Label>
                                  <Input id="email" type="email" placeholder="your@email.com" className="bg-black/50 border-[#00FF00]/20 text-white" />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="phone" className="text-white">Phone</Label>
                                  <Input id="phone" placeholder="Your phone number" className="bg-black/50 border-[#00FF00]/20 text-white" />
                                </div>
                                <DialogFooter>
                                  <Button type="submit" className="w-full bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                                    Confirm Booking
                                  </Button>
                                </DialogFooter>
                              </form>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="april">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Similar structure for April sessions */}
                </div>
              </TabsContent>
              <TabsContent value="may">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Similar structure for May sessions */}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}