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

export default function ConceptManufacturing() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Heading and Text Removed */}
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 1st Column - Video Frames */}
          <div className="grid grid-cols-2 gap-6">
            <div className="w-full aspect-video bg-gray-500 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-[#00FF00]/20 text-center text-white flex items-center justify-center">
                <span>Video 1</span>
              </div>
            </div>
            <div className="w-full aspect-video bg-gray-500 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-[#00FF00]/20 text-center text-white flex items-center justify-center">
                <span>Video 2</span>
              </div>
            </div>

            <div className="w-full aspect-video bg-gray-500 rounded-lg overflow-hidden mt-4">
              <div className="w-full h-full bg-[#00FF00]/20 text-center text-white flex items-center justify-center">
                <span>Video 3</span>
              </div>
            </div>
            <div className="w-full aspect-video bg-gray-500 rounded-lg overflow-hidden mt-4">
              <div className="w-full h-full bg-[#00FF00]/20 text-center text-white flex items-center justify-center">
                <span>Video 4</span>
              </div>
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

            {/* Services */}
            <div className="grid grid-cols-2 gap-4">
              {industries.map((industry) => (
                <Card key={industry.name} className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <industry.icon className="w-8 h-8 text-[#00FF00] mb-2" />
                    <span className="text-white text-sm">{industry.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Description */}
            <p className="text-white/60 text-lg">
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
      </div>
    </section>
  );
}
