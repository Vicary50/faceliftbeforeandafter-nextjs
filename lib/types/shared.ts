export interface Surgeon {
  name: string;
  credentials: string;
  gmcNumber?: string;
  linkedInUrl?: string;
  imagePath: string;
  description?: string;
}

export interface FacilityImage {
  path: string;
  description: string;
}

export interface AccreditationLogo {
  name: string;
  imagePath: string;
  url?: string;
}

export interface FooterLink {
  label: string;
  url: string;
}

export interface HospitalInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  postcode: string;
  mapEmbedCode: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  youtube: string;
}

export interface ProcedureLink {
  name: string;
  url: string | null; // null means not yet available
}

export interface SharedConfig {
  hospital: HospitalInfo;

  surgeons: Surgeon[];

  facilities: {
    intro: string;
    list: string[];
    images: FacilityImage[];
  };

  accreditations: {
    logos: AccreditationLogo[];
    medicalReviewer: Surgeon;
  };

  social: SocialLinks;

  footer: {
    links: FooterLink[];
    copyrightYear: number;
  };

  cookie: {
    text: string;
    privacyPolicyUrl: string;
  };

  ratings: {
    googleImagePath: string;
    trustpilotImagePath: string;
  };

  procedureLinks: ProcedureLink[];
}
