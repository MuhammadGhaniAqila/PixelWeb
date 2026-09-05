"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative pt-12"
    >
      {/* Floating Pixel Avatar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative mb-6"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-36 h-36 md:w-44 md:h-44 rounded-2xl pixel-border bg-[#FFFFFF] flex items-center justify-center p-2 shadow-lg"
        >
          {/* Custom SVG Pixel Character Placeholder */}
          <svg
            viewBox="0 0 16 16"
            className="w-full h-full text-[#4299E1] image-rendering-pixelated"
            fill="currentColor"
          >
            {/* Hair */}
            <path d="M4 2h8v2H4zM3 4h10v2H3z" fill="#2B6CB0" />
            {/* Face */}
            <path d="M4 6h8v6H4z" fill="#FFF3C4" />
            {/* Eyes */}
            <rect x="5" y="8" width="1.5" height="1.5" fill="#2B6CB0" />
            <rect x="9.5" y="8" width="1.5" height="1.5" fill="#2B6CB0" />
            {/* Smile */}
            <path d="M7 11h2v1H7z" fill="#2B6CB0" />
            {/* Clothes */}
            <path d="M2 12h12v4H2z" fill="#4299E1" />
          </svg>
        </motion.div>
        <div className="absolute -top-2 -right-2 bg-[#FFF3C4] border-2 border-[#2B6CB0] p-1 rounded-md text-[#2B6CB0]">
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>
      </motion.div>

      {/* Greeting */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="font-pixel text-xl md:text-2xl text-[#4299E1] mb-2 tracking-widest drop-shadow-[1px_1px_0px_#FFFFFF]"
      >
        Hi, aku Ghani
      </motion.h2>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="font-pixel text-3xl sm:text-4xl md:text-6xl text-[#2B6CB0] font-bold mb-4 drop-shadow-[2px_2px_0px_#FFFFFF]"
      >
        Muhammad Ghani Aqila
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="font-sans text-base md:text-lg max-w-xl text-[#2B6CB0] bg-[#FFFFFF]/60 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-[#90CDF4] shadow-sm mb-8"
      >
        Pelajar yang tertarik pada{" "}
        <span className="font-semibold text-[#4299E1]">Web Development</span>,{" "}
        <span className="font-semibold text-[#4299E1]">UI/UX Design</span>, dan{" "}
        <span className="font-semibold text-[#4299E1]">Artificial Intelligence</span>.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <a
          href="#about"
          className="pixel-btn inline-flex items-center gap-2 px-8 py-4 text-lg rounded-lg"
        >
          Lihat Tentang Aku
          <ArrowDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
}
