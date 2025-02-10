import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Printer, Pen, Shapes, BookOpen, Trophy, Sparkles, Image } from "lucide-react";
import { Animated3DGrid } from "@/components/ui/animated-3d-grid";

const printingWorkshops = [
  {
    title: "3D Printing Beginner",
    description: "Start your journey into 3D printing. Learn basic operations, material handling, and simple print execution.",
    details: "Perfect for those new to 3D printing",
    features: [
      "Basic printer operation",
      "Material selection basics",
      "Simple print execution",
      "Basic troubleshooting"
    ],
    duration: "4 hours",
    price: "$199",
    icon: BookOpen
  },
  {
    title: "3D Printing Advanced",
    description: "Take your skills further with CAD design integration and advanced printing techniques.",
    details: "For those ready to design and print",
    features: [
      "CAD software basics",
      "Design for 3D printing",
      "Advanced material handling",
      "Custom print settings"
    ],
    duration: "8 hours",
    price: "$399",
    icon: Shapes
  },
  {
    title: "3D Printing Master",
    description: "Complete project management from concept to final product.",
    details: "Comprehensive end-to-end training",
    features: [
      "Full project lifecycle",
      "Advanced design techniques",
      "Multi-material projects",
      "Professional finishing"
    ],
    duration: "16 hours",
    price: "$799",
    icon: Trophy
  }
];

const penArtWorkshops = [
  {
    category: "Kids",
    workshops: [
      {
        title: "Kids Beginner Pen Art",
        description: "Fun introduction to 3D pen art for young creators.",
        details: "Age-appropriate projects",
        features: [
          "Basic pen control",
          "Simple shapes creation",
          "Safety guidelines",
          "Fun starter projects"
        ],
        duration: "2 hours",
        price: "$79",
        icon: BookOpen
      },
      {
        title: "Kids Advanced Pen Art",
        description: "Create more complex designs and learn color techniques.",
        details: "For kids with basic experience",
        features: [
          "Advanced shapes",
          "Color mixing",
          "2D to 3D conversion",
          "Character creation"
        ],
        duration: "3 hours",
        price: "$129",
        icon: Shapes
      },
      {
        title: "Kids Master Pen Art",
        description: "Master complex projects and artistic techniques.",
        details: "For young artistic enthusiasts",
        features: [
          "Complex structures",
          "Multi-color projects",
          "Original design creation",
          "Portfolio development"
        ],
        duration: "4 hours",
        price: "$179",
        icon: Trophy
      }
    ]
  },
  {
    category: "Adults",
    workshops: [
      {
        title: "Adult Beginner Pen Art",
        description: "Start your journey in 3D pen artistry.",
        details: "No experience needed",
        features: [
          "Fundamental techniques",
          "Basic project planning",
          "Material understanding",
          "Essential skills practice"
        ],
        duration: "3 hours",
        price: "$99",
        icon: BookOpen
      },
      {
        title: "Adult Advanced Pen Art",
        description: "Develop sophisticated techniques and artistic styles.",
        details: "Intermediate skill level",
        features: [
          "Advanced techniques",
          "Style development",
          "Complex structures",
          "Artistic principles"
        ],
        duration: "4 hours",
        price: "$149",
        icon: Shapes
      },
      {
        title: "Adult Master Pen Art",
        description: "Create professional-level artwork and develop your unique style.",
        details: "Professional artistry focus",
        features: [
          "Professional techniques",
          "Original artwork creation",
          "Advanced color theory",
          "Exhibition preparation"
        ],
        duration: "6 hours",
        price: "$249",
        icon: Trophy
      }
    ]
  }
];

export default function Workshops() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <Animated3DGrid variant="printer" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">WORKSHOPS</h2>
          <p className="text-white/60 max-w-3xl mx-auto">
            From beginners to masters, explore our comprehensive range of workshops in 3D printing and pen art.
            Each level is carefully designed to build your skills and creativity.
          </p>
        </motion.div>

        {/* 3D Printing Workshops */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-white text-center">3D Printing Mastery</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {printingWorkshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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
                    <div className="aspect-video bg-[#00FF00]/5 rounded-lg overflow-hidden flex items-center justify-center">
                      <Image className="w-12 h-12 text-[#00FF00]/40" />
                    </div>
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

        {/* 3D Pen Art Workshops */}
        {penArtWorkshops.map((category, categoryIndex) => (
          <div key={category.category} className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-white text-center">
              3D Pen Art - {category.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.workshops.map((workshop, index) => (
                <motion.div
                  key={workshop.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
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
                      <div className="aspect-video bg-[#00FF00]/5 rounded-lg overflow-hidden flex items-center justify-center">
                        <Image className="w-12 h-12 text-[#00FF00]/40" />
                      </div>
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
        ))}
      </div>
    </section>
  );
}