import { ProcedureConfig } from '../../types';

const breastReductionConfig: ProcedureConfig = {
  // Basic Info
  id: 'breast-reduction',
  name: 'Breast Reduction',
  displayName: 'Breast Reduction',
  domain: 'breastreductionbeforeandafter.co.uk',

  // Hero Section
  hero: {
    heading: 'Breast Reduction Before and After Photos',
    subheading: 'Real patients. Life-changing results. See their transformations and imagine your own journey to comfort and confidence.',
    backgroundImage: '/images/Hero image - 1920x1080/Breast reduction before and after hero image.png',
    prices: [
      {
        label: 'Breast Reduction (Small-medium), daycase',
        amount: '8,100',
        currency: 'GBP'
      },
      {
        label: 'Breast Reduction (Large), 1-night stay',
        amount: '8,500',
        currency: 'GBP'
      }
    ]
  },

  // Gallery
  gallery: {
    heading: 'Breast Reduction Before and After Photos',
    disclaimer: 'Each case in our breast reduction before and after gallery showcases real results from real patients at Kinvara Private Hospital. Every woman\'s body is unique, and your results may vary. These photos are intended to give you an idea of what\'s possible—not a guarantee. During your consultation, we\'ll discuss realistic outcomes based on your individual anatomy and goals.',
    images: {
      count: 20,
      basePath: '/images/Before and afters - 800x600',
      pattern: 'Breast reduction before and after {num}.png'
    }
  },

  // Pricing
  pricing: {
    options: [
      {
        label: 'Breast Reduction (Small-medium), daycase',
        amount: '8,100',
        currency: 'GBP'
      },
      {
        label: 'Breast Reduction (Large), 1-night stay',
        amount: '8,500',
        currency: 'GBP'
      }
    ],
    financeAvailable: true,
    financeTerms: '0% Interest Free Credit for 12 months available. Finance packages from Humm starting from £30 per month up to £30,000. Subject to status. T&Cs apply.'
  },

  // FAQ
  faq: [
    {
      question: 'When will I see the final results?',
      answer: 'Your breasts will take up to a year to settle into their final shape. That\'s when you\'ll see the full, permanent change. The scars will be noticeable at first, but they fade over time. Most look their best after 2 to 3 years.'
    },
    {
      question: 'What will the scars look like?',
      answer: 'At first, your scars will be red and slightly raised. Over the following months, they typically fade and flatten. The most common patterns—anchor and lollipop—leave scars around the areola, down the breast, or along the fold. How visible they are depends on your skin type, how well you heal, and whether you follow the post-surgery scar care plan. This includes using scar creams, silicone sheets, and protecting them from the sun.'
    },
    {
      question: 'Will my nipples still have feeling?',
      answer: 'Almost everyone experiences some change in nipple sensitivity right after surgery. But don\'t worry—most people return to near-normal sensation within 1 to 2 years. During healing, your nipples might become more sensitive. You may need extra padding in your bra until things settle down.'
    },
    {
      question: 'When can I get back to normal life?',
      answer: 'Most patients return to light work, like office duties, within a week. More physical jobs may need up to 3 weeks. Stick to light activities for the first 2 weeks. Avoid upper body workouts and heavy lifting for 6 weeks. Full recovery—including sports and all activities—typically takes 12 weeks.'
    },
    {
      question: 'Can I breastfeed after surgery?',
      answer: 'Because your nipple stays attached to the breast tissue, breastfeeding is sometimes possible. However, there\'s no guarantee it will work. If you strongly want to breastfeed in the future, this surgery may not be right for you.'
    },
    {
      question: 'Do I need to be a certain weight?',
      answer: 'Like any cosmetic procedure, being close to your ideal weight gives you the best results.'
    },
    {
      question: 'Is there an age limit?',
      answer: 'We recommend waiting until you\'re at least 18 and your breasts have stopped growing.'
    },
    {
      question: 'How long do I wear the surgical bra?',
      answer: 'You must wear a post-surgery bra for 6 weeks, removing it only for showers and washing. After this time, when your breasts have settled, you can go back to fitted, underwire bras.'
    }
  ],

  // Video
  video: {
    youtubeId: 'CM6yCs3VN7M',
    heading: 'Watch Breast Reduction Surgery at Kinvara Private Hospital',
    description: 'Watch our specialist surgeons perform breast reduction surgery and discover the skill, precision and care that delivers outstanding results. From technique to transformation, see exactly why our patients trust us with their journey to confidence and comfort.'
  },

  // Detailed Content
  detailedContent: {
    sections: [
      {
        heading: 'Is Breast Reduction Right for You?',
        content: `<p>You might be a good candidate for breast reduction if you:</p>
<ul>
  <li><strong>Are in good health</strong> – with no medical conditions that could slow down healing</li>
  <li><strong>Have realistic expectations</strong> – understanding what the surgery can and cannot achieve</li>
  <li><strong>Are at a stable weight</strong> – significant weight changes after surgery can affect your results</li>
  <li><strong>Don't smoke or vape</strong> – nicotine seriously impacts healing, so you'll need to stop at least 4 weeks before and after surgery</li>
</ul>

<h3>How Breast Reduction Can Help You</h3>
<p>This surgery can provide relief from:</p>
<ul>
  <li>Chronic pain in your neck, shoulders, and back caused by heavy breasts</li>
  <li>Skin problems like rashes and infections that develop under your breasts</li>
  <li>Limited physical activity – many women find it easier to exercise and stay active after surgery</li>
</ul>`
      },
      {
        heading: 'What Happens During Surgery',
        content: `<p>The procedure is performed under general anaesthetic and typically takes 2-3 hours. If you're having a larger reduction, we'll recommend staying in hospital overnight for your comfort and safety.</p>

<h3>The Surgical Approach</h3>
<p>The type of incision used depends on how much tissue needs to be removed and how far your nipple needs to be repositioned. We'll discuss which approach is best for you during your consultation.</p>

<div class="method-grid">
  <div class="method-box">
    <div class="method-number">01.</div>
    <h4>Vertical Scar (Lollipop)</h4>
    <p>An incision around the areola and straight down to the breast crease. This works well for moderate reductions and avoids a scar along the fold.</p>
  </div>
  <div class="method-box">
    <div class="method-number">02.</div>
    <h4>Inverted T (Anchor)</h4>
    <p>An incision around the areola, down to the crease, and along the fold. This is the most common approach and allows for larger reductions with better shaping.</p>
  </div>
</div>

<h3>Maintaining Blood Supply to Your Nipple</h3>
<p>During surgery, a section of breast tissue stays attached to maintain blood flow and sensation to your nipple. The technique used depends on your specific needs:</p>
<ul>
  <li><strong>Inferior Pedicle:</strong> Most common approach and maintains attachment from below – very reliable and safe, especially for larger reductions.</li>
  <li><strong>Medial Pedicle:</strong> Modern approach - Preserves fullness in the upper chest and cleavage area.</li>
  <li><strong>Superior Pedicle:</strong> Minimal lift approach - Best when only a small adjustment is needed.</li>
</ul>`
      },
      {
        heading: 'Your Recovery Journey',
        content: `<p>Here's what to expect as you heal:</p>
<ul>
  <li><strong>Sleep elevated:</strong> Prop yourself up on pillows for the first 2 weeks</li>
  <li><strong>Wound care:</strong> Your stitches will dissolve on their own, and specialized dressings will support healing</li>
  <li><strong>Drains:</strong> Rarely needed, but if used, they're typically removed the next day</li>
  <li><strong>Support bra:</strong> You'll wear a surgical compression bra day and night for the first month</li>
  <li><strong>Return to normal:</strong> Most women resume regular activities within 2 weeks, but avoid intense exercise for 6 weeks</li>
</ul>`
      }
    ]
  },

  // Forms
  forms: {
    web3FormsKey: '6bfb1e58-33bc-44f9-933a-aa3e277d520e',
    subject: 'New Enquiry from Breast Reduction Website',
    fromName: 'Kinvara Private Hospital - Breast Reduction'
  },

  // SEO
  metadata: {
    title: 'Breast Reduction Before and After | Kinvara Private Hospital',
    description: 'View real breast reduction before and after results at Kinvara Private Hospital. Expert consultant plastic surgeons, modern facilities in Rotherham. 0% finance available.',
    keywords: ['breast reduction', 'breast reduction before and after', 'breast reduction surgery', 'breast reduction UK', 'Kinvara Private Hospital', 'Rotherham plastic surgery']
  }
};

export default breastReductionConfig;
