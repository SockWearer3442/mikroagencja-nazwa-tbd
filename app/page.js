import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import PackagesSection from "../components/PackagesSection";
import ProcessSection from "../components/ProcessSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PackagesSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}
