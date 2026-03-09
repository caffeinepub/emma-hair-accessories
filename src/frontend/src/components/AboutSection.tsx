import { Award, Globe, MapPin, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const milestones = [
  {
    icon: Sparkles,
    title: "Our Founding Vision",
    desc: "Emma Hair Accessories was founded with a singular purpose — to bring beautifully crafted, high-quality hair accessories to women across India at accessible prices.",
  },
  {
    icon: MapPin,
    title: "Pan-India Presence",
    desc: "From bustling metros to smaller towns, our extensive distribution network ensures Emma's creations reach women in every corner of India.",
  },
  {
    icon: Award,
    title: "Quality Manufacturing",
    desc: "Every hair clutcher, band, and accessory is crafted with precision using premium materials. Our manufacturing unit follows strict quality standards.",
  },
  {
    icon: Globe,
    title: "Going Global",
    desc: "Building on our domestic success, Emma now fulfills international export orders, bringing our signature designs to women across the world.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding bg-secondary/30 relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/5 translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
            Our Story
          </span>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            About <span className="italic text-primary">Emma</span>
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            A story of passion for beauty, craftsmanship, and a commitment to
            making every woman feel special — one hair accessory at a time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {milestones.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-rose transition-shadow duration-300 border border-border/50 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-300" />
              <div className="flex items-start gap-5 relative">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="heading-display text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
