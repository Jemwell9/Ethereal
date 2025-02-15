import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Pen, Star, Palette, Trophy, Image, Sparkles } from "lucide-react";

const kidsWorkshops = [
  {
    title: "Fun with 3D Pens (Age 7-9)",
    description: "A playful introduction to 3D pen art for young creators.",
    details: "Perfect for beginners",
    features: [
      "Basic pen control",
      "Simple shapes and patterns",
      "Color mixing basics",
      "Fun starter projects"
    ],
    duration: "2 hours",
    price: "$79",
    icon: Pen,
    image: "/workshops/kids-basic.jpg"
  },
  {
    title: "Creative Adventures (Age 10-12)",
    description: "Explore creative possibilities with intermediate techniques.",
    details: "For growing artists",
    features: [
      "Advanced shapes",
      "2D to 3D conversion",
      "Multi-color projects",
      "Character creation"
    ],
    duration: "3 hours",
    price: "$99",
    icon: Star,
    image: "/workshops/kids-creative.jpg"
  },
  {
    title: "Young Artist Projects (Age 13+)",
    description: "Advanced projects for talented young creators.",
    details: "For aspiring artists",
    features: [
      "Complex structures",
      "Project planning",
      "Artistic techniques",
      "Portfolio pieces"
    ],
    duration: "4 hours",
    price: "$129",
    icon: Palette,
    image: "/workshops/kids-advanced.jpg"
  }
];

export default function KidsWorkshopsPage() {
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
              3D PEN ART FOR KIDS
            </h1>
            <p className="text-lg text-white/60 mb-12">
              Unleash your child's creativity with our fun and engaging 3D pen workshops.
              Watch their imagination come to life as they learn to create amazing 3D art
              in a safe and supportive environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kidsWorkshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors">
                  <CardHeader>
                    <div className="aspect-video bg-[#00FF00]/5 rounded-lg overflow-hidden mb-4">
                      <Image className="w-full h-full object-cover" />
                    </div>
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
    </div>
  );
}
