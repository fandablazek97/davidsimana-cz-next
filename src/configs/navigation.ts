import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";

export const routes = [
  {
    href: "/",
    label: "Hlavní strana",
  },
  {
    href: "/hypoteky",
    label: "Hypotéky",
  },
  {
    href: "/investice",
    label: "Investice",
  },
  {
    href: "/#jak-fungujeme",
    label: "Jak to funguje",
  },
  {
    href: "/#o-financich",
    label: "O financích",
  },
  {
    href: "#kontakt",
    label: "Kontakt",
  },
];

export const contact = [
  {
    href: "tel:+420773997434",
    label: "+420 773 997 434",
  },
  {
    href: "mailto:info@davidsimana.cz",
    label: "info@davidsimana.cz",
  },
];

export const socials = [
  {
    href: "https://www.instagram.com/davidsimana",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://www.facebook.com/davidsimana",
    label: "Facebook",
    icon: FaFacebookF,
  },
  {
    href: "https://www.linkedin.com/company/davidsimana",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: "https://www.youtube.com/@davidsimanapfp",
    label: "Youtube",
    icon: FaYoutube,
    classNames: "bg-gradient-to-br from-red-600 to-red-900",
  },
  {
    href: "https://open.spotify.com/show/1jt4nG4mSAxPPoR5nYkEBN",
    label: "Spotify",
    icon: FaSpotify,
    classNames: "bg-gradient-to-br from-emerald-600 to-emerald-800",
  },
];
