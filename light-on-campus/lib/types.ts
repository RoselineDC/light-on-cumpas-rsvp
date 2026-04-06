export interface NavItem {
  label: string;
  href: string;
}

export interface DetailCard {
  label: string;
  value: string;
  sub: string;
  icon: "calendar" | "clock" | "location";
}

export interface ExpectCard {
  num: string;
  title: string;
  desc: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
