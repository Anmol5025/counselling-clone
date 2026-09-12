import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BannerSection from "@/components/sections/BannerSection";
import SymptomsSection from "@/components/sections/SymptomsSection";
import TeamSection from "@/components/sections/TeamSection";
import ApproachSection from "@/components/sections/ApproachSection";
import OurOfficeSection from "@/components/sections/OurOfficeSection";
import SpecialtiesSection from "@/components/sections/SpecialtiesSection";
import CTASection from "@/components/sections/CTASection";

export default function MayaPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <BannerSection />
        <SymptomsSection />
        <TeamSection />
        <OurOfficeSection />
        <ApproachSection />
        <SpecialtiesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
