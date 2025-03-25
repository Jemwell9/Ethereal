import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = {
  services: [
    {
      text: "Our company needed a large-scale model for a client pitch, and Ethereal delivered beyond our expectations. The quality and attention to detail helped us win the contract!",
      author: "Teo K. T.",
      role: "Urban Planner (ID)",
      photo: "/teo-k-t-photo.png" // Updated photo path
    },
    {
      text: "Ethereal played a crucial role in helping our R&D team prototype a new product. Their 3D printing expertise saved us time and significantly improved our design process.",
      author: "Melissa L.",
      role: "Product Development Manager",
      photo: "/melissa-l-photo.png" // Updated photo path
    },
    {
      text: "We partnered with Ethereal for a public infrastructure project, and their attention to detail and ability to deliver on time was exceptional. They are a valuable asset for any government initiative.",
      author: "Shaun A.",
      role: "Marketing Lead",
      photo: "/shaun-a-photo.png" // Updated photo path
    }
  ],
  workshops: [
    {
      text: "Ethereal's expertise in 3D printing has been a game-changer for our STEM program. The students were thrilled to see their designs come to life with such precision and quality.",
      author: "Samantha C.",
      role: "STEM Coordinator",
      photo: "/samantha-c-photo.png" // Updated photo path
    },
    {
      text: "We engaged Ethereal for a team-building 3D Pen Workshop, and it exceeded all expectations. The session was engaging, fun, and perfectly aligned with our corporate creativity goals.",
      author: "Keith T.",
      role: "HR Director",
      photo: "/keith-t-photo.png" // Updated photo path
    },
    {
      text: "The 3D Pen Workshop hosted by Ethereal was a hit with our students and teachers alike. It was an innovative way to inspire creativity and hands-on learning in the classroom.",
      author: "Nicole L.",
      role: "Vice Head of Arts",
      photo: "/nicole-l-photo.png" // Updated photo path
    }
  ]
};

export default function Testimonials() {
  return (
    <section className="py-20 bg-black"
      style={{
        backgroundImage: 'url("/how-it-works-bg.png"), url("/featured-services-bg-b.png")',
        backgroundSize: '100% 50%, 100% 50%', // Ensure the images are contained
        backgroundPosition: 'bottom,top', // Position the images at the top
        backgroundRepeat: 'no-repeat' // Prevent the images from repeating
      }}
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-[agrandir wide] text-[70px] font-bold tracking-[3px] leading-[1.4] text-white">
            "WHAT OUR CUSTOMERS SAY"
          </h2>
        </motion.div>

        {/* Ratings Section */}
        <div className="mb-1">
          <div className="text-center">
            <span className="font-[horizon] text-[70px] text-[#00af21] font-bold tracking-[3px] leading-[1.4]">
              RATINGS
            </span>
          </div>
          <div className="text-center ">
            <span className="text-white text-[20px] ml-2">⭐⭐⭐⭐⭐(4.8/5 AVERAGE RATING)</span>
          </div>

          <div className="text-center ">
            <span className="text-[#00af21] text-[20px] font-bold tracking-[2px] leading-[1.4]">
              3D PRINTING AND CONSULTATION SERVICES
            </span>
          </div>

          <p className="text-white text-[20px] uppercase text-center ">
            "Rated highly for innovation, quality, and customer support."
          </p>

          <div className="flex items-center justify-center ">
            <span className="text-white text-[20px] ml-2">⭐⭐⭐⭐⭐(4.9/5 AVERAGE RATING)</span>
          </div>

          <div className="text-center">
            <span className="text-[#00af21] text-[20px] font-bold tracking-[2px] leading-[1.4]">
              3D PEN ART WORKSHOPS (KIDS TO ADULTS)
            </span>
          </div>

          <p className="text-white uppercase text-center">
            “The 3D Pen Art Workshop was an amazing experience! Both kids and adults had so much fun creating their own designs—it was easy to follow and so engaging.”
          </p>
        </div>

        {/* Testimonials Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="font-[horizon] text-[50px] font-bold leading-[1.4] text-[#00af21] tracking-[3px]">
              TESTIMONIALS
            </h3>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.services.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="h-full bg-black/50 border-[#00FF00]/20">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-32 h-32 rounded-full border-4 border-[#] overflow-hidden">
                        <img src={testimonial.photo} alt={testimonial.author} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <p className="text-white mb-4 text-[13px] tracking-[3px] leading-[1.4] font-[agrandir wide]">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="text-white">
                      <p className="font-[agrandir wide] text-[20px] font-bold uppercase tracking-[190%]">{testimonial.author}</p>
                      <p className="text-m">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Workshop Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
            {testimonials.workshops.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="h-full bg-black/50 border-[#00FF00]/20">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-32 h-32 rounded-full border-4 border-[#] overflow-hidden">
                        <img src={testimonial.photo} alt={testimonial.author} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <p className="text-white mb-4 text-[13px] tracking-[3px] leading-[1.4] font-[agrandir wide]">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="text-white">
                      <p className="font-[agrandir wide] text-[20px] font-bold uppercase tracking-[190%]">{testimonial.author}</p>
                      <p className="text-sm">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
