import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import QuoteCalculator from "@/components/quote-calculator";
import {
  Printer,
  Settings2,
  Zap,
  Target,
  ArrowRight,
  Gauge,
  Factory,
  Microscope,
  PackageCheck,
  Search,
  Cog,
  Wrench,
  Clock,
  ShieldCheck,
  Cpu,
  Package,
  Truck,
  CheckCircle,
  AlertCircle
} from "lucide-react";

// Order status type and sample data
type OrderStatus = "pending" | "processing" | "printing" | "quality_check" | "completed" | "shipped";

interface Order {
  id: string;
  customerName: string;
  status: OrderStatus;
  createdAt: string;
  estimatedDelivery: string;
  description: string;
  material: string;
  quantity: number;
}

const sampleOrders: Order[] = [
  {
    id: "ORD-001",
    customerName: "John Smith",
    status: "printing",
    createdAt: "2025-02-14",
    estimatedDelivery: "2025-02-18",
    description: "Custom Phone Case Design",
    material: "PLA",
    quantity: 2
  },
  {
    id: "ORD-002",
    customerName: "Emma Johnson",
    status: "quality_check",
    createdAt: "2025-02-13",
    estimatedDelivery: "2025-02-17",
    description: "Mechanical Parts Prototype",
    material: "PETG",
    quantity: 5
  },
  {
    id: "ORD-003",
    customerName: "Michael Brown",
    status: "completed",
    createdAt: "2025-02-12",
    estimatedDelivery: "2025-02-16",
    description: "Architectural Model",
    material: "ABS",
    quantity: 1
  }
];

const getStatusColor = (status: OrderStatus) => {
  const colors = {
    pending: "text-yellow-500",
    processing: "text-blue-500",
    printing: "text-[#00FF00]",
    quality_check: "text-purple-500",
    completed: "text-[#00FF00]",
    shipped: "text-blue-500"
  };
  return colors[status];
};

const getStatusIcon = (status: OrderStatus) => {
  const icons = {
    pending: Clock,
    processing: Cog,
    printing: Printer,
    quality_check: Search,
    completed: CheckCircle,
    shipped: Truck
  };
  return icons[status];
};

