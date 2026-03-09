import { Globe, Layers, ShieldCheck, Truck } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Manufacturing",
    desc: "Each product undergoes rigorous quality checks before leaving our facility. We use only premium materials sourced from trusted suppliers.",
  },
  {
    icon: Truck,
    title: "Pan-India Reach",
    desc: "Our established distribution network spans the length and breadth of India — metros, tier-2, and tier-3 cities alike.",
  },
  {
    icon: Globe,
    title: "Export Ready",
    desc: "Emma Hair Accessories maintains international quality standards, with a proven track record of successful export shipments.",
  },
  {
    icon: Layers,
    title: "Wide Variety",
    desc: "From minimalist everyday clips to elaborate occasion pieces — our catalogue spans hundreds of designs across all product lines.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-white/60 mb-3 block">
            Our Strengths
          </span>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Why Choose <span className="italic text-gold-light">Emma</span>?
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 transition-colors duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/30 transition-colors duration-300">
                <f.icon size={26} className="text-white" />
              </div>
              <h3 className="heading-display text-lg font-semibold text-white mb-3">
                {f.title}
              </h3>
              <p className="font-body text-white/70 text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
