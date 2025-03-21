import { motion } from "framer-motion";

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
            <div className="grid grid-cols-1 gap-8">
              {/* Removed partner names here */}
            </div>
          </div>

          {/* Schools */}
          <div className="text-center">
            <h3 className="text-white text-xl mb-8">SCHOOLS</h3>
            <div className="grid grid-cols-1 gap-8">
              {/* Removed partner names here */}
            </div>
          </div>

          {/* Government */}
          <div className="text-center">
            <h3 className="text-white text-xl mb-8">GOVERNMENT</h3>
            <div className="grid grid-cols-1 gap-8">
              {/* Removed partner names here */}
            </div>
          </div>
        </div>
        {/* Image Below with curved edges */}
<div className="text-center mt-8">
  <img
    src="https://jemwell9.github.io/Ethereal/Leading-brands.png"  // Reference the image from the 'public' folder
    alt="Ethereal"
    className="w-[700px] h-[auto] object-cover mx-auto rounded-lg"  // Custom width, height auto, and rounded corners
  />
</div>

      </div>
    </section>
  );
}
