import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Microscope,
  Ruler,
  Lightbulb,
  LineChart,
  ArrowRight,
  Droplet,
  Leaf,
  Zap,
  SearchCode,
  GitCompare
} from "lucide-react";

const materialCategories = [
  {
    icon: Droplet,
    title: "Standard Plastics",
    materials: ["PLA", "ABS", "PETG"],
    description: "Perfect for prototypes, models, and everyday objects. Ideal for startups and product development.",
    properties: [
      "Fast production times",
      "Cost-effective for small batches",
      "Wide range of colors and finishes",
      "Suitable for iterative design"
    ],
    applications: [
      "Product prototypes",
      "Display models",
      "Educational props",
      "Art installations"
    ],
    image: "/materials/standard-plastics.jpg",
    samples: [
      "/materials/pla-sample.jpg",
      "/materials/abs-sample.jpg",
      "/materials/petg-sample.jpg"
    ]
  },
  {
    icon: Zap,
    title: "Engineering Materials",
    materials: ["Nylon", "PC", "TPU"],
    description: "Industrial-grade materials for functional parts that need to perform under stress or harsh conditions.",
    properties: [
      "Superior strength-to-weight ratio",
      "High temperature resistance",
      "Chemical resistance",
      "Impact resistant"
    ],
    applications: [
      "Functional prototypes",
      "End-use parts",
      "Manufacturing tools",
      "Automotive components"
    ],
    image: "/materials/engineering-materials.jpg",
    samples: [
      "/materials/nylon-sample.jpg",
      "/materials/pc-sample.jpg",
      "/materials/tpu-sample.jpg"
    ]
  },
  {
    icon: Leaf,
    title: "Specialty Materials",
    materials: ["Carbon Fiber", "Metal-filled", "Wood-filled"],
    description: "Premium materials that combine unique aesthetics with enhanced mechanical properties.",
    properties: [
      "Professional finish",
      "Enhanced strength",
      "Unique textures",
      "Premium aesthetics"
    ],
    applications: [
      "Luxury products",
      "High-end prototypes",
      "Exhibition models",
      "Custom furniture parts"
    ],
    image: "/materials/specialty-materials.jpg",
    samples: [
      "/materials/carbon-fiber-sample.jpg",
      "/materials/metal-filled-sample.jpg",
      "/materials/wood-filled-sample.jpg"
    ]
  }
];

const selectionCriteria = [
  {
    title: "Performance Requirements",
    description: "We analyze your product's needs for strength, flexibility, and durability to ensure optimal material selection",
    details: [
      "Load-bearing capability",
      "Impact resistance",
      "Wear resistance",
      "Flexibility needs"
    ],
    icon: Ruler,
    image: "/selection/mechanical-properties.jpg"
  },
  {
    title: "Environment & Usage",
    description: "We consider where and how your product will be used to ensure long-term reliability",
    details: [
      "Temperature exposure",
      "UV resistance",
      "Chemical contact",
      "Outdoor durability"
    ],
    icon: Microscope,
    image: "/selection/environmental-conditions.jpg"
  },
  {
    title: "Regulatory & Safety",
    description: "We ensure your product meets industry standards and safety requirements",
    details: [
      "Food safety compliance",
      "Medical grade options",
      "Fire resistance",
      "Child safety standards"
    ],
    icon: Lightbulb,
    image: "/selection/application-requirements.jpg"
  },
  {
    title: "Cost Optimization",
    description: "We help balance quality and budget to maximize your ROI",
    details: [
      "Volume pricing options",
      "Material efficiency",
      "Production speed",
      "Minimal waste"
    ],
    icon: LineChart,
    image: "/selection/cost-considerations.jpg"
  }
];

