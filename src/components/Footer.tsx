import { Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react";
import esiLogo from "@/assets/esi-logo.png";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/thecanvassing", label: "Instagram" },
    { icon: TikTokIcon, href: "https://tiktok.com/@thecanvassing", label: "TikTok" },
    { icon: Twitter, href: "https://x.com/thecanvassing", label: "X (Twitter)" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/thecanvassing", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://chat.whatsapp.com/ErzJIN3kvxu1CnAp2qK6F0", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={esiLogo} alt="ESI L1 Logo" className="w-10 h-10 rounded-lg" />
              <span className="font-bold text-xl">ESI L1</span>
            </div>
            <p className="text-background/70 leading-relaxed max-w-md mb-4">
              Education for Social Impact Level 1 – A free cryptocurrency education program 
              by Canvassing. Learn crypto, earn crypto, risk nothing.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#modules" className="text-background/70 hover:text-background transition-colors">
                  Modules
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-background/70 hover:text-background transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="text-background/70 hover:text-background transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-background transition-colors">
                  About Canvassing
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="text-background/70 hover:text-background transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-background/70 hover:text-background transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="mailto:admin@thecanvassing.xyz" className="text-background/70 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10">
          <p className="text-background/50 text-sm text-center sm:text-left">
            © {currentYear} Canvassing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
