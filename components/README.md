# Dynamic Next.js Components

This directory contains fully dynamic, reusable components for the multi-procedure plastic surgery website.

## Directory Structure

```
components/
├── common/           # Shared components used across all pages
│   ├── Header.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── CookieBanner.tsx
│   ├── ContactForm.tsx
│   ├── ClientWrapper.tsx
│   └── index.ts
├── sections/         # Page section components
│   ├── HeroSection.tsx
│   ├── AccreditationsSection.tsx
│   ├── GoogleReviewsSection.tsx
│   ├── AboutSection.tsx
│   ├── GallerySection.tsx
│   ├── PricingSection.tsx
│   ├── SurgeonsSection.tsx
│   ├── VideoSection.tsx
│   ├── DetailedContentSection.tsx
│   ├── FaqSection.tsx
│   ├── ContactSection.tsx
│   └── index.ts
├── index.ts
└── README.md
```

## Common Components

### Header.tsx
Top banner displaying hospital name, social media links, and phone number.

**Props:**
- `config: SharedConfig` - Shared configuration containing hospital and social media info

**Features:**
- Responsive layout
- Social media icons (Facebook, Instagram, YouTube)
- Clickable phone number

### Navigation.tsx
Sticky navigation menu with section links.

**Props:**
- `links?: Array<{ href: string; label: string }>` - Optional custom navigation links

**Features:**
- Sticky positioning
- Smooth scroll to sections
- Default links provided if not specified

### Footer.tsx
Footer with links and copyright information.

**Props:**
- `config: SharedConfig` - Shared configuration containing footer links

**Features:**
- Dynamic links from config
- Copyright year
- Sitemap link

### CookieBanner.tsx
Cookie consent banner with accept/reject functionality.

**Uses:** `'use client'`

**Props:**
- `config: SharedConfig` - Shared configuration containing cookie text

**Features:**
- Auto-show after 1 second delay
- Cookie persistence (365 days)
- Privacy policy link

### ContactForm.tsx
Reusable contact form component with Web3Forms integration.

**Uses:** `'use client'`

**Props:**
- `config: FormsConfig` - Form configuration (API key, subject, from name)
- `formId: string` - Unique form ID
- `title: string` - Form heading
- `subtitle: string` - Form subtitle
- `buttonText?: string` - Submit button text (default: "Submit Enquiry")

**Features:**
- Web3Forms API integration
- Form validation
- GDPR consent checkbox
- Loading states
- Success/error handling

### ClientWrapper.tsx
Wrapper component that handles client-side initialization.

**Uses:** `'use client'`

**Props:**
- `children: ReactNode` - Child components to wrap

**Features:**
- GLightbox initialization
- Smooth scroll behavior
- Script loading (GLightbox, Elfsight)

## Section Components

### HeroSection.tsx
Hero section with heading, pricing widget, rating images, and contact form.

**Props:**
- `procedureConfig: ProcedureConfig` - Procedure-specific configuration
- `sharedConfig: SharedConfig` - Shared configuration

**Features:**
- Dynamic pricing display
- Google and Trustpilot ratings
- Integrated contact form
- Finance link

### AccreditationsSection.tsx
Displays accreditation logos and medical reviewer information.

**Props:**
- `config: SharedConfig` - Shared configuration with accreditation data

**Features:**
- Medical reviewer profile
- Multiple accreditation logos with links
- Responsive grid layout

### GoogleReviewsSection.tsx
Elfsight Google Reviews widget placeholder.

**Props:**
- `elfsightAppId?: string` - Elfsight app ID (default provided)

**Features:**
- Lazy loading
- Customizable app ID

### AboutSection.tsx
About section with CSS-only tabs (Intro, Facilities, Location).

**Uses:** `'use client'`

**Props:**
- `config: SharedConfig` - Shared configuration with hospital and facility info

**Features:**
- CSS-only tab switching (no JavaScript)
- Facility images with GLightbox gallery
- Google Maps integration
- Dynamic facility list

### GallerySection.tsx
Before/after photo gallery with optional category filters.

**Uses:** `'use client'`

**Props:**
- `config: ProcedureConfig` - Procedure configuration with gallery data

