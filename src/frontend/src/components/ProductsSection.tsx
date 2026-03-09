import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const products = [
  {
    id: 1,
    name: "Hair Clutchers",
    tag: "Signature Collection",
    desc: "Our signature product, available in various sizes, materials and designs. From minimalist to embellished — perfect for every occasion and hair type.",
    image: "/assets/generated/hair-clutchers.dim_600x400.jpg",
    ocid: "products.item.1",
    features: ["Multiple sizes", "Premium materials", "Durable clasps"],
  },
  {
    id: 2,
    name: "Hair Bands",
    tag: "Everyday Elegance",
    desc: "Stylish bands for every occasion — velvet, fabric, and embellished varieties. Designed to complement every look, from casual to formal.",
    image: "/assets/generated/hair-bands.dim_600x400.jpg",
    ocid: "products.item.2",
    features: ["Velvet varieties", "Embellished designs", "Comfort fit"],
  },
  {
    id: 3,
    name: "Other Accessories",
    tag: "Complete Collection",
    desc: "Bobby pins, scrunchies, barrettes and more to complete your look. Every piece crafted with the same Emma commitment to quality.",
    image: "/assets/generated/other-accessories.dim_600x400.jpg",
    ocid: "products.item.3",
    features: ["Scrunchies", "Barrettes", "Bobby pins"],
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">
            What We Make
          </span>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Our <span className="italic text-primary">Products</span>
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Handcrafted with precision. Designed for the modern Indian woman.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.article
              key={product.id}
              data-ocid={product.ocid}
              className="group bg-card rounded-3xl overflow-hidden shadow-elegant hover:shadow-rose transition-all duration-400 border border-border/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-4 left-4 bg-primary/90 text-primary-foreground font-body text-xs font-semibold px-3 py-1.5 rounded-full">
                  {product.tag}
                </span>
              </div>

              <div className="p-6">
                <h3 className="heading-display text-xl font-semibold text-foreground mb-3">
                  {product.name}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                  {product.desc}
                </p>

                <ul className="flex flex-wrap gap-2 mb-5">
                  {product.features.map((f) => (
                    <li
                      key={f}
                      className="font-body text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full border border-border/50"
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
                >
                  Enquire Now <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
