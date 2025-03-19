import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Printer, PencilRuler, HelpCircle, PenTool } from "lucide-react";

const services = [
  {
    title: "3D Printing",
    subtitle: "(All Materials)",
    description: "From prototypes to finished products, we deliver quality results for every project using various materials. We've got you covered whether it’s PLA, ABS, PETG, resin, metal, carbon fiber, nylon, or any other material. Our technology ensures precision, durability, and customization for all creations, big or small.",
    img: "/images/3d-printing-sample.jpg",
    icon: Printer,
    reverse: false
  },
  {
    title: "AutoCAD",
    subtitle: "(Small to Large Scale)",
    description: "Transform your ideas into 3D-print-ready designs with our expert AutoCAD modelling services. We specialize in creating precise and functional models tailored for 3D printing, ensuring every detail is optimized for a flawless print.",
    img: "/images/autocad-sample.jpg",
    icon: PencilRuler,
    reverse: true
  },
  {
    title: "Consultation",
    subtitle: "(Design and Materials)",
    description: "Navigate the world of 3D printing with confidence through our expert consultation services. From selecting the right materials—such as PLA, ABS, resin, metal, and more—to refining your design for optimal results, our team provides tailored guidance at every step.",
    img: "/images/consultation-sample.jpg",
    icon: HelpCircle,
    reverse: false
  },
  {
    title: "3D Pen Art Workshop",
    subtitle: "(For Kids to Adults)",
    description: "Unleash your creativity with our fun and engaging 3D Pen Art Workshops, designed for all ages and skill levels. Whether you're a curious beginner or a seasoned artist, our hands-on sessions guide you in creating stunning 3D masterpieces.",
    img: "/images/3d-pen-sample.jpg",
    icon: PenTool,
    reverse: true
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black/40 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[32px] font-[agrandir wide] mb-4 text-white">FEATURED SERVICES</h2>
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
                <div className="aspect-video rounded-lg overflow-hidden bg-[#00FF00]/10 relative shadow-lg border border-[#00FF00]/20 group-hover:scale-105 transition-transform">
                  <img src={service.img} alt="Service" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-black/10" />
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#00FF00]/10 rotate-12" />
                </div>
              </div>
              {/* Text Column */}
              <div className="w-full md:w-1/2 space-y-4 text-left">
                <h3 className="font-[horizon] uppercase text-[36px] text-[#00af21] font-bold leading-tight">{service.title}</h3>
                <h4 className="font-[horizon] text-white text-[30px] font-bold leading-tight -mt-2">{service.subtitle}</h4>
                <p className="font-[agrandir wide] text-[20px] text-white leading-relaxed">{service.description}</p>
                <div className="flex items-center gap-6 mt-6">
                  <service.icon className="w-16 h-16 text-[#00FF00]" />
                  <Button className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-white text-lg font-bold px-10 py-5">
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
