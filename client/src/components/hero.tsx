import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated diagonal light streaks */}
      <div className="absolute inset-0">
        {/* Multiple diagonal streaks with different angles and opacities */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,0,0.1)_50%,transparent_75%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_25%,rgba(0,255,0,0.05)_50%,transparent_75%)] animate-pulse delay-75"></div>
        <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_25%,rgba(0,255,0,0.03)_50%,transparent_75%)] animate-pulse delay-150"></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-7xl font-bold mb-6 tracking-tighter">
            <span className="block text-white mb-2">PRINTING YOUR</span>
            <span className="block text-white">IDEAS TO</span>
            <span className="text-[#00FF00] bg-gradient-to-r from-[#00FF00] to-transparent bg-clip-text text-transparent">LIFE</span>
          </h1>
        </motion.div>

        {/* 3D Model Showcase */}
        <div className="relative mt-24">
          <div className="max-w-5xl mx-auto">
            {/* Interactive 3D Model Display */}
            <div className="grid grid-cols-4 gap-8 items-end">
              {/* 3D Printer Section */}
              <div className="relative group">
                <div className="bg-[#00FF00]/10 p-4 rounded-lg transition-all group-hover:bg-[#00FF00]/20">
                  <div className="w-full aspect-square bg-black/50 rounded-lg mb-2 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-[#00FF00] rounded-lg"></div>
                  </div>
                  <p className="text-xs text-white/80 uppercase tracking-wider text-center">
                    3D PRINTING<br />ALL MATERIALS
                  </p>
                </div>
              </div>

              {/* AutoCAD Section */}
              <div className="relative group">
                <div className="bg-[#00FF00]/10 p-4 rounded-lg transition-all group-hover:bg-[#00FF00]/20">
                  <div className="w-full aspect-square bg-black/50 rounded-lg mb-2 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-[#00FF00] rounded-lg"></div>
                  </div>
                  <p className="text-xs text-white/80 uppercase tracking-wider text-center">
                    AUTOCAD<br />MODELING
                  </p>
                </div>
              </div>

              {/* PHD Expertise Section */}
              <div className="relative group">
                <div className="bg-[#00FF00]/10 p-4 rounded-lg transition-all group-hover:bg-[#00FF00]/20">
                  <div className="w-full aspect-square bg-black/50 rounded-lg mb-2 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-[#00FF00] rounded-lg"></div>
                  </div>
                  <p className="text-xs text-white/80 uppercase tracking-wider text-center">
                    PHD LEVEL<br />EXPERTISE
                  </p>
                </div>
              </div>

              {/* Workshop Section */}
              <div className="relative group">
                <div className="bg-[#00FF00]/10 p-4 rounded-lg transition-all group-hover:bg-[#00FF00]/20">
                  <div className="w-full aspect-square bg-black/50 rounded-lg mb-2 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-[#00FF00] rounded-lg"></div>
                  </div>
                  <p className="text-xs text-white/80 uppercase tracking-wider text-center">
                    3D PEN<br />ART WORKSHOP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}