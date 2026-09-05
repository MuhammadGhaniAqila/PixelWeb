"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full max-w-3xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="pixel-panel p-6 md:p-10 relative overflow-hidden"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#90CDF4] border-2 border-[#2B6CB0] rounded-md text-[#2B6CB0]">
            <BookOpen className="w-6 h-6" />
          </div>
          <h2 className="font-pixel text-2xl md:text-3xl text-[#4299E1] font-bold">
            Tentang Saya
          </h2>
        </div>

        <p className="font-sans text-base md:text-lg text-[#2B6CB0] leading-relaxed">
          Hi, saya Ghani, seorang pelajar yang tertarik dengan dunia teknologi,
          khususnya <span className="font-semibold text-[#4299E1]">web development</span>,{" "}
          <span className="font-semibold text-[#4299E1]">UI/UX</span>, dan{" "}
          <span className="font-semibold text-[#4299E1]">artificial intelligence</span>. Saya
          senang mengeksplorasi berbagai teknologi baru dan mengembangkan ide
          menjadi sebuah karya digital.
        </p>

        {/* Decorative RPG corner icon */}
        <div className="absolute top-3 right-3 text-[#90CDF4]/40 font-pixel text-xs">
          [ STORY DIALOG ]
        </div>
      </motion.div>
    </section>
  );
}
