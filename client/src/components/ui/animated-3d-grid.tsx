import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function Animated3DGrid({ variant = "default" }: { variant?: "default" | "printer" | "scanner" }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -100]);
  const [isBelowHero, setIsBelowHero] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const heroHeight = window.innerHeight;
      setIsBelowHero(window.scrollY > heroHeight * 0.8);
    };

    checkScroll(); // Check initial position
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: isBelowHero ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {isBelowHero && (
        <div className="absolute inset-0 opacity-30" style={{ perspective: "1500px" }}>
          {/* Floating grid elements */}
          <motion.div
            className="absolute inset-0"
            style={{ 
              transformStyle: "preserve-3d", 
              transform: "rotateX(60deg)",
              y: y1
            }}
          >
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-[1px] w-[80%] left-[10%] bg-gradient-to-r from-[#00FF00]/0 via-[#00FF00] to-[#00FF00]/0"
                style={{ 
                  top: `${i * 7}%`,
                  filter: "blur(0.5px)"
                }}
                animate={{
                  x: [-50, 50],
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

          {/* Vertical lines with scroll parallax */}
          <motion.div
            className="absolute inset-0"
            style={{ 
              transformStyle: "preserve-3d", 
              transform: "rotateY(60deg)",
              y: y2
            }}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={`v-${i}`}
                className="absolute w-[1px] h-full bg-gradient-to-b from-[#00FF00]/0 via-[#00FF00] to-[#00FF00]/0"
                style={{ 
                  left: `${i * 10 + 5}%`,
                  filter: "blur(0.5px)"
                }}
                animate={{
                  y: [-30, 30],
                  opacity: [0.1, 0.3, 0.1],
                  scale: [0.98, 1.02, 0.98],
                }}
                transition={{
                  duration: 4 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
              />
            ))}
          </motion.div>

          {/* Diagonal accent lines */}
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
                key={`d-${i}`}
                className="absolute w-full h-[1px] bg-gradient-to-r from-[#00FF00]/0 via-[#00FF00] to-[#00FF00]/0"
                style={{ 
                  top: `${i * 12}%`,
                  filter: "blur(1px)"
                }}
                animate={{
                  x: [-100, 100],
                  opacity: [0.05, 0.15, 0.05],
                }}
                transition={{
                  duration: 5 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}