import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link 
              href="/" 
              className="text-3xl font-light tracking-[0.15em]"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              ICONIC
            </Link>
            <p className="mt-4 text-background/60 max-w-md leading-relaxed">
              Where artistry meets elegance. Experience the pinnacle of hair styling 
              in a serene, luxurious environment.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase mb-6">Find Us</h4>
            <address className="not-italic text-background/60 space-y-2">
              <p>123 Botanical Lane, Suite 100</p>
              <p>Melbourne, VIC 3000</p>
              <p className="mt-4">(03) 9123 4567</p>
              <p>hello@iconichair.com.au</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} ICONIC Hairdressing. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/40">
            <Link href="#" className="hover:text-background/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-background/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
