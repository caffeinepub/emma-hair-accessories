import { CheckCircle2, Globe, Package, Star } from "lucide-react";
import { motion } from "motion/react";

const exportHighlights = [
  "Compliant with international packaging standards",
  "Timely delivery with reliable logistics partners",
  "Flexible MOQ for international buyers",
  "Custom branding available for export orders",
  "Documentation support for all shipments",
  "Quality certificates provided upon request",
];

export default function ExportsSection() {
  return (
    <section
      id="exports"
      className="section-padding bg-secondary/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.93_0.05_20_/_0.3),transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
              Going Global
            </span>
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Trusted <span className="italic text-primary">Export</span>{" "}
              Partner
            </h2>
            <div className="w-16 h-0.5 bg-accent mb-8" />
            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              Emma Hair Accessories has earned the trust of international buyers
              through consistent quality and reliable fulfillment. Our export
              journey reflects our commitment to global standards.
            </p>
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-8">
              We have successfully completed export shipments to multiple
              countries, with growing demand for our signature hair clutchers
              and premium accessories abroad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {exportHighlights.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-primary flex-shrink-0 mt-0.5"
                  />
                  <span className="font-body text-sm text-foreground/80">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Export card */}
            <div className="bg-card rounded-3xl p-8 shadow-elegant border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Globe size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="heading-display text-xl font-semibold text-foreground">
                    International Exports
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Shipments to multiple countries
                  </p>
                </div>
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Our products have found admirers beyond Indian shores. From
                South Asia to the Middle East, Emma's hair accessories are
                making their mark internationally.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary rounded-2xl p-6 text-center">
                <Package size={28} className="text-white mx-auto mb-3" />
                <div className="heading-display text-2xl font-bold text-white mb-1">
                  Bulk
                </div>
                <div className="font-body text-white/70 text-sm">
                  Orders Welcome
                </div>
              </div>
              <div className="bg-card rounded-2xl p-6 text-center shadow-elegant border border-border/50">
                <Star size={28} className="text-accent mx-auto mb-3" />
                <div className="heading-display text-2xl font-bold text-foreground mb-1">
                  Premium
                </div>
                <div className="font-body text-muted-foreground text-sm">
                  Quality Standards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
