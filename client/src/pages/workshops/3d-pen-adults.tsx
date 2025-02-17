import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Pen, Star, Shield, Sparkles, Users, Award, Heart, Palette, Book, Trophy } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AdultWorkshopsPage() {
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
              Unleash Your Creativity with 3D Pens
            </h1>
            <p className="text-xl text-white/60 mb-8">
              Discover a new dimension of artistic expression and professional skill-building
            </p>

            {/* Trust Badges */}
            <div className="flex justify-center gap-8 mb-12">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-[#00FF00]" />
                <span className="text-white">Professional Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-[#00FF00]" />
                <span className="text-white">Small Groups (8:1 Ratio)</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-[#00FF00]" />
                <span className="text-white">Expert Instructors</span>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                <Link href="/booking">Book a Workshop</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#00FF00] text-[#00FF00]">
                <Link href="#learn-more">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-black/50 border-[#00FF00]/20">
              <CardContent className="p-6">
                <Star className="w-8 h-8 text-[#00FF00] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Professional Growth</h3>
                <p className="text-white/60">Develop valuable skills for prototyping and design</p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-[#00FF00]/20">
              <CardContent className="p-6">
                <Heart className="w-8 h-8 text-[#00FF00] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Creative Expression</h3>
                <p className="text-white/60">Find your unique artistic voice in 3D</p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-[#00FF00]/20">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-[#00FF00] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Community</h3>
                <p className="text-white/60">Connect with like-minded creative professionals</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workshop Levels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Path</h2>
            <p className="text-white/60">From beginners to advanced artists, find your perfect starting point</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-black/50 border-[#00FF00]/20">
              <CardHeader>
                <Book className="w-8 h-8 text-[#00FF00] mb-4" />
                <CardTitle className="text-white">Fundamentals</CardTitle>
                <CardDescription className="text-white/60">Perfect for beginners</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="text-white/60 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#00FF00]" />
                    Basic pen control
                  </li>
                  <li className="text-white/60 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#00FF00]" />
                    Material understanding
                  </li>
                  <li className="text-white/60 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#00FF00]" />
                    Simple projects
                  </li>
                </ul>
                <div className="text-center text-white mb-4">$129</div>
                <Button asChild className="w-full bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                  <Link href="/booking">Book Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-[#00FF00]/20">
              <CardHeader>
                <Palette className="w-8 h-8 text-[#00FF00] mb-4" />
                <CardTitle className="text-white">Advanced Techniques</CardTitle>
                <CardDescription className="text-white/60">For intermediate artists</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="text-white/60 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#00FF00]" />
                    Complex structures
                  </li>
                  <li className="text-white/60 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#00FF00]" />
                    Color techniques
                  </li>
                  <li className="text-white/60 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#00FF00]" />
                    Project planning
                  </li>
                </ul>
                <div className="text-center text-white mb-4">$179</div>
                <Button asChild className="w-full bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                  <Link href="/booking">Book Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-[#00FF00]/20">
              <CardHeader>
                <Trophy className="w-8 h-8 text-[#00FF00] mb-4" />
                <CardTitle className="text-white">Mastery</CardTitle>
                <CardDescription className="text-white/60">For serious artists</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="text-white/60 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#00FF00]" />
                    Professional techniques
                  </li>
                  <li className="text-white/60 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#00FF00]" />
                    Portfolio development
                  </li>
                  <li className="text-white/60 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#00FF00]" />
                    Advanced projects
                  </li>
                </ul>
                <div className="text-center text-white mb-4">$249</div>
                <Button asChild className="w-full bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                  <Link href="/booking">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Explorer Package */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Explorer Package</h2>
              <p className="text-white/60">Perfect introduction to 3D pen artistry</p>
            </div>

            {/* Workshop Details */}
            <Card className="bg-black/50 border-[#00FF00]/20 p-6 mb-8">
              <div className="grid gap-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Beginner's Journey</h3>
                    <p className="text-white/60">3 hours of guided creative exploration</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-[#00FF00]">$89</p>
                    <p className="text-white/60">per person</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  <h4 className="text-white font-medium">What's Included:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Professional pen handling techniques
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Basic design principles
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Material knowledge and selection
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Take-home creation
                    </li>
                  </ul>
                </div>

                {/* Group Discounts */}
                <div className="bg-[#00FF00]/5 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Group Discounts</h4>
                  <ul className="space-y-2">
                    <li className="text-white/60">2-3 people: 10% off per person</li>
                    <li className="text-white/60">4+ people: 15% off per person</li>
                    <li className="text-white/60">Corporate team rates available</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Success Story */}
            <div className="mb-12">
              <Card className="bg-black/50 border-[#00FF00]/20 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#00FF00]/10 rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-[#00FF00]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Career Transition Success</h4>
                    <p className="text-white/60 mb-4">
                      "The Explorer workshop opened my eyes to the possibilities of 3D pen art. I've since incorporated these skills into my design practice."
                    </p>
                    <p className="text-white/40">- Michael, Graphic Designer</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button asChild size="lg" className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                <Link href="/booking">Book This Workshop</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Artist Package */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Artist Package</h2>
              <p className="text-white/60">Advanced techniques for artistic expression</p>
            </div>

            <Card className="bg-black/50 border-[#00FF00]/20 p-6 mb-8">
              <div className="grid gap-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Creative Development</h3>
                    <p className="text-white/60">6 hours of intensive artistic training</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-[#00FF00]">$179</p>
                    <p className="text-white/60">per person</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  <h4 className="text-white font-medium">Advanced Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Advanced sculpting techniques
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Color theory and mixing
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Complex structure creation
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Personal style development
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Success Story */}
            <div className="mb-12">
              <Card className="bg-black/50 border-[#00FF00]/20 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#00FF00]/10 rounded-full flex items-center justify-center">
                    <Palette className="w-8 h-8 text-[#00FF00]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Artistic Achievement</h4>
                    <p className="text-white/60 mb-4">
                      "The Artist package helped me develop my unique style. Now I create and sell custom 3D pen art pieces."
                    </p>
                    <p className="text-white/40">- Sarah, Professional Artist</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Master Package */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Master Package</h2>
              <p className="text-white/60">Professional mastery and portfolio development</p>
            </div>

            <Card className="bg-black/50 border-[#00FF00]/20 p-6 mb-8">
              <div className="grid gap-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Professional Journey</h3>
                    <p className="text-white/60">12 hours of expert-level instruction</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-[#00FF00]">$299</p>
                    <p className="text-white/60">per person</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  <h4 className="text-white font-medium">Master Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Professional techniques mastery
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Portfolio development
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Exhibition preparation
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Business integration strategies
                    </li>
                  </ul>
                </div>

                {/* Professional Benefits */}
                <div className="bg-[#00FF00]/5 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Professional Benefits</h4>
                  <ul className="space-y-2">
                    <li className="text-white/60">Certificate of completion</li>
                    <li className="text-white/60">Portfolio review session</li>
                    <li className="text-white/60">Online community access</li>
                    <li className="text-white/60">Post-course mentoring</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Success Story */}
            <div className="mb-12">
              <Card className="bg-black/50 border-[#00FF00]/20 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#00FF00]/10 rounded-full flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-[#00FF00]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Professional Success</h4>
                    <p className="text-white/60 mb-4">
                      "The Master package transformed my hobby into a successful business. I now teach and create commissioned pieces."
                    </p>
                    <p className="text-white/40">- David, 3D Art Studio Owner</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button asChild size="lg" className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                <Link href="/booking">Start Your Master Journey</Link>
              </Button>
            </div>
          </motion.div>
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
            <p className="text-white/60">Everything you need to know about our 3D pen workshops</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-[#00FF00]/20 bg-black/50">
                <AccordionTrigger className="text-white px-4">What materials are included in the workshop?</AccordionTrigger>
                <AccordionContent className="text-white/60 px-4">
                  All materials are provided, including professional 3D pens, a variety of colored filaments, design templates, and safety equipment. You'll also receive a starter kit to take home.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-[#00FF00]/20 bg-black/50">
                <AccordionTrigger className="text-white px-4">Do I need prior experience with 3D pens?</AccordionTrigger>
                <AccordionContent className="text-white/60 px-4">
                  No prior experience is necessary. Our Explorer Package is designed for complete beginners, while our Artist and Master packages are suitable for those with some experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-[#00FF00]/20 bg-black/50">
                <AccordionTrigger className="text-white px-4">What's the class size?</AccordionTrigger>
                <AccordionContent className="text-white/60 px-4">
                  We maintain small class sizes with a maximum of 8 participants per instructor to ensure personalized attention and optimal learning experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-[#00FF00]/20 bg-black/50">
                <AccordionTrigger className="text-white px-4">Can I bring my own 3D pen?</AccordionTrigger>
                <AccordionContent className="text-white/60 px-4">
                  Yes, you're welcome to bring your own 3D pen if you prefer. However, we provide high-quality professional pens for all participants.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-[#00FF00]/20 bg-black/50">
                <AccordionTrigger className="text-white px-4">Are there any prerequisites for the Master Package?</AccordionTrigger>
                <AccordionContent className="text-white/60 px-4">
                  While not strictly required, we recommend having some experience with 3D pens before enrolling in the Master Package. The Explorer or Artist packages are great stepping stones.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-white/60">Hear from our workshop participants</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-black/50 border-[#00FF00]/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-[#00FF00]" />
                </div>
                <p className="text-white/80 mb-4">
                  "The Explorer workshop opened my eyes to the creative possibilities of 3D pen art. The instructors were patient and knowledgeable."
                </p>
                <div className="text-white font-medium">James K.</div>
                <div className="text-white/60">Graphic Designer</div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-[#00FF00]/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-[#00FF00]" />
                </div>
                <p className="text-white/80 mb-4">
                  "As an architect, the Artist package helped me develop new skills for creating physical models. Highly recommended!"
                </p>
                <div className="text-white font-medium">Maria R.</div>
                <div className="text-white/60">Architect</div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-[#00FF00]/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-full flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-[#00FF00]" />
                </div>
                <p className="text-white/80 mb-4">
                  "The Master package transformed my hobby into a successful business. Now I create commissioned art pieces!"
                </p>
                <div className="text-white font-medium">Alex T.</div>
                <div className="text-white/60">Professional Artist</div>
              </CardContent>
            </Card>
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Creating?</h2>
            <p className="text-white/60 mb-8">
              Join our community of creative professionals and start your journey in 3D pen artistry
            </p>
            <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
              <Link href="/booking">Book Your Workshop Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}