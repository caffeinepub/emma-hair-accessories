import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "products", label: "Products", href: "#products" },
  { id: "exports", label: "Exports", href: "#exports" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-glass ${
        scrolled
          ? "bg-background/90 shadow-elegant border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0">
          <img
            src="/assets/generated/emma-logo-transparent.dim_400x150.png"
            alt="Emma Hair Accessories"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                data-ocid={`nav.${link.id}.link`}
                className="font-body text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-rose-deep font-body font-semibold px-6 rounded-full shadow-rose"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 rounded-md text-foreground/70 hover:text-primary"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 nav-glass border-b border-border"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    data-ocid={`nav.${link.id}.link`}
                    onClick={closeMobile}
                    className="font-body text-base font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Button
                  asChild
                  size="sm"
                  className="mt-2 bg-primary text-primary-foreground font-semibold px-6 rounded-full"
                >
                  <a href="#contact">Get in Touch</a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
