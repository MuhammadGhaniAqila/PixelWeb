"use client";

import { motion } from "framer-motion";
import { UserCheck, Shield, Award, MapPin, GraduationCap, Code } from "lucide-react";

export default function Identity() {
  const details = [
    { label: "Nama", value: "Muhammad Ghani Aqila", icon: UserCheck },
    { label: "Panggilan", value: "Ghani", icon: Shield },
    { label: "Status", value: "Pelajar", icon: Award },
    { label: "Sekolah", value: "SMK Telkom Purwokerto", icon: GraduationCap },
    {
      label: "Jurusan",
      value: "Pengembangan Perangkat Lunak dan Gim (PPLG)",
      icon: Code,
    },
    { label: "Kelas", value: "XI PPLG 1", icon: Award },
    { label: "Domisili", value: "Purwokerto, Jawa Tengah", icon: MapPin },
    {
      label: "Bidang Minat",
      value: "Web Development, UI/UX Design, Artificial Intelligence (AI)",
      icon: Code,
    },
  ];

  return (
    <section id="identity" className="w-full max-w-3xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-pixel text-2xl md:text-3xl text-center text-[#2B6CB0] font-bold mb-8 drop-shadow-[1px_1px_0px_#FFFFFF]">
          Status Window (Identitas)
        </h2>

        <div className="pixel-panel p-6 md:p-8 relative">
          <div className="flex justify-between items-center mb-6 border-b-4 border-[#90CDF4] pb-3">
            <span className="font-pixel text-lg text-[#4299E1]">CHARACTER STATUS</span>
            <span className="font-pixel text-xs bg-[#BEE3F8] px-2 py-1 border border-[#2B6CB0] rounded">
              LVL. 11 PPLG
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {details.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="bg-[#FFFFFF]/70 p-3 rounded-lg border-2 border-[#90CDF4] flex items-start gap-3"
                >
                  <div className="p-1.5 bg-[#BEE3F8] border border-[#2B6CB0] rounded text-[#2B6CB0] shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-pixel text-xs text-[#4299E1]">
                      {item.label}
                    </div>
                    <div className="font-sans text-sm md:text-base text-[#2B6CB0] font-medium">
                      {item.value}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
