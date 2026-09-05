"use client";

import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";

export default function Portfolio() {
  const projects = [1, 2, 3];

  return (
    <section id="portfolio" className="w-full max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-pixel text-2xl md:text-3xl text-center text-[#2B6CB0] font-bold mb-8 drop-shadow-[1px_1px_0px_#FFFFFF]">
          Galeri Proyek
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
              className="pixel-panel p-4 flex flex-col justify-between"
            >
              <div className="w-full h-40 bg-[#90CDF4]/40 border-2 border-dashed border-[#4299E1] rounded-lg flex flex-col items-center justify-center text-[#2B6CB0] mb-4">
                <FolderGit2 className="w-8 h-8 mb-2 opacity-60" />
                <span className="font-pixel text-lg">Coming Soon</span>
              </div>
              <div className="font-pixel text-xs text-center text-[#4299E1] bg-[#FFFFFF] p-2 rounded border border-[#90CDF4]">
                Project #{item} Slot
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
