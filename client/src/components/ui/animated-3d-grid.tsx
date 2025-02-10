import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function Animated3DGrid({ variant = "default" }: { variant?: "default" | "printer" | "scanner" }) {
  const { scrollY } = useScroll();
  const [isBelowHero, setIsBelowHero] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const heroHeight = window.innerHeight;
      setIsBelowHero(window.scrollY > heroHeight * 0.8);
    };

    checkScroll();
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -300]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -400]);

  return (
    <motion.div 
      className="fixed inset-0 overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: isBelowHero ? 0.6 : 0 }}
      transition={{ duration: 1 }}
    >
      {isBelowHero && (
        <div className="absolute inset-0" style={{ perspective: "1000px" }}>
          {/* Grid Layer 1 - Horizontal lines */}
          <motion.div
            className="absolute inset-0"
            style={{ 
              transformStyle: "preserve-3d", 
              transform: "rotateX(75deg)",
              y: y1
            }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#00FF00] to-transparent"
                style={{ 
                  top: `${i * 5}%`,
                  opacity: 0.3,
                  filter: "blur(0.5px)"
                }}
                animate={{
                  x: [-20, 20],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3 + i * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Grid Layer 2 - Vertical lines */}
          <motion.div
            className="absolute inset-0"
            style={{ 
              transformStyle: "preserve-3d", 
              transform: "rotateY(15deg)",
              y: y2
            }}
          >
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={`v-${i}`}
                className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#00FF00] to-transparent"
                style={{ 
                  left: `${i * 7}%`,
                  opacity: 0.3,
                  filter: "blur(0.5px)"
                }}
                animate={{
                  y: [-30, 30],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Grid Layer 3 - Diagonal accent lines */}
          <motion.div
            className="absolute inset-0"
            style={{ 
              transformStyle: "preserve-3d", 
              transform: "rotate3d(1, 1, 0, 45deg)",
              y: y3
            }}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={`d-${i}`}
                className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#00FF00] to-transparent"
                style={{ 
                  top: `${i * 10}%`,
                  opacity: 0.3,
                  filter: "blur(0.5px)"
                }}
                animate={{
                  x: [-100, 100],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}