import { motion } from "framer-motion";
import { MessageSquare, Pencil, Printer, Truck } from "lucide-react";

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
          <h2 className="text-4xl font-bold mb-4 text-white">From Vision to Creation: How It Works</h2>
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
              <h3 className="text-white text-lg uppercase mb-4">{step.title}</h3>
              <p className="text-white/60">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
