import Navbar from "../components/home/Navbar";
import HeroSection from "../components/home/HeroSection";
import ImpactSection from "../components/home/ImpactSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import SmartLinkageSection from "../components/home/SmartLinkageSection";
import WhyUsSection from "../components/home/WhyUsSection";
import MapSection from "../components/home/MapSection";
import BenefitsSection from "../components/home/BenefitsSection";
import TrustSection from "../components/home/TrustSection";
import Footer from "../components/home/Footer";
import ScrollReveal from "../components/ScrollReveal";


function Home() {
  return (
    <div>
      <Navbar />
     <HeroSection />

     <ScrollReveal>
     <ImpactSection />
     </ScrollReveal>
    
     <ScrollReveal>
     <HowItWorksSection />
     </ScrollReveal>

     <ScrollReveal>
     <SmartLinkageSection/>
     </ScrollReveal>

     <ScrollReveal>
     <WhyUsSection/>
     </ScrollReveal>

     <ScrollReveal>
     <MapSection/>
     </ScrollReveal>

     <ScrollReveal>
      <BenefitsSection/>
      </ScrollReveal>

      <ScrollReveal>
     <TrustSection/>
     </ScrollReveal>

     <ScrollReveal>
     <Footer/>
     </ScrollReveal>
    </div>
  );
}

export default Home;
