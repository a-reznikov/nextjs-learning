import Twitter from "@/icons/twitter.svg";
import Facebook from "@/icons/facebook.svg";
import Instagram from "@/icons/instagram.svg";

export const HEADER_NAVIGATION = [
  { name: "Home", href: "/home" },
  { name: "World", href: "/world" },
  { name: "Automobiles", href: "/automobiles" },
  { name: "Real Estate", href: "/realestate" },
  { name: "Finance", href: "/business" },
  { name: "Dreams", href: "/dream-stories" },
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
