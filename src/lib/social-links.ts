import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  WhatsappIcon,
} from "@/components/icons/social-icons";
import { siteConfig } from "@/lib/site-config";

export const socialLinks = [
  { name: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
  { name: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { name: "WhatsApp", href: siteConfig.social.whatsapp, Icon: WhatsappIcon },
  { name: "TikTok", href: siteConfig.social.tiktok, Icon: TiktokIcon },
];
