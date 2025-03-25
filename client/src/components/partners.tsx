import { motion } from "framer-motion";

export default function Partners() {
  return (
    <section
      className="relative overflow-hidden h-[612px]"
      style={{
        backgroundImage: 'url("https://jemwell9.github.io/Ethereal/Banner-bg-2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'top center', // Focus on the top part of the image
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4">
        {/* TRUSTED BY LEADING BRANDS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-[80px] font-bold text-white tracking-[3px]">TRUSTED BY LEADING BRANDS</h2>
        </motion.div>

        {/* PARTNERED WITH INDUSTRY INNOVATORS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#007d18]/80 text-[50px] font-bold ">PARTNERED WITH INDUSTRY INNOVATORS</p>

        </motion.div>

        {/* CORPORATES, SCHOOLS, GOVERNMENT */}
        <div className="grid grid-cols-3 gap-16 max-w-5xl mx-auto text-center mt-[-70px]">
          <div>
            <h3 className="text-black text-2xl mb-8">CORPORATES</h3>
          </div>
          <div>
            <h3 className="text-black text-2xl mb-8">SCHOOLS</h3>
          </div>
          <div>
            <h3 className="text-black text-2xl mb-8">GOVERNMENT</h3>
          </div>
        </div>

        {/* Image Below with curved edges */}
        <div className="text-center mt-8">
          <img
            src="https://jemwell9.github.io/Ethereal/Leading-brands.png" // Reference the image from the 'public' folder
            alt="Ethereal"
            className="w-[850px] h-[auto] object-cover mx-auto rounded-lg" // Custom width, height auto, and rounded corners
          />
        </div>
      </div>
    </section>
  );
}
