
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const isOpen = () => {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 6 is Saturday
    const hour = now.getHours();
    
    if (day === 0) return false; // Sunday closed
    if (day === 6) return "By Appointment"; // Saturday
    return hour >= 9 && hour < 18; // Mon-Fri 9AM-6PM
  };

  const currentStatus = isOpen();

  const faqs = [
    {
      question: "What types of 3D printing services do you offer?",
      answer: "We offer a comprehensive range of services including prototyping, production printing, design consultation, and material selection guidance."
    },
    {
      question: "How long does a typical 3D printing project take?",
      answer: "Project timelines vary based on complexity, size, and material. Simple projects can be completed in 1-3 days, while complex projects may take 1-2 weeks."
    },
    {
      question: "Do you offer rush services?",
      answer: "Yes, we offer rush services for urgent projects. Please contact us directly to discuss your timeline requirements."
    }
  ];

  const testimonials = [
    {
      name: "Sarah L.",
      role: "Product Designer",
      text: "Excellent service and professional guidance throughout the entire project."
    },
    {
      name: "Michael C.",
      role: "Engineering Manager",
      text: "Their expertise in material selection saved us time and resources."
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00FF00]" />
                <div>
                  <h3 className="text-white font-semibold">Email Us</h3>
                  <p className="text-white/60">info@ethereal.sg</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00FF00]" />
                <div>
                  <h3 className="text-white font-semibold">Call Us</h3>
                  <p className="text-white/60">+65 8806 2446</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#00FF00]" />
                <div>
                  <h3 className="text-white font-semibold">Visit Us</h3>
                  <p className="text-white/60">
                    165 BUKIT MERAH CENTRAL<br />
                    #05-3667, SINGAPORE 150165<br />
                    UEN No. 202243915R
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#00FF00]" />
                <div>
                  <h3 className="text-white font-semibold">Business Hours</h3>
                  <p className="text-white/60">
                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                    Sat: By Appointment<br />
                    Sun: Closed
                  </p>
                  <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${
                    currentStatus === true ? 'bg-green-500/20 text-green-500' :
                    currentStatus === "By Appointment" ? 'bg-yellow-500/20 text-yellow-500' :
                    'bg-red-500/20 text-red-500'
                  }`}>
                    {currentStatus === true ? 'Open Now' :
                     currentStatus === "By Appointment" ? 'By Appointment' :
                     'Closed'}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-white/5 border-white/10 text-white"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-white/5 border-white/10 text-white"
              />
              <Textarea
                placeholder="Your Message"
                className="bg-white/5 border-white/10 text-white"
                rows={4}
              />
              <Button className="w-full bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                Send Message
              </Button>
            </form>

            {/* Map */}
            <div className="mt-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7978471827546!2d103.81661!3d1.2853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1bd0af54a8c9%3A0x7c02185e72fa8c03!2s165%20Bukit%20Merah%20Central%2C%20Singapore%20150165!5e0!3m2!1sen!2ssg!4v1708786234567!5m2!1sen!2ssg"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                    <p className="text-white/60">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">Connect With Us</h2>
              <div className="flex gap-4">
                <Link href="https://facebook.com" className="text-white/60 hover:text-[#00FF00]">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="https://instagram.com" className="text-white/60 hover:text-[#00FF00]">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="https://linkedin.com" className="text-white/60 hover:text-[#00FF00]">
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">What Our Clients Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/5 p-6 rounded-lg">
                    <p className="text-white/60 mb-4">"{testimonial.text}"</p>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-white/60 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
