import { motion } from "framer-motion";
import { Link } from "wouter";
import { Portfolio } from "@/components/portfolio";
import Blog from "@/components/blog";
import {
  GraduationCap,
  Award,
  Target,
  Heart,
  History,
  Lightbulb,
  Users,
  Trophy,
  Rocket,
  Timer,
  Microscope,
  Code,
  Cpu,
  Database,
  Blocks,
  Image,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";


export default function About() {
  return (
    <div className="min-h-screen bg-black/95">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="aspect-video bg-black/50 border border-[#00FF00]/20 rounded-lg overflow-hidden flex items-center justify-center mb-12">
            <Image className="w-32 h-32 text-[#00FF00]/40" />
          </div>
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
            <p className="text-lg text-gray-400 mb-8">
              We're a team of passionate innovators, combining PhD-level expertise
              with cutting-edge technology to transform ideas into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Blog Section */}
      <Blog />
    </div>
  );
}