"use client";

import { motion } from "framer-motion";

export default function SkyBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#90CDF4] via-[#BEE3F8] to-[#EAF2FA]">
      {/* Dynamic Animated Cloud Layer 1 */}
      <motion.div
        className="absolute bottom-10 left-0 w-[200%] h-[300px] opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #FFFFFF 30%, transparent 40%)",
          backgroundSize: "200px 200px",
          backgroundPosition: "0 80%",
        }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />

      {/* Dynamic Animated Cloud Layer 2 */}
      <motion.div
        className="absolute bottom-24 left-0 w-[200%] h-[400px] opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #F7FAFC 35%, transparent 45%)",
          backgroundSize: "320px 320px",
          backgroundPosition: "60px 70%",
        }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
      />

      {/* Dynamic Animated Cloud Layer 3 (Soft background clouds) */}
      <motion.div
        className="absolute top-10 left-0 w-[200%] h-[250px] opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #FFFFFF 25%, transparent 35%)",
          backgroundSize: "180px 180px",
          backgroundPosition: "120px 30%",
        }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Ghibli Light Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#FFF3C4] shadow-[0_0_8px_#FFF3C4] opacity-70 pointer-events-none"
          style={{
            left: `${(i * 8.5) % 100}%`,
            top: `${(i * 15 + 20) % 100}%`,
          }}
          animate={{
            y: [0, -120, 0],
            x: [0, (i % 2 === 0 ? 25 : -25), 0],
            opacity: [0.2, 0.9, 0.2],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: 6 + (i % 5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
}
