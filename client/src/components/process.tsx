import { motion } from "framer-motion";
import { MessageSquare, Pencil, Printer, Truck, Eye, Lightbulb, Users, PenTool, Ruler } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "consultation",
    description: "Share your vision, and we'll guide you through the possibilities."
  },
  {
    icon: Pencil,
    title: "design",
    description: "Collaborate with our experts for professional AutoCAD modeling and design refinement."
  },
  {
    icon: Printer,
    title: "printing/production",
    description: "Watch your idea come to life with precision 3D printing."
  },
  {
    icon: Truck,
    title: "delivery",
    description: "Your final product, delivered with unmatched quality and satisfaction."
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[25px] font-[agrandir wide] mb-4 text-[#77cc7d] uppercase tracking-[190]">
            <span className="relative inline-block">
              From
              <Eye className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 text-[#77cc7d]" />
            </span>{' '}
            <span className="text-[#77cc7d]">Vision to Creation</span>{' '}
            <span className="relative inline-block">
              How
              <Lightbulb className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 text-[#77cc7d]" />
            </span>{' '}It Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-[#00FF00]/10 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-[#00FF00]" />
                </div>
              </div>
              <h3 className="text-white text-lg uppercase mb-4 font-[horizon] text-[12.4px]">{step.title}</h3>
              <p className="text-white/60 text-[13px] leading-[1.4] tracking-[69] font-[agrandir wide]">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Workshops Section */}
        <div className="mt-20 text-center">
          <h2 className="text-[25px] font-[agrandir wide] uppercase text-white mb-2 tracking-[190]">
            Empowering Creators Through Workshops
          </h2>
          <p className="text-[12.5px] font-[horizon] uppercase text-white font-bold mb-8 tracking-[111]">
            Join a community of innovators, creators, and dreamers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-black/50 p-6 rounded-lg border border-[#00FF00]/20">
              <div className="mb-4">
                <PenTool className="w-8 h-8 text-[#00FF00] mx-auto" />
              </div>
              <h3 className="text-white font-bold mb-2">3D Pen Art Workshops</h3>
              <p className="text-white/60 text-sm">Hands-on creativity for individuals, families, and teams.</p>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-[#00FF00]/20">
              <div className="mb-4">
                <Ruler className="w-8 h-8 text-[#00FF00] mx-auto" />
              </div>
              <h3 className="text-white font-bold mb-2">Design Masterclasses</h3>
              <p className="text-white/60 text-sm">Learn the art of AutoCAD modeling from industry experts.</p>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-[#00FF00]/20">
              <div className="mb-4">
                <Users className="w-8 h-8 text-[#00FF00] mx-auto" />
              </div>
              <h3 className="text-white font-bold mb-2">Corporate Team-Building Events</h3>
              <p className="text-white/60 text-sm">Strengthen collaboration and innovation in your team with custom 3D design challenges.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
