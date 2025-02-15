import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Pen, Palette, Trophy, Book, Image, Sparkles } from "lucide-react";

const adultWorkshops = [
  {
    title: "3D Pen Basics",
    description: "Start your journey into 3D pen artistry with fundamental techniques.",
    details: "No experience needed",
    features: [
      "Pen control basics",
      "Material understanding",
      "Simple project creation",
      "Safety and best practices"
    ],
    duration: "3 hours",
    price: "$129",
    icon: Pen,
    image: "/workshops/adult-basic.jpg"
  },
  {
    title: "Artistic Techniques",
    description: "Develop advanced artistic skills and creative expression.",
    details: "Intermediate level",
    features: [
      "Advanced techniques",
      "Color theory",
      "Texture creation",
      "Complex structures"
    ],
    duration: "4 hours",
    price: "$179",
    icon: Palette,
    image: "/workshops/adult-artistic.jpg"
  },
  {
    title: "Professional Projects",
    description: "Create professional-quality artwork and develop your unique style.",
    details: "Advanced level",
    features: [
      "Project planning",
      "Advanced structures",
      "Professional finishing",
      "Portfolio development"
    ],
    duration: "6 hours",
    price: "$249",
    icon: Trophy,
    image: "/workshops/adult-professional.jpg"
  }
];

export default function AdultWorkshopsPage() {
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
              3D PEN ART FOR ADULTS
            </h1>
            <p className="text-lg text-white/60 mb-12">
              Discover the artistry of 3D pen creation in our adult workshops.
              Whether you're a beginner or an experienced artist, develop your skills
              and create stunning three-dimensional artwork.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {adultWorkshops.map((workshop, index) => (
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
