import Twitter from "@/icons/twitter.svg";
import Facebook from "@/icons/facebook.svg";
import Instagram from "@/icons/instagram.svg";
import { ROUTES } from "./routes";

export const HEADER_NAVIGATION = [
  { name: "Formulas", href: ROUTES.FORMULAS },
  { name: "Home", href: ROUTES.HOME },
  { name: "World", href: ROUTES.WORLD },
  { name: "Automobiles", href: ROUTES.AUTOMOBILES },
  { name: "Real Estate", href: ROUTES.REAL_ESTATE },
  { name: "Finance", href: ROUTES.FINANCE },
  { name: "Stories", href: ROUTES.STORIES },
];

export const FOOTER_NAVIGATION = [
  { name: "About Us", href: "/#" },
  { name: "Help", href: "/#" },
  { name: "Advertise", href: "/#" },
  { name: "Privacy Policy", href: "/#" },
  { name: "Terms of Service", href: "/#" },
];

export const SOCIAL_LINKS = [
  { alt: "Twitter", component: Twitter, href: "/#" },
  { alt: "Facebook", component: Facebook, href: "/#" },
  { alt: "Instagram", component: Instagram, href: "/#" },
];
