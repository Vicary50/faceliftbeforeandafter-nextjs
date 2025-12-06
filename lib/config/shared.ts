import { SharedConfig } from '../types';

export const sharedConfig: SharedConfig = {
  hospital: {
    name: 'Kinvara Private Hospital',
    phone: '01709 464200',
    email: 'info@kinvarahospital.co.uk',
    address: '2 Clifton Lane, Rotherham',
    postcode: 'S65 2AJ',
    mapEmbedCode: `<iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.984697218554!2d-1.3464!3d53.4264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDI1JzM1LjAiTiAxwrAyMCc0Ny4wIlc!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
      width="100%"
      height="300"
      style="border:0;"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Kinvara Private Hospital Location Map"
    ></iframe>`
  },

  surgeons: [
    {
      name: 'Mr Vasu Karri',
      credentials: 'Consultant Plastic Surgeon',
      gmcNumber: '4631035',
      linkedInUrl: 'https://www.linkedin.com/in/vasukarri/',
      imagePath: '/images/Our surgeons - 400x500/Breast reduction before and after Mr Vasu Karri.webp',
      description: 'GMC: 4631035'
    },
    {
      name: 'Mr Guirgis Awad',
      credentials: 'Consultant Plastic Surgeon',
      linkedInUrl: 'https://www.linkedin.com/in/guirgis-awad-0b841185/?originalSubdomain=uk',
      imagePath: '/images/Our surgeons - 400x500/Breast reduction before and after Mr Guirgis Awad.webp',
      description: 'Consultant Plastic & Cosmetic Surgeon'
    }
  ],

  facilities: {
    intro: 'Welcome to Kinvara Private Hospital',
    list: [
      'Ultra-clean air operating theatres with laminar flow',
      'State-of-the-art equipment including digital X-ray',
      'Dedicated physiotherapy and recovery facilities',
      'Fully equipped anaesthesia stations',
      'Private en-suite rooms for patient comfort',
      'Experienced nursing staff available 24/7',
      'Modern reception and consultation areas',
      'On-site surgical facilities'
    ],
    images: [
      { path: '/images/About facilities image - 1200x800/Kinvara Private Hospital reception.jpg', description: 'Reception' },
      { path: '/images/About facilities image - 1200x800/Kinvara Private Hospital private room.jpg', description: 'Private Room' },
      { path: '/images/About facilities image - 1200x800/Kinvara Private Hospital operating theatre.jpg', description: 'Operating Theatre' },
      { path: '/images/About facilities image - 1200x800/Kinvara Private Hospital  nurses.jpg', description: 'Nurses' },
      { path: '/images/About facilities image - 1200x800/Kinvara Private Hospital digital xray.jpg', description: 'Digital X-Ray' },
      { path: '/images/About facilities image - 1200x800/Kinvara Private Hospital physiotherapy.jpg', description: 'Physiotherapy' },
      { path: '/images/About facilities image - 1200x800/Kinvara Private Hospital anaesthesia.JPG', description: 'Anaesthesia' },
      { path: '/images/About facilities image - 1200x800/Kinvara Private Hospital surgery.JPG', description: 'Surgery' },
      { path: '/images/About facilities image - 1200x800/Kinvara Private Hospital - Nurse speaking with patient-Rotherham-South Yorkshire.jpg', description: 'Patient Care' }
    ]
  },

  accreditations: {
    logos: [
      {
        name: 'Royal College of Surgeons of England',
        imagePath: '/images/Icons - 64x64/Royal College of Surgeons of England.webp',
        url: 'https://www.rcseng.ac.uk/'
      },
      {
        name: 'GMC',
        imagePath: '/images/Icons - 64x64/GMC.webp',
        url: 'https://www.gmc-uk.org/'
      },
      {
        name: 'CQC',
        imagePath: '/images/Icons - 64x64/CQC.webp',
        url: 'https://www.cqc.org.uk/'
      },
      {
        name: 'PHIN',
        imagePath: '/images/Icons - 64x64/PHIN.webp',
        url: 'https://www.phin.org.uk/'
      },
      {
        name: 'British Association of Plastic Surgeons',
        imagePath: '/images/Icons - 64x64/British Association of Plastic Surgeons.webp',
        url: 'https://www.bapras.org.uk/'
      }
    ],
    medicalReviewer: {
      name: 'Mr Vasu Karri',
      credentials: 'Consultant Plastic Surgeon',
      gmcNumber: '4631035',
      linkedInUrl: 'https://www.linkedin.com/in/vasukarri/',
      imagePath: '/images/Our surgeons - 400x500/Breast reduction before and after Mr Vasu Karri.webp',
      description: 'GMC: 4631035'
    }
  },

  social: {
    facebook: 'https://www.facebook.com/KinvaraPrivateHospital/',
    instagram: 'https://www.instagram.com/kinvara_private_hospital/',
    youtube: 'https://www.youtube.com/@TheKarriClinic'
  },

  footer: {
    links: [
      { label: 'Privacy Policy', url: 'https://kinvarahospital.co.uk/privacy-policy/' },
      { label: 'Terms & Conditions', url: 'https://kinvarahospital.co.uk/terms-and-conditions/' },
      { label: 'Disclaimer', url: 'https://kinvarahospital.co.uk/disclaimer/' }
    ],
    copyrightYear: 2025
  },

  cookie: {
    text: 'We use essential cookies to ensure our website works properly. By clicking "Accept Cookies", you agree to our use of cookies.',
    privacyPolicyUrl: 'https://kinvarahospital.co.uk/privacy-policy/'
  },

  ratings: {
    googleImagePath: '/images/Hero image Google stars - 200x40/Kinvara Private Hospital Google rating.webp',
    trustpilotImagePath: '/images/Hero image Trustpilot/Kinvara Private Hospital Trustpilot rating.webp'
  },

  procedureLinks: [
    { name: 'Breast Reduction', url: 'https://www.breastreductionbeforeandafter.co.uk' },
    { name: 'Breast Enlargement', url: null },
    { name: 'Breast Enlargement & Lift', url: null },
    { name: 'Male Breast Reduction', url: null },
    { name: 'Facelift', url: null },
    { name: 'Upper Eyelid Reduction', url: null },
    { name: 'Lower Eyelid Reduction', url: null },
    { name: 'Mummy Makeover', url: null },
    { name: 'Arm Lift', url: null },
    { name: 'Tummy Tuck', url: null },
    { name: 'Thigh Lift', url: null },
    { name: 'Cankle Surgery', url: null },
    { name: 'Phenol Peel', url: null }
  ]
};
