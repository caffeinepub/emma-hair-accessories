import { Facebook, Instagram, Twitter } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Exports", href: "#exports" },
  { label: "Contact", href: "#contact" },
];

const products = [
  "Hair Clutchers",
  "Hair Bands",
  "Scrunchies",
  "Barrettes",
  "Bobby Pins",
];

const socialLinks = [
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-foreground text-white/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/assets/generated/emma-logo-transparent.dim_400x150.png"
              alt="Emma Hair Accessories"
              className="h-10 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="font-body text-sm text-white/60 leading-relaxed mb-6">
              Premium hair accessories crafted for the modern Indian woman.
              Quality manufacturing, pan-India distribution, global exports.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
                >
                  <Icon size={16} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p}>
                  <a
                    href="#products"
                    className="font-body text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Contact
            </h4>
            <div className="space-y-3 font-body text-sm text-white/60">
              <div>Emma Hair Accessories</div>
              <div>Mumbai, Maharashtra — 400095</div>
              <div>+91 983 357 6106</div>
              <div>emmahairaccessories@gmail.com</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            © {year} Emma Hair Accessories. All Rights Reserved.
          </p>
          <p className="font-body text-xs text-white/40">
            Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
