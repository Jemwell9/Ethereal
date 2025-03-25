import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Cutting-Edge Knowledge",
    description: "Our 3D printing services use the latest materials and techniques to deliver unmatched precision and quality.",
    icon: "https://jemwell9.github.io/Ethereal/cek-icon.png" // Path to your icon image
  },
  {
    title: "Expert Guidance",
    description: "Collaborate with PhD-level professionals to refine your concepts into perfect designs.",
    icon: "https://jemwell9.github.io/Ethereal/eg-icon.png" // Path to your icon image
  },
  {
    title: "Trusted by Industry Leaders",
    description: "We've partnered with top brands and innovators across industries to deliver exceptional results.",
    icon: "https://jemwell9.github.io/Ethereal/tbil-icon.png" // Path to your icon image
  },
  {
    title: "Creative Empowerment",
    description: "Learn, create, and collaborate in workshops designed for all skill levels.",
    icon: "https://jemwell9.github.io/Ethereal/ce-icon.png" // Path to your icon image
  },
  {
    title: "Material Diversity",
    description: "Access a wide range of materials, including plastics, metals, and composites, for any project.",
    icon: "https://jemwell9.github.io/Ethereal/md-icon.png" // Path to your icon image
  },
  {
    title: "Sustainable Design Options",
    description: "Precision manufacturing minimizes material waste, reducing your carbon footprint.",
    icon: "https://jemwell9.github.io/Ethereal/sdo-icon.png" // Path to your icon image
  }
];

export default function WhyChooseUs() {
  return (
    <section
    className="py-20 bg-black/40 relative"
    style={{
      backgroundImage: 'url("https://jemwell9.github.io/Ethereal/why-choose-us-bg.png")', // Add your background image here
      backgroundSize: 'contain', // Ensures the image is not stretched and fits within the container
      backgroundPosition: 'bottom', // Keeps the image centered within the section
      backgroundRepeat: 'no-repeat' // Prevents the image from repeating if it's smaller than the section
    }}
    
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Title with increased font size, letter spacing, and center alignment */}
          <h2 className="font-[agrandir wide] font-bold text-[60px] md:text-[70px] text-white mb-4 mt-[-50px] tracking-[3px]">
            WHY CHOOSE US?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="mb-6 rounded-lg overflow-hidden flex items-center justify-center">
                    {/* Icon with adjustable size */}
                    <img src={feature.icon} alt="Feature Icon" className="w-[100px] h-[100px]" /> {/* Adjust icon size */}
                  </div>
                  <div className="flex items-start gap-4 justify-center">
                    <div>
                      {/* Title with increased font size and center alignment */}
                      <h3 className="font-[horizon] font-bold uppercase text-[#00bf63] text-[18px] md:text-[20px] text-center tracking-wide">
                        {feature.title}
                      </h3>
                      {/* Description with increased font size and center alignment */}
                      <p className="font-[agrandir wide] text-[16px] md:text-[18px] text-white mt-2 text-center">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
