import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Services />
      <Footer />
    </main>
  );
}
