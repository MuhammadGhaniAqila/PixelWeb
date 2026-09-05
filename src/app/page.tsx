import SkyBackground from "@/components/SkyBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Identity from "@/components/Identity";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Dynamic Animated Sky Background */}
      <SkyBackground />

      {/* Main Single Page Scrollable Content */}
      <main className="relative z-10 space-y-8">
        <Hero />
        <About />
        <Identity />
        <Education />
        <Skills />
        <Portfolio />
      </main>

      <Footer />
    </div>
  );
}