**Features:**
- **Optional filter tabs** - If `filters.enabled` is true, renders category tabs
- CSS-only filtering
- GLightbox integration
- Dynamic image URL generation
- Procedure navigation pills
- Pattern-based image loading

**Gallery Config Examples:**

```typescript
// Without filters (like Breast Reduction)
gallery: {
  images: {
    count: 20,
    basePath: '/images/Before and afters - 800x600',
    pattern: 'Breast reduction before and after {num}.png'
  }
}

// With filters (like Tummy Tuck)
gallery: {
  filters: {
    enabled: true,
    categories: ['Small', 'Medium', 'Large']
  },
  images: {
    basePath: '/images/Before and afters - 800x600',
    byCategory: {
      'Small': { count: 5, pattern: 'Tummy tuck small {num}.png' },
      'Medium': { count: 8, pattern: 'Tummy tuck medium {num}.png' },
      'Large': { count: 7, pattern: 'Tummy tuck large {num}.png' }
    }
  }
}
```

### PricingSection.tsx
Pricing cards with finance calculator information.

**Props:**
- `config: ProcedureConfig` - Procedure configuration with pricing data

**Features:**
- Multiple price options
- Finance card (if available)
- Dynamic currency symbols
- Finance link

### SurgeonsSection.tsx
Surgeon profile cards with images and credentials.

**Props:**
- `config: SharedConfig` - Shared configuration with surgeon data

**Features:**
- Clickable cards (LinkedIn profiles)
- Surgeon images
- Credentials display
- Responsive grid

### VideoSection.tsx
YouTube video thumbnail with description.

**Props:**
- `config: VideoConfig` - Video configuration

**Features:**
- YouTube thumbnail auto-generation
- Play button overlay
- Video description
- Link to YouTube channel

### DetailedContentSection.tsx
Renders HTML content sections from config.

**Props:**
- `sections: ContentSection[]` - Array of content sections

**Features:**
- HTML rendering with `dangerouslySetInnerHTML`
- Multiple sections support
- Supports method grids and custom HTML

### FaqSection.tsx
Accordion FAQ section with exclusive behavior.

**Uses:** `'use client'`

**Props:**
- `faqs: FAQItem[]` - Array of FAQ items

**Features:**
- Accordion with details/summary
- Exclusive opening (only one open at a time)
- Chevron icons
- Dynamic FAQ list

### ContactSection.tsx
Contact information, map, and contact form.

**Props:**
- `procedureConfig: ProcedureConfig` - Procedure configuration
- `sharedConfig: SharedConfig` - Shared configuration

**Features:**
- Contact details (email, phone, address)
- Google Maps embed
- Integrated contact form

## Client Components

Components using `'use client'` directive:
- `CookieBanner.tsx`
- `ContactForm.tsx`
- `ClientWrapper.tsx`
- `AboutSection.tsx`
- `GallerySection.tsx`
- `FaqSection.tsx`

## Usage Example

```tsx
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

export default function ProcedurePage() {
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
```

## Creating New Procedure Pages

1. Create a new config file in `lib/config/procedures/[procedure-name].ts`
2. Follow the `ProcedureConfig` interface
3. Import the config in your page component
4. Use the same component structure as above
5. All content is dynamically rendered from config

## TypeScript Types

All components are fully typed with TypeScript. Import types from:

```typescript
import {
  ProcedureConfig,
  SharedConfig,
  FormsConfig,
  VideoConfig,
  ContentSection,
  FAQItem,
  Surgeon,
  // ... etc
} from '@/lib/types';
```

## Styling

All components use existing CSS classes from `globals.css`. No class names have been changed to ensure compatibility with the existing stylesheet.

## Features Preserved

- GLightbox for image galleries
- Web3Forms for contact forms
- CSS-only tabs (no JavaScript state management)
- Accordion with exclusive behavior
- Smooth scroll navigation
- Cookie consent management
- Elfsight widget integration

## Next Steps

1. Test components with existing breast-reduction config
2. Create additional procedure configs (Tummy Tuck, Arm Lift, etc.)
3. Update `app/page.tsx` to use new components
4. Create dynamic routes for multi-procedure support
5. Add SEO metadata from config
