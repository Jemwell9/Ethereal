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

  // More dramatic parallax effect for feather-like movement
  const y1 = useTransform(scrollY, [0, 1000], [0, -400]);
  const y2 = useTransform(scrollY, [0, 1000], [100, -300]);
  const y3 = useTransform(scrollY, [0, 1000], [200, -200]);

  return (
    <motion.div 
      className="fixed inset-0 overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: isBelowHero ? 0.6 : 0 }}
      transition={{ duration: 1 }}
    >
      {isBelowHero && (
        <div className="absolute inset-0" style={{ perspective: "1000px" }}>
          {/* Main feather-like grid layer */}
          <motion.div
            className="absolute inset-0"
            style={{ 
              transformStyle: "preserve-3d", 
              transform: "rotateX(60deg) rotateZ(-5deg)",
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
                  x: [-10 - i * 2, 10 + i * 2],
                  opacity: [0.1, 0.3, 0.1],
                  scale: [0.98, 1.02, 0.98],
                }}
                transition={{
                  duration: 3 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1,
                }}
              />
            ))}
          </motion.div>

          {/* Vertical flowing strands */}
          <motion.div
            className="absolute inset-0"
            style={{ 
              transformStyle: "preserve-3d", 
              transform: "rotateY(15deg)",
              y: y2
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={`v-${i}`}
                className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#00FF00] to-transparent"
                style={{ 
                  left: `${i * 8 + Math.sin(i) * 5}%`,
                  opacity: 0.3,
                  filter: "blur(0.5px)"
                }}
                animate={{
                  y: [-50 - i * 2, 50 + i * 2],
                  x: [-5 - Math.sin(i) * 3, 5 + Math.sin(i) * 3],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.6, 1], // Custom easing for more organic movement
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>

          {/* Floating accent strands */}
          <motion.div
            className="absolute inset-0"
            style={{ 
              transformStyle: "preserve-3d", 
              transform: "rotate3d(1, 1, 0, 45deg)",
              y: y3
            }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={`f-${i}`}
                className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#00FF00] to-transparent"
                style={{ 
                  top: `${i * 12}%`,
                  opacity: 0.2,
                  filter: "blur(1px)"
                }}
                animate={{
                  x: [-150 + Math.sin(i) * 20, 150 - Math.sin(i) * 20],
                  opacity: [0.1, 0.2, 0.1],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  duration: 6 + i * 0.4,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.6, 1], // Custom easing for more organic movement
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}