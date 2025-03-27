import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import PromotionSection from "@/components/promotion-section";
import MenuSection from "@/components/menu-section";
import AboutSection from "@/components/about-section";
import BookTableSection from "@/components/book-table-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-hero-pattern bg-cover bg-no-repeat">
        <Navbar />
        <HeroSection />
      </div>
      <PromotionSection />
      <section id="menu">
        <MenuSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="book-table">
        <BookTableSection />
      </section>
    </main>
  );
}
