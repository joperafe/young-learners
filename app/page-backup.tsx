import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Highlights />
      <MapSection />
      <Footer />
    </main>
  );
}