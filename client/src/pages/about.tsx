import { motion } from "framer-motion";
import { 
  GraduationCap, Award, Target, Heart, History, 
  Lightbulb, Users, Trophy, Rocket, Timer,
  Microscope, Code, Cpu, Database, Blocks
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started in Singapore with a vision to revolutionize 3D printing accessibility in Southeast Asia"
  },
  {
    year: "2021 Q2",
    title: "First Innovation Center",
    description: "Opened our first innovation center in Bukit Merah, introducing cutting-edge FDM printing services"
  },
  {
    year: "2021 Q4",
    title: "Educational Partnership",
    description: "Launched partnerships with local schools to promote STEM education through 3D printing"
  },
  {
    year: "2022 Q1",
    title: "Expansion Phase",
    description: "Introduced advanced SLA and SLS printing technologies, expanding our material capabilities"
  },
  {
    year: "2022 Q3",
    title: "Research Collaboration",
    description: "Started collaboration with NTU's Advanced Materials Research Center"
  },
  {
    year: "2022 Q4",
    title: "Innovation Hub Launch",
    description: "Established our state-of-the-art research facility in Singapore Science Park"
  },
  {
    year: "2023 Q2",
    title: "Regional Recognition",
    description: "Received Singapore's Technology Innovation Award for sustainable manufacturing"
  },
  {
    year: "2023 Q4",
    title: "Global Partnerships",
    description: "Formed strategic partnerships with leading industrial manufacturers in Asia"
  },
  {
    year: "2024 Q1",
    title: "Sustainability Initiative",
    description: "Launched our eco-friendly materials program and green manufacturing processes"
  },
  {
    year: "2024 Q4",
    title: "Market Leadership",
    description: "Became Singapore's leading provider of advanced 3D printing solutions"
  }
];

const technologies = [
  {
    icon: Cpu,
    title: "Advanced Printers",
    description: "State-of-the-art FDM, SLA, and SLS printers for various applications"
  },
  {
    icon: Database,
    title: "Material Science",
    description: "Extensive research in composite materials and new printing mediums"
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Proprietary slicing and optimization algorithms"
  },
  {
    icon: Blocks,
    title: "Rapid Prototyping",
    description: "Advanced rapid prototyping and iteration capabilities"
  }
];

const team = [
  {
    name: "Dr. Chen Wei Ming",
    role: "Chief Technology Officer",
    expertise: "Ph.D. in Materials Science, NUS",
    description: "Leading our research initiatives in advanced materials and sustainable manufacturing"
  },
  {
    name: "Dr. Lee Mei Ling",
    role: "Head of Innovation",
    expertise: "Ph.D. in Mechanical Engineering, NTU",
    description: "Pioneering new printing methodologies and industrial applications"
  },
  {
    name: "Prof. Tan Kah Kee",
    role: "Lead Research Scientist",
    expertise: "Ph.D. in Chemical Engineering",
    description: "Expert in polymer science and material optimization"
  },
  {
    name: "Dr. Wong Siew Mei",
    role: "Director of Operations",
    expertise: "Ph.D. in Industrial Engineering",
    description: "Specializing in manufacturing process optimization"
  },
  {
    name: "Er. Lim Jun Jie",
    role: "Senior Design Engineer",
    expertise: "M.Eng in Aerospace Engineering",
    description: "Expert in CAD/CAM and advanced prototyping"
  },
  {
    name: "Dr. Ng Wei Ling",
    role: "Materials Research Lead",
    expertise: "Ph.D. in Nanotechnology",
    description: "Developing next-generation printing materials"
  }
];

const successStories = [
  {
    title: "Medical Innovation",
    client: "Healthcare Solutions Inc.",
    description: "Created custom medical device prototypes, reducing development time by 60%"
  },
  {
    title: "Aerospace Excellence",
    client: "AeroTech Systems",
    description: "Developed lightweight components for aircraft, passing rigorous testing standards"
  },
  {
    title: "Architectural Vision",
    client: "Urban Designers Co.",
    description: "Produced intricate architectural models for major development projects"
  }
];

const awards = [
  {
    icon: Trophy,
    title: "Innovation Excellence",
    year: "2023",
    description: "National Technology Awards"
  },
  {
    icon: Award,
    title: "Best 3D Printing Service",
    year: "2023",
    description: "Industry Choice Awards"
  },
  {
    icon: GraduationCap,
    title: "Research Recognition",
    year: "2022",
    description: "Materials Science Innovation"
  }
];

const futureVision = [
  {
    icon: Rocket,
    title: "Next-Gen Materials",
    description: "Developing sustainable and high-performance printing materials"
  },
  {
    icon: Microscope,
    title: "Advanced Research",
    description: "Expanding our R&D capabilities in nano-materials"
  },
  {
    icon: Timer,
    title: "Faster Production",
    description: "Implementing AI-driven optimization for faster printing"
  }
];

const values = [
  {
    icon: GraduationCap,
    title: "PhD-Level Expertise",
    description: "Our team combines advanced academic knowledge with practical industry experience to deliver cutting-edge solutions."
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards in 3D printing, using state-of-the-art technology and premium materials."
  },
  {
    icon: Target,
    title: "Innovation Focus",
    description: "Constantly pushing boundaries in 3D printing technology and creative applications."
  },
  {
    icon: Heart,
    title: "Customer-Centric",
    description: "Your vision is our priority. We work closely with you to bring your ideas to life with precision and care."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">
              Pioneering the Future of
              <span className="text-[#00FF00]"> 3D Printing</span>
            </h1>
            <p className="text-lg text-white/60 mb-8">
              We're a team of passionate innovators, combining PhD-level expertise
              with cutting-edge technology to transform ideas into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-white"
          >
            Our Journey
          </motion.h2>
          <div className="max-w-4xl mx-auto relative">
            {/* Continuous Timeline Line */}
            <div className="absolute left-24 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#00FF00]/20 to-transparent" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 mb-12 relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-24 top-2 w-4 h-4 bg-black border-2 border-[#00FF00] rounded-full transform -translate-x-[7px]" />

                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-[#00FF00] font-bold">{milestone.year}</span>
                </div>
                <div className="flex-grow pl-8">
                  <h3 className="text-white font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-white/60">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-white"
          >
            Our Technology
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                      <tech.icon className="w-6 h-6 text-[#00FF00]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {tech.title}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {tech.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with updated grid */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-white"
          >
            Our Expert Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                    <p className="text-[#00FF00] font-medium mb-2">{member.role}</p>
                    <p className="text-white/60 mb-4">{member.expertise}</p>
                    <p className="text-white/60 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-white"
          >
            Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{story.title}</h3>
                    <p className="text-[#00FF00] font-medium mb-4">{story.client}</p>
                    <p className="text-white/60 text-sm">{story.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-white"
          >
            Awards & Recognition
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                      <award.icon className="w-6 h-6 text-[#00FF00]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{award.title}</h3>
                    <p className="text-[#00FF00] mb-2">{award.year}</p>
                    <p className="text-white/60 text-sm">{award.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-white"
          >
            Future Vision
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureVision.map((vision, index) => (
              <motion.div
                key={vision.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                      <vision.icon className="w-6 h-6 text-[#00FF00]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{vision.title}</h3>
                    <p className="text-white/60 text-sm">{vision.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-white"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-[#00FF00]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {value.title}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}