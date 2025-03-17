import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import PromotionSection from "@/components/promotion-section"
import MenuSection from "@/components/menu-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-hero-pattern bg-cover bg-no-repeat">
        <Navbar />
        <HeroSection />
      </div>
      <PromotionSection />
      <MenuSection />
    </main>
  )
}

