import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import emailjs from 'emailjs-com';  // Import emailjs

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    subject: '',
    message: '',
    preferredContact: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all required fields.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "service_c21icd3",   // Replace with your EmailJS Service ID
        "template_q2694ac",   // Replace with your EmailJS Template ID
        formData,             // The form data to send
        "P-ohrR6_XhH88nUQ8"        // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Message Sent! Thank you for contacting us. We'll get back to you soon.");
          // Optionally reset the form after sending
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            projectType: '',
            budget: '',
            timeline: '',
            subject: '',
            message: '',
            preferredContact: '',
          });
        },
        (error) => {
          console.log("Error:", error.text);
          alert("There was an issue sending your message. Please try again.");
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">Let's Create Something Amazing</h1>
            <p className="text-lg text-white/60 mb-12">
              Ready to bring your ideas to life? We're here to help turn your vision into reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="rounded-full bg-black/50 border-2 border-[#00FF00]/20 p-6">
                  <Mail className="w-12 h-12 text-[#00FF00]" />
                </div>
                <h3 className="text-xl font-bold text-white">Email Us</h3>
                <p className="text-white/60">info@ethereal.sg</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="rounded-full bg-black/50 border-2 border-[#00FF00]/20 p-6">
                  <Phone className="w-12 h-12 text-[#00FF00]" />
                </div>
                <h3 className="text-xl font-bold text-white">Call Us</h3>
                <p className="text-white/60">+65 8806 2446</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="rounded-full bg-black/50 border-2 border-[#00FF00]/20 p-6">
                  <MapPin className="w-12 h-12 text-[#00FF00]" />
                </div>
                <h3 className="text-xl font-bold text-white">Visit Us</h3>
                <p className="text-white/60">165 BUKIT MERAH CENTRAL<br />#05-3667, SINGAPORE 150165<br />UEN No. 202243915R</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="rounded-full bg-black/50 border-2 border-[#00FF00]/20 p-6">
                  <Clock className="w-12 h-12 text-[#00FF00]" />
                </div>
                <h3 className="text-xl font-bold text-white">Business Hours</h3>
                <p className="text-white/60">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: By Appointment<br />Sun: Closed</p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-12 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full"
            >
              <Card className="bg-black/50 border-[#00FF00]/20">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-black/50 border-[#00FF00]/20 text-white"
                        required
                      />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-black/50 border-[#00FF00]/20 text-white"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-black/50 border-[#00FF00]/20 text-white"
                      />
                      <Input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-black/50 border-[#00FF00]/20 text-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Select onValueChange={(value) => handleSelectChange('projectType', value)}>
                        <SelectTrigger className="bg-black/50 border-[#00FF00]/20 text-white">
                          <SelectValue placeholder="Project Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3d-printing">3D Printing</SelectItem>
                          <SelectItem value="3d-modeling">3D Modeling</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                          <SelectItem value="workshop">Workshop</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select onValueChange={(value) => handleSelectChange('budget', value)}>
                        <SelectTrigger className="bg-black/50 border-[#00FF00]/20 text-white">
                          <SelectValue placeholder="Budget Range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="below-1000">Below $1,000</SelectItem>
                          <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                          <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                          <SelectItem value="above-10000">Above $10,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Select onValueChange={(value) => handleSelectChange('timeline', value)}>
                        <SelectTrigger className="bg-black/50 border-[#00FF00]/20 text-white">
                          <SelectValue placeholder="Project Timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">Urgent (Within a week)</SelectItem>
                          <SelectItem value="short">Short (2-4 weeks)</SelectItem>
                          <SelectItem value="medium">Medium (1-3 months)</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select onValueChange={(value) => handleSelectChange('preferredContact', value)}>
                        <SelectTrigger className="bg-black/50 border-[#00FF00]/20 text-white">
                          <SelectValue placeholder="Preferred Contact Method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone</SelectItem>
                          <SelectItem value="whatsapp">WhatsApp</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject *"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-black/50 border-[#00FF00]/20 text-white"
                      required
                    />

                    <Textarea
                      name="message"
                      placeholder="Your Message *"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-black/50 border-[#00FF00]/20 text-white min-h-[150px]"
                      required
                    />

                    <Button type="submit" className="w-full bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                      Send Message <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <div className="mt-12">
              <Accordion type="single" collapsible className="space-y-2">
                {/* 3D Printing Services */}
                <AccordionItem value="item-1" className="bg-black/50 border-[#00FF00]/20">
                  <AccordionTrigger className="text-white px-4">What materials do you offer for 3D printing?</AccordionTrigger>
                  <AccordionContent className="text-white/60 px-4">
                    We work with a wide range of materials including PLA, ABS, PETG, TPU, Nylon, Carbon Fiber composites, and specialty resins. Each material is carefully selected based on your project requirements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-black/50 border-[#00FF00]/20">
                  <AccordionTrigger className="text-white px-4">What is the typical turnaround time for a 3D printing project?</AccordionTrigger>
                  <AccordionContent className="text-white/60 px-4">
                    Turnaround time varies based on project complexity, size, and material. Simple projects can be completed in 1-2 days, while complex projects may take 1-2 weeks. We provide detailed timelines during consultation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-black/50 border-[#00FF00]/20">
                  <AccordionTrigger className="text-white px-4">Do you offer post-processing services?</AccordionTrigger>
                  <AccordionContent className="text-white/60 px-4">
                    Yes, we offer comprehensive post-processing services including sanding, painting, vapor smoothing, and assembly. Each print is carefully finished to meet your specifications.
                  </AccordionContent>
                </AccordionItem>

                {/* Design Services */}
                <AccordionItem value="item-4" className="bg-black/50 border-[#00FF00]/20">
                  <AccordionTrigger className="text-white px-4">Can you help with 3D model design?</AccordionTrigger>
                  <AccordionContent className="text-white/60 px-4">
                    Yes, our team of expert designers can create custom 3D models from scratch or optimize existing designs for 3D printing. We work with various CAD software and ensure printability.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-black/50 border-[#00FF00]/20">
                  <AccordionTrigger className="text-white px-4">What file formats do you accept?</AccordionTrigger>
                  <AccordionContent className="text-white/60 px-4">
                    We accept all common 3D file formats including STL, OBJ, STEP, F3D, and more. If you have a different format, contact us and we'll work to accommodate your needs.
                  </AccordionContent>
                </AccordionItem>

                {/* Workshops */}
                <AccordionItem value="item-6" className="bg-black/50 border-[#00FF00]/20">
                  <AccordionTrigger className="text-white px-4">What workshops do you offer?</AccordionTrigger>
                  <AccordionContent className="text-white/60 px-4">
                    We offer workshops in 3D pen art (for both kids and adults), AutoCAD modeling, and 3D printing mastery. Each workshop is available at beginner, advanced, and master levels.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="bg-black/50 border-[#00FF00]/20">
                  <AccordionTrigger className="text-white px-4">Are the workshops suitable for beginners?</AccordionTrigger>
                  <AccordionContent className="text-white/60 px-4">
                    Yes, our workshops cater to all skill levels. Beginner workshops start with fundamentals, while advanced and master classes build on existing knowledge.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="bg-black/50 border-[#00FF00]/20">
                  <AccordionTrigger className="text-white px-4">What's included in workshop fees?</AccordionTrigger>
                  <AccordionContent className="text-white/60 px-4">
                    Workshop fees include all materials, equipment usage, safety gear, refreshments, and a certificate of completion. Some workshops also include take-home starter kits.
                  </AccordionContent>
                </AccordionItem>

                {/* Consulting Services */}
                <AccordionItem value="item-9" className="bg-black/50 border-[#00FF00]/20">
                  <AccordionTrigger className="text-white px-4">What consulting services do you provide?</AccordionTrigger>
                  <AccordionContent className="text-white/60 px-4">
                    We offer technology assessment, material engineering, design optimization, cost optimization, and quality & compliance consulting services for 3D printing implementations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="bg-black/50 border-[#00FF00]/20">
                  <AccordionTrigger className="text-white px-4">How long does a consultation typically take?</AccordionTrigger>
                  <AccordionContent className="text-white/60 px-4">
                    Initial consultations usually take 1-2 hours. Full project consultations vary based on scope but typically range from a few days to several weeks for complex implementations.
                  </AccordionContent>
                </AccordionItem>

                {/* General Questions */}
                <AccordionItem value="item-11" className="bg-black/50 border-[#00FF00]/20">
                  <AccordionTrigger className="text-white px-4">Do you offer bulk pricing?</AccordionTrigger>
                  <AccordionContent className="text-white/60 px-4">
                    Yes, we offer competitive bulk pricing for large orders and ongoing projects. Contact us for a customized quote based on your requirements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12" className="bg-black/50 border-[#00FF00]/20">
                  <AccordionTrigger className="text-white px-4">What quality control measures do you have in place?</AccordionTrigger>
                  <AccordionContent className="text-white/60 px-4">
                    We implement rigorous quality control at every stage, including material testing, print monitoring, and final inspection. All projects undergo thorough quality checks before delivery.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-13" className="bg-black/50 border-[#00FF00]/20">
                  <AccordionTrigger className="text-white px-4">Do you offer prototyping services?</AccordionTrigger>
                  <AccordionContent className="text-white/60 px-4">
                    Yes, we specialize in rapid prototyping with quick turnaround times. We can help iterate designs and provide functional prototypes for testing and validation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-14" className="bg-black/50 border-[#00FF00]/20">
                  <AccordionTrigger className="text-white px-4">What industries do you serve?</AccordionTrigger>
                  <AccordionContent className="text-white/60 px-4">
                    We serve various industries including automotive, aerospace, medical, education, architecture, and consumer products. Our expertise spans across multiple sectors.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-15" className="bg-black/50 border-[#00FF00]/20">
                  <AccordionTrigger className="text-white px-4">Are your workshops available online?</AccordionTrigger>
                  <AccordionContent className="text-white/60 px-4">
                    While we primarily offer in-person workshops for hands-on experience, we do provide some virtual training sessions and consultations for theoretical aspects.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-16" className="bg-black/50 border-[#00FF00]/20">
                  <AccordionTrigger className="text-white px-4">What support do you offer after service completion?</AccordionTrigger>
                  <AccordionContent className="text-white/60 px-4">
                    We provide ongoing support including technical assistance, maintenance advice, and follow-up consultations. Our team is always available to address any concerns.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-17" className="bg-black/50 border-[#00FF00]/20">
                  <AccordionTrigger className="text-white px-4">Do you offer warranty on printed parts?</AccordionTrigger>
                  <AccordionContent className="text-white/60 px-4">
                    Yes, we offer warranties on our printed parts based on material type and intended use. Specific warranty terms are discussed during project consultation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-18" className="bg-black/50 border-[#00FF00]/20">
                  <AccordionTrigger className="text-white px-4">Can you handle confidential projects?</AccordionTrigger>
                  <AccordionContent className="text-white/60 px-4">
                    Yes, we sign NDAs and have strict confidentiality protocols in place. Your intellectual property and project details are always protected.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-19" className="bg-black/50 border-[#00FF00]/20">
                  <AccordionTrigger className="text-white px-4">What are your payment terms?</AccordionTrigger>
                  <AccordionContent className="text-white/60 px-4">
                    We accept various payment methods including bank transfer and major credit cards. Large projects typically require a deposit, with balance due upon completion.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-20" className="bg-black/50 border-[#00FF00]/20">
                  <AccordionTrigger className="text-white px-4">Do you ship internationally?</AccordionTrigger>
                  <AccordionContent className="text-white/60 px-4">
                    Yes, we offer international shipping for our 3D printed products. Shipping costs and delivery times vary by location and package specifications.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-6">Our Social Media Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {/* Instagram Photos */}
                  <div className="aspect-square bg-black/50 border border-[#00FF00]/20 rounded-lg overflow-hidden">
                    <img src="/workshop-adult-advanced.svg" alt="Instagram post" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </div>
                  <div className="aspect-square bg-black/50 border border-[#00FF00]/20 rounded-lg overflow-hidden">
                    <img src="/workshop-adult-master.svg" alt="Instagram post" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </div>
                  <div className="aspect-square bg-black/50 border border-[#00FF00]/20 rounded-lg overflow-hidden">
                    <img src="/workshop-kids-advanced.svg" alt="Instagram post" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </div>
                  <div className="aspect-square bg-black/50 border border-[#00FF00]/20 rounded-lg overflow-hidden">
                    <img src="/workshop-kids-master.svg" alt="Instagram post" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </div>
                  
                  {/* TikTok Videos */}
                  <div className="aspect-square bg-black/50 border border-[#00FF00]/20 rounded-lg overflow-hidden col-span-2">
                    <video className="w-full h-full object-cover" controls>
                      <source src="/path-to-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="aspect-square bg-black/50 border border-[#00FF00]/20 rounded-lg overflow-hidden col-span-2">
                    <video className="w-full h-full object-cover" controls>
                      <source src="/path-to-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
