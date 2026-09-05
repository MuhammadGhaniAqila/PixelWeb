"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  PenTool,
  Bot,
  Sparkles,
  Layout,
  FileCode,
  Brush,
  Zap,
} from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "HTML", level: 90, icon: FileCode },
    { name: "CSS", level: 85, icon: Layout },
    { name: "JavaScript", level: 75, icon: Code2 },
    { name: "Web Dev", level: 80, icon: Zap },
    { name: "UI/UX Design", level: 80, icon: Palette },
    { name: "Figma", level: 85, icon: PenTool },
    { name: "Vibe Coding", level: 90, icon: Bot },
    { name: "AI Web Dev", level: 85, icon: Sparkles },
    { name: "Basic Design", level: 70, icon: Brush },
  ];

  return (
    <section id="skills" className="w-full max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-pixel text-2xl md:text-3xl text-center text-[#2B6CB0] font-bold mb-8 drop-shadow-[1px_1px_0px_#FFFFFF]">
          Inventory (Keahlian)
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="pixel-border p-4 bg-[#FFFFFF] flex flex-col items-center justify-between text-center rounded-xl shadow-sm"
              >
                {/* Icon Box */}
                <div className="p-3 bg-[#EAF2FA] border-2 border-[#2B6CB0] rounded-lg mb-3 text-[#4299E1]">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Skill Name */}
                <div className="font-pixel text-sm text-[#2B6CB0] font-semibold mb-3">
                  {skill.name}
                </div>

                {/* RPG Health Bar Progress */}
                <div className="w-full bg-[#BEE3F8] border-2 border-[#2B6CB0] h-3.5 rounded-sm overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.05 }}
                    className="h-full bg-[#68D391] border-r-2 border-[#2B6CB0]"
                  />
                </div>
                <span className="font-pixel text-[10px] text-[#4299E1] mt-1">
                  HP {skill.level}%
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
