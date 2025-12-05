'use client';

import {
  Header,
  Navigation,
  Footer,
  CookieBanner,
  ClientWrapper,
  HeroSection,
  AccreditationsSection,
  GoogleReviewsSection,
  AboutSection,
  GallerySection,
  PricingSection,
  SurgeonsSection,
  VideoSection,
  DetailedContentSection,
  FaqSection,
  ContactSection
} from '@/components';
import { sharedConfig } from '@/lib/config/shared';
import { getProcedureConfig } from '@/lib/config';

export default function Home() {
  // Load procedure config based on environment variable
  const procedureConfig = getProcedureConfig();

  return (
    <ClientWrapper>
      <CookieBanner config={sharedConfig} />
      <Header config={sharedConfig} />
      <Navigation />

      <main>
        <HeroSection procedureConfig={procedureConfig} sharedConfig={sharedConfig} />
        <AccreditationsSection config={sharedConfig} />
        <GoogleReviewsSection />
        <AboutSection config={sharedConfig} />
        <GallerySection config={procedureConfig} />
        <PricingSection config={procedureConfig} />
        <SurgeonsSection config={sharedConfig} />
        <VideoSection config={procedureConfig.video} />
        <DetailedContentSection sections={procedureConfig.detailedContent.sections} />
        <FaqSection faqs={procedureConfig.faq} />
        <ContactSection procedureConfig={procedureConfig} sharedConfig={sharedConfig} />
      </main>

      <Footer config={sharedConfig} />
    </ClientWrapper>
  );
}