const PrintingExecutionPage = () => {
  const capabilities = [
    {
      icon: Factory,
      title: "Industrial Scale Production",
      description: "Enterprise-Grade Manufacturing",
      features: [
        "24/7 Production capacity",
        "High volume capabilities",
        "Automated quality control",
        "Real-time monitoring"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "Precision Manufacturing",
      features: [
        "ISO 9001:2015 certified",
        "100% quality inspection",
        "Material certification",
        "Process validation"
      ]
    },
    {
      icon: Clock,
      title: "Rapid Turnaround",
      description: "Fast & Reliable Service",
      features: [
        "Same-day quotes",
        "Express production",
        "Flexible scheduling",
        "On-time delivery"
      ]
    }
  ];

  const technologies = [
    {
      icon: Printer,
      title: "Industrial FDM",
      description: "Large Format Production",
      specs: [
        "Build volume: 1000x1000x1000mm",
        "Layer height: 0.05-0.5mm",
        "Multi-material capability",
        "High-temp materials (400°C)"
      ]
    },
    {
      icon: Cpu,
      title: "Professional SLA/MSLA",
      description: "High-Detail Production",
      specs: [
        "25 micron resolution",
        "Engineering resins",
        "Biocompatible materials",
        "Optical-grade finish"
      ]
    },
    {
      icon: Gauge,
      title: "Production Systems",
      description: "Mass Manufacturing",
      specs: [
        "Automated post-processing",
        "Quality monitoring",
        "Material tracking",
        "Process optimization"
      ]
    }
  ];

  const workflow = [
    {
      icon: Search,
      title: "Initial Assessment",
      duration: "Day 1",
      steps: [
        "Design review",
        "Material selection",
        "Process planning",
        "Quality requirements"
      ]
    },
    {
      icon: Cog,
      title: "Pre-Production",
      duration: "Day 1-2",
      steps: [
        "Machine calibration",
        "Material preparation",
        "Test prints",
        "Parameter optimization"
      ]
    },
    {
      icon: Factory,
      title: "Production Phase",
      duration: "Based on volume",
      steps: [
        "Continuous monitoring",
        "Quality checkpoints",
        "Process documentation",
        "Real-time updates"
      ]
    },
    {
      icon: PackageCheck,
      title: "Quality Control",
      duration: "Final Day",
      steps: [
        "Dimensional analysis",
        "Visual inspection",
        "Functional testing",
        "Documentation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">
              INDUSTRIAL 3D PRINTING
            </h1>
            <p className="text-lg text-white/60 mb-12">
              Experience enterprise-grade additive manufacturing with our state-of-the-art
              facility. We combine cutting-edge technology with rigorous quality control
              to deliver exceptional results for every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-[#00FF00]/20 h-full">
                  <CardContent className="pt-6">
                    <item.icon className="w-12 h-12 text-[#00FF00] mb-4" />
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-white/60 mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.features.map((feature, i) => (
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

      {/* Technologies */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Technology</h2>
            <p className="text-white/60">
              Advanced manufacturing systems for professional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-[#00FF00]/20 h-full">
                  <CardContent className="pt-6">
                    <tech.icon className="w-12 h-12 text-[#00FF00] mb-4" />
                    <h3 className="text-xl font-bold text-white mb-4">{tech.title}</h3>
                    <p className="text-white/60 mb-4">{tech.description}</p>
                    <ul className="space-y-2">
                      {tech.specs.map((spec, i) => (
                        <li key={i} className="text-white/60 flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                          {spec}
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

      {/* Workflow */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Production Workflow</h2>
            <p className="text-white/60">
              Systematic approach for consistent quality
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {workflow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8 relative"
              >
                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-[#00FF00]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-[#00FF00] text-sm mb-4">{step.duration}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {step.steps.map((item, i) => (
                      <li key={i} className="text-white/60 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#00FF00]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < workflow.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-px bg-[#00FF00]/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Calculator */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Get Started</h2>
            <p className="text-white/60">
              Calculate an instant quote for your project
            </p>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <QuoteCalculator />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Manufacturing?
            </h2>
            <p className="text-white/60 mb-8">
              Contact us to discuss your project requirements
            </p>
            <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
              <Link href="/contact">Get Started</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Order Management Section */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Order Management</h2>
            <p className="text-white/60">
              Track and manage your 3D printing orders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleOrders.map((order, index) => {
              const StatusIcon = getStatusIcon(order.status);
              return (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black/50 border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-colors">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center">
                          <Package className="w-6 h-6 text-[#00FF00]" />
                        </div>
                        <div className={`flex items-center gap-2 ${getStatusColor(order.status)}`}>
                          <StatusIcon className="w-4 h-4" />
                          <span className="text-sm font-medium capitalize">
                            {order.status.replace('_', ' ')}
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-white text-xl mb-2">{order.description}</CardTitle>
                      <div className="space-y-2 text-sm text-white/60">
                        <p><span className="font-medium">Order ID:</span> {order.id}</p>
                        <p><span className="font-medium">Customer:</span> {order.customerName}</p>
                        <p><span className="font-medium">Material:</span> {order.material}</p>
                        <p><span className="font-medium">Quantity:</span> {order.quantity}</p>
                        <p><span className="font-medium">Created:</span> {order.createdAt}</p>
                        <p><span className="font-medium">Est. Delivery:</span> {order.estimatedDelivery}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          className="flex-1 border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00] hover:text-black"
                        >
                          Track Order
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00] hover:text-black"
                        >
                          Update Status
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
              <Link href="/orders">View All Orders</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrintingExecutionPage;