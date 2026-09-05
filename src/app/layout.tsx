import type { Metadata } from "next";
import { Pixelify_Sans, Quicksand } from "next/font/google";
import "./globals.css";

const pixelifyFont = Pixelify_Sans({
  variable: "--font-pixel",
  subsets: ["latin"],
});

const quicksandFont = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Ghani Aqila | Portofolio PPLG",
  description: "Portofolio pribadi Muhammad Ghani Aqila - Web Development, UI/UX Design, dan Artificial Intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${pixelifyFont.variable} ${quicksandFont.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased bg-[#BEE3F8] text-[#2B6CB0]">
        {children}
      </body>
    </html>
  );
}

