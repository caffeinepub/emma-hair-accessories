import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
            Let's Connect
          </span>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Get in <span className="italic text-primary">Touch</span>
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Have a query or want to place a bulk order? We'd love to hear from
            you.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            {
              icon: MapPin,
              title: "Our Address",
              lines: [
                "Emma Hair Accessories",
                "Mumbai, Maharashtra",
                "India — 400095",
              ],
            },
            {
              icon: Phone,
              title: "Phone",
              lines: ["+91 983 357 6106"],
            },
            {
              icon: Mail,
              title: "Email",
              lines: ["emmahairaccessories@gmail.com"],
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-secondary/40 border border-border/40"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon size={22} className="text-primary" />
              </div>
              <div>
                <div className="font-body font-semibold text-foreground text-sm mb-1">
                  {item.title}
                </div>
                {item.lines.map((l) => (
                  <div
                    key={l}
                    className="font-body text-muted-foreground text-sm"
                  >
                    {l}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
