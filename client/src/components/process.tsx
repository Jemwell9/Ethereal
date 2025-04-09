import { motion } from "framer-motion";

const steps = [
  {
    title: "consultation",
    description: "Share your vision, and we'll guide you through the possibilities.",
    img: "https://ethereal.sg/public/consultation-icon.png" // Updated icon to the given URL
  },
  {
    title: "design",
    description: "Collaborate with our experts for professional AutoCAD modeling and design refinement.",
    img: "https://ethereal.sg/public/design-icon.png" // Updated icon to the given URL
  },
  {
    title: "printing/production",
    description: "Watch your idea come to life with precision 3D printing.",
    img: "https://ethereal.sg/public/printing-icon.png" // Updated icon to the given URL
  },
  {
    title: "delivery",
    description: "Your final product, delivered with unmatched quality and satisfaction.",
    img: "https://ethereal.sg/public/delivery-icon.png" // Updated icon to the given URL
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-black" 
      style={{
        backgroundImage: 'url("https://ethereal.sg/public/how-it-works-bg.png")', // Background image path
        backgroundSize: 'contain', // Ensure the image does not stretch and stays contained
        backgroundPosition: 'top', // Position the image at the top of the section
        backgroundRepeat: 'no-repeat' // Prevent the image from repeating
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[50px] font-[agrandir wide] mb-4 uppercase tracking-[190]">
            <span className="relative inline-block text-white">
              From
            </span>{' '}
            <span className="text-[#77cc7d]">VISION TO CREATION</span>{' '}
            <span className="relative inline-block text-white">
              How
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
                <div className="w-16 h-16 mx-auto  flex items-center justify-center">
                  {/* Replaced icon with image */}
                  <img src={step.img} alt={step.title} className="w-15 h-15" />
                </div>
              </div>
              <h3 className="text-[#77cc7d] text-lg uppercase mb-4 font-[horizon] text-[24px] tracking-[2px]">{step.title}</h3>
              <p className="text-white text-[16px] leading-[1.4] tracking-[2px] font-[agrandir wide]">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Workshops Section */}
        <div className="mt-20 text-center">
          <h2 className="text-[50px] font-[agrandir wide] uppercase text-white mb-2 tracking-[3px]">
            Empowering Creators Through Workshops
          </h2>
          <p className="text-[24px] font-[horizon] uppercase text-[#77cc7d] font-bold mb-8 tracking-[3px]">
            Join a community of innovators, creators, and dreamers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-black/50 p-6 rounded-lg border border-[#00FF00]/20">
              <div className="mb-4">
                <img src="https://ethereal.sg/public/3d-pen-icon.png" alt="Workshop Icon" className="w-15 h-20 mx-auto" />
              </div>
              <h3 className="text-[#00bf63] text-[20px] font-bold mb-2 tracking-[2px]">3D PEN ART WORKSHOPS</h3>
              <p className="text-white text-[16px]">Hands-on creativity for individuals, families, and teams.</p>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-[#00FF00]/20">
              <div className="mb-4">
                <img src="https://ethereal.sg/public/design-masterclasses-icon.png" alt="Workshop Icon" className="w-15 h-20 mx-auto" />
              </div>
              <h3 className="text-[#77cc7d] text-[20px] font-bold mb-2 tracking-[2px]">DESIGN MASTERCLASSES</h3>
              <p className="text-white text-[16px]">Learn the art of AutoCAD modeling from industry experts.</p>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-[#00FF00]/20">
              <div className="mb-4">
                <img src="https://ethereal.sg/public/corporate-icon.png" alt="Workshop Icon" className="w-15 h-20 mx-auto" />
              </div>
              <h3 className="text-[#00bf63] text-[20px] font-bold mb-2 tracking-[2px]">CORPORATE TEAMBUILDING EVENTS</h3>
              <p className="text-white text-[16px]">Strengthen collaboration and innovation in your team with custom 3D design challenges.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
