"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const history = [
    {
      school: "SD Islam Al-Azhar 39 Purwokerto",
      level: "Sekolah Dasar",
    },
    {
      school: "SMP Telkom Purwokerto",
      level: "Sekolah Menengah Pertama",
    },
    {
      school: "SMK Telkom Purwokerto",
      level: "Pengembangan Perangkat Lunak dan Gim (PPLG)",
    },
  ];

  return (
    <section id="education" className="w-full max-w-3xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-pixel text-2xl md:text-3xl text-center text-[#2B6CB0] font-bold mb-10 drop-shadow-[1px_1px_0px_#FFFFFF]">
          Riwayat Pendidikan
        </h2>

        <div className="pixel-panel p-6 md:p-8 relative">
          <div className="relative border-l-4 border-dashed border-[#4299E1] ml-4 md:ml-8 pl-6 md:pl-10 space-y-8">
            {history.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative"
              >
                {/* Side-scroller path checkpoint dot */}
                <div className="absolute -left-[35px] md:-left-[51px] top-1 w-6 h-6 rounded-full bg-[#FFF3C4] border-4 border-[#2B6CB0] flex items-center justify-center shadow-md">
                  <div className="w-1.5 h-1.5 bg-[#2B6CB0] rounded-full" />
                </div>

                <div className="bg-[#FFFFFF] p-4 rounded-xl border-2 border-[#90CDF4] shadow-sm hover:border-[#4299E1] transition-colors">
                  <div className="flex items-center gap-2 text-[#4299E1] font-pixel text-xs mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>{item.level}</span>
                  </div>
                  <h3 className="font-sans text-lg font-bold text-[#2B6CB0]">
                    {item.school}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
