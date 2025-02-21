import { ArrowRight, Star, Pen, Users, Clock, Trophy, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "wouter";

const workshops = [
  {
    title: "Kids Beginner Workshop",
    description: "Introduction to 3D pen art for young creators aged 7-12.",
    details: "Perfect first step into 3D art creation",
    features: [
      "Basic pen control techniques",
      "Simple shape creation",
      "Color mixing basics",
      "Safety guidelines"
    ],
    duration: "2 hours",
    price: "$49",
    icon: Pen,
    gallery: ["/workshops/kids-basic-1.jpg", "/workshops/kids-basic-2.jpg"]
  },
  {
    title: "Creative Characters Workshop",
    description: "Learn to create favorite characters and animals in 3D.",
    details: "For kids who love storytelling through art",
    features: [
      "Character design basics",
      "3D figure creation",
      "Coloring techniques",
      "Story-based projects"
    ],
    duration: "3 hours",
    price: "$69",
    icon: Heart,
    gallery: ["/workshops/kids-characters-1.jpg", "/workshops/kids-characters-2.jpg"]
  },
  {
    title: "Junior Master Class",
    description: "Advanced techniques for young artists ready for complex projects.",
    details: "For experienced young creators",
    features: [
      "Advanced modeling techniques",
      "Multi-color projects",
      "Project planning",
      "Portfolio creation"
    ],
    duration: "4 hours",
    price: "$89",
    icon: Trophy,
    gallery: ["/workshops/kids-master-1.jpg", "/workshops/kids-master-2.jpg"]
  }
]

const stats = [
  { value: "500+", label: "Happy Kids", icon: Heart },
  { value: "50+", label: "Workshops Completed", icon: Trophy },
  { value: "12", label: "Project Types", icon: Pen },
  { value: "100%", label: "Fun Guaranteed", icon: Users }
]

const testimonials = [
  {
    name: "Sarah's Mom",
    content: "My daughter absolutely loved the workshop! She created amazing 3D art pieces.",
    rating: 5,
    avatar: "/testimonials/parent-1.jpg"
  },
  {
    name: "Tom's Dad",
    content: "The instructors were patient and helpful. Tom can't wait for the next class!",
    rating: 5,
    avatar: "/testimonials/parent-2.jpg"
  },
  {
    name: "Lisa's Mom",
    content: "A perfect blend of learning and fun. Lisa learned so much in just one session.",
    rating: 5,
    avatar: "/testimonials/parent-3.jpg"
  }
]

export default function KidsWorkshopsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">
              3D Pen Workshops for Kids
            </h1>
            <p className="text-xl text-white/60 mb-8">
              Unleash your child's creativity with our fun and educational 3D pen workshops
              designed specifically for young artists.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                <Link href="/booking">Start Your Journey</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#00FF00] text-[#00FF00]">
                <Link href="#workshops">View Workshops</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workshop Listings */}
      <section id="workshops" className="py-20">
        <div className="container mx-auto px-4 lg:px-20">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-32 last:mb-0"
            >
              <div className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-16 h-16 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                    <workshop.icon className="w-8 h-8 text-[#00FF00]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{workshop.title}</h3>
                  <p className="text-white/60">{workshop.description}</p>
                  <div className="space-y-4">
                    <p className="text-white font-medium">{workshop.details}</p>
                    <ul className="space-y-2">
                      {workshop.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-white/60">
                          <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-4">
                      <p className="text-white/60">Duration: {workshop.duration}</p>
                      <p className="text-white/60">Price: {workshop.price}</p>
                    </div>
                    <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                      <Link href="/booking">Book Now</Link>
                    </Button>
                  </div>
                </div>
                <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                  {workshop.gallery.map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      alt={`Gallery ${i + 1}`}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4 lg:px-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Workshop Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="aspect-video bg-black/50 rounded-lg overflow-hidden"
              >
                <img
                  src={`/gallery/kids-${i}.jpg`}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-black/50 border-[#00FF00]/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                    <stat.icon className="w-6 h-6 text-[#00FF00]" />
                  </div>
                  <CardTitle className="text-4xl font-bold text-white">{stat.value}</CardTitle>
                  <CardDescription className="text-white/60">{stat.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">What Parents Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-black/50 border-[#00FF00]/20">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <CardTitle className="text-white">{testimonial.name}</CardTitle>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating ? "text-[#00FF00]" : "text-white/20"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-white/60">
                    {testimonial.content}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Creating?</h2>
            <p className="text-xl text-white/60 mb-8">
              Join our workshops and watch your child's creativity soar with 3D pen art.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                <Link href="/booking">Book Your Workshop</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#00FF00] text-[#00FF00]">
                <Link href="#workshops">Browse Workshops</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}