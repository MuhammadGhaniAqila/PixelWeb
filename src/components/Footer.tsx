"use client";

import { motion } from "framer-motion";
import { Mail, Globe, Share2, Heart } from "lucide-react";

export default function Footer() {
  const socials = [
    { name: "Email", icon: Mail, href: "mailto:ghani@example.com" },
    { name: "Instagram", icon: Globe, href: "#" },
    { name: "GitHub", icon: Share2, href: "#" },
    { name: "LinkedIn", icon: Globe, href: "#" },
  ];

  return (
    <footer className="w-full pt-16 pb-8 relative overflow-hidden bg-gradient-to-t from-[#F7FAFC] to-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-4 text-center relative z-10"
      >
        <h2 className="font-pixel text-2xl text-[#2B6CB0] font-bold mb-6">
          Hubungi Aku
        </h2>

        {/* Social Pixel Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {socials.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className="pixel-btn px-4 py-2.5 rounded-md flex items-center gap-2 text-sm"
              >
                <Icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="font-sans text-xs md:text-sm text-[#4299E1] flex items-center justify-center gap-1">
          <span>&copy; 2026 Muhammad Ghani Aqila. Made with</span>
          <Heart className="w-4 h-4 text-red-400 fill-red-400 inline" />
        </p>
      </motion.div>
    </footer>
  );
}
