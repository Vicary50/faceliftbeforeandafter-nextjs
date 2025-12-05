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
import breastReductionConfig from '@/lib/config/procedures/breast-reduction';

export default function ExamplePage() {
  return (
    <ClientWrapper>
      <CookieBanner config={sharedConfig} />
      <Header config={sharedConfig} />
      <Navigation />

      <main>
        <HeroSection
          procedureConfig={breastReductionConfig}
          sharedConfig={sharedConfig}
        />
        <AccreditationsSection config={sharedConfig} />
        <GoogleReviewsSection />
        <AboutSection config={sharedConfig} />
        <GallerySection config={breastReductionConfig} />
        <PricingSection config={breastReductionConfig} />
        <SurgeonsSection config={sharedConfig} />
        <VideoSection config={breastReductionConfig.video} />
        <DetailedContentSection sections={breastReductionConfig.detailedContent.sections} />
        <FaqSection faqs={breastReductionConfig.faq} />
        <ContactSection
          procedureConfig={breastReductionConfig}
          sharedConfig={sharedConfig}
        />
      </main>

      <Footer config={sharedConfig} />
    </ClientWrapper>
  );
}
