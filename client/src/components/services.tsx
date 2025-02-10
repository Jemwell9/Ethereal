import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Printer, Laptop, Wrench, Users } from "lucide-react";

const services = [
  {
    title: "3D Printing",
    description: "High-quality 3D printing services using the latest technology",
    icon: Printer,
    image: "https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e"
  },
  {
    title: "Design Services",
    description: "Professional CAD modeling and design optimization",
    icon: Laptop,
    image: "https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab"
  },
  {
    title: "Prototyping",
    description: "Rapid prototyping and iterative development",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9"
  },
  {
    title: "Workshops",
    description: "Learn 3D printing from industry experts",
    icon: Users,
    image: "https://images.unsplash.com/photo-1734477127040-c5845f5af500"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            We offer a comprehensive range of 3D printing services to meet your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}