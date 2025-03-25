import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Construction, Stethoscope, Factory, Gamepad2, Puzzle } from "lucide-react";

const industries = [
  { name: "ARCHITECTURE", icon: Building2 },
  { name: "CONSTRUCTION", icon: Construction },
  { name: "MEDICAL", icon: Stethoscope },
  { name: "MANUFACTURING", icon: Factory },
  { name: "GAMES", icon: Gamepad2 },
  { name: "TOYS", icon: Puzzle },
];

const industries2 = [
  { name: "3D PEN (KIDS)", icon: Building2 },
  { name: "3D PEN (ADULTS)", icon: Construction },
  { name: "TEAMBUILDING", icon: Stethoscope },
  { name: "GREEN TECH", icon: Factory },
  { name: "AUTOCAD", icon: Gamepad2 },
  { name: "MATERIAL SCIENCE", icon: Puzzle },
];

export default function ConceptManufacturing() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Concept Manufacturing Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 1st Column - Video Frames */}
          <div className="grid grid-cols-2 gap-6">
            {/* Video 1 */}
            <div className="w-full aspect-video bg-gray-500 rounded-lg overflow-hidden flex items-center justify-center">
              <video className="w-full h-full" controls poster="https://jemwell9.github.io/Ethereal/thumb-1.jpg" >
                <source src="https://jemwell9.github.io/Ethereal/concept-manufacturing-vid-1.mp4" type="video/mp4" />
              </video>
            </div>
            {/* Video 2 */}
            <div className="w-full aspect-video bg-gray-500 rounded-lg overflow-hidden flex items-center justify-center">
              <video className="w-full h-full" controls poster="https://jemwell9.github.io/Ethereal/thumb-2.jpg">
                <source src="https://jemwell9.github.io/Ethereal/concept-manufacturing-vid-2.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Video 3 */}
            <div className="w-full aspect-video bg-gray-500 rounded-lg overflow-hidden flex items-center justify-center" style={{ marginTop: '5px' }}>
              <video className="w-full h-full" controls poster="https://jemwell9.github.io/Ethereal/thumb-3.jpg">
                <source src="https://jemwell9.github.io/Ethereal/concept-manufacturing-vid-3.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Video 4 */}
            <div className="w-full aspect-video bg-gray-500 rounded-lg overflow-hidden flex items-center justify-center" style={{ marginTop: '5px' }}>
              <video className="w-full h-full" controls poster="https://jemwell9.github.io/Ethereal/thumb-4.jpg">
                <source src="https://jemwell9.github.io/Ethereal/concept-manufacturing-vid-4.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* 2nd Column - Icon, Text, and Services */}
          <div className="flex flex-col gap-12">
            {/* Icon and Concept Manufacturing Title */}
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 bg-[#00FF00]/10 rounded-lg flex items-center justify-center">
                <Building2 className="w-8 h-8 text-[#00FF00]" />
              </div>
              <h3 className="text-4xl font-bold text-white">CONCEPT MANUFACTURING</h3>
            </div>

            {/* Services - All in a single row */}
            <div className="grid grid-cols-6 gap-4">
              {industries.map((industry) => (
                <Card key={industry.name} className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <industry.icon className="w-8 h-8 text-[#00FF00] mb-2" />
                    <span className="text-white text-[11px]">{industry.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Description */}
            <p className="text-white text-lg">
              We provide comprehensive services that include consultation to refine your ideas, design to create precise and functional models, printing and production with high-quality materials, and delivery right to your doorstep.
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <Button className="text-white border-[#00FF00] hover:bg-[#00FF00] hover:text-black text-lg font-bold px-8 py-4">
                FIND OUT MORE
              </Button>
              <Button className="text-white border-[#00FF00] hover:bg-[#00FF00] hover:text-black text-lg font-bold px-8 py-4">
                SEE OUR PAST WORKS
              </Button>
            </div>
          </div>
        </div>

        {/* Training and Workshops Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* 1st Column - Icon, Text, and Services */}
          <div className="flex flex-col gap-12">
            {/* Icon and Training and Workshops Title */}
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 bg-[#00FF00]/10 rounded-lg flex items-center justify-center">
                <Building2 className="w-8 h-8 text-[#00FF00]" />
              </div>
              <h3 className="text-4xl font-bold text-white">TRAININGS AND WORKSHOPS (CERTIFIED)</h3>
            </div>

            {/* Services - All in a single row */}
            <div className="grid grid-cols-6 gap-4">
              {industries2.map((industry) => (
                <Card key={industry.name} className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <industry.icon className="w-8 h-8 text-[#00FF00] mb-2" />
                    <span className="text-white text-[11px]">{industry.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Description */}
            <p className="text-white text-lg">
              Our certified workshops cater to all ages and skill levels, offering hands-on learning and professional growth. From 3D Pen Art for kids and adults to AutoCAD training, team-building activities, material science, and green tech workshops, we provide engaging sessions designed to spark creativity, enhance skills, and promote sustainability. Perfect for individuals, schools, and corporate teams!
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <Button className="text-white border-[#00FF00] hover:bg-[#00FF00] hover:text-black text-lg font-bold px-8 py-4">
                FIND OUT MORE
              </Button>
              <Button className="text-white border-[#00FF00] hover:bg-[#00FF00] hover:text-black text-lg font-bold px-8 py-4">
                SEE OUR PAST WORKS
              </Button>
            </div>
          </div>

          {/* 2nd Column - Video Frames */}
          <div className="grid grid-cols-2 gap-6">
            <div className="w-full aspect-video bg-gray-500 rounded-lg overflow-hidden flex items-center justify-center">
              <video className="w-full h-full" controls poster="https://jemwell9.github.io/Ethereal/thumb-1.jpg">
                <source src="https://jemwell9.github.io/Ethereal/concept-manufacturing-vid-1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="w-full aspect-video bg-gray-500 rounded-lg overflow-hidden flex items-center justify-center">
              <video className="w-full h-full" controls poster="https://jemwell9.github.io/Ethereal/thumb-2.jpg">
                <source src="https://jemwell9.github.io/Ethereal/concept-manufacturing-vid-2.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="w-full aspect-video bg-gray-500 rounded-lg overflow-hidden flex items-center justify-center" style={{ marginTop: '-75px' }}>
              <video className="w-full h-full" controls poster="https://jemwell9.github.io/Ethereal/thumb-3.jpg">
                <source src="https://jemwell9.github.io/Ethereal/concept-manufacturing-vid-3.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="w-full aspect-video bg-gray-500 rounded-lg overflow-hidden flex items-center justify-center" style={{ marginTop: '-75px' }}>
              <video className="w-full h-full" controls poster="https://jemwell9.github.io/Ethereal/thumb-4.jpg">
                <source src="https://jemwell9.github.io/Ethereal/concept-manufacturing-vid-4.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
