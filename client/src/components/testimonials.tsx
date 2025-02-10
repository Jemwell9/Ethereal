import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = {
  services: [
    {
      text: "Our company needed a large-scale model for a client pitch, and Ethereal delivered beyond our expectations. The quality and attention to detail helped us win the contract!",
      author: "Teo K. T.",
      role: "Urban Planner (ID)"
    },
    {
      text: "Ethereal played a crucial role in helping our R&D team prototype a new product. Their 3D printing expertise saved us time and significantly improved our design process.",
      author: "Melissa L.",
      role: "Product Development Manager"
    },
    {
      text: "We partnered with Ethereal for a public infrastructure project, and their attention to detail and ability to deliver on time was exceptional. They are a valuable asset for any government initiative.",
      author: "Shaun A.",
      role: "Marketing Lead"
    }
  ],
  workshops: [
    {
      text: "Ethereal's expertise in 3D printing has been a game-changer for our STEM program. The students were thrilled to see their designs come to life with such precision and quality.",
      author: "Samantha C.",
      role: "STEM Coordinator"
    },
    {
      text: "We engaged Ethereal for a team-building 3D Pen Workshop, and it exceeded all expectations. The session was engaging, fun, and perfectly aligned with our corporate creativity goals.",
      author: "Keith T.",
      role: "HR Director"
    },
    {
      text: "The 3D Pen Workshop hosted by Ethereal was a hit with our students and teachers alike. It was an innovative way to inspire creativity and hands-on learning in the classroom.",
      author: "Nicole L.",
      role: "Vice Head of Arts"
    }
  ]
};

export default function Testimonials() {
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
          <h2 className="text-4xl font-bold mb-4 text-white">What Our Customers Say</h2>
        </motion.div>

        {/* 3D Printing Services Reviews */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#00FF00]" fill="#00FF00" />
              ))}
            </div>
            <span className="text-white ml-2">(4.8/5 Average Rating)</span>
          </div>
          <h3 className="text-center text-white text-xl mb-8">3D Printing and Consultation Services</h3>
          
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
                    <p className="text-white/80 mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                    <div className="text-[#00FF00]">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Workshop Reviews */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#00FF00]" fill="#00FF00" />
              ))}
            </div>
            <span className="text-white ml-2">(4.9/5 Average Rating)</span>
          </div>
          <h3 className="text-center text-white text-xl mb-8">3D Pen Art Workshops (Kids to Adults)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                    <p className="text-white/80 mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                    <div className="text-[#00FF00]">
                      <p className="font-semibold">{testimonial.author}</p>
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
