import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Diagonal light streaks */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,0,0.1)_50%,transparent_75%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_25%,rgba(0,255,0,0.05)_50%,transparent_75%)] animate-pulse delay-75"></div>
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

        {/* Product showcase */}
        <div className="relative mt-24">
          <img 
            src="/hero-graphics.png" 
            alt="3D Printing Services" 
            className="w-full max-w-5xl mx-auto"
          />

          {/* Service labels */}
          <div className="grid grid-cols-4 gap-8 max-w-4xl mx-auto mt-4 text-center text-sm text-white/80">
            <div>3D PRINTING<br />ALL MATERIALS</div>
            <div>AUTOCAD<br />MODELING</div>
            <div>PHD LEVEL<br />EXPERTISE</div>
            <div>3D PEN<br />ART WORKSHOP</div>
          </div>
        </div>
      </div>
    </div>
  );
}