export default function MaterialsSelectionPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">
              MATERIAL SOLUTIONS
            </h1>
            <p className="text-lg text-white/60 mb-8">
              Turn your ideas into reality with the right material choice. Our experts help you navigate 
              through industrial-grade options to find the perfect match for your project's performance, 
              budget, and timeline requirements. From rapid prototypes to end-use parts, we ensure your 
              success with proven materials.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                <Link href="/contact">Get Expert Advice</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00]/10">
                <Link href="#material-library">View Material Library</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Material Categories */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Material Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {materialCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors h-full">
                  <CardHeader>
                    {/* Category Image */}
                    <div className="mb-4 aspect-video rounded-lg overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                      <category.icon className="w-6 h-6 text-[#00FF00]" />
                    </div>
                    <CardTitle className="text-white text-xl mb-4">{category.title}</CardTitle>
                    <p className="text-white/60 mb-4">{category.description}</p>
                    <div className="space-y-4">
                      {/* Material Samples Grid */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {category.samples.map((sample, i) => (
                          <div key={i} className="aspect-square rounded-lg overflow-hidden">
                            <img 
                              src={sample} 
                              alt={`${category.materials[i]} sample`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <div>
                        <h4 className="text-[#00FF00] text-sm font-medium mb-2">Available Materials:</h4>
                        <ul className="text-white/60 text-sm space-y-1">
                          {category.materials.map((material) => (
                            <li key={material}>{material}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[#00FF00] text-sm font-medium mb-2">Key Properties:</h4>
                        <ul className="text-white/60 text-sm space-y-1">
                          {category.properties.map((property) => (
                            <li key={property}>{property}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Selection Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {selectionCriteria.map((criterion, index) => (
              <motion.div
                key={criterion.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors">
                  <CardHeader>
                    {/* Criterion Image */}
                    <div className="mb-4 aspect-video rounded-lg overflow-hidden">
                      <img 
                        src={criterion.image} 
                        alt={criterion.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                      <criterion.icon className="w-6 h-6 text-[#00FF00]" />
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{criterion.title}</CardTitle>
                    <p className="text-white/60">{criterion.description}</p>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Library - Placeholder for future feature */}
      <section id="material-library" className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Material Library</h2>
            <p className="text-white/60 mb-12 text-center max-w-2xl mx-auto">
              Coming soon - Your comprehensive guide to 3D printing materials. Explore detailed specifications,
              interactive comparison tools, and real-world applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors">
                <CardContent className="p-6">
                  <SearchCode className="w-12 h-12 text-[#00FF00] mb-4" />
                  <h3 className="text-white text-xl font-semibold mb-4">Material Specifications</h3>
                  <ul className="text-white/60 space-y-2 mb-6">
                    <li>• Detailed mechanical properties</li>
                    <li>• Temperature resistance data</li>
                    <li>• Chemical compatibility</li>
                    <li>• Processing parameters</li>
                  </ul>
                  <div className="aspect-video rounded-lg overflow-hidden bg-black/30" />
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors">
                <CardContent className="p-6">
                  <GitCompare className="w-12 h-12 text-[#00FF00] mb-4" />
                  <h3 className="text-white text-xl font-semibold mb-4">Comparison Tools</h3>
                  <ul className="text-white/60 space-y-2 mb-6">
                    <li>• Side-by-side comparisons</li>
                    <li>• Cost analysis calculator</li>
                    <li>• Property radar charts</li>
                    <li>• Application suitability matrix</li>
                  </ul>
                  <div className="aspect-video rounded-lg overflow-hidden bg-black/30" />
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors">
                <CardContent className="p-6">
                  <Microscope className="w-12 h-12 text-[#00FF00] mb-4" />
                  <h3 className="text-white text-xl font-semibold mb-4">Case Studies</h3>
                  <ul className="text-white/60 space-y-2 mb-6">
                    <li>• Real project examples</li>
                    <li>• Material selection rationale</li>
                    <li>• Performance analysis</li>
                    <li>• Cost-benefit studies</li>
                  </ul>
                  <div className="aspect-video rounded-lg overflow-hidden bg-black/30" />
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                <Link href="/contact">Get Early Access</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Need Help Selecting the Right Material?
            </h2>
            <p className="text-white/60 mb-8">
              Our material experts are ready to help you choose the perfect material for your application.
              Get in touch for a personalized consultation.
            </p>
            <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}