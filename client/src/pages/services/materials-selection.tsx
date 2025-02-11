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
  Zap
} from "lucide-react";

const materialCategories = [
  {
    icon: Droplet,
    title: "Standard Plastics",
    materials: ["PLA", "ABS", "PETG"],
    description: "Versatile materials suitable for most applications",
    properties: ["Cost-effective", "Wide color range", "Good durability"]
  },
  {
    icon: Zap,
    title: "Engineering Materials",
    materials: ["Nylon", "PC", "TPU"],
    description: "High-performance materials for functional parts",
    properties: ["High strength", "Heat resistant", "Flexible options"]
  },
  {
    icon: Leaf,
    title: "Specialty Materials",
    materials: ["Carbon Fiber", "Metal-filled", "Wood-filled"],
    description: "Unique materials for specific applications",
    properties: ["Premium finish", "Enhanced properties", "Unique aesthetics"]
  }
];

const selectionCriteria = [
  {
    title: "Mechanical Properties",
    description: "Strength, flexibility, and durability requirements",
    icon: Ruler
  },
  {
    title: "Environmental Conditions",
    description: "Temperature, UV exposure, and chemical resistance",
    icon: Microscope
  },
  {
    title: "Application Requirements",
    description: "End-use requirements and regulatory compliance",
    icon: Lightbulb
  },
  {
    title: "Cost Considerations",
    description: "Budget constraints and production volume",
    icon: LineChart
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
              MATERIALS SELECTION
            </h1>
            <p className="text-lg text-white/60 mb-8">
              Expert guidance in choosing the perfect materials for your 3D printing projects.
              We help you navigate through hundreds of options to find the ideal material that meets your specific requirements.
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
                    <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                      <category.icon className="w-6 h-6 text-[#00FF00]" />
                    </div>
                    <CardTitle className="text-white text-xl mb-4">{category.title}</CardTitle>
                    <p className="text-white/60 mb-4">{category.description}</p>
                    <div className="space-y-4">
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
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Material Library</h2>
            <p className="text-white/60 mb-8">
              Our comprehensive material library is coming soon! Access detailed specifications,
              comparison tools, and real-world application examples.
            </p>
            <Card className="bg-black/50 border-[#00FF00]/20">
              <CardContent className="p-6">
                <Microscope className="w-12 h-12 text-[#00FF00] mx-auto mb-4" />
                <p className="text-white/60">
                  Get notified when our interactive material library launches!
                </p>
                <Button asChild className="mt-6 bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                  <Link href="/contact">Contact Material Expert</Link>
                </Button>
              </CardContent>
            </Card>
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
