import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Printer, Code2, GraduationCap, Pen } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated diagonal light streaks */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,0,0.1)_50%,transparent_75%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_25%,rgba(0,255,0,0.05)_50%,transparent_75%)] animate-pulse delay-75"></div>
        <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_25%,rgba(0,255,0,0.03)_50%,transparent_75%)] animate-pulse delay-150"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="flex flex-col items-center justify-center min-h-[70vh]">
            <div className="text-[2.5rem] md:text-[3.5rem] font-heading font-black tracking-tight text-white mb-4">
              <span className="block leading-none">PRINTING YOUR</span>
              <span className="block leading-none">IDEAS TO</span>
            </div>
            <span className="block text-[8rem] md:text-[12rem] lg:text-[16rem] font-heading font-black leading-none tracking-tighter bg-gradient-to-r from-[#00FF00] via-[#00FF00] to-[#00FF00]/50 text-transparent bg-clip-text">
              LIFE
            </span>
          </h1>

          {/* Neon Table with 3D Printing Showcase */}
          <div className="relative mt-[-100px] mb-16">
            <div className="absolute inset-0 bg-[#00FF00] blur-[100px] opacity-20 h-[200px]"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="w-full max-w-4xl mx-auto h-[200px] rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <img 
                  src="/Ethereal-Homepage.png" 
                  alt="3D Printing Showcase" 
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    console.error('Hero image failed to load:', e);
                    const target = e.target as HTMLImageElement;
                    target.style.border = '2px solid red';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="relative mt-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-[#00FF00]/10 p-4 rounded-lg transition-all group-hover:bg-[#00FF00]/20">
                    <div className="w-full aspect-square bg-black/50 rounded-lg mb-2 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <p className="text-xs text-white/80 uppercase tracking-[0.2em] text-center font-medium">
                      {feature.title.split('\n').map((line, i) => (
                        <span key={i} className="block">{line}</span>
                      ))}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "3D PRINTING\nALL MATERIALS",
    icon: <Printer className="w-16 h-16 text-[#00FF00]" />
  },
  {
    title: "AUTOCAD\nMODELING",
    icon: <Code2 className="w-16 h-16 text-[#00FF00]" />
  },
  {
    title: "PHD LEVEL\nEXPERTISE",
    icon: <GraduationCap className="w-16 h-16 text-[#00FF00]" />
  },
  {
    title: "3D PEN\nART WORKSHOP",
    icon: <Pen className="w-16 h-16 text-[#00FF00]" />
  }
];