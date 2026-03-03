import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Wines from "@/components/wines";
import Philosophy from "@/components/philosophy";
import Vineyard from "@/components/vineyard";
import Experience from "@/components/experience";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Wines />
      <Philosophy />
      <Vineyard />
      <Experience />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
