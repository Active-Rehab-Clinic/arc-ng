export interface ContactInfo {
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: string;
  email: string;
  hours: BusinessHours[];
  socialMedia: SocialMedia[];
}

export interface BusinessHours {
  day: string;
  hours: string;
  isOpen: boolean;
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
}