import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BrainCircuit,
  Rocket,
  Shapes,
  Settings,
  Check,
  ArrowUpRight,
  Microscope,
  LineChart,
  Wrench,
  Search,
  Workflow,
  Zap,
  Target,
  FileSearch,
  Building,
  Laptop,
  BadgeCheck,
  Settings2,
  FileCode,
  GraduationCap,
  Video,
  Users,
  Clock,
  MessageSquare,
  Calendar,
  Printer,
  Lightbulb,
  Timer,
  Code,
  Cpu,
  Database,
  Image,
  Blocks,
  HeartHandshake
} from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useCountUp } from "@/hooks/use-count-up";

const benefits = [
  {
    icon: Timer,
    title: "Quick Response",
    description: "Get expert consultation within 24 hours"
  },
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    description: "Tailored solutions for your specific needs"
  }
];

const approachSteps = [
  {
    icon: Search,
    title: "Discovery & Assessment",
    description: "In-depth analysis of your current processes, challenges, and objectives",
    features: [
      "Process audit",
      "Requirements gathering",
      "Technology assessment",
      "Cost analysis"
    ]
  },
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Developing a customized implementation roadmap",
    features: [
      "ROI projections",
      "Resource planning",
      "Timeline development",
      "Risk assessment"
    ]
  },
  {
    icon: Zap,
    title: "Implementation",
    description: "Hands-on execution of the planned strategy",
    features: [
      "Setup assistance",
      "System integration",
      "Team training",
      "Quality control"
    ]
  },
  {
    icon: FileSearch,
    title: "Testing & Validation",
    description: "Rigorous testing of implemented solutions",
    features: [
      "Performance testing",
      "Quality assurance",
      "Process validation",
      "Compliance check"
    ]
  },
  {
    icon: Workflow,
    title: "Optimization",
    description: "Fine-tuning processes for maximum efficiency",
    features: [
      "Performance analysis",
      "Workflow refinement",
      "Cost optimization",
      "Process automation"
    ]
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description: "Continuous assistance and improvement",
    features: [
      "Technical support",
      "Regular reviews",
      "Update guidance",
      "Performance monitoring"
    ]
  }
];

const coreServices = [
  {
    icon: Settings2,
    title: "Technology & Material Selection",
    description: "Expert guidance on choosing the right 3D printing technology and materials",
    features: [
      "Printer technology assessment",
      "Material property analysis",
      "Cost-benefit evaluation",
      "Performance optimization"
    ]
  },
  {
    icon: Wrench,
    title: "Design & CAD Optimization",
    description: "Professional design review and optimization for 3D printing",
    features: [
      "Design for manufacturability",
      "Topology optimization",
      "File preparation",
      "Quality assurance"
    ]
  },
  {
    icon: Laptop,
    title: "Workflow Integration",
    description: "Seamless integration of 3D printing into your existing processes",
    features: [
      "Process automation",
      "Quality control systems",
      "Team training",
      "Documentation"
    ]
  }
];

