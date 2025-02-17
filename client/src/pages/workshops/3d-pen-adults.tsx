
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Pen, Palette, Trophy, Sparkles, Book, Image, Star, Shield, Users, Award, Heart } from "lucide-react";
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
            <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
              <Link href="/booking">Start Your Creative Journey</Link>
            </Button>
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
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-[#00FF00]/20 bg-black/50">
                <AccordionTrigger className="text-white px-4">What experience do I need?</AccordionTrigger>
                <AccordionContent className="text-white/60 px-4">
                  No prior experience is needed for our beginner workshops. We provide all necessary materials and guidance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-[#00FF00]/20 bg-black/50">
                <AccordionTrigger className="text-white px-4">How long are the sessions?</AccordionTrigger>
                <AccordionContent className="text-white/60 px-4">
                  Each session runs for approximately 3-4 hours, with breaks included.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-[#00FF00]/20 bg-black/50">
                <AccordionTrigger className="text-white px-4">What materials are provided?</AccordionTrigger>
                <AccordionContent className="text-white/60 px-4">
                  All materials including 3D pens, filaments, and design templates are provided during the workshop.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
