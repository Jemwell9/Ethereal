import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = {
  services: [
    {
      text: "Our company needed a large-scale model for a client pitch, and Ethereal delivered beyond our expectations. The quality and attention to detail helped us win the contract!",
      author: "Teo K. T.",
      role: "Urban Planner (ID)",
      photo: "/images/teo.jpg"
    },
    {
      text: "Ethereal played a crucial role in helping our R&D team prototype a new product. Their 3D printing expertise saved us time and significantly improved our design process.",
      author: "Melissa L.",
      role: "Product Development Manager",
      photo: "/images/melissa.jpg"
    },
    {
      text: "We partnered with Ethereal for a public infrastructure project, and their attention to detail and ability to deliver on time was exceptional. They are a valuable asset for any government initiative.",
      author: "Shaun A.",
      role: "Marketing Lead",
      photo: "/images/shaun.jpg"
    }
  ],
  workshops: [
    {
      text: "Ethereal's expertise in 3D printing has been a game-changer for our STEM program. The students were thrilled to see their designs come to life with such precision and quality.",
      author: "Samantha C.",
      role: "STEM Coordinator",
      photo: "/images/samantha.jpg"
    },
    {
      text: "We engaged Ethereal for a team-building 3D Pen Workshop, and it exceeded all expectations. The session was engaging, fun, and perfectly aligned with our corporate creativity goals.",
      author: "Keith T.",
      role: "HR Director",
      photo: "/images/keith.jpg"
    },
    {
      text: "The 3D Pen Workshop hosted by Ethereal was a hit with our students and teachers alike. It was an innovative way to inspire creativity and hands-on learning in the classroom.",
      author: "Nicole L.",
      role: "Vice Head of Arts",
      photo: "/images/nicole.jpg"
    }
  ]
};

export default function Testimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-[agrandir wide] text-[32px] font-bold tracking-[190%] leading-[1.4] text-white">
            WHAT OUR CUSTOMERS SAY
          </h2>
        </motion.div>

        {/* Ratings Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="font-[horizon] text-[24px] text-[#00af21] font-bold tracking-[190%] leading-[1.4]">
              RATINGS
            </span>
          </div>
          <div className="text-center mb-8">
            {/* 4.8 Rating */}
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#00FF00]" fill="#00FF00" />
                ))}
              </div>
            </div>
            <span className="text-white ml-2">(4.8/5 Average Rating)</span>
          </div>

          <div className="text-center mb-8">
            <span className="text-[#00af21] text-[24px] font-bold tracking-[190%] leading-[1.4]">
              3D PRINTING AND CONSULTATION SERVICES
            </span>
          </div>

          <p className="text-white text-center mb-8">
            "Rated highly for innovation, quality, and customer support."
          </p>

          {/* 4.9 Rating */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#00FF00]" fill="#00FF00" />
              ))}
            </div>
            <span className="text-white ml-2">(4.9/5 Average Rating)</span>
          </div>

          <div className="text-center mb-8">
            <span className="text-[#00af21] text-[24px] font-bold tracking-[190%] leading-[1.4]">
              3D PEN ART WORKSHOPS (KIDS TO ADULTS)
            </span>
          </div>

          <p className="text-white text-center mb-8">
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
            <h3 className="font-[horizon] text-[24px] font-bold tracking-[190%] leading-[1.4] text-[#00af21]">
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
              >
                <Card className="h-full bg-black/50 border-[#00FF00]/20">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-32 h-32 rounded-full border-4 border-[#00FF00] overflow-hidden">
                        <img src={testimonial.photo} alt={testimonial.author} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <p className="text-white/80 mb-4 text-[13px] tracking-[190%] leading-[1.4] font-[agrandir wide]">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="text-white">
                      <p className="font-[agrandir wide] text-[9px] font-bold uppercase tracking-[190%]">{testimonial.author}</p>
                      <p className="text-sm">{testimonial.role}</p>
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
              >
                <Card className="h-full bg-black/50 border-[#00FF00]/20">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-32 h-32 rounded-full border-4 border-[#00FF00] overflow-hidden">
                        <img src={testimonial.photo} alt={testimonial.author} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <p className="text-white/80 mb-4 text-[13px] tracking-[190%] leading-[1.4] font-[agrandir wide]">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="text-white">
                      <p className="font-[agrandir wide] text-[9px] font-bold uppercase tracking-[190%]">{testimonial.author}</p>
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