export default function ConsultPage() {
  const count = useCountUp({ end: 500, duration: 2 });

  return (
    <div className="min-h-screen bg-black pt-24">
      <section className="py-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00FF00]/10 rounded-full filter blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00FF00]/10 rounded-full filter blur-[128px]" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                    Expert 3D Printing <br />
                    <span className="text-[#00FF00]">Consultation</span>
                  </h1>
                  <p className="text-lg text-white/60 mb-8 max-w-xl">
                    Transform your manufacturing processes with PhD-level expertise. 
                    Our consultants help you leverage 3D printing technology for 
                    rapid prototyping, cost reduction, and innovation.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg" className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                      <a href="#contact">Schedule Consultation</a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00]/10">
                      <a href="#services">View Services</a>
                    </Button>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex-1 relative"
              >
                <div className="aspect-square relative rounded-lg overflow-hidden border border-[#00FF00]/20 bg-black/50 p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FF00]/10 to-transparent" />
                  <div className="relative h-full flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                      {[Printer, LineChart, Settings2, Microscope].map((Icon, index) => (
                        <div
                          key={index}
                          className="aspect-square bg-black/40 rounded-lg p-6 flex items-center justify-center border border-[#00FF00]/20"
                        >
                          <Icon className="w-12 h-12 text-[#00FF00]" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-black/50 border-[#00FF00]/20">
                  <CardContent className="p-6">
                    <benefit.icon className="w-12 h-12 text-[#00FF00] mb-4" />
                    <h3 className="text-white text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-white/60">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Quick Stats Section */}
      <section className="py-16 bg-black/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="text-4xl font-bold text-[#00FF00] mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  >
                    {stat.value}{stat.suffix}
                  </motion.span>
                </motion.div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Problems Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Common Challenges We Solve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/50 p-6 rounded-lg border border-[#00FF00]/20"
              >
                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-[#00FF00]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
                <p className="text-white/60">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/50 p-6 rounded-lg border border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors"
              >
                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                  <story.icon className="w-6 h-6 text-[#00FF00]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{story.title}</h3>
                <p className="text-white/60">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Consultancy Approach */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Consultancy Approach</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A systematic and comprehensive approach to transform your 3D printing operations
              from concept to execution
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approachSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/50 p-8 rounded-lg border border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-all hover:bg-black/60"
              >
                <div className="w-14 h-14 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-[#00FF00]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/60 mb-6">{step.description}</p>
                <ul className="space-y-2">
                  {step.features.map((feature, i) => (
                    <li key={i} className="text-white/60 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/50 p-6 rounded-lg border border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors"
              >
                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#00FF00]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/60 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-white/60 flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#00FF00]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section id="services" className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Consultation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                      <type.icon className="w-6 h-6 text-[#00FF00]" />
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{type.title}</CardTitle>
                    <CardDescription className="text-white/60">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, i) => (
                        <li key={i} className="text-white/60 flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Modes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Consultation Options</h2>
          <p className="text-white/60 text-center mb-12">First consultation is free - Let's discuss your project needs!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {consultationModes.map((mode, index) => (
              <motion.div
                key={mode.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4">
                      <mode.icon className="w-6 h-6 text-[#00FF00]" />
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{mode.title}</CardTitle>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#00FF00]" />
                        <span className="text-white/60">{mode.duration}</span>
                      </div>
                      <div className="text-[#00FF00] font-bold">{mode.price}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {mode.features.map((feature, i) => (
                        <li key={i} className="text-white/60 flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="booking" className="py-20 bg-black/40">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-white/60 mb-8">
              Book your consultation session now and take the first step towards bringing your 3D printing
              projects to life with expert guidance.
            </p>
            <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
              <Link href="/booking">Schedule Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const consultationTypes = [
  {
    icon: Printer,
    title: "3D Printing Consultation",
    description: "Expert guidance on material selection and printing optimization",
    features: [
      "Material selection advice",
      "Print optimization strategies",
      "Cost estimation",
      "Production timeline planning"
    ]
  },
  {
    icon: FileCode,
    title: "Design Consultation",
    description: "Professional input on your 3D designs and models",
    features: [
      "Design review and feedback",
      "Optimization suggestions",
      "File preparation guidance",
      "Technical recommendations"
    ]
  },
  {
    icon: GraduationCap,
    title: "Workshop Planning",
    description: "Customized workshop and training program planning",
    features: [
      "Curriculum development",
      "Skill level assessment",
      "Equipment recommendations",
      "Learning path planning"
    ]
  }
];

const consultationModes = [
  {
    icon: Video,
    title: "Virtual Consultation",
    duration: "30-60 minutes",
    price: "$250",
    features: [
      "Flexible scheduling worldwide",
      "Interactive screen sharing sessions",
      "Recorded sessions for future reference",
      "Comprehensive follow-up documentation"
    ]
  },
  {
    icon: Users,
    title: "In-Person Consultation",
    duration: "60-120 minutes",
    price: "$500",
    features: [
      "Hands-on demonstrations and training",
      "Physical material testing and selection",
      "On-site equipment assessment",
      "Immediate problem-solving solutions"
    ]
  }
];

const stats = [
  { value: 500, label: "Projects Completed", suffix: "+" },
  { value: 98, label: "Success Rate", suffix: "%" },
  { value: 50, label: "Industry Partners", suffix: "+" },
  { value: 15, label: "Years Experience", suffix: "+" }
];

const problems = [
  {
    icon: FileSearch,
    title: "Material Selection",
    description: "Difficulty choosing the right materials for specific applications and requirements."
  },
  {
    icon: Building,
    title: "Scale-up Challenges",
    description: "Issues transitioning from prototyping to production-scale 3D printing."
  },
  {
    icon: Settings2,
    title: "Quality Control",
    description: "Maintaining consistent quality and meeting industry standards."
  },
  {
    icon: Timer,
    title: "Production Time",
    description: "Optimizing print times while maintaining quality in high-volume production."
  },
  {
    icon: Code,
    title: "G-code Optimization",
    description: "Fine-tuning printer instructions for better performance and quality."
  },
  {
    icon: Cpu,
    title: "Machine Compatibility",
    description: "Ensuring compatibility between different printers and materials."
  },
  {
    icon: Database,
    title: "Cost Management",
    description: "Balancing material costs with quality requirements for profitability."
  },
  {
    icon: Blocks,
    title: "Design Optimization",
    description: "Optimizing designs for successful 3D printing and minimal support structures."
  },
  {
    icon: Image,
    title: "Surface Finish",
    description: "Achieving desired surface quality while maintaining structural integrity."
  }
];

const successStories = [
  {
    icon: Rocket,
    title: "VinFast Manufacturing",
    description: "Optimized rapid prototyping for Vietnam's leading EV manufacturer, reducing development time by 60% and supporting their electric vehicle initiatives."
  },
  {
    icon: BrainCircuit,
    title: "Razer Singapore",
    description: "Implemented rapid prototyping solutions for gaming peripherals, accelerating product development cycles by 40% and reducing iteration costs."
  },
  {
    icon: Shapes,
    title: "Surbana Jurong",
    description: "Enhanced architectural visualization capabilities, leading to successful implementation of smart city projects across Southeast Asia."
  },
  {
    icon: Settings,
    title: "Petronas Malaysia",
    description: "Developed custom 3D printing solutions for oil & gas components, resulting in 45% cost reduction in specialized parts manufacturing."
  },
  {
    icon: LineChart,
    title: "Bangkok Dusit Medical",
    description: "Revolutionized medical device prototyping, enabling custom surgical planning models that improved patient outcomes by 35%."
  },
  {
    icon: Building,
    title: "SM Prime Holdings",
    description: "Supported Philippines' largest property developer with architectural prototyping, reducing design iteration time by 50%."
  }
];