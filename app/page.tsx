import HeroNew from "@/components/HeroNew";
import MattressProblems from "@/components/MattressProblems";
import HealthImpact from "@/components/HealthImpact";
import LayananKami from "@/components/LayananKami";
import WhyChoose from "@/components/WhyChoose";
import HealthyMattress from "@/components/HealthyMattress";
import BeforeAfter from "@/components/BeforeAfter";
import CustomerComplaints from "@/components/CustomerComplaints";
import TestimonialsNew from "@/components/TestimonialsNew";
import BrandShowcase from "@/components/BrandShowcase";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroNew />
      <MattressProblems />
      <HealthImpact />
      <LayananKami />
      <WhyChoose />
      <HealthyMattress />
      <BeforeAfter />
      <CustomerComplaints />
      <TestimonialsNew />
      <BrandShowcase />
      <CTASection />
    </main>
  );
}
