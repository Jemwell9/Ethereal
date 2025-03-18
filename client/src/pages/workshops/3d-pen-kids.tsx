import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Star, Pen, Users, Trophy, Heart, CheckCircle, User } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const workshops = [
  {
    title: "Kids Beginner Workshop",
    description: "Introduction to 3D pen art for young creators aged 7-12.",
    details: "Perfect first step into 3D art creation",
    features: [
      "Basic pen control techniques",
      "Simple shape creation",
      "Color mixing basics",
      "Safety guidelines"
    ],
    duration: "2 hours",
    price: "$49",
    icon: Pen,
    gallery: ["/workshops/kids-basic-1.jpg", "/workshops/kids-basic-2.jpg"]
  },
  {
    title: "Creative Characters Workshop",
    description: "Learn to create favorite characters and animals in 3D.",
    details: "For kids who love storytelling through art",
    features: [
      "Character design basics",
      "3D figure creation",
      "Coloring techniques",
      "Story-based projects"
    ],
    duration: "3 hours",
    price: "$69",
    icon: Heart,
    gallery: ["/workshops/kids-characters-1.jpg", "/workshops/kids-characters-2.jpg"]
  },
  {
    title: "Junior Master Class",
    description: "Advanced techniques for young artists ready for complex projects.",
    details: "For experienced young creators",
    features: [
      "Advanced modeling techniques",
      "Multi-color projects",
      "Project planning",
      "Portfolio creation"
    ],
    duration: "4 hours",
    price: "$89",
    icon: Trophy,
    gallery: ["/workshops/kids-master-1.jpg", "/workshops/kids-master-2.jpg"]
  }
];

export default function KidsWorkshopsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section + Stats */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex-1 text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">3D Pen Workshops for Kids</h1>
              <p className="text-xl text-white/60 mb-8">Spark creativity and learning through fun, hands-on workshops with 3D pens!</p>
              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                  <Link href="/booking">Book a Workshop</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-[#00FF00] text-[#00FF00]">
                  <Link href="#workshops">View Workshops</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex-1">
              <div className="aspect-video bg-[#00FF00]/5 rounded-lg flex items-center justify-center">
                <Pen className="w-12 h-12 text-[#00FF00]/40" />
              </div>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00FF00] mb-2">500+</div>
              <div className="text-white/60">Happy Kids</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00FF00] mb-2">50+</div>
              <div className="text-white/60">Completed Workshops</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00FF00] mb-2">12</div>
              <div className="text-white/60">Types of Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00FF00] mb-2">100%</div>
              <div className="text-white/60">Fun Guaranteed</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="workshops" className="py-20">
        <div className="container mx-auto px-4 lg:px-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Workshop Packages</h2>
          {workshops.map((pkg, i) => {
            const Icon = pkg.icon;
            return (
              <div key={i} className={`flex flex-col lg:flex-row gap-12 mb-20 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 space-y-6">
                  <Icon className="w-8 h-8 text-[#00FF00] mb-4" />
                  <h3 className="text-3xl font-bold text-white">{pkg.title}</h3>
                  <p className="text-white/60">{pkg.description}</p>
                  <p className="text-white/50 text-sm">{pkg.details}</p>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-white/60">
                        <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">{pkg.duration}</span>
                    <span className="text-[#00FF00] font-medium">{pkg.price}</span>
                  </div>
                  <Button asChild className="w-full bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                    <Link href="/booking">Book Now</Link>
                  </Button>
                </div>
                <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                  {pkg.gallery.map((src, index) => (
                    <div key={index} className="aspect-square bg-[#00FF00]/5 rounded-lg overflow-hidden">
                      <img src={src} alt="Workshop" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
  {/* FAQ Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4 lg:px-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-white">Do I need prior experience with 3D pens?</AccordionTrigger>
                <AccordionContent className="text-white/60">No experience needed! Our Explorer package is beginner-friendly.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-white">Are all materials included?</AccordionTrigger>
                <AccordionContent className="text-white/60">Yes, we provide all necessary tools and materials.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-white">Can I bring my own pen?</AccordionTrigger>
                <AccordionContent className="text-white/60">Yes, but we also provide high-quality 3D pens for use.</AccordionContent>
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
                <User className="w-16 h-16 text-[#00FF00]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Alex Thompson</h3>
                <p className="text-white/60 mb-4">Senior 3D Design Specialist</p>
                <p className="text-white/60">With over 10 years of experience, Alex has helped hundreds of students master 3D pen artistry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Creating?</h2>
            <p className="text-xl text-white/60 mb-8">Join our community of creative professionals and start your journey in 3D pen artistry.</p>
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
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="aspect-square bg-black/50 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-[#00FF00]/10 flex items-center justify-center">
                  <Pen className="w-8 h-8 text-[#00FF00]/40" />
                </div>
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
            {[{ name: "Sarah Johnson", role: "Design Student", text: "The Explorer workshop gave me the perfect foundation.", rating: 5 }, { name: "Michael Chen", role: "Professional Designer", text: "The Artist package advanced my skills dramatically.", rating: 5 }, { name: "Emma Williams", role: "Creative Director", text: "Master Package took me to an expert level.", rating: 4 }].map((testimonial, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-black/50 p-6 rounded-lg border border-[#00FF00]/20">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className={`w-5 h-5 ${index < testimonial.rating ? 'text-[#00FF00]' : 'text-[#00FF00]/20'}`} fill={index < testimonial.rating ? '#00FF00' : 'none'} />
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

      {/* What You'll Learn */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ week: "Week 1", topics: ["Pen handling basics", "Simple structures", "Material selection", "Safety practices"] }, { week: "Week 2", topics: ["Advanced pen techniques", "Design principles", "Sculpting methods", "Project planning"] }, { week: "Week 3", topics: ["Portfolio project", "Exhibition readiness", "Business strategies", "Mentorship"] }].map((week, i) => (
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

      {/* Available Sessions */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4 lg:px-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Available Sessions</h2>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="march" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-black/50">
                {['march', 'april', 'may'].map((month) => (
                  <TabsTrigger key={month} value={month} className="text-white capitalize focus:outline-none">
                    {month}
                  </TabsTrigger>
                ))}
              </TabsList>
              {['march', 'april', 'may'].map((month) => (
                <TabsContent key={month} value={month}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[{ date: "15", time: "9:00 AM - 1:00 PM", spots: 3, price: "$249" }, { date: "22", time: "2:00 PM - 6:00 PM", spots: 5, price: "$249" }, { date: "29", time: "9:00 AM - 1:00 PM", spots: 8, price: "$249" }].map((session, i) => (
                      <Card key={i} className="bg-black/50 border-[#00FF00]/20">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="text-white font-medium">{month} {session.date}</div>
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
              ))}
            </Tabs>
          </div>
        </div>
      </section>

    </div>
  );
}
