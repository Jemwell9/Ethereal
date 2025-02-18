
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, Building2, Globe, Clock, Zap, Trophy, Target } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
    console.log('Form submitted:', formData);
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
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full md:w-1/3"
            >
              <Card className="bg-black/50 border-[#00FF00]/20">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#00FF00]" />
                    <div>
                      <h3 className="text-white font-semibold mb-2">Email Us</h3>
                      <p className="text-white/60">info@ethereal.sg</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#00FF00]" />
                    <div>
                      <h3 className="text-white font-semibold mb-2">Call Us</h3>
                      <p className="text-white/60">+65 8806 2446</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#00FF00]" />
                    <div>
                      <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                      <p className="text-white/60">165 BUKIT MERAH CENTRAL<br />
                        #05-3667, SINGAPORE 150165<br />UEN No. 202243915R</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#00FF00]" />
                    <div>
                      <h3 className="text-white font-semibold mb-2">Business Hours</h3>
                      <p className="text-white/60">Mon - Fri: 9:00 AM - 6:00 PM<br />
                        Sat: By Appointment<br />Sun: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-2/3"
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
          </div>
        </div>
      </section>
    </div>
  );
}
