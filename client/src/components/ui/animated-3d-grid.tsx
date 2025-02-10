import { motion } from "framer-motion";

export function Animated3DGrid({ variant = "default" }: { variant?: "default" | "printer" | "scanner" }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Perspective container */}
      <div className="absolute inset-0 opacity-20" style={{ perspective: "1000px" }}>
        {/* Horizontal grid lines with 3D rotation */}
        <motion.div
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(60deg)" }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[2px] w-full bg-gradient-to-r from-[#00FF00]/0 via-[#00FF00] to-[#00FF00]/0"
              style={{ top: `${i * 5}%` }}
              animate={{
                x: [-100, 100],
                opacity: [0.1, 0.4, 0.1],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: variant === "scanner" ? 4 : 3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>

        {/* Vertical grid lines with different 3D rotation */}
        <motion.div
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d", transform: "rotateY(60deg)" }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute w-[2px] h-full bg-gradient-to-b from-[#00FF00]/0 via-[#00FF00] to-[#00FF00]/0"
              style={{ left: `${i * 5}%` }}
              animate={{
                y: variant === "printer" ? [-100, 100] : [-50, 50],
                opacity: [0.1, 0.4, 0.1],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>

        {/* Additional diagonal lines for more depth */}
        <motion.div
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d", transform: "rotate3d(1, 1, 0, 45deg)" }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`d-${i}`}
              className="absolute w-full h-[1px] bg-gradient-to-r from-[#00FF00]/0 via-[#00FF00] to-[#00FF00]/0"
              style={{ top: `${i * 10}%` }}
              animate={{
                x: [-200, 200],
                opacity: [0.05, 0.2, 0.05],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
