export type NavItem = {
  title: string;
  href: string;
  external?: boolean;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage?: string;
  nav: NavItem[];
  footer?: FooterLink[];
};
