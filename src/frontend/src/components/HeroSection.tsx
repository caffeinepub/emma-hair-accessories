import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-banner.dim_1200x600.jpg"
          alt="Emma Hair Accessories"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold-light mb-4 border border-gold/50 px-4 py-1.5 rounded-full">
              Crafted for Every Woman
            </span>
          </motion.div>

          <motion.h1
            className="heading-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Premium Hair Accessories,{" "}
            <span className="italic text-gold-light">
              Crafted with Elegance
            </span>
          </motion.h1>

          <motion.p
            className="font-body text-base md:text-lg text-white/85 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Trusted manufacturer of hair clutchers, hair bands & accessories —
            distributed pan-India with a growing global export presence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              data-ocid="hero.primary_button"
              className="bg-primary text-primary-foreground hover:bg-rose-deep font-body font-semibold px-8 py-6 rounded-full shadow-rose text-base"
            >
              <a href="#products">Explore Our Products</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/60 text-white bg-white/10 hover:bg-white/20 font-body font-semibold px-8 py-6 rounded-full text-base backdrop-blur-sm"
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex gap-8 mt-12 pt-8 border-t border-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "Pan-India", label: "Distribution" },
              { value: "Export", label: "Ready" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="heading-display text-xl md:text-2xl text-gold-light font-bold">
                  {stat.value}
                </div>
                <div className="font-body text-xs text-white/70 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
