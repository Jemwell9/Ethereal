import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  { name: "ARCHITECTURE"},
  { name: "CONSTRUCTION"},
  { name: "MEDICAL"},
  { name: "MANUFACTURING"},
  { name: "GAMES"},
  { name: "TOYS"},
];

const industries2 = [
  { name: "3D PEN (KIDS)"},
  { name: "3D PEN (ADULTS)"},
  { name: "TEAMBUILDING"},
  { name: "GREEN TECH"},
  { name: "AUTOCAD"},
  { name: "MATERIAL SCIENCE" },
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
              <div className="flex items-center justify-center">
              <img src="/printing-icon.png" alt="Printing Icon" className="w-15 h-30" />
              </div>
              <h3 className="text-4xl font-bold text-white">CONCEPT MANUFACTURING</h3>
            </div>

            {/* Services - All in a single row */}
            <div className="grid grid-cols-6 gap-1">
              {industries.map((industry) => (
                <Card key={industry.name} className="transition-colors">
                  <CardContent className="p-1 flex items-center justify-center text-center">
                    <span className="text-[#b8eb7c] text-[11px]">{industry.name}</span>
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
              <Button className="text-white border-[#00af21] hover:bg-[#00FF00] hover:text-black rounded-xl text-xl font-bold px-10 py-8">
                FIND OUT MORE
              </Button>
              <Button className="text-white border-[#00af21] hover:bg-[#00FF00] hover:text-black rounded-xl text-xl font-bold px-10 py-8">
                SEE OUR PAST WORKS
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
  {/* 1st Column - Icon, Text, and Services */}
  <div className="flex flex-col gap-12">
    <div className="flex gap-4 items-center">
      <div className="flex items-center justify-center">
        {/* Replace the icon with the image */}
        <img src="/3d-pen-icon.png" alt="3D Pen Icon" className="w-15 h-35" />
      </div>
      <h3 className="text-4xl font-bold text-white">TRAININGS AND WORKSHOPS (CERTIFIED)</h3>
    </div>


            {/* Services - All in a single row */}
            <div className="grid grid-cols-6 gap-1">
              {industries2.map((industry) => (
                <Card key={industry.name} className="transition-colors">
                  <CardContent className="p-1 flex items-center justify-center text-center">
                    <span className="text-[#b8eb7c] text-[11px]">{industry.name}</span>
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
              <Button className="text-white border-[#00af21] hover:bg-[#00FF00] hover:text-black text-xl font-bold px-10 py-8">
                FIND OUT MORE
              </Button>
              <Button className="text-white border-[#00af21] hover:bg-[#00FF00] hover:text-black rounded-xl text-xl font-bold px-10 py-8">
                SEE OUR PAST WORKS
              </Button>
            </div>
          </div>

          {/* 2nd Column - Video Frames */}
          <div className="grid grid-cols-2 gap-6">
            <div className="w-full aspect-video bg-gray-500 rounded-lg overflow-hidden flex items-center justify-center">
              <video className="w-full h-full" controls poster="/thumb-5.jpg">
                <source src="trainings-workshops-vid-1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="w-full aspect-video bg-gray-500 rounded-lg overflow-hidden flex items-center justify-center">
              <video className="w-full h-full" controls poster="/thumb-6.jpg">
                <source src="trainings-workshops-vid-2.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="w-full aspect-video bg-gray-500 rounded-lg overflow-hidden flex items-center justify-center" style={{ marginTop: '-75px' }}>
              <video className="w-full h-full" controls poster="/thumb-7.jpg">
                <source src="trainings-workshops-vid-3.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="w-full aspect-video bg-gray-500 rounded-lg overflow-hidden flex items-center justify-center" style={{ marginTop: '-75px' }}>
              <video className="w-full h-full" controls poster="/thumb-8.jpg">
                <source src="trainings-workshops-vid-4.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
