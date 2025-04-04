import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "3D PRINTING",
    subtitle: "(ALL MATERIALS)",
    description: "From prototypes to finished products, we deliver quality results for every project using various materials. We've got you covered whether it’s PLA, ABS, PETG, resin, metal, carbon fiber, nylon, or any other material. Our technology ensures precision, durability, and customization for all creations, big or small.",
    img: "https://ethereal.sg/Ethereal/3d-pic.png", // Updated path to the image in the 'public' folder
    icon: "https://ethereal.sg/Ethereal/3d-icon.png", // Image path for icon
    reverse: false
  },
  {
    title: "AUTOCAD MODELING",
    subtitle: "(SMALL TO LARGE SCALE)",
    description: "Transform your ideas into 3D-print-ready designs with our expert AutoCAD modelling services. We specialize in creating precise and functional models tailored for 3D printing, ensuring every detail is optimized for a flawless print.",
    img: "https://ethereal.sg/Ethereal/autocad-pic.png", // Updated path to the image in the 'public' folder
    icon: "https://ethereal.sg/Ethereal/autocad-icon.png", // Image path for icon
    reverse: true
  },
  {
    title: "CONSULTATION",
    subtitle: "(DESIGN AND MATERIALS)",
    description: "Navigate the world of 3D printing with confidence through our expert consultation services. From selecting the right materials—such as PLA, ABS, resin, metal, and more—to refining your design for optimal results, our team provides tailored guidance at every step.",
    img: "https://ethereal.sg/Ethereal/consultation-pic.png", // Updated path to the image in the 'public' folder
    icon: "https://ethereal.sg/Ethereal/consultation-icon.png", // Image path for icon
    reverse: false
  },
  {
    title: "3D PEN ART WORKSHOP",
    subtitle: "(FOR KIDS TO ADULTS)",
    description: "Unleash your creativity with our fun and engaging 3D Pen Art Workshops, designed for all ages and skill levels. Whether you're a curious beginner or a seasoned artist, our hands-on sessions guide you in creating stunning 3D masterpieces.",
    img: "https://ethereal.sg/Ethereal/3d2-pic.png", // Updated path to the image in the 'public' folder
    icon: "https://ethereal.sg/Ethereal/3d2-icon.png", // Image path for icon
    reverse: true
  }
];

export default function Services() {
  return (
        <section id="services" className="py-20 bg-black/40 relative"
         style={{
         backgroundImage: 'url("https://ethereal.sg/Ethereal/featured-services-bg.png"), url("https://ethereal.sg/Ethereal/featured-services-bg-b.png")', // Add both images
         backgroundSize: 'contain', // Ensure the images do not stretch and stay contained
          backgroundPosition: 'top, bottom', // Position the first image at the top and the second one at the bottom
           backgroundRepeat: 'no-repeat' // Prevent the images from repeating
         }}
        >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[70px] font-[agrandir wide] mb-4 text-white text-center">FEATURED SERVICES</h2>
        </motion.div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${service.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
            >
              {/* Image Column */}
              <div className="w-full md:w-1/2 relative group">
                <div className="aspect-video rounded-lg overflow-hidden relative shadow-lg">
                  <img src={service.img} alt="Service" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Text Column */}
              <div className="w-full md:w-1/2 space-y-4 text-left">
                <h3 className="font-[horizon] uppercase text-[46px] text-[#00af21] font-bold leading-tight text-center tracking-[3px]">
                  {service.title}
                </h3>
                <h4 className="font-[horizon] text-white text-[38px] font-bold leading-tight text-center -mt-2 tracking-[3px]">
                  {service.subtitle}
                </h4>
                <p className="font-[agrandir wide] text-[26px] text-white leading-relaxed text-left tracking-[2px]">
                  {service.description}
                </p>
                <div className="flex items-center gap-6 mt-6 justify-center">
                  {/* Use img for the icon */}
                  <img src={service.icon} alt="Icon" className="w-30 h-20 text-[#00FF00]" /> {/* Adjusted icon size */}
                  <Button className="bg-[#00af21] hover:bg-[#00FF00]/90 hover:text-black text-white text-xl font-bold px-10 py-8 rounded-xl tracking-[3px]">
                   CHECK OUT MORE
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
