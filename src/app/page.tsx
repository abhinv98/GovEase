// src/app/page.tsx
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from "@/components/homepage/HeroSection";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import TestimonialsSection from "@/components/homepage/Testimonials";
import CallToAction from "@/components/homepage/CallToAction";

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CallToAction />
    </MainLayout>
  );
}