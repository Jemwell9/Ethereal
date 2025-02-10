import { motion } from "framer-motion";
import { SiAutodesk, SiSiemens, SiNike } from "react-icons/si";

const partners = {
  corporates: [
    { icon: SiAutodesk, name: "Autodesk" },
    { icon: SiSiemens, name: "Siemens" },
    { icon: SiNike, name: "Nike" },
  ],
  schools: [
    { icon: SiAutodesk, name: "School 1" },
    { icon: SiSiemens, name: "School 2" },
    { icon: SiNike, name: "School 3" },
  ],
  government: [
    { icon: SiAutodesk, name: "Gov 1" },
    { icon: SiSiemens, name: "Gov 2" },
    { icon: SiNike, name: "Gov 3" },
  ]
};

export default function Partners() {
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
          <h2 className="text-4xl font-bold mb-4 text-white">Trusted by Leading Brands</h2>
          <p className="text-[#00FF00]/80 text-lg">
            PARTNERED WITH INDUSTRY INNOVATORS
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
          {/* Corporates */}
          <div className="text-center">
            <h3 className="text-white text-xl mb-8">CORPORATES</h3>
            <div className="grid grid-cols-3 gap-8">
              {partners.corporates.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center"
                >
                  <partner.icon className="w-12 h-12 text-[#00FF00]" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Schools */}
          <div className="text-center">
            <h3 className="text-white text-xl mb-8">SCHOOLS</h3>
            <div className="grid grid-cols-3 gap-8">
              {partners.schools.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center"
                >
                  <partner.icon className="w-12 h-12 text-[#00FF00]" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Government */}
          <div className="text-center">
            <h3 className="text-white text-xl mb-8">GOVERNMENT</h3>
            <div className="grid grid-cols-3 gap-8">
              {partners.government.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center"
                >
                  <partner.icon className="w-12 h-12 text-[#00FF00]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
