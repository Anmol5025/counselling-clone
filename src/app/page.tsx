import { Metadata } from "next";
import Header from "@/components/clone-layout/Header";
import Footer from "@/components/clone-layout/Footer";

// Clone Components
import HeroSection from "@/components/clone-sections/HeroSection";
import IntroSection from "@/components/clone-sections/IntroSection";
import ServicesSection from "@/components/clone-sections/ServicesSection";
import BannerSection from "@/components/clone-sections/BannerSection";
import SymptomsSection from "@/components/clone-sections/SymptomsSection";
import SpecialtiesSection from "@/components/clone-sections/SpecialtiesSection";
import CTASection from "@/components/clone-sections/CTASection";

// Maya Components
import MayaTeamSection from "@/components/sections/TeamSection";
import MayaApproachSection from "@/components/sections/ApproachSection";
import OurOfficeSection from "@/components/sections/OurOfficeSection";

export const metadata: Metadata = {
  title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling",
  description: "Counseling for adults, couples, and children in Newbury & across CA. EMDR, trauma & dissociation, special needs parenting, anxiety, & more.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        <IntroSection />
        <ServicesSection />
        <BannerSection />
        <SymptomsSection />
        
        {/* Maya's Information brought into the landing page */}
        <MayaTeamSection />
        <MayaApproachSection />
        <OurOfficeSection />
        
        <SpecialtiesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
