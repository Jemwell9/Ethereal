import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Pen, Star, Shield, Sparkles, Users, Award, Heart } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function KidsWorkshopsPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
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
                    Young <br />
                    <span className="text-[#00FF00]">Creators</span>
                  </h1>
                  <p className="text-lg text-white/60 mb-8 max-w-xl">
                    Where imagination meets creativity in a safe, fun learning environment for the next generation of innovators.
                  </p>

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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Single Session Explorer Workshop */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Single Session Explorer</h2>
              <p className="text-white/60">Perfect first introduction to 3D pen art</p>
            </div>

            {/* Workshop Details */}
            <Card className="bg-black/50 border-[#00FF00]/20 p-6 mb-8">
              <div className="grid gap-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Basic Package</h3>
                    <p className="text-white/60">2 hours of guided creative fun</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-[#00FF00]">$49</p>
                    <p className="text-white/60">per child</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  <h4 className="text-white font-medium">What's Included:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Basic pen control techniques
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Simple shapes and patterns
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Take-home creation
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      All materials included
                    </li>
                  </ul>
                </div>

                {/* Group Discounts */}
                <div className="bg-[#00FF00]/5 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Group Discounts</h4>
                  <ul className="space-y-2">
                    <li className="text-white/60">2-3 children: 10% off per child</li>
                    <li className="text-white/60">4+ children: 15% off per child</li>
                    <li className="text-white/60">Sibling discount: 20% off second child</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Success Stories */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Success Stories</h3>
              <div className="grid gap-6">
                <Card className="bg-black/50 border-[#00FF00]/20 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-[#00FF00]/10 rounded-full flex items-center justify-center">
                      <Star className="w-8 h-8 text-[#00FF00]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Emily's First 3D Creation</h4>
                      <p className="text-white/60 mb-4">
                        "Emily created a beautiful butterfly in her first session. She was so proud to show it to her friends!"
                      </p>
                      <p className="text-white/40">- Sarah, Emily's mom</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Common Questions</h3>
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

            {/* CTA */}
            <div className="text-center">
              <Button asChild size="lg" className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                <Link href="/booking">Book This Workshop</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Creative Adventure Workshop */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Creative Adventure</h2>
              <p className="text-white/60">Expanded learning with more complex projects</p>
            </div>

            {/* Workshop Details */}
            <Card className="bg-black/50 border-[#00FF00]/20 p-6 mb-8">
              <div className="grid gap-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Advanced Package</h3>
                    <p className="text-white/60">3 hours of creative exploration</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-[#00FF00]">$69</p>
                    <p className="text-white/60">per child</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  <h4 className="text-white font-medium">What's Included:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Advanced techniques
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Multiple projects
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Creative storytelling
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Safety certificate
                    </li>
                  </ul>
                </div>

                {/* Group Discounts */}
                <div className="bg-[#00FF00]/5 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Group Discounts</h4>
                  <ul className="space-y-2">
                    <li className="text-white/60">2-3 children: 10% off per child</li>
                    <li className="text-white/60">4+ children: 15% off per child</li>
                    <li className="text-white/60">Sibling discount: 20% off second child</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Success Stories */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Success Stories</h3>
              <div className="grid gap-6">
                <Card className="bg-black/50 border-[#00FF00]/20 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-[#00FF00]/10 rounded-full flex items-center justify-center">
                      <Star className="w-8 h-8 text-[#00FF00]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Jack's Amazing Creations</h4>
                      <p className="text-white/60 mb-4">
                        "Jack's creativity was amazing! He created several projects that surpassed our expectations."
                      </p>
                      <p className="text-white/40">- John, Jack's dad</p>
                    </div>
                  </div>
                </Card>
              </div>
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

      {/* Sibling Bundle Workshop */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Sibling Bundle</h2>
              <p className="text-white/60">Special package for two siblings to learn together</p>
            </div>

            {/* Workshop Details */}
            <Card className="bg-black/50 border-[#00FF00]/20 p-6 mb-8">
              <div className="grid gap-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Sibling Package</h3>
                    <p className="text-white/60">2.5 hours of shared creative fun</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-[#00FF00]">$89</p>
                    <p className="text-white/60">for two siblings</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  <h4 className="text-white font-medium">What's Included:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Paired activities
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Team projects
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Double the fun
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <Sparkles className="w-4 h-4 text-[#00FF00]" />
                      Family discount
                    </li>
                  </ul>
                </div>

                {/* Group Discounts */}
                <div className="bg-[#00FF00]/5 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Group Discounts</h4>
                  <ul className="space-y-2">
                    <li className="text-white/60">Additional siblings: 10% off per child</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Success Stories */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Success Stories</h3>
              <div className="grid gap-6">
                <Card className="bg-black/50 border-[#00FF00]/20 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-[#00FF00]/10 rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 text-[#00FF00]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Sibling Teamwork</h4>
                      <p className="text-white/60 mb-4">
                        "My twins loved working together! They created a fantastic collaborative project."
                      </p>
                      <p className="text-white/40">- Mary, mother of twins</p>
                    </div>
                  </div>
                </Card>
              </div>
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

      {/* Testimonials */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Parent Testimonials</h2>
            <p className="text-white/60">See what other families are saying</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[{text: "My daughter couldn't stop talking about her 3D butterfly creation! The instructors made safety their top priority while keeping it fun.", author: "Sarah M., Parent of 7-year-old", rating: 5}, {text: "The sibling package was perfect for my kids. They worked together and created amazing projects!", author: "Michael R., Parent of 8 and 10-year-olds", rating: 5}].map((testimonial, index) => (
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

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Creative Showcase</h2>
            <p className="text-white/60">Amazing creations by our young artists</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-square bg-black/50 rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={`/services/modeling-${index}.png`}
                  alt={`Workshop creation ${index}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Continue the Creative Journey</h2>
            <p className="text-white/60">Resources and next steps for young creators</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-black/50 border-[#00FF00]/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Tips for Parents</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-white/60">
                    <Sparkles className="w-4 h-4 text-[#00FF00]" />
                    Create a dedicated creative space at home
                  </li>
                  <li className="flex items-center gap-2 text-white/60">
                    <Sparkles className="w-4 h-4 text-[#00FF00]" />
                    Set regular practice times
                  </li>
                  <li className="flex items-center gap-2 text-white/60">
                    <Sparkles className="w-4 h-4 text-[#00FF00]" />
                    Display and celebrate creations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-[#00FF00]/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Next Steps</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-white/60">
                    <Sparkles className="w-4 h-4 text-[#00FF00]" />
                    Join our Creative Adventure workshop
                  </li>
                  <li className="flex items-center gap-2 text-white/60">
                    <Sparkles className="w-4 h-4 text-[#00FF00]" />
                    Explore sibling workshops
                  </li>
                  <li className="flex items-center gap-2 text-white/60">
                    <Sparkles className="w-4 h-4 text-[#00FF00]" />
                    Book regular practice sessions
                  </li>
                </ul>
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