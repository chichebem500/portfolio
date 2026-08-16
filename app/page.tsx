import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />
      <Hero />

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
