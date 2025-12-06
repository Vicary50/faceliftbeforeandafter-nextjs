import { ProcedureConfig } from '../../types';

const faceliftConfig: ProcedureConfig = {
  // Basic Info
  id: 'facelift',
  name: 'Facelift',
  displayName: 'Facelift',
  domain: 'faceliftbeforeandafter.co.uk',

  // Hero Section
  hero: {
    heading: 'Facelift Before and After Photos',
    subheading: 'Real patients. Life-changing results. See their transformations and imagine your own journey to renewed confidence.',
    backgroundImage: '/images/facelift/hero/Facelift before and after hero image.png',
    prices: [
      {
        label: 'Full Facelift & Necklift (overnight stay)',
        amount: '12,000',
        currency: 'GBP'
      },
      {
        label: 'Full Facelift, Neck Lift & Full Face Phenol Peel (overnight stay)',
        amount: '14,500',
        currency: 'GBP'
      }
    ]
  },

  // Gallery
  gallery: {
    heading: 'Facelift Before and After Photos',
    disclaimer: 'Each case in our facelift before and after gallery showcases real results from real patients at Kinvara Private Hospital. Every person\'s face is unique, and your results may vary. These photos are intended to give you an idea of what\'s possible—not a guarantee. During your consultation, we\'ll discuss realistic outcomes based on your individual anatomy and goals.',
    images: {
      count: 20, // 20 patients
      basePath: '/images/facelift/gallery',
      byPatient: true,
      patientPattern: 'Deep plane facelift before and after Patient {patient}',
      // Specify exact images that exist for each patient (max 3 per patient)
      patientImages: {
        1: ['frontal view', 'lateral view', 'oblique view'],
        2: ['frontal view', 'lateral view', 'oblique view'],
        3: ['frontal view', 'lateral view', 'oblique view'],
        4: ['frontal view', 'lateral view', 'oblique view'],
        5: ['frontal view', 'lateral view', 'oblique view'],
        6: ['frontal view', 'oblique view'],
        7: ['frontal view', 'lateral view', 'oblique view'],
        8: ['frontal view', 'oblique view'],
        9: ['anterior view', 'lateral view', 'oblique view'],
        10: ['anterior view', 'oblique view', 'oblique view 2'],
        11: ['anterior view', 'oblique view'],
        12: ['anterior view', 'lateral view', 'oblique view'],
        13: ['anterior view'],
        14: ['anterior view', 'oblique view'],
        15: ['anterior view', 'oblique view'],
        16: ['anterior view', 'oblique view'],
        17: ['lateral view', 'oblique view'],
        18: ['anterior view', 'oblique view'],
        19: ['oblique view'],
        20: ['oblique view']
      },
      // Patient procedure descriptions
      patientDescriptions: {
        1: 'Deep plane facelift, necklift, upper eyelid lift, full face phenol peel',
        2: 'Deep plane facelift, necklift, full face phenol peel',
        3: 'Deep plane facelift, necklift, upper eyelid lift, direct brow lift, full face phenol peel',
        4: 'Deep plane facelift, necklift',
        5: 'Deep plane facelift, necklift, facial fat grafting, full face phenol peel',
        6: 'Deep plane facelift, necklift',
        7: 'Deep plane facelift, necklift',
        8: 'Deep plane facelift, necklift, upper eyelid lift, direct brow lift, full face phenol peel',
        9: 'Deep plane facelift, necklift, full face phenol peel',
        10: 'Deep plane facelift, necklift, upper eyelid lift, lower eyelid lift, full face phenol peel, upper lip mole removal',
        11: 'Deep plane facelift, necklift, full face phenol peel',
        12: 'Deep plane facelift, necklift',
        13: 'Deep plane facelift, necklift',
        14: 'Deep plane facelift, necklift, direct brow lift, full face phenol peel',
        15: 'Deep plane facelift, necklift',
        16: 'Deep plane facelift, necklift, full face phenol peel',
        17: 'Deep plane facelift, necklift',
        18: 'Deep plane facelift, necklift',
        19: 'Deep plane facelift, necklift',
        20: 'Deep plane facelift, necklift'
      }
    }
  },

  // Pricing
  pricing: {
    options: [
      {
        label: 'Full Facelift & Necklift (overnight stay)',
        amount: '12,000',
        currency: 'GBP'
      },
      {
        label: 'Full Facelift, Neck Lift & Full Face Phenol Peel (overnight stay)',
        amount: '14,500',
        currency: 'GBP'
      }
    ],
    financeAvailable: true,
    financeTerms: '0% Interest Free Credit for 12 months available. Finance packages from Humm starting from £125 per month up to £30,000. Subject to status. T&Cs apply.'
  },

  // FAQ
  faq: [
    {
      question: 'How long does a facelift last?',
      answer: 'Most patients enjoy their facelift results for 10-15 years or longer. While you\'ll continue to age naturally after surgery, you\'ll always look younger than if you hadn\'t had the procedure. Factors like sun protection, skincare, and lifestyle habits can influence how long your results last.'
    },
    {
      question: 'Will I have visible scars after a facelift?',
      answer: 'Facelift incisions are carefully placed along natural creases and within the hairline to minimise visibility. Initially, scars may appear slightly pink or raised, but they fade significantly over 12-18 months and typically become nearly imperceptible. Our surgeons use meticulous suturing techniques to ensure the finest possible scars.'
    },
    {
      question: 'How painful is facelift recovery?',
      answer: 'Most patients describe post-operative discomfort as mild to moderate tightness rather than sharp pain. You\'ll be prescribed pain relief medication to keep you comfortable during the first few days. By the end of the first week, most patients only need over-the-counter pain relief, if anything at all.'
    },
    {
      question: 'When can I return to work after a facelift?',
      answer: 'This depends on your job and how comfortable you feel with visible healing. Most patients return to desk-based work after 10-14 days, once stitches are removed and visible bruising has subsided. If your work is physically demanding, you may need 3-4 weeks off. We\'ll discuss your specific situation during your consultation.'
    },
    {
      question: 'Can a facelift be combined with other procedures?',
      answer: 'Absolutely. Many patients combine facelift surgery with eyelid surgery (blepharoplasty), neck lift, or brow lift to achieve comprehensive facial rejuvenation. Combining procedures is often more efficient and cost-effective, and your surgeon will recommend the best approach based on your goals.'
    },
    {
      question: 'Am I too young (or too old) for a facelift?',
      answer: 'Age is just one factor. What matters most is your facial anatomy, skin quality, and overall health. Most facelift patients are between 40 and 70, but some people in their 30s benefit from early intervention, while others in their 80s achieve excellent results. Your surgeon will assess whether you\'re a good candidate during your consultation.'
    },
    {
      question: 'What\'s the difference between a mini facelift and a full facelift?',
      answer: 'A mini facelift (or short-scar facelift) uses smaller incisions and addresses mild to moderate sagging, primarily in the lower face and jawline. A full facelift involves more extensive lifting of the mid-face, jowls, and neck. Your surgeon will recommend the most appropriate technique based on the degree of ageing present and your aesthetic goals.'
    },
    {
      question: 'How much does a facelift cost at Kinvara Private Hospital?',
      answer: 'Facelift surgery at Kinvara Private Hospital typically costs between £8,500-£15,500, depending on the extent of surgery required and whether additional procedures are performed. Your consultation is free, and you\'ll receive a detailed, personalised quote with no hidden fees. We also offer 0% interest-free finance to make your procedure more affordable.'
    }
  ],

  // Video
  video: {
    youtubeId: 'sv3GLjpKJZE',
    heading: 'Watch Deep Plane Facelift Surgery at Kinvara Private Hospital',
    description: 'See how our consultant plastic surgeons perform deep plane facelift surgery at Kinvara Private Hospital. This video takes you through the surgical process, from the initial incisions to the final result, giving you a clear understanding of what to expect from your procedure.',
    customThumbnail: '/images/facelift/youtube-thumbnail/deep-plane-facelift-video-thumbnail.webp'
  },

  // Detailed Content
  detailedContent: {
    sections: [
      {
        heading: 'What is a Deep Plane Facelift?',
        content: `<p>A facelift (medically known as rhytidectomy) is a surgical procedure designed to reverse visible signs of facial ageing by lifting and tightening the skin, muscles, and underlying tissues of the face and neck. The goal is to restore a more youthful, refreshed appearance while maintaining your natural features and expressions.</p>

<p>As we age, our face undergoes several changes, notably;</p>

<ul>
  <li>The skin loses its elasticity and begins to sag.</li>
  <li>The facial muscles weaken and descend.</li>
  <li>Fat pockets move or diminish, causing volume loss in some areas and bulging in others.</li>
  <li>Gravity takes its toll, pulling everything downward.</li>
</ul>

<p>The combined effect creates jowls, deep folds, loose neck skin, and a tired, aged appearance that often doesn't reflect how you feel inside.</p>

<h3>How Does a Deep Plane Facelift Work?</h3>

<p>Unlike creams, injectables, or non-surgical treatments that work on the skin's surface, a deep plane facelift addresses the deeper structural layers of your face. During the procedure, your surgeon lifts and repositions the SMAS (superficial musculoaponeurotic system) - a layer of tissue that provides foundational support to your facial features. By tightening this layer and removing excess skin, the surgeon creates a firmer, smoother contour that looks natural and harmonious.</p>

<p>The procedure doesn't create a "new" face or pull your skin unnaturally tight. Instead, it restores the contours you had years ago, turning back the clock while preserving everything that makes you uniquely you.</p>

<h3>What Areas Does a Deep Plane Facelift Improve?</h3>

<p>A deep plane facelift primarily targets the lower two-thirds of the face and the upper neck. Specific areas of improvement include:</p>

<ul>
  <li><strong>Mid-face and cheeks</strong> – Restoring volume and lifting sagging tissues for a fuller, more youthful contour</li>
  <li><strong>Jawline and jowls</strong> – Eliminating the loose skin and fat that create jowls and blur the jawline definition</li>
  <li><strong>Nasolabial folds</strong> – Softening the deep creases that run from the nose to the corners of the mouth</li>
  <li><strong>Marionette lines</strong> – Reducing the lines that extend from the mouth down to the chin</li>
  <li><strong>Neck</strong> – Tightening loose skin and reducing the appearance of bands or "turkey neck"</li>
</ul>

<h3>Different Types of Facelift</h3>

<p>Not all facelifts are the same. Depending on the extent of ageing and your specific concerns, your surgeon may recommend:</p>

<ul>
  <li><strong>Full Facelift</strong> – The most comprehensive option, addressing the mid-face, lower face, jawline, and neck</li>
  <li><strong>Mini Facelift</strong> – A less invasive approach using shorter incisions, suitable for mild to moderate sagging</li>
  <li><strong>Mid-Facelift</strong> – Focuses specifically on the cheeks and mid-face area</li>
  <li><strong>Neck Lift</strong> – Can be performed alone or in combination with a facelift to address neck laxity</li>
</ul>

<p>During your consultation at Kinvara Private Hospital, your surgeon will assess your facial anatomy and recommend the most appropriate technique to achieve your goals.</p>`
      },
      {
        heading: 'Is a Deep Plane Facelift Right for You?',
        content: `<p>A facelift may be the perfect solution if you're noticing visible signs of ageing that make you feel older than you truly are. This transformative procedure is designed for individuals who want to address specific concerns that creams and non-surgical treatments simply cannot fix.</p>

<p>You might be an ideal candidate if you're experiencing:</p>

<ul>
  <li><strong>Sagging skin along the jawline and jowls</strong> – When the lower face loses definition and creates an aged, heavy appearance</li>
  <li><strong>Deep nasolabial folds and marionette lines</strong> – The creases that run from your nose to the corners of your mouth, or from your mouth down to your chin</li>
  <li><strong>Loss of facial contour and definition</strong> – When your cheeks appear flat or sunken, and your once-defined features have softened</li>
  <li><strong>Loose neck skin</strong> – Often called "turkey neck," where the skin beneath the chin and along the neck becomes lax</li>
</ul>

<p>Most of our facelift patients are between 40 and 70 years old, though age is just one factor. What matters most is that your skin still has some natural elasticity and your bone structure provides a strong foundation. If you're in good general health, don't smoke (or are willing to quit), and have realistic expectations about what surgery can achieve, you're likely a strong candidate.</p>

<p>During your consultation at Kinvara Private Hospital, our Consultant Plastic Surgeons will assess your facial anatomy and discuss your concerns in detail. They will determine whether a facelift or perhaps a combination of procedures will help you achieve your goals.</p>`
      },
      {
        heading: 'How Facelift Can Help You',
        content: `<p>A facelift doesn't just turn back the clock, it restores the face you remember, the one that matches how you feel inside. This isn't about changing who you are; it's about looking as vibrant and energetic as you truly feel.</p>

<h3>What a Deep Plane Facelift Addresses</h3>

<p>Facelift surgery at Kinvara Private Hospital targets the underlying structures of your face, not just the surface. By repositioning deeper tissues, tightening muscles, and removing excess skin, we create results that look natural, refreshed, and entirely like you, just younger!</p>

<p>Here's what you can expect:</p>

<ul>
  <li><strong>Lifted, firmer facial contours</strong> – We restore definition to your cheeks and jawline, creating a more sculpted, youthful profile</li>
  <li><strong>Smoother, tighter skin</strong> – By removing excess skin and re-draping what remains, we eliminate sagging and create a naturally smooth appearance</li>
  <li><strong>Reduced wrinkles and deep folds</strong> – Deep lines around your nose, mouth, and chin are softened significantly, giving your face a more relaxed and rested look</li>
  <li><strong>Long-lasting results</strong> – While you'll continue to age naturally, most patients enjoy their facelift results for 10-15 years or more</li>
</ul>

<h3>Why Patients Choose Facelift Surgery</h3>

<p>Our patients tell us they feel more confident in photos, more comfortable in social situations, and more aligned with how they see themselves. Many report that friends and family say they look "well-rested" or "refreshed" without being able to pinpoint exactly what changed, the hallmark of excellent facelift surgery.</p>

<p>A facelift can be performed on its own or combined with other procedures such as eyelid surgery, neck lift, brow lift or phenol peel for comprehensive facial rejuvenation. Your surgeon will recommend the best approach for your unique anatomy and aesthetic goals.</p>`
      },
      {
        heading: 'What Happens During Surgery',
        content: `<p>Understanding what happens during facelift surgery helps you feel prepared and confident on the day of your procedure. At Kinvara Private Hospital, our experienced Consultant Plastic Surgeons use advanced techniques to deliver natural-looking, long-lasting results with minimal scarring.</p>

<h3>Surgical Technique</h3>

<p>Facelift surgery typically takes between 2-4 hours, depending on the extent of surgery and whether additional procedures are being performed. The operation is carried out under general anaesthetic, so you'll be completely comfortable and unaware throughout.</p>

<p>Your surgeon will make discreet incisions along the natural creases of your face, typically starting at the temples within the hairline, continuing down in front of the ear, and extending behind the ear into the hairline at the back. These incisions are strategically placed to ensure any resulting scars are well hidden once healed.</p>

<p>Through these incisions, your surgeon will:</p>

<ul>
  <li>Lift and tighten the deeper layers of tissue (the SMAS layer), which provides structural support to your face</li>
  <li>Reposition underlying fat and muscle to restore volume and contour</li>
  <li>Remove excess skin that contributes to sagging</li>
  <li>Re-drape the remaining skin naturally, without pulling or creating an "overdone" appearance</li>
</ul>

<p>The incisions are then closed with fine sutures, and dressings are applied to support your face during the initial healing phase.</p>

<h3>What Makes Kinvara Different</h3>

<p>At Kinvara Private Hospital, all facelift procedures are performed by Consultant Plastic Surgeons who specialise in facial surgery. We don't rush. We take the time needed to achieve meticulous, natural results that enhance your features rather than alter them. Our modern operating theatres are equipped with the latest technology, and our dedicated anaesthetic team ensures your safety and comfort from start to finish.</p>`
      },
      {
        heading: 'Your Recovery Journey',
        content: `<p>Recovery from facelift surgery is a gradual process, and understanding what to expect at each stage helps you plan accordingly and feel confident throughout your healing journey.</p>

<h3>The First 24-48 Hours</h3>

<p>Immediately after surgery, you'll spend time in our comfortable recovery suite where our nursing team will monitor you closely. Most patients experience some tightness, mild discomfort, and swelling. This is completely normal. Your face will be bandaged to provide support and minimise swelling. You'll be given pain relief medication and detailed aftercare instructions before you're discharged home the same day or the following morning.</p>

<p>It's essential to keep your head elevated (even while sleeping) during the first week to reduce swelling. Sleeping on two or three pillows helps significantly.</p>

<h3>The First Week</h3>

<p>Swelling and bruising typically peak around days 2-3, then gradually begin to subside. You may notice some numbness or tingling in your face and neck. This is temporary and will resolve as nerves heal. Most patients feel well enough to move around gently at home but should avoid strenuous activity.</p>

<p>Stitches are usually removed after 7-10 days and many patients feel comfortable returning to light, non-physical work after 10-14 days, though you may still have some residual swelling that's easily concealed with makeup.</p>

<h3>Weeks 2-6</h3>

<p>By week two, most visible bruising has faded, and you'll start to see your new contours emerging. Swelling continues to resolve, though some subtle puffiness may persist for several weeks. You can gradually resume normal activities, but should avoid vigorous exercise, heavy lifting, and anything that raises your blood pressure significantly for at least 4 weeks.</p>

<h3>3-6 Months and Beyond</h3>

<p>The final results of your deep plane facelift become fully apparent around 6 months post-surgery, once all residual swelling has completely resolved and incision lines have faded. Scars continue to mature and fade over the first year, becoming barely visible.</p>

<p>With proper skincare and sun protection, your results can last 10 years or longer. You'll continue to age naturally, but you'll always look younger than if you hadn't had the procedure.</p>

<h3>Comprehensive Aftercare at Kinvara</h3>

<p>Throughout your recovery, you'll have unlimited access to our clinical team. We provide detailed written instructions, 24/7 emergency contact numbers, and scheduled follow-up appointments to monitor your healing. Your surgeon will see you regularly during the first few months to ensure you're healing beautifully and answer any questions you may have.</p>`
      }
    ]
  },

  // Forms
  forms: {
    web3FormsKey: '6bfb1e58-33bc-44f9-933a-aa3e277d520e',
    subject: 'New Enquiry from Facelift Website',
    fromName: 'Kinvara Private Hospital - Facelift'
  },

  // SEO
  metadata: {
    title: 'Facelift Before and After | Kinvara Private Hospital',
    description: 'View real facelift before and after results at Kinvara Private Hospital. Expert consultant plastic surgeons in Rotherham. 0% finance available.',
    keywords: ['facelift', 'facelift before and after', 'face lift surgery', 'rhytidectomy', 'facelift UK', 'Kinvara Private Hospital', 'facelift Rotherham', 'facelift South Yorkshire']
  }
};

export default faceliftConfig;
