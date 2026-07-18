import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import SignatureCollection from "@/components/sections/SignatureCollection";
import BestSellers from "@/components/sections/BestSellers";
import Features from "@/components/sections/Features";
import DesignIdeas from "@/components/sections/DesignIdeas";
import Journey from "@/components/sections/Journey";
import Testimonials from "@/components/sections/Testimonials";
import Consultation from "@/components/sections/Consultation";
import Instagram from "@/components/sections/Instagram";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Categories />
      <SignatureCollection />
      <BestSellers />
      <Features />
      <DesignIdeas />
      <Journey />
      <Testimonials />
      <Consultation />
      <Instagram />
      <Footer />
    </main>
  );
}
