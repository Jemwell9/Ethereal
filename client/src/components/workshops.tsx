import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

const workshops = [
  {
    title: "Beginner's Workshop",
    description: "Learn the basics of 3D printing",
    duration: "4 hours",
    price: "$199",
    image: "https://images.unsplash.com/photo-1734477127040-c5845f5af500"
  },
  {
    title: "Advanced Techniques",
    description: "Master advanced 3D printing techniques",
    duration: "8 hours",
    price: "$399",
    image: "https://images.unsplash.com/photo-1561990975-6cfff5661206"
  }
];

export default function Workshops() {
  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Workshops</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Join our expert-led workshops and master the art of 3D printing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{workshop.title}</CardTitle>
                  <CardDescription>{workshop.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-foreground/60">Duration</p>
                      <p className="font-medium">{workshop.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-foreground/60">Price</p>
                      <p className="font-medium">{workshop.price}</p>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/booking">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
