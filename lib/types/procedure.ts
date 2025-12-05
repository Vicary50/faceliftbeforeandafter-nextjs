export interface PriceOption {
  label: string;
  amount: string;
  currency?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContentSection {
  heading: string;
  content: string; // HTML or Markdown
}

export interface GalleryFilter {
  enabled: boolean;
  categories: string[];
}

export interface GalleryImageConfig {
  count: number;
  basePath: string;
  pattern?: string; // For non-filtered galleries, e.g., "Facelift before and after {num}.png"
  byCategory?: {
    [category: string]: {
      count: number;
      pattern: string;
    };
  };
  byPatient?: boolean; // If true, images are grouped by patient number for row display
  patientPattern?: string; // Pattern for patient-grouped images, e.g., "Deep plane facelift before and after Patient {patient}"
  patientImages?: {
    [patientNumber: number]: string[]; // Array of view suffixes for each patient
  };
  patientDescriptions?: {
    [patientNumber: number]: string; // Description of procedures for each patient
  };
}

export interface VideoConfig {
  youtubeId: string;
  heading: string;
  description: string;
  customThumbnail?: string;
}

export interface FormsConfig {
  web3FormsKey: string;
  subject: string;
  fromName: string;
}

export interface MetadataConfig {
  title: string;
  description: string;
  keywords: string[];
}

export interface ProcedureConfig {
  // Basic Info
  id: string;
  name: string;
  displayName: string;
  domain: string;

  // Hero Section
  hero: {
    heading: string;
    subheading: string;
    backgroundImage: string;
    prices: PriceOption[];
  };

  // Gallery
  gallery: {
    heading: string;
    disclaimer: string;
    filters?: GalleryFilter;
    images: GalleryImageConfig;
  };

  // Pricing
  pricing: {
    options: PriceOption[];
    financeAvailable: boolean;
    financeTerms?: string;
  };

  // FAQ
  faq: FAQItem[];

  // Video
  video: VideoConfig;

  // Content Sections
  detailedContent: {
    sections: ContentSection[];
  };

  // Forms
  forms: FormsConfig;

  // SEO
  metadata: MetadataConfig;
}
