import Header from "./components/main/Header";
import Hero from "./components/main/Hero";
import Features from "./components/Features";
import Section from "./components/Section";
import Footer from "./components/main/Footer";
import Customers from "./components/Customers";
import Image from "next/image";
import Accordion from "./components/Accordion";
import Reviews from "./components/Reviews";
import Download from "./components/Download";
import About from "./components/About";
import Insurences from "./components/Insurences";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Customers />
        <Insurences />
      </main>
      <Footer />
    </div>
  );
}
