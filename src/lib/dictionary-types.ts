export interface PageMeta {
  title: string;
  description: string;
}

export interface NavDictionary {
  home: string;
  about: string;
  treatments: string;
  contact: string;
  bookAppointment: string;
  skipToContent: string;
  openMenu: string;
  closeMenu: string;
  languageSwitchLabel: string;
}

export interface CommonDictionary {
  phone: string;
  whatsapp: string;
  address: string;
  email: string;
  hours: string;
  bookAppointment: string;
  callNow: string;
  writeOnWhatsapp: string;
  emailUs: string;
  readMore: string;
  viewAllTreatments: string;
  addressValue: string;
}

export interface TrustItem {
  title: string;
  body: string;
}

export interface ReviewItem {
  quote: string;
  name: string;
}

export interface ReviewsDictionary {
  title: string;
  subtitle: string;
  note: string;
  previousLabel: string;
  nextLabel: string;
  items: ReviewItem[];
}

export interface HomeDictionary {
  meta: PageMeta;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    imageAlt: string;
  };
  trust: {
    title: string;
    items: TrustItem[];
  };
  doctorIntro: {
    eyebrow: string;
    title: string;
    body: string[];
    cta: string;
    imageAlt: string;
  };
  treatmentsSection: {
    title: string;
    subtitle: string;
    cta: string;
  };
  reviews: ReviewsDictionary;
  anxiety: {
    eyebrow: string;
    title: string;
    body: string;
    points: string[];
    imageAlt: string;
  };
  aesthetic: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    imageAlt: string;
  };
  faqSection: {
    title: string;
    subtitle: string;
  };
  finalCta: {
    title: string;
    body: string;
    ctaPrimary: string;
  };
}

export interface AboutDictionary {
  meta: PageMeta;
  title: string;
  intro: string;
  imageAlt: string;
  sections: {
    heading: string;
    body: string;
  }[];
  placeholdersNote: string;
  cta: {
    title: string;
    body: string;
    button: string;
  };
}

export interface TreatmentsDictionary {
  meta: PageMeta;
  title: string;
  intro: string;
  mainImageAlt: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
}

export interface ContactFormDictionary {
  name: string;
  namePlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  preferredContact: string;
  preferredContactOptions: { phone: string; whatsapp: string; email: string };
  message: string;
  messagePlaceholder: string;
  messageOptional: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successBody: string;
  emailFallbackCta: string;
  errorTitle: string;
  errorBody: string;
  requiredError: string;
  invalidPhoneError: string;
  privacyNote: string;
  emailSubject: string;
}

export interface ContactDictionary {
  meta: PageMeta;
  title: string;
  intro: string;
  mainImageAlt: string;
  formTitle: string;
  form: ContactFormDictionary;
  detailsTitle: string;
  hoursTitle: string;
  mapTitle: string;
  mapCta: string;
}

export interface FooterDictionary {
  navTitle: string;
  legalTitle: string;
  accessibility: string;
  privacy: string;
  rightsReserved: string;
  tagline: string;
}

export interface LegalPageDictionary {
  meta: PageMeta;
  title: string;
  reviewNotice: string;
  body: string[];
}

export interface NotFoundDictionary {
  title: string;
  body: string;
  cta: string;
}

export interface AccessibilityWidgetDictionary {
  openLabel: string;
  closeLabel: string;
  title: string;
  textSizeLabel: string;
  increaseText: string;
  decreaseText: string;
  textSizeDefault: string;
  textSizeLarge: string;
  textSizeLarger: string;
  contrastLabel: string;
  reduceMotionLabel: string;
  underlineLinksLabel: string;
  reset: string;
}

export interface Dictionary {
  nav: NavDictionary;
  common: CommonDictionary;
  home: HomeDictionary;
  about: AboutDictionary;
  treatments: TreatmentsDictionary;
  contact: ContactDictionary;
  footer: FooterDictionary;
  accessibilityPage: LegalPageDictionary;
  privacyPage: LegalPageDictionary;
  notFound: NotFoundDictionary;
  accessibilityWidget: AccessibilityWidgetDictionary;
}
