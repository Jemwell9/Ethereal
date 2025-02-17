import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Pen, 
  Users, 
  Code2, 
  Beaker, 
  Leaf, 
  Palette 
} from "lucide-react";
import { Animated3DGrid } from "@/components/ui/animated-3d-grid";

const workshops = [
  { name: "3D PEN (KIDS)", icon: Pen },
  { name: "TEAMBUILDING", icon: Users },
  { name: "AUTOCAD", icon: Code2 },
  { name: "MATERIAL SCIENCE", icon: Beaker },
  { name: "GREEN TECH", icon: Leaf },
  { name: "3D PEN (ADULTS)", icon: Palette },
];

export default function Trainings() {
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
          <h2 className="text-4xl font-bold mb-8 text-white">
            TRAININGS AND
            <br />
            WORKSHOPS (CERTIFIED)
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto text-lg">
            Our certified workshops cater to all ages and skill levels, offering hands-on learning and 
            professional growth. From 3D Pen Art for kids and adults to AutoCAD training, team-building 
            activities, material science, and green tech workshops, we provide engaging sessions designed 
            to spark creativity, enhance skills, and promote sustainability. Perfect for individuals, 
            schools, and corporate teams!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <workshop.icon className="w-8 h-8 text-[#00FF00] mb-2" />
                  <span className="text-white text-sm">{workshop.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button variant="outline" className="border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00] hover:text-black">
            FIND OUT MORE
          </Button>
          <Button variant="outline" className="border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00] hover:text-black">
            SEE OUR PAST WORKS
          </Button>
        </div>
      </div>
    </section>
  );
}