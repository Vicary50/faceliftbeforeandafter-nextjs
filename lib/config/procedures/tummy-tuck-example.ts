import { ProcedureConfig } from '../../types';

/**
 * Example config for Tummy Tuck showing gallery filter functionality
 * This demonstrates how to configure category filters for galleries
 */
const tummyTuckConfig: ProcedureConfig = {
  // Basic Info
  id: 'tummy-tuck',
  name: 'Tummy Tuck',
  displayName: 'Tummy Tuck',
  domain: 'tummytuckbeforeandafter.co.uk',

  // Hero Section
  hero: {
    heading: 'Tummy Tuck Before and After Photos',
    subheading: 'Real patients. Dramatic results. See their transformations.',
    backgroundImage: '/images/Hero image - 1920x1080/Tummy tuck hero image.png',
    prices: [
      {
        label: 'Tummy Tuck (Small), daycase',
        amount: '7,500',
        currency: 'GBP'
      },
      {
        label: 'Tummy Tuck (Medium), 1-night stay',
        amount: '8,200',
        currency: 'GBP'
      },
      {
        label: 'Tummy Tuck (Large), 1-night stay',
        amount: '9,000',
        currency: 'GBP'
      }
    ]
  },

  // Gallery with FILTERS enabled
  gallery: {
    heading: 'Tummy Tuck Before and After Photos',
    disclaimer: 'Each case in our tummy tuck gallery represents real patients who have undergone abdominoplasty surgery. Results vary based on individual anatomy, skin quality, and the extent of correction needed.',
    filters: {
      enabled: true, // Enable filtering
      categories: ['Small', 'Medium', 'Large'] // Category tabs
    },
    images: {
      count: 0, // Not used when byCategory is present
      basePath: '/images/Before and afters - 800x600',
      byCategory: {
        'Small': {
          count: 5,
          pattern: 'Tummy tuck small {num}.png'
        },
        'Medium': {
          count: 8,
          pattern: 'Tummy tuck medium {num}.png'
        },
        'Large': {
          count: 7,
          pattern: 'Tummy tuck large {num}.png'
        }
      }
    }
  },

  // Pricing
  pricing: {
    options: [
      {
        label: 'Tummy Tuck (Small), daycase',
        amount: '7,500',
        currency: 'GBP'
      },
      {
        label: 'Tummy Tuck (Medium), 1-night stay',
        amount: '8,200',
        currency: 'GBP'
      },
      {
        label: 'Tummy Tuck (Large), 1-night stay',
        amount: '9,000',
        currency: 'GBP'
      }
    ],
    financeAvailable: true,
    financeTerms: '0% Interest Free Credit for 12 months available. Finance packages from Humm starting from £30 per month up to £30,000. Subject to status. T&Cs apply.'
  },

  // FAQ
  faq: [
    {
      question: 'How long is the recovery?',
      answer: 'Most patients need 2-3 weeks off work. Full recovery takes 6-8 weeks.'
    },
    {
      question: 'Will I have visible scars?',
      answer: 'The incision is placed low on the abdomen, typically hidden by underwear or swimwear.'
    }
  ],

  // Video
  video: {
    youtubeId: 'SAMPLE_VIDEO_ID',
    heading: 'Watch Tummy Tuck Surgery at Kinvara Private Hospital',
    description: 'See the surgical technique and care that delivers outstanding tummy tuck results.'
  },

  // Detailed Content
  detailedContent: {
    sections: [
      {
        heading: 'What is a Tummy Tuck?',
        content: '<p>A tummy tuck (abdominoplasty) removes excess skin and fat from the abdomen while tightening the abdominal muscles.</p>'
      }
    ]
  },

  // Forms
  forms: {
    web3FormsKey: '6bfb1e58-33bc-44f9-933a-aa3e277d520e',
    subject: 'New Enquiry from Tummy Tuck Website',
    fromName: 'Kinvara Private Hospital - Tummy Tuck'
  },

  // SEO
  metadata: {
    title: 'Tummy Tuck Before and After | Kinvara Private Hospital',
    description: 'View real tummy tuck before and after results. Expert surgeons, modern facilities.',
    keywords: ['tummy tuck', 'abdominoplasty', 'tummy tuck before and after']
  }
};

export default tummyTuckConfig;
